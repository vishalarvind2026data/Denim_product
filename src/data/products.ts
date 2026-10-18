export type ProductType = "jacket" | "pant" | "bag";

export interface JacketMeasurements {
  shoulder: number;
  bust: number;
  length: number;
  sleeveLength: number;
}

export interface PantMeasurements {
  waist: number;
  hip: number;
  inseam: number;
}

export interface JacketSizeRow {
  uk: number;
  size: "XS" | "S" | "M" | "L" | "XL" | "XXL";
  measurements: JacketMeasurements;
}

export interface PantSizeRow {
  uk: number;
  size: "XS" | "S" | "M" | "L" | "XL" | "XXL";
  measurements: PantMeasurements;
}

export interface DetailedProduct {
  id: string;
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  price: string;
  rawPrice: number;
  category: string;
  type: ProductType;
  image: string;
  editorialImages: string[];
  materialsShort: string;
  description: string;
  story: string;
  fitArchitecture: string;
  craftDetails: string[];
  materialsDetails: string[];
  careGuide: string[];
  deliveryNotice: string;
  fitType: "Skinny" | "Regular" | "Oversized";
  fitTypePosition: number; // 0 to 100 percentage
  stretch: "Non" | "Slight" | "Medium" | "High";
  stretchPosition: number; // 0 to 100 percentage
  modelWearing: string;
  buyerReviewSmall: number;
  buyerReviewTrue: number;
  buyerReviewLarge: number;
}

// Jackets Standard Sizing Table from User Screenshot
export const JACKET_SIZES: JacketSizeRow[] = [
  { uk: 34, size: "XS", measurements: { shoulder: 45.5, bust: 116, length: 54.5, sleeveLength: 60.6 } },
  { uk: 36, size: "S", measurements: { shoulder: 47.0, bust: 120, length: 56.5, sleeveLength: 61.8 } },
  { uk: 38, size: "M", measurements: { shoulder: 48.5, bust: 124, length: 58.5, sleeveLength: 63.0 } },
  { uk: 40, size: "L", measurements: { shoulder: 50.3, bust: 129, length: 60.5, sleeveLength: 64.2 } },
  { uk: 42, size: "XL", measurements: { shoulder: 52.1, bust: 134, length: 62.5, sleeveLength: 65.4 } },
  { uk: 44, size: "XXL", measurements: { shoulder: 53.9, bust: 139, length: 64.5, sleeveLength: 66.6 } },
];

// Pants Standard Sizing Table from User Screenshot
export const PANT_SIZES: PantSizeRow[] = [
  { uk: 34, size: "XS", measurements: { waist: 78, hip: 104, inseam: 75.4 } },
  { uk: 36, size: "S", measurements: { waist: 82, hip: 108, inseam: 76.2 } },
  { uk: 38, size: "M", measurements: { waist: 86, hip: 112, inseam: 77.0 } },
  { uk: 40, size: "L", measurements: { waist: 91, hip: 117, inseam: 77.8 } },
  { uk: 42, size: "XL", measurements: { waist: 96, hip: 122, inseam: 78.6 } },
  { uk: 44, size: "XXL", measurements: { waist: 101, hip: 127, inseam: 79.4 } },
];

export const PRODUCTS: DetailedProduct[] = [
  {
    id: "01",
    slug: "arjuna-i-selvedge-jean",
    tag: "PIECE 01",
    title: "ARJUNA I — The Selvedge Jean",
    subtitle: "Architectural 14.5oz Raw Indigo Selvedge Denim Trouser",
    price: "€1,300",
    rawPrice: 1300,
    category: "Selvedge Denim",
    type: "pant",
    image: "/images/products/ARJUNA I — The Selvedge Jean (€1,300).jpg",
    editorialImages: [
      "/images/products/ARJUNA I — The Selvedge Jean (€1,300).jpg",
      "/images/editorial/selvedge-character.jpg",
      "/images/editorial/atelier-masterji.png",
    ],
    materialsShort: "14.5oz Japanese Narrow-Loom Raw Selvedge Denim • Solid Copper Rivets",
    description:
      "A structured architectural jean woven on vintage shuttle looms. Finished with heavy chain-stitched hems, custom KUMAR embossed hardware, and a distinctive selvedge ID line.",
    story:
      "Named after the noble archer Arjuna, this foundational piece embodies unrelenting focus and purity of form. Cut with high-rise architectural proportions, it is hand-finished in our Indian tailoring atelier to sculpt the leg with poise while maintaining the resolute stiffness of untouched Japanese selvedge denim.",
    fitArchitecture:
      "Designed with a structured straight-leg drape that breaks crisply over boots or tailored loafers. Features our signature masterji waistband ease, allowing comfortable breathability without sacrificing waist definition.",
    craftDetails: [
      "Woven in Okayama on 29-inch narrow vintage shuttle looms",
      "Hand-finished in our Jodhpur tailoring atelier with gold chain-stitching",
      "Custom solid copper rivets with debossed KUMAR emblem",
      "Button fly with serialized antique brass shank closures",
      "Concealed selvedge coin pocket detail and reinforced belt loops",
    ],
    materialsDetails: [
      "100% Long-Staple Zimbabwe Cotton, rope-dyed in pure indigo",
      "Weight: 14.5oz rigid raw selvedge canvas (develops unique patina over time)",
      "Pocket Bags: Heavyweight ecru cotton twill stamped with production serial",
      "Label: Vegetable-tanned Tuscan saddle leather back patch",
    ],
    careGuide: [
      "Wear raw for the first 6 months to establish personal crease lines and fading",
      "When washing, soak inside-out in cold water with mild organic detergent",
      "Hang dry naturally away from direct sunlight; do not tumble dry",
    ],
    deliveryNotice:
      "Complimentary white-glove international shipping. Delivered Duty Paid (DDP) with zero additional tariffs.",
    fitType: "Regular",
    fitTypePosition: 55,
    stretch: "Non",
    stretchPosition: 5,
    modelWearing: "Model is 185 cm / 6'1\" wearing size UK 38 (M)",
    buyerReviewSmall: 5,
    buyerReviewTrue: 88,
    buyerReviewLarge: 7,
  },
  {
    id: "02",
    slug: "arjuna-ii-moth-jean",
    tag: "PIECE 02",
    title: "ARJUNA II — The Moth Jean",
    subtitle: "Raw Selvedge Denim with Hand-Tooled Botanical Moth Emblem",
    price: "€1,900",
    rawPrice: 1900,
    category: "Embossed Denim",
    type: "pant",
    image: "/images/products/ARJUNA II — The Moth Jean( €1,900).jpg",
    editorialImages: [
      "/images/products/ARJUNA II — The Moth Jean( €1,900).jpg",
      "/images/editorial/leather-character.png",
      "/images/editorial/selvedge-character.jpg",
    ],
    materialsShort: "Deep Indigo Selvedge Denim • Hand-Tooled Leather Moth Pocket Emblem",
    description:
      "Crafted from heavy selvedge denim featuring our hand-tooled leather botanical moth insignia stitched with precision onto the back pocket.",
    story:
      "The moth is the nocturnal totem of the KUMAR maison—drawn inexorably to the sacred glow of the craftsman's lamp. In the Arjuna II, raw denim discipline meets the sculpted warmth of full-grain leather, resulting in a dialogue between two ancestral crafts.",
    fitArchitecture:
      "A tailored straight cut engineered with contoured yoke seams that frame the lower back and seat with sculpted perfection, ensuring zero waistband gaping when seated.",
    craftDetails: [
      "Hand-tooled botanical moth insignia cut from Tuscan vegetable-tanned hide",
      "Precision whip-stitch leather embroidery securing the motif to the back pocket",
      "14.5oz Japanese selvedge denim with natural starch finish",
      "Hand-burnished leather pocket trims and selvedge edge coin pocket",
      "Custom branded hardware cast in patinated solid brass",
    ],
    materialsDetails: [
      "Fabric: 100% Pure Indigo Japanese Selvedge Denim (14.5oz)",
      "Emblem: Full-Grain Vegetable-Tanned Italian Leather",
      "Thread: Heavyweight gold and amber core-spun thread",
    ],
    careGuide: [
      "Spot clean denim with cold water; avoid wetting leather emblem directly",
      "Condition leather moth annually with natural beeswax balm",
      "Professional dry cleaning with leather specialist recommended",
    ],
    deliveryNotice:
      "Complimentary white-glove international shipping. Delivered Duty Paid (DDP) with zero additional tariffs.",
    fitType: "Regular",
    fitTypePosition: 50,
    stretch: "Non",
    stretchPosition: 5,
    modelWearing: "Model is 185 cm / 6'1\" wearing size UK 38 (M)",
    buyerReviewSmall: 6,
    buyerReviewTrue: 89,
    buyerReviewLarge: 5,
  },
  {
    id: "03",
    slug: "draupadi-i-house-tote",
    tag: "PIECE 03",
    title: "DRAUPADI I — The House Tote",
    subtitle: "Diamond Jacquard Indigo Denim Holdall with Full-Grain Leather Framing",
    price: "€6,900",
    rawPrice: 6900,
    category: "Fine Leather Goods",
    type: "bag",
    image: "/images/products/DRAUPADI I — The House Tote (€6,900).jpg",
    editorialImages: [
      "/images/products/DRAUPADI I — The House Tote (€6,900).jpg",
      "/images/editorial/leather-character.png",
      "/images/editorial/atelier-jodhpur.jpg",
    ],
    materialsShort: "Diamond Jacquard Indigo Denim • Tuscan Full-Grain Saddle Leather",
    description:
      "Artisanal luxury tote combining woven denim structure with hand-burnished, vegetable-tanned Italian leather handles and base reinforcement.",
    story:
      "Inspired by Queen Draupadi's celebrated textile grace, this grand holdall represents the pinnacle of KUMAR leathercraft. Woven from rich diamond-patterned indigo jacquard, the bag is framed in hand-burnished saddle leather that absorbs time and travel into a rich, deep patina.",
    fitArchitecture:
      "Dimensions: 42 cm (Width) × 38 cm (Height) × 14 cm (Depth). Features a 26 cm braided handle drop calibrated to carry comfortably over the shoulder or held elegantly in hand.",
    craftDetails: [
      "Frayed-edge diamond lattice jacquard woven specifically for KUMAR",
      "Reinforced saddle-stitched Tuscan leather base panel with 5 solid brass feet",
      "Braided leather handles crafted from continuous 8-strand hand-woven hide",
      "Internal zippered compartment with Italian Lampo zipper in antique brass",
      "Includes detachable leather clochette with serialized atelier key lock",
    ],
    materialsDetails: [
      "Shell: Heavy Indigo Diamond Jacquard Selvedge Denim",
      "Trim & Base: Full-Grain Tuscan Vegetable-Tanned Saddle Leather",
      "Lining: Natural ecru linen-cotton blend",
      "Hardware: Solid hand-brushed antique brass",
    ],
    careGuide: [
      "Store in the provided breathable cotton dust bag when not in use",
      "Moisturize leather trim twice a year with specialized leather wax",
      "Avoid prolonged exposure to moisture or high temperatures",
    ],
    deliveryNotice:
      "Delivered in a bespoke handmade wooden presentation box lined with velvet. Insured private courier.",
    fitType: "Regular",
    fitTypePosition: 50,
    stretch: "Non",
    stretchPosition: 0,
    modelWearing: "One Size — Handcrafted Atelier Dimensions",
    buyerReviewSmall: 0,
    buyerReviewTrue: 100,
    buyerReviewLarge: 0,
  },
  {
    id: "04",
    slug: "karna-i-horizon-jacket",
    tag: "PIECE 04",
    title: "KARNA I — The Horizon Jacket",
    subtitle: "The Signature Trucker Silhouette in Selvedge Denim & Tuscan Leather",
    price: "€5,900",
    rawPrice: 5900,
    category: "Outerwear",
    type: "jacket",
    image: "/images/products/KARNA I — The Horizon Jacket ( €5,900 ).jpeg",
    editorialImages: [
      "/images/products/KARNA I — The Horizon Jacket ( €5,900 ).jpeg",
      "/images/editorial/runway-hero-poster.jpg",
      "/images/editorial/leather-character.png",
    ],
    materialsShort: "14.5oz Japanese Selvedge Denim • Supple Tan Full-Grain Leather Collar & Cuffs",
    description:
      "The quintessential KUMAR silhouette uniting rigid indigo denim with hand-burnished leather collar and cuffs, lined in lightweight brushed cotton.",
    story:
      "Named after Karna, the sun warrior whose golden armor was part of his very skin. The Horizon Jacket unites the armor-like resilience of unwashed selvedge denim with the organic softness of Tuscan leather collar and cuffs. Every contour has been adjusted by our Masterji to lend sovereign posture to the wearer.",
    fitArchitecture:
      "Engineered with a tailored chest-to-shoulder taper, curved two-piece sleeves that rest naturally in a relaxed stance, and back waist adjusters for customizable silhouette cinch.",
    craftDetails: [
      "Burnished tan full-grain leather collar that softens and deepens in tone with each wear",
      "Fold-back leather cuff facings allowing dramatic contrast styling",
      "Custom shank buttons struck with the KUMAR butterfly insignia",
      "Dual flap chest pockets with hidden selvedge ID tape beneath flap edges",
      "Rear action pleats providing ergonomic mobility through the shoulders",
    ],
    materialsDetails: [
      "Body: 14.5oz Okayama Narrow-Loom Raw Selvedge Denim",
      "Collar & Cuffs: 1.4mm Full-Grain Tuscan Vegetable-Tanned Calfskin",
      "Lining: Yarn-dyed brushed flannel in warm desert tones",
      "Hardware: Solid antiqued brass with protective lacquer finish",
    ],
    careGuide: [
      "Dry clean only with specialist luxury leather and denim cleaner",
      "Hang on the provided contoured cedar wood coat hanger to preserve shoulder silhouette",
      "Protect from severe rainstorms; spot treat leather with natural hide conditioner",
    ],
    deliveryNotice:
      "Ships with solid brass serial plate and custom garment bag. Delivered Duty Paid (DDP).",
    fitType: "Regular",
    fitTypePosition: 60,
    stretch: "Non",
    stretchPosition: 5,
    modelWearing: "Model is 183 cm / 6'0\" with 98 cm chest, wearing UK 38 (M)",
    buyerReviewSmall: 7,
    buyerReviewTrue: 90,
    buyerReviewLarge: 3,
  },
  {
    id: "05",
    slug: "kunti-iv-house-jacket",
    tag: "PIECE 05",
    title: "KUNTI IV — The House Jacket",
    subtitle: "Atelier Tailored Selvedge Workwear Silhouette",
    price: "€4,900",
    rawPrice: 4900,
    category: "Outerwear",
    type: "jacket",
    image: "/images/products/KUNTI IV — The House Jacket (€4,900).jpg",
    editorialImages: [
      "/images/products/KUNTI IV — The House Jacket (€4,900).jpg",
      "/images/editorial/atelier-masterji.png",
      "/images/editorial/selvedge-character.jpg",
    ],
    materialsShort: "Deep Indigo Selvedge Canvas • Burnished Brass Shank Buttons",
    description:
      "Tailored workwear jacket featuring sculpted masterji shoulder ease, twin chest patch pockets, and reinforced dual-needle stitching throughout.",
    story:
      "The Kunti IV pays homage to the matriarchal spine of Indian heritage. Stripping away ornamentation, it celebrates the pristine geometry of the worker's chore coat elevated to haute couture standards through bespoke proportions and millimeter-precise needle tension.",
    fitArchitecture:
      "Relaxed architectural drape with a clean squared shoulder line and high armholes. Designed to drape cleanly whether worn over fine knitwear or a crisp poplin shirt.",
    craftDetails: [
      "Deep indigo selvedge canvas woven from high-twist yarn for crisp rigidity",
      "Twin patch pockets with bar-tack reinforcement at high-stress points",
      "Internal chest welt pocket with invisible hand-sewn pick stitching",
      "Antiqued brass shank buttons individually aged by hand",
      "Undercollar finished with contrasting leather locker loop",
    ],
    materialsDetails: [
      "Fabric: 15oz Heavy Indigo Selvedge Canvas (100% Cotton)",
      "Buttons: Custom cast solid brass shanks with aged patina",
      "Thread: Dual-core Egyptian cotton thread in antique wheat color",
    ],
    careGuide: [
      "Spot clean or cold wash inside out; avoid machine spin",
      "Steam gently to restore architectural crease lines",
      "Allow fabric to break in naturally with wear",
    ],
    deliveryNotice:
      "Complimentary white-glove international shipping. Delivered Duty Paid (DDP) with zero additional tariffs.",
    fitType: "Regular",
    fitTypePosition: 55,
    stretch: "Non",
    stretchPosition: 5,
    modelWearing: "Model is 183 cm / 6'0\" wearing size UK 38 (M)",
    buyerReviewSmall: 5,
    buyerReviewTrue: 92,
    buyerReviewLarge: 3,
  },
  {
    id: "06",
    slug: "kunti-v-moth-jacket",
    tag: "PIECE 06",
    title: "KUNTI V — The Moth Jacket",
    subtitle: "Limited Atelier Edition with Hand-Embroidered Botanical Yoke",
    price: "€6,900",
    rawPrice: 6900,
    category: "Atelier Edition",
    type: "jacket",
    image: "/images/products/KUNTI V — The Moth Jacket ( €6,900).jpeg.jpeg",
    editorialImages: [
      "/images/products/KUNTI V — The Moth Jacket ( €6,900).jpeg.jpeg",
      "/images/editorial/leather-character.png",
      "/images/editorial/runway-hero-poster.jpg",
    ],
    materialsShort: "Raw Selvedge Denim • Full-Grain Leather Trim • Hand-Embroidered Moth Insignia",
    description:
      "Limited atelier release combining rich leather accents, custom brass hardware, and intricate botanical moth needlework on the back panel.",
    story:
      "The magnum opus of the KUMAR outerwear oeuvre. Produced in strictly limited runs of 25 serialized units per season. The entire back yoke is adorned with hand-guided gold needle embroidery depicting our botanical moth, bordered by burnished leather piping and backed with royal blue silk.",
    fitArchitecture:
      "Engineered with a high-armhole tailored fit, extended leather-faced collar stand, and ergonomic shoulder articulation allowing free arm elevation without shifting the jacket hem.",
    craftDetails: [
      "Rear yoke embroidered with over 45,000 stitches of metallic gold and indigo thread",
      "Hand-burnished full-grain Tuscan leather collar, cuff facings, and welt pockets",
      "Individual brass serial plaque hand-riveted onto interior hem (Numbered 01/25 to 25/25)",
      "Signature butterfly-debossed custom hardware throughout",
      "Fully lined in breathable midnight navy cupro twill",
    ],
    materialsDetails: [
      "Body: 14.5oz Pure Indigo Selvedge Denim (Okayama, Japan)",
      "Trim: Full-Grain Tuscan Vegetable-Tanned Calfskin",
      "Yoke Lining: 100% Mulberry Silk",
      "Body Lining: 100% Bemberg Cupro",
    ],
    careGuide: [
      "Specialist luxury dry clean only",
      "Store on provided custom wooden hangar with dust protective cover",
      "Keep away from direct excessive moisture to protect silk embroidery",
    ],
    deliveryNotice:
      "Delivered in a bespoke handmade wooden presentation box with leather certificate of authenticity. Insured private courier.",
    fitType: "Regular",
    fitTypePosition: 50,
    stretch: "Non",
    stretchPosition: 5,
    modelWearing: "Model is 183 cm / 6'0\" wearing size UK 38 (M)",
    buyerReviewSmall: 6,
    buyerReviewTrue: 91,
    buyerReviewLarge: 3,
  },
];

export function getProductById(id: string): DetailedProduct | undefined {
  const normalized = id.padStart(2, "0");
  return PRODUCTS.find((p) => p.id === id || p.id === normalized || p.slug === id);
}
