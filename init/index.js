// init/index.js
require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const dbUrl = process.env.ATLASDB_URL;
if (!dbUrl) {
  console.error("ERROR: ATLASDB_URL not set in environment. Aborting.");
  process.exit(1);
}
if (!process.env.MAP_TOKEN) {
  console.error("WARNING: MAP_TOKEN not set. Geocoding will fail if used.");
}

const geocodingClient = mbxGeocoding({ accessToken: process.env.MAP_TOKEN });

main()
  .then(() => {
    console.log("Connected to DB (init)");
    return initDB();
  })
  .catch((err) => {
    console.error("DB connection/init error:", err);
    process.exit(1);
  });

async function main() {
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    for (let data of initData.data) {
      // if MAP_TOKEN missing, skip geocoding and warn
      let geometry = undefined;
      if (process.env.MAP_TOKEN) {
        const geoData = await geocodingClient
          .forwardGeocode({
            query: `${data.location}, ${data.country}`,
            limit: 1,
          })
          .send();
        geometry = geoData?.body?.features?.[0]?.geometry;
      } else {
        console.warn("Skipping geocoding for", data.title || data.location);
      }

      const newListing = new Listing({
        ...data,
        owner: "68bf1040160f71d2f5dbcf77", // keep if you want seeded owner
        ...(geometry && { geometry }), // only add geometry if present
      });

      await newListing.save();
    }

    console.log("Database initialized with coordinates ✅");
    // close connection when done
    await mongoose.connection.close();
    console.log("DB connection closed (init)");
  } catch (err) {
    console.error("Error during DB initialization:", err);
    await mongoose.connection.close();
    process.exit(1);
  }
};
