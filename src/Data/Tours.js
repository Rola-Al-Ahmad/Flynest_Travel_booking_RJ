import image1 from '../../public/Images/image1.jpeg';
import image2 from '../../public/Images/image2.png';
import image3 from '../../public/Images/image3.png';
import image4 from '../../public/Images/image4.png';
import image5 from '../../public/Images/image5.png';
import image6 from '../../public/Images/image6.png';
import image7 from '../../public/Images/image7.png';
import image8 from '../../public/Images/image8.jpeg';
import image9 from '../../public/Images/image9.jpeg';
import image10 from '../../public/Images/image10.jpeg';
import image11 from '../../public/Images/image11.jpeg';
import image12 from '../../public/Images/image12.jpeg';
import image13 from '../../public/Images/image13.jpeg';
import image14 from '../../public/Images/image14.png';
import image15 from '../../public/Images/image15.jpeg';

const toursData = [
  {
    id: 1,
    name: "Boat Ride in los Angeles",
    location: "San Francisco, CA",
    duration: "3 Days, 2 Nights",
    rating: 4.9,
    price: 113,
    reviews: 148,
    tag: "Featured",
    person: 4,
    image: image2,
    guidePrice: 30,
    dinnerPrice: 20,
    includedItems: [
      "Boat Ride Ticket",
      "Welcome Drink",
      "Guided Tour",
      "Lunch Buffet",
      "Safety Jacket"
    ],
    excludedItems: ["Evening Meals", "Private Boat Rental", "Insurance"],
    about: [
      "Experience the beauty of California’s coast with a scenic boat ride from Los Angeles to San Francisco. Over the course of three days, enjoy guided tours, waterfront views, and delicious onboard meals. This trip offers a relaxing blend of nature, comfort, and adventure — perfect for couples, friends, or solo travelers looking to unwind and explore.",
      "Feel the breeze, capture stunning sunsets, and create unforgettable memories on the Pacific."
    ]
  },
  {
    id: 2,
    name: "Desert Safari Adventure",
    location: "Dubai, UAE",
    duration: "1 Day",
    rating: 4.8,
    price: 150,
    reviews: 172,
    tag: "Popular",
    person: 3,
    image: image1,
    guidePrice: 25,
    dinnerPrice: 35,
    includedItems: [
      "4x4 Ride",
      "Camel Ride",
      "BBQ Dinner",
      "Live Shows",
      "Bottled Water"
    ],
    excludedItems: ["Quad Bike Rental", "Personal Photography", "Shopping"],
    about: [
      "Dive into the heart of the Arabian desert with this thrilling desert safari adventure. From adrenaline-pumping 4x4 rides to peaceful camel treks, every moment offers something new.",
      "Top it off with a traditional BBQ dinner and live cultural performances under the stars for an evening you’ll never forget."
    ]
  },
  {
    id: 3,
    name: "Hiking the Swiss Alps",
    location: "Zermatt, Switzerland",
    duration: "4 Days, 3 Nights",
    rating: 4.9,
    price: 320,
    reviews: 201,
    tag: "Top Rated",
    person: 5,
    image: image3,
    guidePrice: 40,
    dinnerPrice: 30,
    includedItems: [
      "Guide",
      "Mountain Lodge",
      "Daily Meals",
      "First Aid Kit",
      "Hiking Poles"
    ],
    excludedItems: ["Clothing & Gear", "Insurance", "Transport to Starting Point"],
    about: [
      "Hike through the breathtaking landscapes of the Swiss Alps with professional guides leading the way. Stay in cozy mountain lodges and refuel with hearty meals each day.",
      "Perfect for nature lovers and trekking enthusiasts looking for an invigorating escape in Europe’s iconic mountain range."
    ]
  },
  {
    id: 4,
    name: "Tropical Island Snorkeling",
    location: "Bali, Indonesia",
    duration: "2 Days, 1 Night",
    rating: 4.7,
    price: 190,
    reviews: 98,
    tag: "Adventure",
    person: 2,
    image: image4,
    guidePrice: 20,
    dinnerPrice: 25,
    includedItems: [
      "Snorkeling Gear",
      "Island Lunch",
      "Boat Transport",
      "Beach Towel",
      "Fruit Platter"
    ],
    excludedItems: ["Underwater Camera", "Alcoholic Drinks", "Room Service"],
    about: [
      "Explore the turquoise waters of Bali with this island snorkeling tour. Swim among vibrant marine life and relax on white sandy beaches.",
      "Whether you're an experienced snorkeler or a curious beginner, this trip promises an unforgettable tropical adventure."
    ]
  },
  {
    id: 5,
    name: "Hot Air Balloon Ride",
    location: "Cappadocia, Turkey",
    duration: "1 Day",
    rating: 4.8,
    price: 250,
    reviews: 143,
    tag: "Romantic",
    person: 4,
    image: image5,
    guidePrice: 35,
    dinnerPrice: 40,
    includedItems: [
      "Balloon Ride",
      "Champagne Toast",
      "Light Breakfast",
      "Pilot Briefing",
      "Photo Souvenir"
    ],
    excludedItems: ["Video Recording", "Hotel Pickup", "Extra Night Stay"],
    about: [
      "Soar above Cappadocia’s fairytale landscapes in a hot air balloon at sunrise. Toast with champagne and enjoy the panoramic views of rock formations and valleys below.",
      "A romantic, once-in-a-lifetime experience that blends thrill with tranquility."
    ]
  },
  {
    id: 6,
    name: "Safari Expedition",
    location: "Serengeti, Tanzania",
    duration: "5 Days, 4 Nights",
    rating: 4.9,
    price: 450,
    reviews: 176,
    tag: "Wildlife",
    person: 3,
    image: image6,
    guidePrice: 50,
    dinnerPrice: 30,
    includedItems: [
      "Safari Jeep",
      "Wildlife Guide",
      "Park Entry Fee",
      "Lodge Stay",
      "Daily Meals"
    ],
    excludedItems: ["Visa Fees", "Medical Insurance", "Tips for Staff"],
    about: [
      "Embark on a true African wilderness experience in the Serengeti. Track wildlife with expert guides and witness breathtaking sunrises over the savannah.",
      "Stay in comfortable lodges and enjoy daily game drives through one of the world’s richest ecosystems."
    ]
  },
  {
    id: 7,
    name: "Historic Rome Walking Tour",
    location: "Rome, Italy",
    duration: "2 Days, 1 Night",
    rating: 4.7,
    price: 180,
    reviews: 134,
    tag: "Culture",
    person: 2,
    image: image7,
    guidePrice: 28,
    dinnerPrice: 22,
    includedItems: [
      "Tour Guide",
      "Entry to Colosseum",
      "Audio Device",
      "Lunch",
      "City Map"
    ],
    excludedItems: ["Dinner", "Hotel Accommodation", "Tips"],
    about: [
      "Step back in time with a guided walking tour through Rome’s ancient streets. From the Colosseum to hidden piazzas, discover the city’s most iconic landmarks.",
      "Enjoy fascinating stories, local flavors, and an up-close view of Roman history and culture."
    ]
  },
  {
    id: 8,
    name: "Northern Lights Chase",
    location: "Tromsø, Norway",
    duration: "3 Days, 2 Nights",
    rating: 4.9,
    price: 399,
    reviews: 89,
    tag: "Experience",
    person: 4,
    image: image8,
    guidePrice: 45,
    dinnerPrice: 33,
    includedItems: [
      "Aurora Transport Van",
      "Professional Photographer",
      "Thermal Clothing",
      "Hot Drinks",
      "Night Snacks"
    ],
    excludedItems: ["Camera Rental", "Hotel Upgrade", "Extra Night Tour"],
    about: [
      "Chase the mesmerizing Northern Lights in the arctic skies of Tromsø. This experience includes expert guidance, thermal gear, and cozy breaks with hot drinks.",
      "Capture magical photographs and soak in the beauty of nature’s most spectacular light show."
    ]
  },
  {
    id: 9,
    name: "Amazon Rainforest Exploration",
    location: "Manaus, Brazil",
    duration: "5 Days, 4 Nights",
    rating: 4.6,
    price: 470,
    reviews: 66,
    tag: "Nature",
    person: 5,
    image: image9,
    guidePrice: 50,
    dinnerPrice: 35,
    includedItems: [
      "Jungle Lodge",
      "Boat Transfers",
      "Local Guide",
      "All Meals",
      "Wildlife Safari"
    ],
    excludedItems: ["Vaccinations", "Snacks", "Optional Zipline"],
    about: [
      "Venture deep into the Amazon Rainforest and discover the world’s most biodiverse ecosystem. Stay in eco-lodges, explore jungle trails, and sail on winding rivers.",
      "This immersive experience connects you with untouched nature and local wildlife in an unforgettable way."
    ]
  },
  {
    id: 10,
    name: "Kyoto Temple Tour",
    location: "Kyoto, Japan",
    duration: "2 Days, 1 Night",
    rating: 4.8,
    price: 240,
    reviews: 120,
    tag: "Spiritual",
    person: 3,
    image: image10,
    guidePrice: 25,
    dinnerPrice: 28,
    includedItems: [
      "Temple Entry Passes",
      "Tea Ceremony",
      "Guide",
      "Light Breakfast",
      "Cultural Session"
    ],
    excludedItems: ["Transport to Kyoto", "Dinner", "Kimono Rental"],
    about: [
      "Explore Kyoto’s spiritual heart with visits to ancient temples, serene gardens, and traditional tea ceremonies. Learn from local guides who share the city’s hidden gems.",
      "This peaceful journey offers insight into Japan’s cultural and spiritual heritage."
    ]
  },
  {
    id: 11,
    name: "New York City Explorer",
    location: "New York, USA",
    duration: "3 Days, 2 Nights",
    rating: 4.7,
    price: 299,
    reviews: 210,
    tag: "Urban",
    person: 4,
    image: image11,
    guidePrice: 30,
    dinnerPrice: 32,
    includedItems: [
      "Metro Card",
      "Observation Deck Tickets",
      "Breakfast",
      "Tour Bus Access",
      "City Guidebook"
    ],
    excludedItems: ["Lunch & Dinner", "Broadway Tickets", "Airport Transfers"],
    about: [
      "Discover the energy of New York City with this all-in-one urban explorer pass. From skyscraper views to historical landmarks, every stop is iconic.",
      "Hop on tour buses, visit major attractions, and dive into the city's electric rhythm day and night."
    ]
  },
  {
    id: 12,
    name: "Petra & Wadi Rum Trek",
    location: "Jordan",
    duration: "4 Days, 3 Nights",
    rating: 4.9,
    price: 370,
    reviews: 112,
    tag: "History",
    person: 5,
    image: image12,
    guidePrice: 40,
    dinnerPrice: 30,
    includedItems: [
      "Wadi Rum Camp",
      "Petra Entry",
      "Bedouin Meals",
      "Jeep Tour",
      "Hiking Guide"
    ],
    excludedItems: ["Camel Ride", "Snacks", "Tips"],
    about: [
      "Trek the ancient trails of Petra and Wadi Rum, where stunning desert landscapes meet rich cultural heritage. Camp under the stars and walk through rose-red canyons.",
      "Perfect for adventurers seeking a blend of history, nature, and authentic Bedouin hospitality."
    ]
  },
  {
    id: 13,
    name: "Great Barrier Reef Dive",
    location: "Queensland, Australia",
    duration: "2 Days, 1 Night",
    rating: 4.8,
    price: 420,
    reviews: 155,
    tag: "Marine",
    person: 2,
    image: image13,
    guidePrice: 35,
    dinnerPrice: 27,
    includedItems: [
      "Snorkeling & Diving Gear",
      "Boat Tour",
      "Instructor",
      "Buffet Lunch",
      "Underwater Photography"
    ],
    excludedItems: ["Scuba Certification", "Wetsuit Rental", "Hotel"],
    about: [
      "Dive into the crystal-clear waters of the Great Barrier Reef for a once-in-a-lifetime marine experience. Swim alongside tropical fish and vibrant coral reefs.",
      "Led by professional instructors, this tour is ideal for snorkelers and divers of all levels."
    ]
  },
  {
    id: 14,
    name: "Iceland Volcano & Ice Cave",
    location: "Reykjavik, Iceland",
    duration: "3 Days, 2 Nights",
    rating: 4.9,
    price: 380,
    reviews: 102,
    tag: "Adventure",
    person: 3,
    image: image14,
    guidePrice: 42,
    dinnerPrice: 34,
    includedItems: [
      "Glacier Hike",
      "Volcano Tour",
      "Local Guide",
      "Thermal Gear",
      "Daily Breakfast"
    ],
    excludedItems: ["Crampons Rental", "Dinner", "Airport Shuttle"],
    about: [
      "Witness Iceland’s dramatic contrasts with this tour of volcanoes and ice caves. Traverse icy tunnels and walk across ancient lava fields with expert guides.",
      "This adventure is a thrilling deep-dive into the island’s raw and powerful natural beauty."
    ]
  },
  {
    id: 15,
    name: "Machu Picchu Hiking Expedition",
    location: "Cusco, Peru",
    duration: "5 Days, 4 Nights",
    rating: 4.9,
    price: 490,
    reviews: 187,
    tag: "Trek",
    person: 5,
    image: image15,
    guidePrice: 48,
    dinnerPrice: 36,
    includedItems: [
      "Train to Aguas Calientes",
      "Permit to Machu Picchu",
      "Porters",
      "Camping Gear",
      "Local Meals"
    ],
    excludedItems: ["Sleeping Bag", "Hotel Before Trek", "Trekking Shoes"],
    about: [
      "Journey through the Andes on a guided trek to Machu Picchu. Pass ancient ruins, cloud forests, and breathtaking mountain vistas.",
      "A bucket-list expedition for hikers seeking both challenge and spiritual reward in Peru’s sacred valley."
    ]
  }
];

export default toursData;
