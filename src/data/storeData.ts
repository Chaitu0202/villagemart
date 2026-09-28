export interface StoreInfo {
  name: string;
  subName: string;
  tagline: string;
  signatureQuote: string;
  badgeText: string;
  phone1: { name: string; number: string; display: string };
  phone2: { name: string; number: string; display: string };
  whatsappNumber: string; // international digits without + for wa.me links
  address: string;
  hours: string;
  googleMapsUrl: string;
  paymentModes: string[];
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  tagline: string;
  itemCount: number;
  iconName: string;
  popularItems: string[];
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  packSize: string;
  price: number;
  mrp: number;
  isPopular?: boolean;
  isOffer?: boolean;
  offerTag?: string;
  inStock: boolean;
  unit: string;
  imageUrl?: string;
}

export interface OfferItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  savingsNote: string;
  applicableCategories: string[];
  ctaText: string;
}

export interface Review {
  id: string;
  name: string;
  relation: string;
  stars: number;
  comment: string;
  date: string;
  isVerifiedNeighbour: boolean;
}

export interface MonthlyChecklistItem {
  id: string;
  name: string;
  brand: string;
  defaultPack: string;
  defaultQty: number;
  category: string;
  estPrice: number;
}

// Editable Store Information (Preserving all contact details from physical signboard)
export const STORE_INFO: StoreInfo = {
  name: "Kirana & General Stores",
  subName: "Village Mart",
  tagline: "Everyday Needs. Under One Roof.",
  signatureQuote: "Your Trust, Our Priority!",
  badgeText: "Proudly Serving Our Village",
  phone1: {
    name: "K. Ganesh",
    number: "9703749569",
    display: "+91 97037 49569"
  },
  phone2: {
    name: "S. Suresh",
    number: "9885651354",
    display: "+91 98856 51354"
  },
  whatsappNumber: "919703749569",
  address: "Main Road, Village Center (Near Panchayat Office), Andhra Pradesh",
  hours: "6:30 AM – 10:00 PM (Open All 7 Days)",
  googleMapsUrl: "https://maps.google.com/?q=Kirana+and+General+Stores",
  paymentModes: ["Cash on Delivery", "UPI (PhonePe, GPay, Paytm)", "Debit / Credit Cards"],
  features: [
    "Wide Range of Products",
    "Best Prices Every Day",
    "Best Quality Assured",
    "Friendly Service & Happy Shopping"
  ]
};

export const CATEGORIES: Category[] = [
  {
    id: "groceries",
    name: "Groceries & Staples",
    tagline: "Rice, Dal, Atta, Cooking Oil & Spices",
    itemCount: 45,
    iconName: "Wheat",
    popularItems: ["Aashirvaad Atta", "Daawat Rice", "Fortune Oil", "Tata Salt"]
  },
  {
    id: "snacks",
    name: "Snacks & Biscuits",
    tagline: "Parle-G, Good Day, Chips & Namkeen",
    itemCount: 38,
    iconName: "Cookie",
    popularItems: ["Britannia Good Day", "Parle-G", "Kurkure", "Lays"]
  },
  {
    id: "beverages",
    name: "Beverages & Tea",
    tagline: "Tea Powders, Coffee, Cold Drinks & Juices",
    itemCount: 26,
    iconName: "Coffee",
    popularItems: ["Red Label Tea", "Bru Instant", "Thums Up", "Frooti"]
  },
  {
    id: "dairy",
    name: "Dairy & Essentials",
    tagline: "Fresh Milk, Curd, Paneer & Butter",
    itemCount: 18,
    iconName: "Milk",
    popularItems: ["Amul Butter", "Nandini Milk", "Curd Pack", "Paneer"]
  },
  {
    id: "personal-care",
    name: "Personal Care",
    tagline: "Bathing Soaps, Shampoos, Pastes & Hair Oil",
    itemCount: 32,
    iconName: "Sparkles",
    popularItems: ["Colgate", "Pears Soap", "Clinic Plus", "Parachute Oil"]
  },
  {
    id: "home-care",
    name: "Home Care & Cleaning",
    tagline: "Detergent Powders, Dishwash, Floor Cleaner",
    itemCount: 24,
    iconName: "Home",
    popularItems: ["Surf Excel", "Vim Bar", "Harpic", "Lizol Cleaner"]
  },
  {
    id: "baby-care",
    name: "Baby Care",
    tagline: "Diapers, Baby Powder, Soaps & Cerelac",
    itemCount: 15,
    iconName: "Heart",
    popularItems: ["Pampers Diapers", "Johnson Baby Soap", "Cerelac"]
  },
  {
    id: "daily-needs",
    name: "Puja & Daily Needs",
    tagline: "Camphor, Agarbatti, Matchboxes & Batteries",
    itemCount: 22,
    iconName: "Flame",
    popularItems: ["Mangaldeep Agarbatti", "Camphor", "Wicks & Oil", "Matches"]
  }
];

export const PRODUCTS: Product[] = [
  // Staples & Groceries
  {
    id: "prod-1",
    name: "Aashirvaad Superior MP Sharbati Atta",
    brand: "Aashirvaad",
    category: "groceries",
    packSize: "5 kg",
    price: 245,
    mrp: 275,
    isPopular: true,
    inStock: true,
    unit: "pack"
  },
  {
    id: "prod-2",
    name: "Tata Salt Vacuum Evaporated Iodised",
    brand: "Tata",
    category: "groceries",
    packSize: "1 kg",
    price: 28,
    mrp: 30,
    isPopular: true,
    inStock: true,
    unit: "pouch"
  },
  {
    id: "prod-3",
    name: "Fortune Sunlite Refined Sunflower Oil",
    brand: "Fortune",
    category: "groceries",
    packSize: "1 L Pouch",
    price: 138,
    mrp: 155,
    isPopular: true,
    isOffer: true,
    offerTag: "Special Price",
    inStock: true,
    unit: "pouch"
  },
  {
    id: "prod-4",
    name: "Daawat Rozana Super Basmati Rice",
    brand: "Daawat",
    category: "groceries",
    packSize: "5 kg",
    price: 399,
    mrp: 460,
    isPopular: true,
    inStock: true,
    unit: "bag"
  },
  {
    id: "prod-5",
    name: "Premium Unpolished Toor Dal (Kandi Pappu)",
    brand: "Village Mart Select",
    category: "groceries",
    packSize: "1 kg",
    price: 155,
    mrp: 170,
    isPopular: true,
    inStock: true,
    unit: "pack"
  },
  {
    id: "prod-6",
    name: "Gold Drop Refined Groundnut Oil",
    brand: "Gold Drop",
    category: "groceries",
    packSize: "1 L Pouch",
    price: 175,
    mrp: 190,
    isPopular: false,
    inStock: true,
    unit: "pouch"
  },
  {
    id: "prod-7",
    name: "Madhur Pure & Hygienic Sulphur-Free Sugar",
    brand: "Madhur",
    category: "groceries",
    packSize: "1 kg",
    price: 48,
    mrp: 54,
    isPopular: true,
    inStock: true,
    unit: "pack"
  },
  {
    id: "prod-8",
    name: "Everest / MDH Pure Turmeric Powder (Haldi)",
    brand: "Everest",
    category: "groceries",
    packSize: "200 g",
    price: 46,
    mrp: 52,
    isPopular: false,
    inStock: true,
    unit: "box"
  },

  // Snacks & Biscuits
  {
    id: "prod-9",
    name: "Parle-G Original Glucose Biscuits",
    brand: "Parle",
    category: "snacks",
    packSize: "250 g Family Pack",
    price: 30,
    mrp: 30,
    isPopular: true,
    inStock: true,
    unit: "pack"
  },
  {
    id: "prod-10",
    name: "Britannia Good Day Cashew Cookies",
    brand: "Britannia",
    category: "snacks",
    packSize: "200 g",
    price: 42,
    mrp: 45,
    isPopular: true,
    inStock: true,
    unit: "pack"
  },
  {
    id: "prod-11",
    name: "Maggi 2-Minute Masala Noodles (Pack of 4)",
    brand: "Nestle Maggi",
    category: "snacks",
    packSize: "280 g",
    price: 56,
    mrp: 60,
    isPopular: true,
    isOffer: true,
    offerTag: "Family Pack",
    inStock: true,
    unit: "pack"
  },
  {
    id: "prod-12",
    name: "Kurkure Masala Munch Crunchy Snack",
    brand: "Kurkure",
    category: "snacks",
    packSize: "75 g",
    price: 20,
    mrp: 20,
    isPopular: false,
    inStock: true,
    unit: "pack"
  },
  {
    id: "prod-13",
    name: "Cadbury Dairy Milk Chocolate Silk",
    brand: "Cadbury",
    category: "snacks",
    packSize: "60 g",
    price: 80,
    mrp: 85,
    isPopular: false,
    inStock: true,
    unit: "bar"
  },

  // Beverages & Dairy
  {
    id: "prod-14",
    name: "Brooke Bond Red Label Strong Tea Powder",
    brand: "Red Label",
    category: "beverages",
    packSize: "500 g",
    price: 245,
    mrp: 270,
    isPopular: true,
    isOffer: true,
    offerTag: "Top Seller",
    inStock: true,
    unit: "box"
  },
  {
    id: "prod-15",
    name: "Bru Instant Coffee Chicory Mix",
    brand: "Bru",
    category: "beverages",
    packSize: "100 g Jar",
    price: 185,
    mrp: 205,
    isPopular: true,
    inStock: true,
    unit: "jar"
  },
  {
    id: "prod-16",
    name: "Thums Up Charged Carbonated Drink",
    brand: "Coca-Cola / Thums Up",
    category: "beverages",
    packSize: "750 ml Bottle",
    price: 40,
    mrp: 40,
    isPopular: true,
    inStock: true,
    unit: "bottle"
  },
  {
    id: "prod-17",
    name: "Amul Pasteurised Salted Butter",
    brand: "Amul",
    category: "dairy",
    packSize: "100 g",
    price: 58,
    mrp: 60,
    isPopular: true,
    inStock: true,
    unit: "pack"
  },
  {
    id: "prod-18",
    name: "Fresh Farm Pouch Milk (Toned/Special)",
    brand: "Daily Fresh",
    category: "dairy",
    packSize: "500 ml",
    price: 32,
    mrp: 32,
    isPopular: true,
    inStock: true,
    unit: "pouch"
  },
  {
    id: "prod-19",
    name: "Fresh Cow Ghee Pure Desi Danedar",
    brand: "Heritage / Amul",
    category: "dairy",
    packSize: "500 ml Tin",
    price: 360,
    mrp: 395,
    isPopular: true,
    inStock: true,
    unit: "tin"
  },

  // Personal Care
  {
    id: "prod-20",
    name: "Colgate Strong Teeth Dental Cream",
    brand: "Colgate",
    category: "personal-care",
    packSize: "200 g Saver",
    price: 110,
    mrp: 125,
    isPopular: true,
    inStock: true,
    unit: "tube"
  },
  {
    id: "prod-21",
    name: "Pears Pure & Gentle Amber Glycerine Soap",
    brand: "Pears",
    category: "personal-care",
    packSize: "125 g (Buy 3 Get 1)",
    price: 180,
    mrp: 210,
    isPopular: true,
    isOffer: true,
    offerTag: "Value Pack",
    inStock: true,
    unit: "pack"
  },
  {
    id: "prod-22",
    name: "Dettol Original Germ Protection Bathing Bar",
    brand: "Dettol",
    category: "personal-care",
    packSize: "75 g x 4 Soap",
    price: 145,
    mrp: 160,
    isPopular: false,
    inStock: true,
    unit: "pack"
  },
  {
    id: "prod-23",
    name: "Parachute 100% Pure Coconut Hair Oil",
    brand: "Parachute",
    category: "personal-care",
    packSize: "250 ml Bottle",
    price: 105,
    mrp: 118,
    isPopular: true,
    inStock: true,
    unit: "bottle"
  },

  // Home Care
  {
    id: "prod-24",
    name: "Surf Excel Quick Wash Detergent Powder",
    brand: "Surf Excel",
    category: "home-care",
    packSize: "1 kg Saver",
    price: 148,
    mrp: 165,
    isPopular: true,
    isOffer: true,
    offerTag: "Best Seller",
    inStock: true,
    unit: "bag"
  },
  {
    id: "prod-25",
    name: "Vim Anti-Bacterial Dishwash Bar",
    brand: "Vim",
    category: "home-care",
    packSize: "300 g with Scrub",
    price: 25,
    mrp: 28,
    isPopular: true,
    inStock: true,
    unit: "bar"
  },
  {
    id: "prod-26",
    name: "Harpic Power Plus Disinfectant Toilet Cleaner",
    brand: "Harpic",
    category: "home-care",
    packSize: "500 ml",
    price: 98,
    mrp: 109,
    isPopular: false,
    inStock: true,
    unit: "bottle"
  },

  // Baby & Puja
  {
    id: "prod-27",
    name: "Pampers All Round Protection Baby Diaper (M)",
    brand: "Pampers",
    category: "baby-care",
    packSize: "Medium (30 pcs)",
    price: 399,
    mrp: 460,
    isPopular: false,
    inStock: true,
    unit: "pack"
  },
  {
    id: "prod-28",
    name: "Mangaldeep Temple Pure Agarbatti Incense",
    brand: "Mangaldeep",
    category: "daily-needs",
    packSize: "Pack of 80 Sticks",
    price: 45,
    mrp: 50,
    isPopular: true,
    inStock: true,
    unit: "box"
  },
  {
    id: "prod-29",
    name: "Pure Natural Bhimseni Camphor (Karpuram)",
    brand: "Pooja Special",
    category: "daily-needs",
    packSize: "100 g Jar",
    price: 85,
    mrp: 95,
    isPopular: true,
    inStock: true,
    unit: "jar"
  }
];

export const OFFERS: OfferItem[] = [
  {
    id: "offer-1",
    title: "Monthly Kitchen Essentials Combo",
    subtitle: "Special bundle pricing on Atta, Rice, Sunflower Oil, Toor Dal & Tata Salt.",
    badge: "Monthly Saver",
    savingsNote: "Save up to ₹180 on regular family grocery staples",
    applicableCategories: ["groceries"],
    ctaText: "Check Monthly List"
  },
  {
    id: "offer-2",
    title: "Family Pack Biscuit & Tea Savings",
    subtitle: "Stock up on Red Label 500g and Parle-G / Britannia Good Day for daily chai time.",
    badge: "Chai & Snacks",
    savingsNote: "Everyday honest prices with zero delivery markup",
    applicableCategories: ["snacks", "beverages"],
    ctaText: "Shop Tea & Snacks"
  },
  {
    id: "offer-3",
    title: "Household Hygiene & Clean Home Kit",
    subtitle: "Save on Surf Excel 1kg + Vim Dishwash + Pears / Dettol soaps bundle.",
    badge: "Clean Home",
    savingsNote: "Genuine brand stocks direct from trusted FMCG distributors",
    applicableCategories: ["home-care", "personal-care"],
    ctaText: "View Cleaning Needs"
  },
  {
    id: "offer-4",
    title: "Puja & Festive Specials",
    subtitle: "Bhimseni Camphor, Pure Ghee, Agarbatti and Puja cotton wicks at wholesale rates.",
    badge: "Festive Ready",
    savingsNote: "Fresh stocks available ahead of all traditional festivals",
    applicableCategories: ["daily-needs"],
    ctaText: "Browse Puja Items"
  }
];

export const MONTHLY_ESSENTIALS: MonthlyChecklistItem[] = [
  { id: "m-1", name: "Aashirvaad Atta", brand: "Aashirvaad", defaultPack: "5 kg", defaultQty: 1, category: "Groceries", estPrice: 245 },
  { id: "m-2", name: "Tata Salt", brand: "Tata", defaultPack: "1 kg", defaultQty: 2, category: "Groceries", estPrice: 56 },
  { id: "m-3", name: "Fortune Sunflower Oil", brand: "Fortune", defaultPack: "1 L Pouch", defaultQty: 3, category: "Groceries", estPrice: 414 },
  { id: "m-4", name: "Toor Dal (Kandi Pappu)", brand: "Select", defaultPack: "1 kg", defaultQty: 2, category: "Groceries", estPrice: 310 },
  { id: "m-5", name: "Madhur Sugar", brand: "Madhur", defaultPack: "1 kg", defaultQty: 2, category: "Groceries", estPrice: 96 },
  { id: "m-6", name: "Daawat Basmati Rice", brand: "Daawat", defaultPack: "5 kg", defaultQty: 1, category: "Groceries", estPrice: 399 },
  { id: "m-7", name: "Red Label Tea", brand: "Red Label", defaultPack: "500 g", defaultQty: 1, category: "Beverages", estPrice: 245 },
  { id: "m-8", name: "Surf Excel Detergent", brand: "Surf Excel", defaultPack: "1 kg", defaultQty: 2, category: "Home Care", estPrice: 296 },
  { id: "m-9", name: "Colgate Strong Teeth", brand: "Colgate", defaultPack: "200 g", defaultQty: 1, category: "Personal Care", estPrice: 110 },
  { id: "m-10", name: "Pears / Dettol Soap Pack", brand: "Pears", defaultPack: "Multi-Pack", defaultQty: 1, category: "Personal Care", estPrice: 180 },
  { id: "m-11", name: "Parle-G / Britannia Biscuits", brand: "Britannia", defaultPack: "Family Pack", defaultQty: 2, category: "Snacks", estPrice: 72 },
  { id: "m-12", name: "Vim Dishwash Bar", brand: "Vim", defaultPack: "300 g", defaultQty: 2, category: "Home Care", estPrice: 50 }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Rao Garu",
    relation: "Village Resident & Monthly Customer",
    stars: 5,
    comment: "Suresh and Ganesh always give the best quality rice and oil. We just send our monthly grocery list on WhatsApp, and within an hour our order is neatly packed and ready. Very polite and honest pricing.",
    date: "August 2026",
    isVerifiedNeighbour: true
  },
  {
    id: "rev-2",
    name: "Lakshmi Devi",
    relation: "Local Homemaker",
    stars: 5,
    comment: "All branded grocery items like Aashirvaad, Tata, and Surf Excel are available under one roof at genuine rates. Even for urgent festival items or pooja needs, this shop is our first choice.",
    date: "September 2026",
    isVerifiedNeighbour: true
  },
  {
    id: "rev-3",
    name: "Venkatesh Prasad",
    relation: "Regular Visitor",
    stars: 5,
    comment: "The store is very clean, well-stocked, and the WhatsApp ordering makes everyday shopping effortless for elderly parents in the village. True neighbourhood trust!",
    date: "September 2026",
    isVerifiedNeighbour: true
  }
];

export const ASSET_PATHS = {
  heroGrocery: "/src/assets/images/hero_grocery_composition_1790593628448.jpg",
  deliveryBag: "/src/assets/images/delivery_doorstep_bag_1790593641861.jpg",
  storeInterior: "/src/assets/images/store_interior_kirana_1790593660507.jpg",
  monthlyBasket: "/src/assets/images/monthly_grocery_basket_1790593676844.jpg"
};
