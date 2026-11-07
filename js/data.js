/**
 * Prakrutik Tattva - E-Commerce Product & Application Data
 */

const APP_DATA = {
  categories: [
    { id: 'all', name: 'All Products', icon: '🍃' },
    { id: 'cooking', name: 'Cooking Oils', icon: '🍳' },
    { id: 'hair', name: 'Hair Care', icon: '💆‍♀️' },
    { id: 'skin', name: 'Skin & Wellness', icon: '✨' }
  ],

  products: [
    {
      id: 'mustard-oil',
      name: 'Cold-Pressed Mustard Oil (Kachi Ghani)',
      category: 'cooking',
      badge: 'Best Seller',
      rating: 4.9,
      reviewsCount: 142,
      isBestSeller: true,
      isFeatured: true,
      image: 'assets/images/mustard_oil.jpg',
      volumes: ['250ml', '500ml', '1L'],
      priceMap: { '250ml': 149, '500ml': 269, '1L': 499 },
      defaultVolume: '1L',
      tagline: '100% Traditional Wood-Pressed Yellow Mustard Oil',
      shortDesc: 'Extracted using traditional wooden ghani (Marachekku) below 45°C. Retains natural pungency, Allyl Isothiocyanate, and heart-healthy Omega-3 fatty acids.',
      fullDesc: 'Prakrutik Tattva Wood-Pressed Kachi Ghani Mustard Oil is crafted from handpicked A-grade yellow mustard seeds sourced directly from organic farms in Rajasthan. Unlike refined oils processed with harsh chemicals and high heat, our oil is unrefined, unbleached, and 100% pure. Perfect for daily cooking, traditional pickling, body massage, and hair nourishment.',
      benefits: [
        'Rich in MUFA, PUFA, Omega-3 & Omega-6 fatty acids for heart wellness',
        'Natural antibacterial and antifungal properties from Allyl Isothiocyanate',
        'Stimulates hair growth and improves blood circulation during body massage',
        'Zero chemicals, zero solvent extraction, and 100% preservative-free'
      ],
      nutritionFacts: {
        'Energy (per 100g)': '884 kcal',
        'Total Fat': '100g',
        'Saturated Fat': '11.6g',
        'Monounsaturated Fat (MUFA)': '59.2g',
        'Polyunsaturated Fat (PUFA)': '21.2g',
        'Trans Fat': '0g',
        'Cholesterol': '0mg'
      },
      usage: 'Ideal for deep frying, sautéing, pickling, and oil pulling. Can also be warmed and applied to hair/scalp or used as winter body massage oil.',
      storage: 'Store in a cool, dark place away from direct sunlight. Natural sediment may settle at bottom - sign of unrefined purity.'
    },
    {
      id: 'coconut-oil',
      name: 'Virgin Cold-Pressed Coconut Oil',
      category: 'skin',
      badge: '100% Raw',
      rating: 4.8,
      reviewsCount: 118,
      isBestSeller: true,
      isFeatured: true,
      image: 'assets/images/coconut_oil.jpg',
      volumes: ['250ml', '500ml', '1L'],
      priceMap: { '250ml': 189, '500ml': 349, '1L': 649 },
      defaultVolume: '500ml',
      tagline: 'Raw Extra Virgin Coconut Oil from Fresh Kerala Coconuts',
      shortDesc: 'Extracted from fresh coconut milk without heat treatment. High in Lauric Acid and MCTs for skin hydration, hair conditioning, and keto cooking.',
      fullDesc: 'Our Extra Virgin Cold-Pressed Coconut Oil is extracted within hours of harvesting fresh coconuts from organic groves in Kerala. Cold extraction preserves the rich tropical coconut aroma, Lauric Acid (50%+ content), and natural Vitamin E. Versatile as a culinary superfood, makeup remover, natural moisturizer, and hair elixir.',
      benefits: [
        'High Lauric Acid content boosts immunity and fights harmful microbes',
        'Medium Chain Triglycerides (MCTs) provide instant metabolic energy',
        'Deeply hydrates dry skin, repairs barrier, and calms eczema',
        'Nourishes hair shafts, reduces protein loss, and prevents split ends'
      ],
      nutritionFacts: {
        'Energy (per 100g)': '862 kcal',
        'Total Fat': '100g',
        'Lauric Acid': '51.5g',
        'Saturated Fat': '86.5g',
        'MCTs': '64.0g',
        'Cholesterol': '0mg'
      },
      usage: 'Great for cooking, baking, bulletproof coffee, skin moisturizer, night oil, hair mask, and daily oil pulling (Gandusha).',
      storage: 'Solidifies naturally below 24°C. Place bottle in warm water to melt. Purity remains unaffected.'
    },
    {
      id: 'sesame-oil',
      name: 'Traditional Cold-Pressed Sesame Oil (Til)',
      category: 'cooking',
      badge: 'Ayurvedic Pure',
      rating: 4.9,
      reviewsCount: 96,
      isBestSeller: false,
      isFeatured: true,
      image: 'assets/images/sesame_oil.jpg',
      volumes: ['250ml', '500ml', '1L'],
      priceMap: { '250ml': 179, '500ml': 329, '1L': 599 },
      defaultVolume: '1L',
      tagline: 'Authentic Cold-Pressed Black & White Sesame Oil',
      shortDesc: 'Known as "Queen of Oilseeds" in Ayurveda. Cold-pressed from organic sesame seeds with zero additives. Rich in Sesamol, Zinc, and Calcium.',
      fullDesc: 'Prakrutik Tattva Sesame Oil (Gingelly Oil) is extracted in traditional wooden churners at slow speeds to maintain vital antioxidants like Sesamol and Sesamolin. Widely revered in Ayurveda (Abhyanga massage), it promotes joint flexibility, bone strength, and provides a nutty smoke-point flavor for Asian and South Indian dishes.',
      benefits: [
        'Abundant in Sesamol & Sesamolin antioxidants that protect cellular health',
        'Natural warmth reduces joint pain and stiffness in Ayurvedic Abhyanga',
        'Helps lower blood pressure and balances cholesterol levels',
        'Excellent natural UV filter and skin detoxifying agent'
      ],
      nutritionFacts: {
        'Energy (per 100g)': '884 kcal',
        'Total Fat': '100g',
        'MUFA': '39.7g',
        'PUFA': '41.7g',
        'Vitamin E': '1.4mg',
        'Trans Fat': '0g'
      },
      usage: 'Suitable for daily Indian cooking, stir-frying, salad dressings, Abhyanga self-massage, and gum strengthening.',
      storage: 'Keep sealed in a cool glass container away from direct sunlight.'
    },
    {
      id: 'groundnut-oil',
      name: 'Cold-Pressed Groundnut Oil (Peanut)',
      category: 'cooking',
      badge: 'High Smoke Point',
      rating: 4.7,
      reviewsCount: 84,
      isBestSeller: true,
      isFeatured: true,
      image: 'assets/images/groundnut_oil.jpg',
      volumes: ['250ml', '500ml', '1L'],
      priceMap: { '250ml': 139, '500ml': 249, '1L': 469 },
      defaultVolume: '1L',
      tagline: 'Heart-Healthy Cold-Pressed Unrefined Peanut Oil',
      shortDesc: 'Rich nutty flavor with high smoke point (230°C). Wood-pressed from non-GMO Saurashtra peanuts for guilt-free deep frying.',
      fullDesc: 'Our Cold-Pressed Groundnut Oil is made by gently crushing sun-dried peanuts in wooden ghani. It retains natural Resveratrol (anti-aging antioxidant), Vitamin E, and heart-friendly Oleic Acid. Does not absorb food aroma easily, making it the healthiest choice for Indian deep frying, pooris, and everyday curries.',
      benefits: [
        'High smoke point prevents formation of harmful free radicals during deep frying',
        'Contains Resveratrol which supports vascular health and anti-aging',
        'Zero trans-fats and zero cholesterol for healthy lipid profiles',
        'Improves food taste with authentic sweet nutty undertone'
      ],
      nutritionFacts: {
        'Energy (per 100g)': '884 kcal',
        'Total Fat': '100g',
        'MUFA (Oleic Acid)': '46.2g',
        'PUFA (Linoleic Acid)': '32.0g',
        'Saturated Fat': '16.9g',
        'Cholesterol': '0mg'
      },
      usage: 'Perfect for deep frying, roasting, snacks, and daily Indian cooking.',
      storage: 'Store in cool dry pantry. Use clean dry spoon if dipping.'
    },
    {
      id: 'almond-oil',
      name: 'Sweet Almond Cold-Pressed Oil',
      category: 'skin',
      badge: 'Luxury Beauty',
      rating: 4.9,
      reviewsCount: 165,
      isBestSeller: true,
      isFeatured: true,
      image: 'assets/images/almond_oil.jpg',
      volumes: ['100ml', '250ml', '500ml'],
      priceMap: { '100ml': 299, '250ml': 599, '500ml': 1099 },
      defaultVolume: '100ml',
      tagline: '100% Pure Edible & Beauty Grade Sweet Almond Oil',
      shortDesc: 'Cold-pressed from sweet Mamra almonds. Packed with Vitamin E, A, and Essential Fatty Acids. Reduces dark circles and nourishes hair.',
      fullDesc: 'Prakrutik Tattva Sweet Almond Oil is a multipurpose cold-pressed beauty serum and health tonic. Extracted without heat or solvents, it absorbs quickly into skin without clogging pores. Light, non-greasy, and hyper-rich in Vitamin E, it lightens dark under-eye circles, smooths fine lines, softens baby skin, and promotes glossy hair length.',
      benefits: [
        'Visible reduction in dark under-eye circles and hyperpigmentation',
        'Potent anti-aging elixir rich in Vitamin E, A, and Omega-9',
        'Nourishes dry scalp, softens hair strands, and reduces breakage',
        'Safe & gentle for baby massage and sensitive skin types'
      ],
      nutritionFacts: {
        'Vitamin E': '26.2mg (175% DV)',
        'Oleic Acid (Omega-9)': '67.0g',
        'Linoleic Acid (Omega-6)': '20.5g',
        'Purity': '100% Cold-Pressed Sweet Almond'
      },
      usage: 'Apply 3-4 drops under eyes before sleep. Massage on damp face as moisturizer or mix with scalp hair packs. Can also consume 1 tsp with warm milk.',
      storage: 'Keep in dark dropper bottle away from warmth.'
    },
    {
      id: 'blackseed-oil',
      name: 'Pure Cold-Pressed Kalonji (Black Seed) Oil',
      category: 'hair',
      badge: 'Therapeutic',
      rating: 4.9,
      reviewsCount: 77,
      isBestSeller: false,
      isFeatured: false,
      image: 'assets/images/almond_oil.jpg',
      volumes: ['100ml', '250ml'],
      priceMap: { '100ml': 349, '250ml': 699 },
      defaultVolume: '100ml',
      tagline: 'Miracle Seed Oil with High Thymoquinone Content',
      shortDesc: 'Extracted from Nigella Sativa seeds. Potent anti-hairfall remedy, strengthens hair roots, and boosts immune health.',
      fullDesc: 'Extracted from wild Nigella Sativa seeds, our Black Seed (Kalonji) Oil is renowned for its high concentration of Thymoquinone (TQ) - a powerful bio-active antioxidant. It fights scalp infections, stops hair thinning, restores natural hair shine, and boosts internal defense mechanisms when consumed daily.',
      benefits: [
        'High Thymoquinone (TQ) content revitalizes hair follicles',
        'Combats scalp dandruff, itchiness, and premature hair greying',
        'Supports respiratory health and joint comfort when taken internally',
        'Anti-inflammatory powerhouse for radiant clear skin'
      ],
      nutritionFacts: {
        'Thymoquinone (TQ)': '> 1.8%',
        'Linoleic Acid': '56.0g',
        'Oleic Acid': '24.0g',
        'Purity': '100% Unrefined Cold-Pressed Kalonji'
      },
      usage: 'Massage into scalp twice weekly. Blend with coconut oil for best results. Consume 1/2 tsp daily with honey for immunity.',
      storage: 'Store tightly sealed in cool dark pantry.'
    },
    {
      id: 'sunflower-oil',
      name: 'Cold-Pressed Sunflower Oil',
      category: 'cooking',
      badge: 'Light & Fresh',
      rating: 4.6,
      reviewsCount: 62,
      isBestSeller: false,
      isFeatured: false,
      image: 'assets/images/mustard_oil.jpg',
      volumes: ['500ml', '1L'],
      priceMap: { '500ml': 199, '1L': 379 },
      defaultVolume: '1L',
      tagline: 'Light, Unrefined & Naturally Rich in Vitamin E',
      shortDesc: 'Wood-pressed from organic sunflower seeds. Light taste that lets your food flavors shine through while keeping heart healthy.',
      fullDesc: 'Our Cold-Pressed Sunflower Oil is a light golden cooking medium extracted gently from pesticide-free sunflower seeds. Unlike refined commercial sunflower oils chemically treated with hexane, our oil maintains natural lecithin, Vitamin E, and unsaturated fats for a clean, non-greasy culinary experience.',
      benefits: [
        'High in Vitamin E antioxidant for skin and cell protection',
        'Low saturated fat content supports healthy cholesterol balance',
        'Neutral light taste enhances authentic food flavors',
        'Easy on digestion and non-heavy feel'
      ],
      nutritionFacts: {
        'Energy (per 100g)': '884 kcal',
        'Vitamin E': '41mg (270% DV)',
        'Polyunsaturated Fat': '65.7g',
        'Monounsaturated Fat': '19.5g',
        'Cholesterol': '0mg'
      },
      usage: 'Ideal for light sautéing, salad dressings, baking, and low-heat frying.',
      storage: 'Keep in glass bottle away from direct sunlight.'
    },
    {
      id: 'castor-oil',
      name: 'Pure Cold-Pressed Organic Castor Oil',
      category: 'hair',
      badge: 'Thick Nourishment',
      rating: 4.8,
      reviewsCount: 104,
      isBestSeller: false,
      isFeatured: false,
      image: 'assets/images/sesame_oil.jpg',
      volumes: ['250ml', '500ml'],
      priceMap: { '250ml': 199, '500ml': 369 },
      defaultVolume: '250ml',
      tagline: '100% Pure Hexane-Free Ricinoleic Acid Elixir',
      shortDesc: 'Ultra-thick cold-pressed oil from organic castor beans. Promotes eyebrow, eyelash, and hair growth while strengthening nails.',
      fullDesc: 'Prakrutik Tattva Cold-Pressed Castor Oil is hexane-free, unrefined, and rich in Ricinoleic Acid (over 85%). This dense fatty acid penetrates deep into hair roots and skin layers, stimulating dormant hair follicles, thickening thin eyelashes, and softening cracked heels.',
      benefits: [
        'Ricinoleic Acid stimulates intense hair root growth and density',
        'Thickens sparse eyebrows and lashes when applied with spoolie',
        'Softens dry elbows, cracked heels, and cuticles overnight',
        'Hexane-free, cold-processed, and 100% natural'
      ],
      nutritionFacts: {
        'Ricinoleic Acid': '89.2%',
        'Oleic Acid': '3.2%',
        'Linoleic Acid': '4.1%',
        'Purity': '100% Hexane-Free Cold-Pressed'
      },
      usage: 'Apply directly to eyebrows, eyelashes, and hair roots before sleep. Dilute with coconut or almond oil for easier application.',
      storage: 'Store at room temperature.'
    }
  ],

  reviews: [
    {
      id: 'rev-1',
      author: 'Priya Sharma',
      city: 'Mumbai',
      rating: 5,
      date: '2026-07-28',
      verified: true,
      product: 'Cold-Pressed Mustard Oil (Kachi Ghani)',
      comment: 'Authentic smell and punchy taste! Reminds me of the oil my grandmother used to get pressed locally in our village. Pickles turned out phenomenal and cooking curries in this gives an amazing taste.'
    },
    {
      id: 'rev-2',
      author: 'Rajesh Patel',
      city: 'Ahmedabad',
      rating: 5,
      date: '2026-07-20',
      verified: true,
      product: 'Cold-Pressed Groundnut Oil (Peanut)',
      comment: 'We switched from refined supermarket oil to Prakrutik Tattva groundnut oil 3 months ago. Food feels light, doesn’t cause acidity, and deep frying uses less oil. Worth every rupee!'
    },
    {
      id: 'rev-3',
      author: 'Ananya Deshmukh',
      city: 'Pune',
      rating: 5,
      date: '2026-07-15',
      verified: true,
      product: 'Sweet Almond Cold-Pressed Oil',
      comment: 'My dark circles reduced noticeably within 3 weeks of nightly application. The oil is light, absorbs quickly, and smells like fresh almonds. Loved the eco-friendly glass packaging.'
    },
    {
      id: 'rev-4',
      author: 'Dr. Vikramaditya Nair',
      city: 'Bengaluru',
      rating: 5,
      date: '2026-07-02',
      verified: true,
      product: 'Virgin Cold-Pressed Coconut Oil',
      comment: 'As an Ayurveda practitioner, I test oil purity carefully. Prakrutik Tattva coconut oil has a clean Lauric acid aroma, solidifies below 24C naturally, and works wonders for oil pulling.'
    },
    {
      id: 'rev-5',
      author: 'Kavita Menon',
      city: 'Kochi',
      rating: 5,
      date: '2026-06-25',
      verified: true,
      product: 'Traditional Cold-Pressed Sesame Oil (Til)',
      comment: 'Using this for daily Abhyanga body massage. Skin stays soft all day and joint stiffness in winter has reduced. Exceptional quality control!'
    }
  ],

  faqs: [
    {
      q: 'What is Wood-Pressed / Cold-Pressed (Kachi Ghani) oil?',
      a: 'Wood-Pressed or Cold-Pressed oil is extracted by slowly crushing seeds using a traditional wooden churner (Marachekku / Ghani) at temperatures below 45°C. Unlike commercial refined oils which use extreme heat (200°C+) and chemical solvents like Hexane, cold-pressing retains 100% of natural vitamins, antioxidants, aroma, and essential fatty acids.'
    },
    {
      q: 'Why does cold-pressed oil look cloudy or have sediment at the bottom?',
      a: 'Sediment at the bottom is a hallmark of unrefined purity! Because we don’t use chemical bleaching or heavy filtration, micro seed particles settle naturally over time. It is completely safe, highly nutritious, and indicates zero artificial processing.'
    },
    {
      q: 'How long can I store Prakrutik Tattva oils?',
      a: 'Our oils have a natural shelf life of 9 to 12 months when stored in a cool, dry place away from direct sunlight. Because we add zero chemical preservatives or anti-foaming agents, keeping the bottle tightly sealed keeps it fresh.'
    },
    {
      q: 'Can I use Cold-Pressed Groundnut & Mustard oil for high-heat deep frying?',
      a: 'Yes, absolutely! Cold-Pressed Groundnut Oil has a high smoke point (~230°C) and Mustard Oil (~250°C), making them very safe for deep frying without forming toxic trans-fats.'
    },
    {
      q: 'How long does shipping take and what is the return policy?',
      a: 'We dispatch all orders within 24 hours in drop-safe eco glass packaging. Standard delivery takes 2 to 4 business days. We offer free shipping on orders above ₹499 and a 7-day hassle-free replacement guarantee if damaged during transit.'
    }
  ],

  coupons: {
    'PURE10': { discount: 10, type: 'percent', label: '10% OFF on all organic oils' },
    'NATURAL15': { discount: 15, type: 'percent', label: '15% OFF for orders above ₹999' },
    'WELCOME50': { discount: 50, type: 'flat', label: '₹50 Instant Discount' }
  }
};
