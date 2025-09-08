const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?...",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Beaches",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?...",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic cities",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?...",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?...",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Heritage",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?...",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Camping",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?...",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Beaches",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?...",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?...",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Rooms",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?...",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?...",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Farms",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?...",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Heritage",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?...",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Trending",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?...",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Heritage",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?...",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "Iconic cities",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?...",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Swimming",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?...",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?...",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "Iconic cities",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?...",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "Swimming",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?...",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?...",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Trending",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?...",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?...",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "Beaches",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?...",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Camping",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?...",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "Heritage",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?...",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic cities",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?...",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?...",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Swimming",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?...",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?...",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Beaches",
  },
  {
    title: "Sunny Studio Room with Balcony",
    description:
      "Bright studio room with a private balcony, fast Wi-Fi and a compact kitchenette — ideal for short city stays.",
    image: {
      filename: "room_studio_balcony",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 850,
    location: "Lisbon",
    country: "Portugal",
    category: "Rooms",
  },
  {
    title: "Cozy Double Room near Metro",
    description:
      "Comfortable double room with ensuite bathroom, close to public transport and local cafes.",
    image: {
      filename: "room_double_metro",
      url: "https://images.unsplash.com/photo-1505691723518-36a6f6c2f3a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Berlin",
    country: "Germany",
    category: "Rooms",
  },

  // --- CASTLES (2)
  {
    title: "Medieval Keep with Panoramic Views",
    description:
      "Stay inside a restored medieval keep with stone halls, period decor and sweeping hilltop views.",
    image: {
      filename: "castle_keep_views",
      url: "https://images.unsplash.com/photo-1526481280698-59f5a7a0bdf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Edinburgh",
    country: "United Kingdom",
    category: "Castles",
  },
  {
    title: "Romantic Riverside Castle Suite",
    description:
      "An elegant castle suite on the river with historic architecture, tapestries and private gardens.",
    image: {
      filename: "castle_riverside_suite",
      url: "https://images.unsplash.com/photo-1509228627158-6453b0f10b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Loire Valley",
    country: "France",
    category: "Castles",
  },

  // --- CAMPING (2)
  {
    title: "Glamping Dome in Secluded Meadow",
    description:
      "Spacious glamping dome with comfortable bed, wood-burning stove, and stargazing meadow access.",
    image: {
      filename: "camping_glamping_dome",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 450,
    location: "Lake District",
    country: "United Kingdom",
    category: "Camping",
  },
  {
    title: "Riverside Tent Pitch",
    description:
      "Basic tent pitch with picnic table, fire pit and river access — perfect for low-key outdoor escapes.",
    image: {
      filename: "camping_riverside_tent",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 60,
    location: "Smoky Mountains",
    country: "United States",
    category: "Camping",
  },

  // --- FARMS (2)
  {
    title: "Working Farm Stay with Breakfast",
    description:
      "Experience farm life — help feed animals, collect eggs, and enjoy a hearty breakfast made from on-site produce.",
    image: {
      filename: "farm_stay_breakfast",
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 400,
    location: "Tuscany Countryside",
    country: "Italy",
    category: "Farms",
  },
  {
    title: "Countryside Barn Loft",
    description:
      "Renovated barn loft set on a working farm — rustic charm with modern comforts and wide-open fields.",
    image: {
      filename: "farm_barn_loft",
      url: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 520,
    location: "Hampshire",
    country: "United Kingdom",
    category: "Farms",
  },

  // --- ARCTIC (3)
  {
    title: "Aurora Dome near the Arctic Circle",
    description:
      "Transparent dome accommodation for watching the Northern Lights from your bed — remote and unforgettable.",
    image: {
      filename: "arctic_aurora_dome",
      url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Tromsø",
    country: "Norway",
    category: "Arctic",
  },
  {
    title: "Ice Lodge with Hot Springs Access",
    description:
      "Unique ice-lodge accommodation combined with nearby thermal springs — comfort in a frozen landscape.",
    image: {
      filename: "arctic_ice_lodge",
      url: "https://images.unsplash.com/photo-1549887534-1f5e6f79a4b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Greenland Coast",
    country: "Greenland",
    category: "Arctic",
  },
  {
    title: "Polar Research Station Stay (Converted)",
    description:
      "Converted research station offering simple but dramatic polar views, ice floes and guided excursions.",
    image: {
      filename: "arctic_research_station",
      url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Svalbard",
    country: "Norway",
    category: "Arctic",
  },

  // --- FERRY (3)
  {
    title: "Private Cabin on Coastal Ferry",
    description:
      "Comfortable private cabin aboard a scenic coastal ferry — enjoy sea breezes and island-hopping views.",
    image: {
      filename: "ferry_private_cabin",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 300,
    location: "Aegean Sea Route",
    country: "Greece",
    category: "Ferry",
  },
  {
    title: "Overnight Fjord Ferry Berth",
    description:
      "Bunk-style berth on an overnight ferry through dramatic fjords — perfect for photographers and adventurers.",
    image: {
      filename: "ferry_fjord_berth",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 180,
    location: "Norwegian Fjords",
    country: "Norway",
    category: "Ferry",
  },
  {
    title: "Day-Cruise Ferry with Scenic Deck Seats",
    description:
      "Open-deck seats on a daytime ferry cruising islands — casual, social and great for short hops and photos.",
    image: {
      filename: "ferry_day_deck",
      url: "https://images.unsplash.com/photo-1507525428034-783b29e5a0b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 90,
    location: "San Juan Islands",
    country: "United States",
    category: "Ferry",
  }
];

module.exports = { data: sampleListings };
