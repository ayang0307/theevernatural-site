export interface LearnSection {
  id: string;
  title: string;
  icon: string;
  paragraphs: string[];
  bullets?: string[];
}

export const learnSections: LearnSection[] = [
  {
    id: "what-is-propolis",
    title: "What is Bee Propolis?",
    icon: "/brand/beehive.svg",
    paragraphs: [
      "Propolis is a kind of medicinal resin produced from plants (trees, bushes, trunks, sprouts). Its appearance is usually viscous, and it may turn hard under lower temperatures. Its colour ranges from brown to brownish green.",
      "Bees collect propolis from nature, blend it with other substances (wax, saliva) and use it to build the hive. Propolis has several functions: varnish, thermal insulator, sealant and, especially, sterilizer. In other words, it protects the hive from fungi, bacteria and viruses.",
      "It is also used to embalm larger creatures that die after entering the hive. With no other way to remove them, bees coat them in propolis, so there is no decomposition and no harmful microorganisms inside the hive.",
      "Because of these defensive features, the resin was named “propolis” from the Greek words “pro” (before) and “polis” (city): the entrance (“before”) of the hive (“city”) was coated with propolis as a defense against anything harmful to bees.",
      "Throughout history, Egyptians used propolis to embalm the dead, who would later become mummies. The Incas and the Romans also used propolis, in their case to sterilize wounds.",
    ],
  },
  {
    id: "why-brazilian",
    title: "Why is Brazilian Propolis the Best?",
    icon: "/brand/bigleaf.svg",
    paragraphs: [
      "Brazilian propolis is considered the world's best and most effective propolis. Brazil, the largest propolis producer in the world, has the proper tropical climate and environment for bees to produce propolis throughout the winter as well.",
      "Additionally, the chief centers for propolis research are in Brazil, so the many types of propolis are tested and researched to preserve the excellence of the country's production.",
      "Bio Propolis is the finest green propolis extract: more effective, with a higher concentration of flavonoids and fewer impurities. It is the most valued worldwide, especially in Asia, where it is exported for its high efficacy as a natural health protector.",
    ],
  },
  {
    id: "quality",
    title: "Propolis Quality",
    icon: "/brand/leaf.svg",
    bullets: [
      "The highest concentration of flavonoids",
      "The lowest concentration of wax",
      "A longer maturation time",
    ],
    paragraphs: [
      "Flavonoids are the main chemical component of propolis. They act in the circulatory system as anti-inflammatories and stimulants, for higher efficacy in fighting disease. The concentration of flavonoids is therefore the main indication of propolis quality, and in Green Propolis it is the highest on the market. That is why it is the most effective, the highest quality, and the most sold worldwide.",
      "Wax is extracted together with propolis. It is considered an impurity: in high amounts it makes propolis unpleasant to consume and it contributes nothing as a nutrient. Green Propolis has minimal amounts of wax, so the concentration of nutrients is much higher and it is more pleasant to take.",
      "Just like wine, propolis needs a resting period (maturation). Every product that uses alcohol in its extraction requires time to mature, at least 6 months for good quality. In Brazil, Green Propolis rests for one full year, a period both domestic and international markets recognize as the mark of the world's best propolis.",
    ],
  },
  {
    id: "health-benefits",
    title: "Health Benefits of Propolis",
    icon: "/brand/heart.svg",
    paragraphs: [
      "Asians and Europeans have known about the natural properties of propolis and its health benefits for thousands of years, consuming it as their first defense against disease. Research has shown that propolis is more than an antibacterial substance: it can potentially improve the quality of health for many people. As more research is conducted, more people are discovering what the bees can provide for us.",
      "One of the most significant medical journal articles described how the caffeic acids in propolis and honey might help prevent colon cancer. Most medical articles, however, still point to the value of propolis as a powerful natural antibiotic. Two journal articles document its activity specifically against Staphylococcus aureus, the bacterium behind dangerous surgical infections, blood poisoning and a type of pneumonia.",
      "Perhaps more remarkable is that propolis acts against viruses, which antibiotics do not. A number of reports discuss the role of propolis in fighting upper respiratory infections such as those caused by the common cold and influenza viruses.",
      "Underpinning many of these benefits, components like flavonoids function as antioxidant free-radical scavengers. A study in the Journal of Ethnopharmacology noted that some antioxidant phenols in propolis function similarly to vitamin E.",
      "Among its nutrients are minerals (calcium, iron and others), vitamins (A, C, E and the B complex) and, especially, flavonoids, which act in the blood vessels to fight inflammation from wounds and harmful microorganisms.",
    ],
  },
];

export const packedWith = [
  { icon: "/brand/body.svg", label: "Antioxidants", text: "Protect the body from oxidative stress" },
  { icon: "/brand/leaf.svg", label: "Vitamins", text: "Essential nutrients like A, C, E and the B complex" },
  { icon: "/brand/heart.svg", label: "Minerals", text: "Vital elements such as calcium and iron" },
  {
    icon: "/brand/bone.svg",
    label: "Flavonoids",
    text: "Natural compounds that support immune function and reduce inflammation",
  },
];
