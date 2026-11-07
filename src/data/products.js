/**
 * Central Product Catalog for Prakrutik Tattva
 * 
 * Updated with official prices and pack sizes from price list.
 * Any unpriced item displays "Price on request".
 */

export const PRODUCTS = [
  // =========================================================================
  // 1. COLD-PRESSED OILS COLLECTION
  // =========================================================================
  {
    id: "groundnut-oil",
    name: "Groundnut Cold-Pressed Oil",
    category: "oils",
    subcategory: "All Oils",
    tagline: "Traditional cold-pressed peanut cooking oil",
    description: "Extracted from carefully selected groundnuts using traditional cold pressing. Pure aroma and golden clarity, suitable for daily family cooking.",
    image: "/assets/images/groundnut-oil.jpg",
    featured: true,
    isAvailable: true,
    packSizes: [
      { size: "1 Ltr", price: 375 },
      { size: "5 Ltr", price: 1750 }
    ],
    defaultPackSize: "1 Ltr",
    details: {
      packaging: "Food-grade bottle / container",
      storage: "Store in a cool, dry place away from direct sunlight.",
      shelfLife: "9 months from manufacturing date"
    }
  },
  {
    id: "sunflower-oil",
    name: "Sunflower Cold-Pressed Oil",
    category: "oils",
    subcategory: "All Oils",
    tagline: "Traditionally Cold-Pressed by the Farmers of Maharashtra",
    description: "100% pure cold-pressed sunflower cooking oil crafted with traditional wood-pressing methods. Wholesome, unrefined, and naturally aromatic for everyday kitchen recipes.",
    image: "/assets/images/sunflower-oil.jpg",
    featured: true,
    isAvailable: true,
    packSizes: [
      { size: "1 Ltr", price: 375 },
      { size: "5 Ltr", price: 1750 }
    ],
    defaultPackSize: "1 Ltr",
    details: {
      ingredients: "Wood Pressed Sunflower oil",
      packaging: "1L (909g) & 5L food-grade bottles",
      storage: "Store in a dry place away from direct heat and light, with the lid tightly closed.",
      shelfLife: "Best before 6 months from date of packaging",
      fssai: "11526071000168"
    }
  },
  {
    id: "safflower-oil",
    name: "Safflower Cold-Pressed Oil",
    category: "oils",
    subcategory: "All Oils",
    tagline: "Traditional Kardi oil cold-pressed with care",
    description: "Extracted from quality safflower (Kardi) seeds. Revered in traditional Indian kitchens for its light consistency and pleasant flavor profile.",
    image: "/assets/images/safflower-oil.jpg",
    featured: false,
    isAvailable: true,
    packSizes: [
      { size: "1 Ltr", price: 410 },
      { size: "5 Ltr", price: 1975 }
    ],
    defaultPackSize: "1 Ltr",
    details: {
      packaging: "Secure food-grade container",
      storage: "Store in a cool, dark cabinet away from direct light.",
      shelfLife: "9 months from packaging"
    }
  },
  {
    id: "mustard-oil",
    name: "Mustard Cold-Pressed Oil",
    category: "oils",
    subcategory: "All Oils",
    tagline: "Amber-toned mustard oil with authentic aroma",
    description: "Cold-pressed from quality mustard seeds. Known for its distinct pungent aroma, favored in North and Eastern Indian culinary preparations and pickling.",
    image: "/assets/images/mustard-oil.jpg",
    featured: true,
    isAvailable: true,
    packSizes: [
      { size: "1 Ltr", price: 340 },
      { size: "5 Ltr", price: 1600 }
    ],
    defaultPackSize: "1 Ltr",
    details: {
      packaging: "Protective amber bottle",
      storage: "Keep in a cool and dry location. Natural sediment may settle naturally.",
      shelfLife: "12 months from packing"
    }
  },
  {
    id: "sesame-oil",
    name: "Sesame Cold-Pressed Oil",
    category: "oils",
    subcategory: "All Oils",
    tagline: "Golden sesame oil cold-pressed from prime seeds",
    description: "Pressed gently from clean sesame (Til) seeds. Brings a deep, nutty aroma to traditional gravies, tempering (tadka), and regional recipes.",
    image: "/assets/images/sesame-oil.jpg",
    featured: false,
    isAvailable: true,
    packSizes: [
      { size: "200ml", price: 155 },
      { size: "1 Ltr", price: 580 },
      { size: "5 Ltr", price: 2990 }
    ],
    defaultPackSize: "1 Ltr",
    details: {
      packaging: "Dark glass or food-safe bottle",
      storage: "Store at room temperature in a shaded space.",
      shelfLife: "9 months from packaging"
    }
  },
  {
    id: "coconut-oil",
    name: "Coconut Cold-Pressed Oil",
    category: "oils",
    subcategory: "All Oils",
    tagline: "Pure coconut oil with fresh tropical fragrance",
    description: "Extracted from dried coconut copra with no chemical refining. Widely appreciated for traditional coastal cooking and everyday family use.",
    image: "/assets/images/coconut-oil.jpg",
    featured: true,
    isAvailable: true,
    packSizes: [
      { size: "200ml", price: 135 },
      { size: "1 Ltr", price: 585 },
      { size: "5 Ltr", price: 2750 }
    ],
    defaultPackSize: "1 Ltr",
    details: {
      packaging: "Food-safe bottle / container",
      storage: "Solidifies naturally in cooler temperatures. Keep in a dry place.",
      shelfLife: "12 months from packaging"
    }
  },

  // =========================================================================
  // 2. DRY FRUITS & SEEDS COLLECTION
  // =========================================================================
  {
    id: "cashew",
    name: "Cashews (Kaju)",
    category: "seeds-dryfruits",
    subcategory: "Dry Fruits",
    tagline: "Creamy whole cashew nuts",
    description: "Carefully sorted whole cashew nuts with natural sweetness and buttery texture. Perfect for festive dishes, rich gravies, and nutritious snacking.",
    image: "/assets/images/cashews.jpg",
    featured: true,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: 310 },
      { size: "500g", price: 610 },
      { size: "1kg", price: 1225 }
    ],
    defaultPackSize: "500g",
    details: {
      packaging: "Zip-lock sealed pouch",
      storage: "Keep in a cool, moisture-free container.",
      shelfLife: "6 months from packing"
    }
  },
  {
    id: "almonds",
    name: "Almonds (Badam)",
    category: "seeds-dryfruits",
    subcategory: "Dry Fruits",
    tagline: "Selected whole almonds with natural crunch",
    description: "Evenly sized, clean whole almonds. Ideal for everyday snacking, soaking overnight, or incorporating into family desserts and breakfast bowls.",
    image: "/assets/images/almonds.jpg",
    featured: true,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: 360 },
      { size: "500g", price: 710 },
      { size: "1kg", price: 1400 }
    ],
    defaultPackSize: "500g",
    details: {
      packaging: "Resealable aroma-lock pouch",
      storage: "Store in an airtight container in a cool, dry pantry or refrigerator.",
      shelfLife: "6 months from packing"
    }
  },
  {
    id: "walnuts",
    name: "Walnuts (Akhrot)",
    category: "seeds-dryfruits",
    subcategory: "Dry Fruits",
    tagline: "Crisp light walnut kernels",
    description: "Quality walnut halves carefully de-shelled to preserve texture and delicate nutty flavor. A thoughtful addition to your morning routine.",
    image: "/assets/images/walnuts.jpg",
    featured: false,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: 465 },
      { size: "500g", price: 800 },
      { size: "1kg", price: 1800 }
    ],
    defaultPackSize: "500g",
    details: {
      packaging: "Sealed nitrogen-flushed pouch",
      storage: "Store in refrigerator after opening to keep natural freshness.",
      shelfLife: "6 months from packing"
    }
  },
  {
    id: "anjeer",
    name: "Anjeer (Dried Figs)",
    category: "seeds-dryfruits",
    subcategory: "Dry Fruits",
    tagline: "Naturally sweet and chewy dried whole figs",
    description: "Whole dried figs selected for plump texture, natural honeyed sweetness, and pleasant crunch. Excellent for soaking overnight or daily wholesome snacking.",
    image: "/assets/images/anjeer.jpg",
    featured: true,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: 400 },
      { size: "500g", price: 790 },
      { size: "1kg", price: 1500 }
    ],
    defaultPackSize: "500g",
    details: {
      packaging: "Airtight vacuum sealed pack",
      storage: "Keep in a cool, dry pantry or airtight container.",
      shelfLife: "6 months from packing"
    }
  },
  {
    id: "pistachios",
    name: "Pistachios (Pista)",
    category: "seeds-dryfruits",
    subcategory: "Dry Fruits",
    tagline: "Selected unsalted natural pistachios",
    description: "Vibrant pistachios with pleasant nutty crunch. A lovely addition to traditional sweets, kheer, trail mixes, and family dessert garnishing.",
    image: "/assets/images/pistachios.jpg",
    featured: false,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: 475 },
      { size: "500g", price: 950 },
      { size: "1kg", price: 1900 }
    ],
    defaultPackSize: "500g",
    details: {
      packaging: "Moisture-barrier pouch",
      storage: "Keep chilled or stored in an airtight jar to retain freshness.",
      shelfLife: "6 months from packing"
    }
  },
  {
    id: "black-raisins",
    name: "Black Raisins (Black Resin / Kishmish)",
    category: "seeds-dryfruits",
    subcategory: "Dry Fruits",
    tagline: "Naturally sweet sun-dried black raisins",
    description: "Plump black raisins with authentic sweet flavor and soft texture. Great for soaking in water, porridge, cakes, and daily morning mixes.",
    image: "/assets/images/black-raisins.jpg",
    featured: false,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: 220 },
      { size: "500g", price: 410 },
      { size: "1kg", price: 820 }
    ],
    defaultPackSize: "500g",
    details: {
      packaging: "Moisture-proof pouch",
      storage: "Store in a cool dry space.",
      shelfLife: "9 months from packing"
    }
  },
  {
    id: "pumpkin-seeds",
    name: "Pumpkin Seeds",
    category: "seeds-dryfruits",
    subcategory: "Nutritious Seeds",
    tagline: "Clean, de-shelled raw green pumpkin seeds",
    description: "Raw green pumpkin seeds ready to be toasted, sprinkled over salads, mixed into porridge, or enjoyed by the handful.",
    image: "/assets/images/pumpkin-seeds.jpg",
    featured: true,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: 220 },
      { size: "500g", price: 400 },
      { size: "1kg", price: 800 }
    ],
    defaultPackSize: "500g",
    details: {
      packaging: "Resealable ziplock pouch",
      storage: "Store in an airtight jar in a cool, dark cupboard.",
      shelfLife: "6 months from packing"
    }
  },
  {
    id: "watermelon-seeds",
    name: "Watermelon Seeds",
    category: "seeds-dryfruits",
    subcategory: "Nutritious Seeds",
    tagline: "Clean, hulled raw watermelon seed kernels",
    description: "Mild, nutty de-shelled watermelon seeds (Magaz). Ideal for blending into traditional gravies, thandai, smoothies, and wholesome snacking.",
    image: "/assets/images/watermelon-seeds.jpg",
    featured: false,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: 225 },
      { size: "500g", price: 440 },
      { size: "1kg", price: 860 }
    ],
    defaultPackSize: "500g",
    details: {
      packaging: "Airtight sealed pouch",
      storage: "Keep in a cool dry space.",
      shelfLife: "6 months from packing"
    }
  },
  {
    id: "flax-seeds",
    name: "Flax Seeds (Alsi)",
    category: "seeds-dryfruits",
    subcategory: "Nutritious Seeds",
    tagline: "Whole brown flax seeds",
    description: "Carefully cleaned brown flax seeds. Can be gently dry roasted and powdered to enrich daily rotis, chutneys, and yogurts.",
    image: "/assets/images/flax-seeds.jpg",
    featured: false,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: 90 },
      { size: "500g", price: 170 },
      { size: "1kg", price: 325 }
    ],
    defaultPackSize: "500g",
    details: {
      packaging: "Resealable pouch",
      storage: "Store in a cool dry jar.",
      shelfLife: "6 months from packing"
    }
  },
  {
    id: "chia-seeds",
    name: "Chia Seeds",
    category: "seeds-dryfruits",
    subcategory: "Nutritious Seeds",
    tagline: "Tiny whole black chia seeds",
    description: "Clean whole chia seeds that gel beautifully in water, buttermilk, lemon water, smoothies, and breakfast puddings.",
    image: "/assets/images/chia-seeds.jpg",
    featured: false,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: 130 },
      { size: "500g", price: 250 },
      { size: "1kg", price: 490 }
    ],
    defaultPackSize: "500g",
    details: {
      packaging: "Airtight pouch",
      storage: "Store in a tightly closed dry glass jar.",
      shelfLife: "12 months from packing"
    }
  },
  {
    id: "dates",
    name: "Dates (Khajoor)",
    category: "seeds-dryfruits",
    subcategory: "Dry Fruits",
    tagline: "Tender and naturally sweet dates",
    description: "Soft textured, rich dates selected for their pleasant caramel notes. Great for daily wholesome snacking or natural sweetening.",
    image: "/assets/images/dates.jpg",
    featured: false,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: 220 },
      { size: "500g", price: 420 },
      { size: "1kg", price: 795 }
    ],
    defaultPackSize: "500g",
    details: {
      packaging: "Sealed hygienic container",
      storage: "Refrigerate after opening to preserve moisture.",
      shelfLife: "6 months from packing"
    }
  },

  // =========================================================================
  // 3. TURMERIC POWDER & SPICES COLLECTION
  // =========================================================================
  {
    id: "turmeric-powder",
    name: "Turmeric Powder (Haldi)",
    category: "spices",
    subcategory: "Ground Spices",
    tagline: "Bright golden aromatic turmeric powder",
    description: "Ground from whole dried turmeric rhizomes selected for deep color and authentic fragrance. A golden essential for every Indian kitchen.",
    image: "/assets/images/turmeric-powder.jpg",
    featured: true,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: 115 },
      { size: "500g", price: 215 },
      { size: "1kg", price: 450 }
    ],
    defaultPackSize: "500g",
    details: {
      packaging: "Flavor-lock foil barrier pouch",
      storage: "Store in an airtight jar in a dark cupboard away from moisture and direct light.",
      shelfLife: "12 months from packing"
    }
  },
  {
    id: "red-chilli-powder",
    name: "Red Chilli Powder (Lal Mirch)",
    category: "spices",
    subcategory: "Ground Spices",
    tagline: "Vibrant red chilli powder with balanced warmth",
    description: "Cleanly ground from sun-dried red chillies with natural color and pleasant pungency to bring warmth and vibrancy to curries and gravies.",
    image: "/assets/images/red-chilli-powder.jpg",
    featured: false,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: null }, // Price on request
      { size: "500g", price: null },
      { size: "1kg", price: null }
    ],
    defaultPackSize: "250g",
    details: {
      packaging: "Double-sealed pouch",
      storage: "Keep away from heat and moisture in a closed container.",
      shelfLife: "9 months from packing"
    }
  },
  {
    id: "coriander-powder",
    name: "Coriander Powder (Dhania)",
    category: "spices",
    subcategory: "Ground Spices",
    tagline: "Aromatic freshly ground coriander powder",
    description: "Ground from wholesome coriander seeds. Imparts a sweet, citrusy undertone that brings depth to everyday dal, subzi, and masala mixes.",
    image: "/assets/images/coriander-powder.jpg",
    featured: false,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: null }, // Price on request
      { size: "500g", price: null },
      { size: "1kg", price: null }
    ],
    defaultPackSize: "250g",
    details: {
      packaging: "Aroma-seal pouch",
      storage: "Store in a cool dry pantry jar.",
      shelfLife: "9 months from packing"
    }
  },
  {
    id: "cumin-seeds",
    name: "Cumin Seeds (Jeera)",
    category: "spices",
    subcategory: "Whole Spices",
    tagline: "Clean, fragrant whole cumin seeds",
    description: "Whole cumin seeds known for their robust aroma when tempered in hot oil or ghee. Essential for tadka, jeera rice, and chaats.",
    image: "/assets/images/cumin-seeds.jpg",
    featured: false,
    isAvailable: true,
    packSizes: [
      { size: "250g", price: null }, // Price on request
      { size: "500g", price: null },
      { size: "1kg", price: null }
    ],
    defaultPackSize: "250g",
    details: {
      packaging: "Moisture-resistant bag",
      storage: "Keep in an airtight spice box.",
      shelfLife: "12 months from packing"
    }
  },
  {
    id: "black-pepper",
    name: "Whole Black Pepper (Kali Mirch)",
    category: "spices",
    subcategory: "Whole Spices",
    tagline: "Selected bold black peppercorns",
    description: "Bold whole black peppercorns delivering sharp heat and rich aroma when cracked fresh. Great for soups, rasam, marinades, and seasoning.",
    image: "/assets/images/black-pepper.jpg",
    featured: false,
    isAvailable: true,
    packSizes: [
      { size: "100g", price: null }, // Price on request
      { size: "250g", price: null }
    ],
    defaultPackSize: "100g",
    details: {
      packaging: "Airtight pouch",
      storage: "Keep in a dry container.",
      shelfLife: "12 months from packing"
    }
  },

  // =========================================================================
  // 4. DRY FRUITS LADDOO COLLECTION
  // =========================================================================
  {
    id: "dry-fruits-laddoo",
    name: "Traditional Dry Fruits Laddoo",
    category: "laddoo",
    subcategory: "All Laddoos",
    tagline: "Handcrafted traditional dry fruits treat",
    description: "Handcrafted round laddoos made with a blend of almonds, cashews, pistachios, dates, and traditional ingredients. Prepared with care for family celebrations and daily enjoyment.",
    image: "/assets/images/dry-fruits-laddoo.jpg",
    featured: true,
    isAvailable: true,
    packSizes: [
      { size: "250g Box", price: null }, // Price on request
      { size: "500g Box", price: null },
      { size: "1kg Gift Box", price: null }
    ],
    defaultPackSize: "500g Box",
    details: {
      ingredients: "Almonds, Cashews, Pistachios, Dates, Seeds, Traditional Aromatics",
      packaging: "Elegantly boxed with protective food-grade inner wrap",
      storage: "Store in a cool, dry place. Consume within 30 days of opening for optimum taste.",
      shelfLife: "45 days from preparation date"
    }
  }
];
