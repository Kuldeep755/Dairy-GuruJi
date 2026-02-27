const baseProducts = [
  {
    id: "mld",
    name: "MLD – Milk Let Down Suspension",
    image: "/images/products/mld.png",
    description:
      "Stress, noise, routine changes, or nervousness often cause incomplete milk let-down. MLD is a hormone-free suspension that ensures natural milk let-down, improves milk yield, and removes the need for oxytocin injections.",
    benefits: [
      "Supports natural milk let-down",
      "Increases milk yield",
      "Reduces stress and nervousness",
      "Improves udder gland health",
      "Safe alternative to oxytocin injections",
    ],
    dosage: "50–100 ml, twice daily, 1 hour before milking",
    pack: "1 Litre Bottle",
    tag: "Hormone-Free",
    problem: "Incomplete or delayed milk let-down",
  },

  {
    id: "mineral-mixture",
    name: "Mineral Mixture",
    image: "/images/products/mineral.png",
    description:
      "Mineral deficiency leads to infertility, repeat breeding, weak immunity, and low milk fat/SNF. Dairy Guru Ji Mineral Mixture provides balanced macro and trace minerals for complete reproductive and metabolic support.",
    benefits: [
      "Improves fertility and heat cycle",
      "Reduces repeat breeding",
      "Boosts immunity",
      "Improves milk fat and SNF",
      "Enhances digestion",
    ],
    dosage: "Adult: 100 g/day | Young: 50 g/day",
    pack: "1 kg & 5 kg",
    tag: "Daily Nutrition",
    problem: "Mineral deficiency and fertility issues",
  },

  {
    id: "calf-supplement",
    name: "Calf Supplement",
    image: "/images/products/calf-supplement.png",
    description:
      "A fortified supplement designed for calves to support early growth, immunity, bone strength, and overall development using essential minerals, vitamins, bypass fat, and herbal extracts.",
    benefits: [
      "Improves immunity and growth",
      "Strengthens bones and muscles",
      "Enhances digestion",
      "Supports early development",
      "Boosts overall health",
    ],
    dosage: "Calf/Bull: 40 g daily",
    pack: "1 kg",
    tag: "Growth Support",
    problem: "Weak growth and low immunity in calves",
  },

  {
    id: "dairy-guruji-h",
    name: "Dairy Guru Ji H",
    image: "/images/products/dairy-guruji-h.png",
    description:
      "A powerful herbal suspension that reduces mastitis risk, improves udder health, lowers somatic cell count, and enhances feed conversion ratio (FCR).",
    benefits: [
      "Reduces mastitis and udder inflammation",
      "Improves milk quality",
      "Lowers somatic cell count",
      "Enhances feed conversion ratio",
      "Improves udder tissue recovery",
    ],
    dosage: "Large animals: 10–20 ml/day | Small animals: 5 ml/day",
    pack: "500 ml Bottle",
    tag: "Udder Health",
    problem: "Mastitis and udder infections",
  },

  {
    id: "bypass-fat",
    name: "Bypass Fat",
    image: "/images/products/bypass-fat.png",
    description:
      "Rumen-protected bypass fat improves energy levels, prevents milk fever and ketosis, and significantly increases milk yield and fat percentage.",
    benefits: [
      "Prevents ketosis and milk fever",
      "Improves milk fat percentage",
      "Increases milk yield",
      "Provides high energy",
      "Supports post-calving recovery",
    ],
    dosage: "Large animals: 100 g/day | Small animals: 50 g/day",
    pack: "10 kg Bucket",
    tag: "High Energy",
    problem: "Low milk fat and energy deficiency",
  },

  {
    id: "dairy-guruji-gel",
    name: "Dairy Guru Ji Gel",
    image: "/images/products/dairy-guruji-gel.png",
    description:
      "An advanced calcium-rich gel formulated to prevent milk fever, restore calcium levels after calving, and provide instant energy to animals.",
    benefits: [
      "Prevents milk fever",
      "Restores calcium balance",
      "Boosts energy instantly",
      "Improves milk yield and fat",
      "Supports post-calving recovery",
    ],
    dosage: "1 bottle daily for 5–10 days or as advised",
    pack: "300 ml Bottle",
    tag: "Calcium Boost",
    problem: "Milk fever and calcium deficiency",
  },

  {
    id: "calcium",
    name: "Calcium Suspension",
    image: "/images/products/calcium.png",
    description:
      "A high-strength calcium suspension enriched with vitamins and herbs to strengthen bones, improve milk production, and prevent milk fever.",
    benefits: [
      "Strengthens bones and teeth",
      "Improves milk yield and fat",
      "Prevents milk fever",
      "Enhances digestion",
      "Boosts animal strength",
    ],
    dosage: "100 ml per day for milking animals",
    pack: "5 L & 20 L",
    tag: "Bone Strength",
    problem: "Calcium deficiency",
  },

  {
    id: "liver-tonic",
    name: "Liver Tonic",
    image: "/images/products/liver-tonic.png",
    description:
      "A powerful herbal liver tonic that improves digestion, enhances feed intake, boosts milk fat and SNF, and protects liver health.",
    benefits: [
      "Improves liver function",
      "Boosts appetite",
      "Enhances milk fat & SNF",
      "Improves digestion",
      "Protects from fatty liver",
    ],
    dosage: "Large animals: 100 ml/day | Small animals: 50 ml/day",
    pack: "500 ml Bottle",
    tag: "Digestive Health",
    problem: "Poor digestion and liver disorders",
  },

  {
    id: "deworming-bolus",
    name: "Deworming Bolus",
    image: "/images/products/deworming.png",
    description:
      "A unique herbal deworming bolus that removes internal parasites, improves digestion, and enhances overall animal health without side effects.",
    benefits: [
      "Eliminates internal worms",
      "Improves digestion",
      "Boosts appetite",
      "Enhances body condition",
      "Safe herbal formulation",
    ],
    dosage: "Large animals: 1 bolus | Small animals: ½ bolus",
    pack: "Box of 10 Bolus",
    tag: "Herbal Dewormer",
    problem: "Worm infestation",
  },

  {
    id: "feed-6000-plus",
    name: "Cattle Feed 6000+",
    image: "/images/products/feed-6000.png",
    description:
      "Improved formula cattle feed designed for higher milk production, better body condition, and improved fat & SNF.",
    benefits: [
      "Increases milk yield",
      "Improves fat and SNF",
      "Boosts immunity",
      "Enhances digestion",
      "Reduces repeat breeding",
    ],
    dosage: "1 kg feed per 2–2.5 litres of milk",
    pack: "Bag",
    tag: "Balanced Feed",
    problem: "Low milk production",
  },

  {
    id: "feed-8000-plus",
    name: "Cattle Feed 8000+",
    image: "/images/products/feed-8000.png",
    description:
      "Advanced high-performance cattle feed enriched with vitamins, minerals, and amino acids for maximum milk yield and animal health.",
    benefits: [
      "Maximizes milk production",
      "Improves immunity",
      "Enhances fertility",
      "Supports digestion",
      "Boosts body strength",
    ],
    dosage: "1 kg feed per 2–2.5 litres of milk",
    pack: "Bag",
    tag: "Premium Feed",
    problem: "High nutritional demand",
  },
];

const defaultDetails = {
  suitableFor: ["Dairy cows and buffaloes", "Farm use under regular feeding plans"],
  keyIngredients: [
    "Balanced mineral and vitamin support",
    "Targeted nutritional actives",
    "Digestive and metabolic support factors",
  ],
  usageTips: [
    "Use daily as per recommended dosage for best consistency.",
    "Mix well with feed or water before offering.",
    "Keep a regular schedule and monitor milk output/animal condition weekly.",
  ],
  expectedTimeline: "Initial visible response is commonly seen within 10-21 days.",
  bestTimeToUse: "Best used daily at a fixed time as advised.",
  storage:
    "Store in a cool and dry place, away from sunlight. Keep pack tightly closed after each use.",
};

const detailByProduct = {
  mld: {
    suitableFor: [
      "Animals showing delayed or incomplete milk let-down",
      "Cows/buffaloes stressed during milking",
    ],
    keyIngredients: [
      "Hormone-free let-down support blend",
      "Herbal calming support",
      "Udder circulation support factors",
    ],
    usageTips: [
      "Offer 1 hour before milking session.",
      "Use consistently during stress, weather, or routine changes.",
      "Maintain calm milking environment for better response.",
    ],
    expectedTimeline:
      "Let-down behavior may improve within 3-7 days of regular use.",
    bestTimeToUse: "Before each milking session, as per dosage.",
  },
  "mineral-mixture": {
    suitableFor: [
      "Lactating animals with low fat/SNF",
      "Animals facing repeat breeding or weak heat signs",
    ],
    keyIngredients: [
      "Macro minerals (Ca, P, Mg)",
      "Trace minerals (Zn, Cu, Mn, Co, I)",
      "Vitamin and metabolic support cofactors",
    ],
    usageTips: [
      "Mix in concentrate feed daily.",
      "Continue for at least one breeding cycle for reproductive support.",
      "Pair with balanced roughage and clean water.",
    ],
    expectedTimeline:
      "Body condition and appetite support may appear in 2-3 weeks; fertility support needs longer regular use.",
    bestTimeToUse: "Daily with main ration.",
  },
  "calf-supplement": {
    suitableFor: [
      "Growing calves with low weight gain",
      "Young stock needing bone and immunity support",
    ],
    keyIngredients: [
      "Calf growth minerals and vitamins",
      "Protein and energy support factors",
      "Herbal gut-health actives",
    ],
    usageTips: [
      "Provide with starter feed at the same time every day.",
      "Maintain clean water and deworming schedule.",
      "Track monthly body-weight growth.",
    ],
    expectedTimeline: "Growth and vigor response is usually visible in 3-4 weeks.",
    bestTimeToUse: "Daily with calf concentrate/starter feed.",
  },
  "dairy-guruji-h": {
    suitableFor: [
      "Animals with udder stress or recurring mastitis tendency",
      "Farms targeting lower somatic cell count",
    ],
    keyIngredients: [
      "Herbal anti-inflammatory support blend",
      "Udder tissue recovery nutrients",
      "Feed conversion support factors",
    ],
    usageTips: [
      "Use continuously in high-risk periods (early lactation/seasonal stress).",
      "Maintain udder hygiene and clean milking practice.",
      "Consult a veterinarian for active infection cases.",
    ],
    expectedTimeline: "Udder comfort and milk quality support may appear in 7-14 days.",
    bestTimeToUse: "Daily after feed, as advised for species/size.",
  },
  "bypass-fat": {
    suitableFor: [
      "High-yield lactating animals with energy deficit",
      "Early lactation and post-calving recovery phase",
    ],
    keyIngredients: [
      "Rumen-protected bypass fat granules",
      "High-density energy matrix",
      "Milk-fat support nutrients",
    ],
    usageTips: [
      "Start near calving and continue through peak lactation.",
      "Mix thoroughly in concentrate to avoid selective feeding.",
      "Balance with protein and minerals for best output.",
    ],
    expectedTimeline:
      "Energy recovery and milk-fat response can appear in 10-20 days.",
    bestTimeToUse: "Daily in lactation ration, especially early lactation.",
  },
  "dairy-guruji-gel": {
    suitableFor: [
      "Freshly calved animals needing rapid calcium support",
      "Animals with milk fever risk",
    ],
    keyIngredients: [
      "Fast-acting calcium sources",
      "Energy support components",
      "Post-calving recovery cofactors",
    ],
    usageTips: [
      "Follow advised schedule for first post-calving days.",
      "Ensure water intake and regular feed intake.",
      "Use with veterinarian guidance in severe clinical cases.",
    ],
    expectedTimeline: "Energy and calcium support is generally rapid, often same day.",
    bestTimeToUse: "Immediately post-calving or during calcium stress.",
  },
  calcium: {
    suitableFor: [
      "Milking animals with calcium demand",
      "Animals needing bone and muscle support",
    ],
    keyIngredients: [
      "Bioavailable calcium sources",
      "Vitamin support blend",
      "Herbal digestive support factors",
    ],
    usageTips: [
      "Use consistently during lactation and high-demand phases.",
      "Shake well before use if suspension settles.",
      "Pair with mineral mixture for complete support.",
    ],
    expectedTimeline: "Strength and production support may be seen in 1-3 weeks.",
    bestTimeToUse: "Daily after feeding.",
  },
  "liver-tonic": {
    suitableFor: [
      "Animals with weak appetite and poor digestion",
      "Milk animals needing better feed utilization",
    ],
    keyIngredients: [
      "Herbal hepatoprotective actives",
      "Digestive support components",
      "Metabolic and appetite support nutrients",
    ],
    usageTips: [
      "Give before or after feed at fixed timing.",
      "Use as a course for digestive stress periods.",
      "Maintain clean fodder and avoid sudden feed shifts.",
    ],
    expectedTimeline: "Appetite and digestion support is often visible in 5-10 days.",
    bestTimeToUse: "Daily during appetite/digestion stress periods.",
  },
  "deworming-bolus": {
    suitableFor: [
      "Animals with suspected internal worm burden",
      "Routine farm parasite-control programs",
    ],
    keyIngredients: [
      "Herbal anti-parasitic plant actives",
      "Gut-supportive botanical factors",
      "Digestive recovery support",
    ],
    usageTips: [
      "Follow farm deworming calendar and body-weight guidance.",
      "Provide clean drinking water and hygienic housing.",
      "Repeat as advised by field expert/veterinarian.",
    ],
    expectedTimeline: "Digestive and appetite response may improve within 7-14 days.",
    bestTimeToUse: "As per deworming schedule, not for unsupervised daily use.",
  },
  "feed-6000-plus": {
    suitableFor: [
      "Medium to high-yield lactating animals",
      "Farms targeting better fat and SNF with stable yield",
    ],
    keyIngredients: [
      "Balanced cereal-protein energy base",
      "Mineral and vitamin premix",
      "Production-support amino acid profile",
    ],
    usageTips: [
      "Split daily quantity across 2-3 feeding times.",
      "Introduce gradually over 3-5 days if changing feed.",
      "Ensure adequate dry fodder and green fodder balance.",
    ],
    expectedTimeline:
      "Milk quantity/quality response is generally seen in 10-21 days with consistent rationing.",
    bestTimeToUse: "Daily, with milking-linked ration schedule.",
  },
  "feed-8000-plus": {
    suitableFor: [
      "High-yield animals with greater nutritional demand",
      "Farms focused on peak milk output and body condition",
    ],
    keyIngredients: [
      "High-performance energy and protein matrix",
      "Essential minerals and vitamins",
      "Amino acid and immunity support nutrients",
    ],
    usageTips: [
      "Feed in divided servings with each major milking cycle.",
      "Transition from regular feed gradually over 4-7 days.",
      "Monitor milk yield, fat/SNF, and body condition weekly.",
    ],
    expectedTimeline:
      "Performance response may start within 7-14 days, with stronger results over continuous use.",
    bestTimeToUse: "Daily during peak lactation and high-demand stages.",
  },
};

export const products = baseProducts.map((product) => ({
  ...defaultDetails,
  ...product,
  ...(detailByProduct[product.id] ?? {}),
}));

export const getProductById = (id) =>
  products.find((product) => product.id === id);
