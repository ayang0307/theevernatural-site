export type ProductForm = "drops" | "capsules" | "softgels" | "spray";

export interface Product {
  slug: string;
  name: string;
  /** Short label for cards and nav. */
  shortName: string;
  tagline: string;
  form: ProductForm;
  unitPrice: number;
  casePrice: number;
  caseSize: string;
  accent: "green" | "yellow" | "blue";
  /** Optional real photo under /public/products. Falls back to an illustration. */
  image?: string;
  highlights: string[];
  description: string[];
  indications?: string[];
  directions?: string[];
  certifications?: string;
  paypal: {
    hostedButtonId: string;
    /** Value PayPal expects in the hidden on0 field (kept exactly as the original buttons). */
    optionName: string;
    unitValue: string;
    caseValue: string;
  };
}

const RESPIRATORY =
  "Infections and inflammation of the respiratory system (pharyngitis, laryngitis, tonsillitis and allergic bronchitis)";
const MOUTH = "Inflammation of the mouth and stomach (stomatitis, gingivitis and thrush)";
const SKIN = "Dermatitis (chilblain, mycosis, warts and skin lesions)";

export const products: Product[] = [
  {
    slug: "polenectar-wf40",
    name: "Polenectar Green Propolis Glycolic Solution WF40",
    shortName: "Polenectar WF40",
    tagline: "Alcohol-free green propolis extract, 40% pure resin.",
    form: "drops",
    unitPrice: 18,
    casePrice: 300,
    caseSize: "Case of 24 bottles",
    accent: "green",
    highlights: ["No alcohol", "40% pure resin", "Minas Gerais apiaries"],
    description: [
      "We select the best Green Propolis, a resinous substance extracted from vegetal secretions of stalks, trunks, primitive foliar forms and sepals of flowers, and metabolized by bees. The collection is permanent and selective, and depends on the swarm's need to protect itself from insect-related pathologies.",
      "This extract presents a 40% concentration of pure resin, collected and selected in apiaries from the south of the State of Minas Gerais.",
    ],
    indications: [RESPIRATORY, MOUTH, SKIN],
    directions: [
      "Adults: 20 to 30 drops diluted in a glass of water or juice, 1 to 3 times a day, or more often as needed.",
      "Children over 3 years of age: half the adult dose.",
      "Can be diluted in water, tea, juice and other drinks.",
    ],
    paypal: {
      hostedButtonId: "7V33ZPRN8LDNA",
      optionName: "Polenectar WF40",
      unitValue: "Polenectar WF40 Unit",
      caseValue: "Polenectar WF40 Case",
    },
  },
  {
    slug: "polenectar-wf60",
    name: "Polenectar Green Propolis WF60",
    shortName: "Polenectar WF60",
    tagline: "The classic Apis Green extract, a powerful antioxidant and immunity enhancer.",
    form: "drops",
    unitPrice: 17,
    casePrice: 290,
    caseSize: "Case of 24 bottles",
    accent: "yellow",
    highlights: ["Apis Green propolis", "Antioxidant", "GMP, HACCP and FDA certified"],
    description: [
      "Propolis has been known since ancient times as an elixir for good cures. It is a food complement with comprehensive action against bacteria, fungus and virus-caused pathologies and degenerative diseases, and a stimulant for scarring processes. It also increases the organism's resistance.",
      "We select the best Green Propolis, a resinous substance extracted from vegetal secretions of stalks, trunks, primitive foliar forms and sepals of flowers, and metabolized by bees. The collection of Apis Green propolis is permanent and selective.",
      "Bee propolis is one of the most powerful antioxidants and immunity enhancers, with natural antibacterial, antibiotic and antiviral properties.",
    ],
    indications: [RESPIRATORY, MOUTH, SKIN],
    directions: [
      "Adults: 20 to 30 drops diluted in a glass of water or juice, 1 to 3 times a day, or more often as needed.",
      "Children over 3 years of age: half the adult dose.",
    ],
    certifications: "This product is GMP, HACCP and FDA certified.",
    paypal: {
      hostedButtonId: "KPW8FMZWCVMFW",
      optionName: "Polenectar WF60",
      unitValue: "Polenectar WF60 Unit",
      caseValue: "Polenectar WF60 Case",
    },
  },
  {
    slug: "polenectar-wf80",
    name: "Polenectar Wax Free 80 Green Propolis",
    shortName: "Polenectar WF80",
    tagline: "Super-concentrated, wax-free extract with very low alcohol.",
    form: "drops",
    unitPrice: 21,
    casePrice: 300,
    caseSize: "Case of 24 bottles",
    accent: "blue",
    highlights: ["Wax free", "Very low alcohol", "20 mg flavonoids per 20 drops"],
    description: [
      "Propolis is a product of nature, with different colors and consistencies, made by bees from various substances collected from plants and used as a shield to defend the beehive. Its components have high antioxidant activity, in addition to antimicrobial, anti-inflammatory and healing properties, known to popular medicine and proven by scientific literature.",
      "Brazilian propolis is known as one of the best in the world because it is produced in a country with a rich climatic range and vegetation, resulting in unique types of propolis with different properties and actions. We researched the flora from different locations of Brazil and the benefits of the propolis produced in each, studying the best combination of raw materials. The result is a product with very low alcohol content, free of waxes and super concentrated: Polenectar Wax Free 80 Green.",
      "An exclusive formula created for the most demanding customers, Wax Free 80 carries a superior concentration of the original active components of bee propolis: flavonoids, Artepillin-C and clerodane diterpenes.",
    ],
    directions: [
      "Antioxidant factor: 20 drops (about 1 ml) contain 20 mg of antioxidants (flavonoids).",
      "Dilute in water, tea, juice or any kind of drink.",
    ],
    paypal: {
      hostedButtonId: "7P8CNDT3HF88C",
      optionName: "Polenctar WF80",
      unitValue: "Polenectar WF80 Unit",
      caseValue: "Polenectar WF80 Case",
    },
  },
  {
    slug: "polenectar-softgel",
    name: "Polenectar Softgel Propolis",
    shortName: "Polenectar Softgel",
    tagline: "100% pure propolis in an easy-to-swallow softgel. Alcohol and wax free.",
    form: "softgels",
    unitPrice: 21,
    casePrice: 300,
    caseSize: "Case of 24 bottles",
    accent: "green",
    highlights: ["Alcohol free", "Wax free", "For adults and children"],
    description: [
      "Bee propolis is one of the most powerful antioxidants and immunity enhancers, with natural antibacterial, antibiotic and antiviral properties.",
      "Made from 100% pure propolis, alcohol free, wax free, without chemical additives or preservatives, this propolis is easy to ingest and absorb. It can be used by adults and children.",
      "It is indicated to help strengthen the immune system and prevent various diseases thanks to its high concentrations of flavonoids, caffeic acid phenethyl ester, clerodane diterpenes and Artepillin-C.",
    ],
    indications: [RESPIRATORY, MOUTH, SKIN],
    directions: ["Adults: 1 softgel capsule, 3 times a day.", "Children: 1 softgel capsule, twice a day."],
    certifications: "This product is GMP, HACCP and FDA certified.",
    paypal: {
      hostedButtonId: "5MSN8N7DZNYWN",
      optionName: "Polenectar Softgel",
      unitValue: "Polenectar Softgel Unit",
      caseValue: "Polenectar Softgel Case",
    },
  },
  {
    slug: "polenectar-spray",
    name: "Polenectar Spray with Honey",
    shortName: "Polenectar Spray",
    tagline: "Eucalyptus propolis blended with the purest honey, for mouth and throat.",
    form: "spray",
    unitPrice: 16,
    casePrice: 280,
    caseSize: "Case of 24 bottles",
    accent: "yellow",
    highlights: ["With pure honey", "No preservatives", "Throat and mouth care"],
    description: [
      "This product is the outcome of a combination of eucalyptus propolis and the purest honey. It contains no preservatives and no artificial chemical additives. It is made from Polenectar alcoholic extract mixed with honey and distilled water.",
      "Helps in treatments of mouth afflictions, halitosis, flu, cold, cough, laryngitis, sinusitis, throat inflammation and most respiratory system ailments.",
    ],
    directions: [
      "Adults: 3 to 6 times a day, sprayed directly in the mouth and throat.",
      "Children over 3 years of age: half the adult dose.",
    ],
    certifications: "This product is GMP, HACCP and FDA certified.",
    paypal: {
      hostedButtonId: "66TZKGPAFTQHA",
      optionName: "Polenectar Spray",
      unitValue: "Polenectar Spray Unit",
      caseValue: "Polenectar Spray Case",
    },
  },
  {
    slug: "pon-lee",
    name: "PonLee Brazilian Green Propolis Glycolic Extract",
    shortName: "PonLee",
    tagline: "Alcohol-free glycolic extract at 45% pure resin.",
    form: "drops",
    unitPrice: 22,
    casePrice: 390,
    caseSize: "Case of 25 bottles",
    accent: "blue",
    highlights: ["No alcohol", "45% pure resin", "GMP and FDA certified"],
    description: [
      "Green propolis is a resinous substance extracted from vegetal secretions of stalks, trunks, primitive foliar forms and sepals of flowers, and metabolized by bees. The collection of propolis is permanent and selective, and depends on the swarm's need to protect itself from insect-related pathologies.",
      "Transforming this resin into a glycolic (alcohol-free) solution results in a nutrient complement that acts effectively against simple pathologies caused by bacteria, fungi and viruses.",
      "This extract presents a 45% concentration of pure resin, collected and selected in apiaries from the south of the State of Minas Gerais.",
    ],
    indications: [RESPIRATORY, MOUTH, SKIN],
    certifications: "We are GMP and FDA certified.",
    paypal: {
      hostedButtonId: "ZEQDQC6SNXEZS",
      optionName: "Pon Lee",
      unitValue: "Pon Lee Unit",
      caseValue: "Pon Lee Case",
    },
  },
  {
    slug: "sunyata",
    name: "Sunyata Propolis Glycolic Extract",
    shortName: "Sunyata",
    tagline: "Export-quality premium green propolis, ethyl-alcohol free, matured one year.",
    form: "drops",
    unitPrice: 24,
    casePrice: 420,
    caseSize: "Case of 25 bottles",
    accent: "green",
    highlights: ["Ethyl alcohol free", "Matured approx. 1 year", "30 ml dropper bottle"],
    description: [
      "Sunyata is an ethyl-alcohol-free propolis glycolic extract, made for alcohol-intolerant people who need a component easily absorbed by the body.",
    ],
    indications: [
      "Sunyata export quality, produced with 100% premium Green Propolis",
      "The best of Brazilian Green Propolis, ethyl alcohol free",
      "Maturity of approximately 1 year",
      "Concentration in the maceration: 43 to 45%, the maximum for natural maceration",
      "Total solids extract: 16 to 29%",
      "Rich in flavonoids and phenolic substances, with a high concentration of Artepillin-C",
      "Limited production",
      "Bottle with dropper (30 ml / 1 fl oz)",
    ],
    paypal: {
      hostedButtonId: "JEN6MHPMGWTDW",
      optionName: "Sunyata",
      unitValue: "Sunyata Unit",
      caseValue: "Sunyata Case",
    },
  },
  {
    slug: "wax-green-capsules",
    name: "Wax Green Bee Propolis with Vitamin C+E, 500 mg (60 Capsules)",
    shortName: "Wax Green Capsules",
    tagline: "Pure green propolis capsules with added vitamins C and E. 100% made in Brazil.",
    form: "capsules",
    unitPrice: 22,
    casePrice: 120,
    caseSize: "Box of 6 bottles",
    accent: "yellow",
    highlights: ["Vitamin C + E", "60 capsules", "100% made in Brazil"],
    description: [
      "Wax Green Propolis in Capsules has always been produced with pure Green Propolis without any addition of oil, alcohol or water. Now with added vitamin C and E, it is a powerful food supplement. Each capsule equals 10 drops of propolis and is easily absorbed by the organism.",
      "Propolis is a product of nature made by bees from substances collected from plants and used as a shield to defend the beehive. Its components have high antioxidant activity, in addition to antimicrobial, anti-inflammatory and healing properties. Wax Green researched the flora of different regions of Brazil and the propolis produced in each, to find the best combination of raw materials for a high quality product.",
    ],
    indications: [
      "Supports the immune system",
      "Helps the body fight respiratory tract infections",
      "Diuretic, eases bowel mobility",
      "Maximizes health and wellness for consumers of all ages",
    ],
    directions: ["Take 1 to 3 capsules daily, before meals, with water or juice."],
    paypal: {
      hostedButtonId: "M8ZYKVSM2BWFU",
      optionName: "Wax Green",
      unitValue: "Waxgreen Unit",
      caseValue: "Waxgreen Case",
    },
  },
];

export const featuredSlugs = ["polenectar-wf80", "sunyata", "wax-green-capsules"] as const;

export function getProduct(slug: string | undefined) {
  return products.find((p) => p.slug === slug);
}

export function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
}

export const formLabel: Record<ProductForm, string> = {
  drops: "Liquid extract",
  capsules: "Capsules",
  softgels: "Softgels",
  spray: "Oral spray",
};
