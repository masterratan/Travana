// seeds/seedReviews.js
require('dotenv').config();
const mongoose = require('mongoose');
const Listing = require('../models/listing');
const Review = require('../models/review');
const User = require('../models/user');

// Use the same env var as app.js
const dbUrl = process.env.ATLASDB_URL;

if (!dbUrl) {
  console.error("ATLASDB_URL not set in .env. Please add it.");
  process.exit(1);
}

// sample review comments to pick from
const SAMPLE_COMMENTS = [
  "Amazing stay — would recommend!",
  "Great location and friendly host.",
  "Clean place, very comfortable.",
  "Good value for money, nice view.",
  "Lovely stay but a bit noisy at night.",
  "Host was extremely helpful and responsive.",
  "Perfect for a weekend getaway.",
  "Cozy and well-maintained. Will come back!",
  "Nice facilities but parking was difficult.",
  "Excellent place, exceeded expectations!"
];

// utility to pick random integer in [min, max]
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function ensureAuthors() {
  let users = await User.find({});
  if (users.length >= 4) return users;

  console.log('Creating sample users for review authors...');
  const sampleUsers = [
    { username: 'neha', email: 'neha@example.com', password: 'password123' },
    { username: 'priya', email: 'priya@example.com', password: 'password123' },
    { username: 'aditya', email: 'aditya@example.com', password: 'password123' },
    { username: 'rakesh', email: 'rakesh@example.com', password: 'password123' },
  ];
  const created = [];
  for (const u of sampleUsers) {
    try {
      const exists = await User.findOne({ username: u.username });
      if (exists) {
        created.push(exists);
        continue;
      }
      // If your User model uses passport-local-mongoose:
      // const user = new User({ username: u.username, email: u.email });
      // await User.register(user, u.password);
      const newUser = new User({ username: u.username, email: u.email, password: u.password });
      await newUser.save();
      created.push(newUser);
    } catch (err) {
      console.error('Error creating sample user', u.username, err);
    }
  }
  users = await User.find({});
  return users;
}

async function main() {
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('✅ Connected to Atlas DB');

  const force = process.argv.includes('--force');
  const authors = await ensureAuthors();

  if (!authors || authors.length === 0) {
    console.error('No authors available to create reviews. Seed users first.');
    await mongoose.disconnect();
    return;
  }

  const listings = await Listing.find({});
  console.log(`Found ${listings.length} listings.`);

  for (const listing of listings) {
    if (!force && listing.reviews && listing.reviews.length >= 3) {
      console.log(`Skipping listing ${listing._id} (already has ${listing.reviews.length} reviews).`);
      continue;
    }

    if (force && listing.reviews && listing.reviews.length > 0) {
      console.log(`Force mode: deleting ${listing.reviews.length} existing reviews for listing ${listing._id}`);
      await Review.deleteMany({ _id: { $in: listing.reviews } });
      listing.reviews = [];
    }

    const howMany = randInt(3, 4);
    for (let i = 0; i < howMany; i++) {
      const author = authors[randInt(0, authors.length - 1)];
      const rating = randInt(2, 5);
      const comment = SAMPLE_COMMENTS[randInt(0, SAMPLE_COMMENTS.length - 1)];

      const rev = new Review({ rating, comment, author: author._id });
      await rev.save();
      listing.reviews.push(rev._id);
    }

    await listing.save();
    console.log(`⭐ Added ${howMany} reviews to listing ${listing._id}`);
  }

  console.log('✅ Seeding reviews complete.');
  await mongoose.disconnect();
  console.log('🔌 Disconnected.');
}

main().catch(err => {
  console.error('Seeding failed:', err);
  mongoose.disconnect();
});
