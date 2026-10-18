export type Locale = "EN" | "FR" | "JA" | "AR";

export interface TranslatedProduct {
  id: string;
  tag: string;
  title: string;
  price: string;
  category: string;
  image: string;
  materials: string;
  description: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface Translations {
  localeName: string;
  isRtl: boolean;
  nav: {
    menu: string;
    close: string;
    collection: string;
    search: string;
    welcome: string;
  };
  menuOverlay: {
    close: string;
    welcome: string;
    categories: Array<{
      title: string;
      href: string;
      subItems: Array<{ name: string; desc: string; href?: string }>;
    }>;
  };
  hero: {
    eyebrow: string;
    title1: string;
    titleCharacter: string;
    title2: string;
    subtitle: string;
    ctaMaison: string;
    ctaMasterji: string;
  };
  selvedge: {
    eyebrow: string;
    title: string;
    desc: string;
    cta: string;
  };
  leather: {
    eyebrow: string;
    title: string;
    desc: string;
    cta: string;
  };
  cinema: {
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    desc: string;
    leftBadge: string;
    rightBadge: string;
    pause: string;
    play: string;
    tag: string;
  };
  atelier: {
    eyebrow: string;
    title: string;
    quote: string;
    desc: string;
    tagline: string;
    card1Eyebrow: string;
    card1Title: string;
    card2Eyebrow: string;
    card2Title: string;
    card3Eyebrow: string;
    card3Title: string;
  };
  products: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewSilhouette: string;
    materialsOrigin: string;
    fulfillment: string;
    preStocked: string;
    items: TranslatedProduct[];
  };
  footer: {
    manifesto: string;
    subline: string;
    gazetteTitle: string;
    gazetteDesc: string;
    placeholder: string;
    subscribe: string;
    subscribed: string;
    craftTitle: string;
    collectionTitle: string;
    atelierTitle: string;
    boutiquesTitle: string;
    craftLinks: FooterLink[];
    collectionLinks: FooterLink[];
    atelierLinks: FooterLink[];
    boutiquesList: FooterLink[];
    copyright: string;
    rights: string;
  };
}

export const translations: Record<Locale, Translations> = {
  EN: {
    localeName: "English",
    isRtl: false,
    nav: {
      menu: "Menu",
      close: "Close",
      collection: "Collection",
      search: "Search",
      welcome: "Welcome to the KUMAR Maison",
    },
    menuOverlay: {
      close: "Close",
      welcome: "Welcome to the KUMAR Maison",
      categories: [
        {
          title: "Collection",
          href: "#iconic-products",
          subItems: [
            { name: "ARJUNA I — The Selvedge Jean", desc: "14.5oz Raw Indigo Selvedge Denim • €1,300", href: "/products/01" },
            { name: "ARJUNA II — The Moth Jean", desc: "Hand-Tooled Botanical Moth Emblem • €1,900", href: "/products/02" },
            { name: "KARNA II — The Drip Trouser", desc: "Liquid Full-Grain Leather Inlays • €1,700", href: "/products/03" },
            { name: "KARNA I — The Horizon Jacket", desc: "Okayama Selvedge with Tuscan Leather Collar • €5,900", href: "/products/04" },
            { name: "KUNTI I — The Raw Trucker", desc: "Minimalist Selvedge with French Calfskin Trim • €4,500", href: "/products/05" },
            { name: "KUNTI II — The Moth Jacket", desc: "Golden Silk Moth Embroidery on Selvedge Denim • €6,500", href: "/products/06" },
          ],
        },
        {
          title: "The Craft",
          href: "#character-selvedge",
          subItems: [
            { name: "The Character of Selvedge", desc: "Narrow loom weaves, non-fray edges & indigo depth" },
            { name: "Full-Grain Leather", desc: "Supple outer hide with natural grain & rich patina" },
            { name: "Dual Disciplines Cinema", desc: "The dialogue between denim needlework and leathercraft" },
          ],
        },
        {
          title: "Fit Experience",
          href: "#fit-atelier",
          subItems: [
            { name: "Pre-Stocked Fit Finder", desc: "Exact size matching from 5 body measurements" },
            { name: "Garment Sizing Guides", desc: "Shoulder, chest, waist, and sleeve charts" },
            { name: "Book In-Store Measurement", desc: "Private appointments with KUMAR fit artisans" },
          ],
        },
        {
          title: "Our Store Locations",
          href: "/locations",
          subItems: [
            { name: "14 Global Boutiques", desc: "India, Japan, UAE, USA, Italy, Spain, UK", href: "/locations" },
            { name: "Find on Google Maps", desc: "Direct navigation to flagship locations", href: "/locations" },
          ],
        },
        {
          title: "About",
          href: "/about",
          subItems: [
            { name: "The Maison", desc: "Origins, philosophy & modern heirloom vision", href: "/about" },
            { name: "Our Story", desc: "Where raw selvedge denim meets full-grain leather", href: "/about" },
            { name: "Our Values", desc: "Honouring Indian craftsmanship & personal fit", href: "/about" },
          ],
        },
      ],
    },
    hero: {
      eyebrow: "Haute Selvedge & Leather",
      title1: "Where denim meets leather,",
      titleCharacter: "character",
      title2: "takes shape.",
      subtitle:
        "Rooted in Indian craftsmanship, each piece brings together considered materials and a fit that feels entirely your own.",
      ctaMaison: "Explore The Maison",
      ctaMasterji: "The Masterji Story",
    },
    selvedge: {
      eyebrow: "Material Integrity",
      title: "THE CHARACTER OF SELVEDGE",
      desc: "Selvedge denim is woven on narrow looms, forming a clean, tightly finished edge that resists fraying. Its textured weave, sturdy hand and deep indigo tone give the fabric a character that softens and fades with wear making each piece more personal over time.",
      cta: "Explore The Weave",
    },
    leather: {
      eyebrow: "Artisanal Hides",
      title: "THE CHARACTER OF FULL-GRAIN LEATHER",
      desc: "Cut from the hide’s strongest outer layer, full-grain leather retains its natural grain and distinctive markings. Firm yet supple, it develops a deeper patina with time—so each piece carries the quiet imprint of its owner.",
      cta: "Discover Our Patina",
    },
    cinema: {
      eyebrow: "Atelier Dialogue",
      titlePart1: "Two Disciplines.",
      titlePart2: "One Standard.",
      desc: "Witness the synchronized art of the denim artisan and the leather craftsman—where heavy selvedge needlework meets hand-burnished hides.",
      leftBadge: "Left: Selvedge Needlework",
      rightBadge: "Right: Full-Grain Leathercraft",
      pause: "Pause Cinema",
      play: "Play Cinema",
      tag: "4K Mastered • Dual Canvas",
    },
    atelier: {
      eyebrow: "Indian Tailoring Heritage",
      title: "THE KUMAR FIT ATELIER",
      quote: "The masterji, at the heart of the fit.",
      desc: "At KUMAR, the masterji is part of the experience. Our in-store artisans are employed as skilled fit specialists and trained to work with both denim and leather. With a thoughtful eye for proportion and construction, they refine each piece to feel more personal bringing the art of Indian tailoring into the world of modern luxury.",
      tagline: "— The finest fit is felt. —",
      card1Eyebrow: "Architectural Roots",
      card1Title: "Blue City of Jodhpur",
      card2Eyebrow: "Atelier In Motion",
      card2Title: "The Artisan Hand",
      card3Eyebrow: "Industrial Precision",
      card3Title: "Masterji Craftsmanship",
    },
    products: {
      eyebrow: "The Permanent Collection",
      title: "Iconic Pieces",
      subtitle: "Sliding gallery of handcrafted selvedge denim and leather silhouettes.",
      viewSilhouette: "View Product",
      materialsOrigin: "Materials & Origin",
      fulfillment: "Fulfillment",
      preStocked: "Pre-Stocked Edition",
      items: [
        {
          id: "01",
          tag: "PIECE 01",
          title: "ARJUNA I — The Selvedge Jean",
          price: "€1,300",
          category: "Selvedge Denim",
          image: "/images/products/ARJUNA I — The Selvedge Jean (€1,300).jpg",
          materials: "14.5oz Japanese Narrow-Loom Raw Selvedge Denim • Copper Rivets",
          description:
            "A structured architectural jean woven on vintage shuttle looms. Finished with heavy chain-stitched hems, custom KUMAR embossed hardware, and distinctive selvedge ID line.",
        },
        {
          id: "02",
          tag: "PIECE 02",
          title: "ARJUNA II — The Moth Jean",
          price: "€1,900",
          category: "Embossed Denim",
          image: "/images/products/ARJUNA II — The Moth Jean( €1,900).jpg",
          materials: "Raw Indigo Selvedge Denim • Hand-Tooled Leather Moth Pocket Emblem",
          description:
            "Crafted from heavy selvedge denim featuring our hand-tooled leather botanical moth insignia stitched with precision onto the back pocket.",
        },
        {
          id: "03",
          tag: "PIECE 03",
          title: "DRAUPADI I — The House Tote",
          price: "€6,900",
          category: "Fine Leather Goods",
          image: "/images/products/DRAUPADI I — The House Tote (€6,900).jpg",
          materials: "Diamond Jacquard Indigo Denim • Tuscan Full-Grain Saddle Leather",
          description:
            "Artisanal luxury tote combining woven denim structure with hand-burnished, vegetable-tanned Italian leather handles and base reinforcement.",
        },
        {
          id: "04",
          tag: "PIECE 04",
          title: "KARNA I — The Horizon Jacket",
          price: "€5,900",
          category: "Outerwear",
          image: "/images/products/KARNA I — The Horizon Jacket ( €5,900 ).jpeg",
          materials: "14.5oz Japanese Selvedge Denim • Supple Tan Full-Grain Leather Collar & Cuffs",
          description:
            "The quintessential KUMAR silhouette uniting rigid indigo denim with hand-burnished leather collar and cuffs, lined in lightweight brushed cotton.",
        },
        {
          id: "05",
          tag: "PIECE 05",
          title: "KUNTI IV — The House Jacket",
          price: "€4,900",
          category: "Outerwear",
          image: "/images/products/KUNTI IV — The House Jacket (€4,900).jpg",
          materials: "Deep Indigo Selvedge Canvas • Burnished Brass Shank Buttons",
          description:
            "Tailored workwear jacket featuring sculpted masterji shoulder ease, twin chest patch pockets, and reinforced dual-needle stitching throughout.",
        },
        {
          id: "06",
          tag: "PIECE 06",
          title: "KUNTI V — The Moth Jacket",
          price: "€6,900",
          category: "Atelier Edition",
          image: "/images/products/KUNTI V — The Moth Jacket ( €6,900).jpeg.jpeg",
          materials: "Raw Selvedge Denim • Full-Grain Leather Trim • Hand-Embroidered Moth Insignia",
          description:
            "Limited atelier release combining rich leather accents, custom brass hardware, and intricate botanical moth needlework on the back panel.",
        },
      ],
    },
    footer: {
      manifesto: "Where denim meets leather, character takes shape.",
      subline:
        "Hand-finished selvedge denim combined with full-grain leather, tailored with the timeless eye of Indian fit specialists.",
      gazetteTitle: "Join The Maison Gazette",
      gazetteDesc: "Receive private invitations to seasonal drops, atelier previews, and fit masterclasses.",
      placeholder: "Enter your email address",
      subscribe: "Subscribe",
      subscribed: "Joined",
      craftTitle: "The Craft",
      collectionTitle: "Collection",
      atelierTitle: "The Masterji & Fit",
      boutiquesTitle: "Private Boutiques",
      craftLinks: [
        { name: "About The Maison", href: "/about" },
        { name: "The Character of Selvedge", href: "/#character-selvedge" },
        { name: "Full-Grain Leather Patina", href: "/#character-leather" },
        { name: "Dual Disciplines Cinema", href: "/#craft-cinema" },
      ],
      collectionLinks: [
        { name: "ARJUNA I — Selvedge Jean", href: "/products/01" },
        { name: "KARNA I — Horizon Jacket", href: "/products/04" },
        { name: "KUNTI V — Moth Jacket", href: "/products/06" },
        { name: "ARJUNA II — Moth Jean", href: "/products/02" },
        { name: "Explore All Pieces", href: "/#iconic-products" },
      ],
      atelierLinks: [
        { name: "The Masterji Philosophy", href: "/about#values" },
        { name: "Indian Tailoring Heritage", href: "/#fit-atelier" },
        { name: "Interactive Sizing Guide", href: "/#fit-atelier" },
        { name: "14 Global Flagship Salons", href: "/locations" },
      ],
      boutiquesList: [
        { name: "Mumbai • Bandra-Kurla & Kala Ghoda", href: "/locations" },
        { name: "Tokyo • Ginza & Minami-Aoyama", href: "/locations" },
        { name: "Dubai • DIFC & Dubai Mall", href: "/locations" },
        { name: "New York • Madison Ave & SoHo", href: "/locations" },
        { name: "Explore All 14 Global Boutiques →", href: "/locations" },
      ],
      copyright: "© 2026 KUMAR MAISON. ALL RIGHTS RESERVED.",
      rights: "TERMS OF SERVICE • PRIVACY POLICY • LEGAL NOTICES",
    },
  },
  FR: {
    localeName: "Français",
    isRtl: false,
    nav: {
      menu: "Menu",
      close: "Fermer",
      collection: "Collection",
      search: "Recherche",
      welcome: "Bienvenue à la Maison KUMAR",
    },
    menuOverlay: {
      close: "Fermer",
      welcome: "Bienvenue à la Maison KUMAR",
      categories: [
        {
          title: "Collection",
          href: "#iconic-products",
          subItems: [
            { name: "ARJUNA I — Le Jean Selvedge", desc: "Denim Brut 14.5oz Indigo • 1 300 €", href: "/products/01" },
            { name: "ARJUNA II — Le Jean Papillon", desc: "Motif Botanique Façonné Main • 1 900 €", href: "/products/02" },
            { name: "KARNA II — Le Pantalon Drip", desc: "Incrustations de Cuir Pleine Fleur • 1 700 €", href: "/products/03" },
            { name: "KARNA I — La Veste Horizon", desc: "Selvedge d'Okayama & Col Cuir Toscan • 5 900 €", href: "/products/04" },
            { name: "KUNTI I — Le Trucker Brut", desc: "Selvedge Minimaliste & Finitions Veau Français • 4 500 €", href: "/products/05" },
            { name: "KUNTI II — La Veste Papillon", desc: "Papillon Brodé Soie Dorée sur Denim Brut • 6 500 €", href: "/products/06" },
          ],
        },
        {
          title: "L'Artisanat",
          href: "#character-selvedge",
          subItems: [
            { name: "Le Caractère du Selvedge", desc: "Tissage sur métiers étroits, lisières nettes et indigo profond" },
            { name: "Cuir Pleine Fleur", desc: "Cuir souple noble au grain naturel et patine riche" },
            { name: "Cinéma des Deux Disciplines", desc: "Le dialogue entre l'art du denim et la haute maroquinerie" },
          ],
        },
        {
          title: "Expérience de Coupe",
          href: "#fit-atelier",
          subItems: [
            { name: "Guide de Coupe Sur Mesure", desc: "Ajustement parfait à partir de 5 mensurations précises" },
            { name: "Tableau des Tailles", desc: "Guides d'épaules, poitrine, taille et manches" },
            { name: "Prendre Rendez-vous en Boutique", desc: "Séances privées de prise de mesures avec nos artisans" },
          ],
        },
        {
          title: "Nos Boutiques",
          href: "/locations",
          subItems: [
            { name: "14 Salons Mondiaux", desc: "Inde, Japon, EAU, États-Unis, Italie, Espagne, Royaume-Uni", href: "/locations" },
            { name: "Localiser sur Google Maps", desc: "Itinéraires directs vers nos adresses exclusives", href: "/locations" },
          ],
        },
        {
          title: "À Propos",
          href: "/about",
          subItems: [
            { name: "La Maison", desc: "Origines, philosophie & vision d'héritage moderne", href: "/about" },
            { name: "Notre Histoire", desc: "Où le denim selvedge rencontre le cuir pleine fleur", href: "/about" },
            { name: "Nos Valeurs", desc: "Honorer l'artisanat indien & la coupe personnalisée", href: "/about" },
          ],
        },
      ],
    },
    hero: {
      eyebrow: "Haute Selvedge & Cuir",
      title1: "Où le denim rencontre le cuir,",
      titleCharacter: "le caractère",
      title2: "prend forme.",
      subtitle:
        "Ancrée dans l'artisanat indien d'exception, chaque création réunit des matières rares et une coupe pensée pour vous sublimer.",
      ctaMaison: "Explorer La Maison",
      ctaMasterji: "L'Histoire du Masterji",
    },
    selvedge: {
      eyebrow: "Intégrité de la Matière",
      title: "LE CARACTÈRE DU SELVEDGE",
      desc: "Tissé sur des métiers traditionnels étroits à navette, le denim selvedge offre une lisière nette et indestructible. Son grain texturé, son tombé structuré et son indigo profond développent avec le temps une patine intime et unique.",
      cta: "Découvrir Le Tissage",
    },
    leather: {
      eyebrow: "Peaux Rares & Nobles",
      title: "LE CARACTÈRE DU CUIR PLEINE FLEUR",
      desc: "Prélevé dans la fleur originelle la plus dense du cuir, ce cuir conserve ses nuances vivantes et ses aspérités naturelles. Ferme et soyeux, il s'assouplit et s'assombrit élégamment au fil des années.",
      cta: "Découvrir Notre Patine",
    },
    cinema: {
      eyebrow: "Dialogue d'Atelier",
      titlePart1: "Deux Disciplines.",
      titlePart2: "Une Seule Exigence.",
      desc: "Assistez à l'art synchronisé du maître tailleur de denim et de l'artisan maroquinier — où la précision de l'aiguille rencontre la caresse du cuir poli à la main.",
      leftBadge: "Gauche: Couture Selvedge",
      rightBadge: "Droite: Maroquinerie Pleine Fleur",
      pause: "Pause Vidéo",
      play: "Lire la Vidéo",
      tag: "Master 4K • Double Écran",
    },
    atelier: {
      eyebrow: "Héritage Tailleur Indien",
      title: "L'ATELIER DE COUPE KUMAR",
      quote: "Le masterji, au cœur de la coupe.",
      desc: "Chez KUMAR, le masterji sublime chaque vêtement. Nos artisans de boutique, experts du denim et du cuir, modèlent les proportions avec une précision architecturale pour offrir un tombé incomparable.",
      tagline: "— La coupe parfaite se ressent. —",
      card1Eyebrow: "Racines Architecturales",
      card1Title: "La Cité Bleue de Jodhpur",
      card2Eyebrow: "Atelier en Mouvement",
      card2Title: "La Main de l'Artisan",
      card3Eyebrow: "Précision Industrielle",
      card3Title: "Le Savoir-Faire du Masterji",
    },
    products: {
      eyebrow: "La Collection Permanente",
      title: "Pièces Iconiques",
      subtitle: "Galerie de silhouettes artisanales en denim selvedge et cuir d'exception.",
      viewSilhouette: "Voir le Produit",
      materialsOrigin: "Matières & Origine",
      fulfillment: "Disponibilité",
      preStocked: "Édition Privée",
      items: [
        {
          id: "01",
          tag: "PIÈCE 01",
          title: "ARJUNA I — Le Jean Selvedge",
          price: "€1,300",
          category: "Denim Selvedge",
          image: "/images/products/ARJUNA I — The Selvedge Jean (€1,300).jpg",
          materials: "Denim Selvedge Brut Japonais 14.5oz • Rivets en Cuivre Massif",
          description:
            "Jean architectural tissé sur métiers anciens. Finition point de chaînette, boutonnerie frappée KUMAR et lisière selvedge apparente.",
        },
        {
          id: "02",
          tag: "PIÈCE 02",
          title: "ARJUNA II — Le Jean Phalène",
          price: "€1,900",
          category: "Denim Brodé",
          image: "/images/products/ARJUNA II — The Moth Jean( €1,900).jpg",
          materials: "Denim Selvedge Indigo Profond • Écusson Papillon de Nuit en Cuir Façonné Main",
          description:
            "Confectionné en selvedge haute densité arborant notre emblème botanique de phalène en cuir sculpté, fixé à la main sur la poche arrière.",
        },
        {
          id: "03",
          tag: "PIÈCE 03",
          title: "DRAUPADI I — Le Cabas de la Maison",
          price: "€6,900",
          category: "Haute Maroquinerie",
          image: "/images/products/DRAUPADI I — The House Tote (€6,900).jpg",
          materials: "Denim Jacquard Tissé Diamant • Cuir de Selle Pleine Fleur Toscan",
          description:
            "Cabas luxueux alliant la structure géométrique du denim tissé aux anses en cuir italien tanné végétal avec patine glacée.",
        },
        {
          id: "04",
          tag: "PIÈCE 04",
          title: "KARNA I — La Veste Horizon",
          price: "€5,900",
          category: "Vestes & Manteaux",
          image: "/images/products/KARNA I — The Horizon Jacket ( €5,900 ).jpeg",
          materials: "Denim Selvedge Japonais 14.5oz • Col et Poignets en Cuir Fauve Pleine Fleur",
          description:
            "La silhouette emblématique de KUMAR mariant un denim brut rigide avec un cuir de col souple patiné à la main et doublure coton doux.",
        },
        {
          id: "05",
          tag: "PIÈCE 05",
          title: "KUNTI IV — La Veste de la Maison",
          price: "€4,900",
          category: "Vestes & Manteaux",
          image: "/images/products/KUNTI IV — The House Jacket (€4,900).jpg",
          materials: "Toile Selvedge Indigo Sombre • Boutons à Queue en Laiton Antique",
          description:
            "Veste de travail haute couture avec emmanchures masterji ergonomiques, doubles poches plaquées et coutures renforcées au fil d'or.",
        },
        {
          id: "06",
          tag: "PIÈCE 06",
          title: "KUNTI V — La Veste Phalène",
          price: "€6,900",
          category: "Édition Atelier",
          image: "/images/products/KUNTI V — The Moth Jacket ( €6,900).jpeg.jpeg",
          materials: "Denim Selvedge Brut • Garnitures Cuir Pleine Fleur • Broderie Phalène Faite Main",
          description:
            "Pièce rare d'atelier réunissant finitions cuir lustrées, boutonnerie sur mesure et broderie minutieuse de papillon de nuit au dos.",
        },
      ],
    },
    footer: {
      manifesto: "Où le denim rencontre le cuir, le caractère prend forme.",
      subline:
        "Denim selvedge fini à la main associé au cuir pleine fleur, sublimé par le regard intemporel des maîtres tailleurs indiens.",
      gazetteTitle: "Rejoindre La Gazette De La Maison",
      gazetteDesc: "Recevez nos invitations privées pour les lancements saisonniers et visites d'atelier.",
      placeholder: "Votre adresse email",
      subscribe: "S'abonner",
      subscribed: "Inscrit",
      craftTitle: "L'Artisanat",
      collectionTitle: "Collection",
      atelierTitle: "Le Masterji & La Coupe",
      boutiquesTitle: "Boutiques Privées",
      craftLinks: [
        { name: "À Propos de la Maison", href: "/about" },
        { name: "Le Caractère du Selvedge", href: "/#character-selvedge" },
        { name: "Patine du Cuir Pleine Fleur", href: "/#character-leather" },
        { name: "Cinéma des Deux Disciplines", href: "/#craft-cinema" },
      ],
      collectionLinks: [
        { name: "ARJUNA I — Le Jean Selvedge", href: "/products/01" },
        { name: "KARNA I — La Veste Horizon", href: "/products/04" },
        { name: "KUNTI V — La Veste Papillon", href: "/products/06" },
        { name: "ARJUNA II — Le Jean Papillon", href: "/products/02" },
        { name: "Voir Toutes les Pièces", href: "/#iconic-products" },
      ],
      atelierLinks: [
        { name: "Philosophie du Masterji", href: "/about#values" },
        { name: "Héritage Tailleur Indien", href: "/#fit-atelier" },
        { name: "Guide des Tailles Personnalisé", href: "/#fit-atelier" },
        { name: "14 Salons Mondiaux", href: "/locations" },
      ],
      boutiquesList: [
        { name: "Mumbai • Bandra-Kurla & Kala Ghoda", href: "/locations" },
        { name: "Tokyo • Ginza & Minami-Aoyama", href: "/locations" },
        { name: "Dubaï • DIFC & Dubai Mall", href: "/locations" },
        { name: "New York • Madison Ave & SoHo", href: "/locations" },
        { name: "Explorer les 14 Boutiques Mondiales →", href: "/locations" },
      ],
      copyright: "© 2026 MAISON KUMAR. TOUS DROITS RÉSERVÉS.",
      rights: "CONDITIONS GÉNÉRALES • CONFIDENTIALITÉ • MENTIONS LÉGALES",
    },
  },
  JA: {
    localeName: "日本語",
    isRtl: false,
    nav: {
      menu: "メニュー",
      close: "閉じる",
      collection: "コレクション",
      search: "検索",
      welcome: "KUMAR メゾンへようこそ",
    },
    menuOverlay: {
      close: "閉じる",
      welcome: "KUMAR メゾンへようこそ",
      categories: [
        {
          title: "コレクション",
          href: "#iconic-products",
          subItems: [
            { name: "ARJUNA I — セルビッジジーンズ", desc: "14.5oz 生インディゴ・セルビッジデニム • €1,300", href: "/products/01" },
            { name: "ARJUNA II — モス（蛾）ジーンズ", desc: "手作業によるボタニカルモスエンブレム • €1,900", href: "/products/02" },
            { name: "KARNA II — ドリップトラウザー", desc: "フルグレインレザー流麗インレイ • €1,700", href: "/products/03" },
            { name: "KARNA I — ホライゾンジャケット", desc: "岡山産セルビッジ＆トスカーナレザー襟 • €5,900", href: "/products/04" },
            { name: "KUNTI I — 生トラッカージャケット", desc: "ミニマルセルビッジ＆フレンチカーフスキントリム • €4,500", href: "/products/05" },
            { name: "KUNTI II — モスジャケット", desc: "純金糸の蛾の刺繍を施した最高峰セルビッジ • €6,500", href: "/products/06" },
          ],
        },
        {
          title: "クラフツマンシップ",
          href: "#character-selvedge",
          subItems: [
            { name: "セルビッジの品格", desc: "旧式織機の風合い、ほつれない耳と藍の深み" },
            { name: "フルグレインレザー", desc: "自然なシボ感と豊かな経年変化を宿す最上級原皮" },
            { name: "二大工芸のシネマ", desc: "デニムのステッチワークとレザー工芸の対話" },
          ],
        },
        {
          title: "フィッティング体験",
          href: "#fit-atelier",
          subItems: [
            { name: "精密サイズ測定", desc: "5つの身体寸法から導くパーフェクトフィット" },
            { name: "サイズガイド", desc: "肩幅・胸囲・ウエスト・袖丈チャート" },
            { name: "来店採寸予約", desc: "専属のマスタージ職人によるプライベート採寸" },
          ],
        },
        {
          title: "店舗ロケーション",
          href: "/locations",
          subItems: [
            { name: "世界14の旗艦サロン", desc: "インド、日本、UAE、米国、イタリア、スペイン、英国", href: "/locations" },
            { name: "Googleマップで開く", desc: "世界各国の直営ブティックへの道案内", href: "/locations" },
          ],
        },
        {
          title: "メゾンについて",
          href: "/about",
          subItems: [
            { name: "メゾン", desc: "起源、哲学、そして受け継がれる現代の家宝", href: "/about" },
            { name: "私たちの物語", desc: "セルビッジデニムとフルグレインレザーの出逢い", href: "/about" },
            { name: "私たちの価値観", desc: "インド職人技への敬意と至高のパーソナルフィット", href: "/about" },
          ],
        },
      ],
    },
    hero: {
      eyebrow: "オート・セルビッジ＆レザー",
      title1: "デニムとレザーが出逢い、",
      titleCharacter: "個性",
      title2: "が形を成す。",
      subtitle:
        "インド伝統の仕立て技術に根ざし、厳選された最高峰の素材と身体に吸い付くような至高のフィットを紡ぎ出します。",
      ctaMaison: "メゾンを体験する",
      ctaMasterji: "マスタージの物語",
    },
    selvedge: {
      eyebrow: "素材の真髄",
      title: "セルビッジの品格",
      desc: "旧式のシャトル織機で時間をかけて織り上げられたセルビッジデニム。ほつれのない美しい赤耳と重厚な手触り、深みのある濃紺が、時と共に自分だけの美しいアタリと色落ちへと進化します。",
      cta: "織りの美を追求する",
    },
    leather: {
      eyebrow: "厳選された原皮",
      title: "フルグレインレザーの魅力",
      desc: "原皮の最も強靭で美しい銀面層を活かしたフルグレインレザー。自然なシワや質感をそのまま残し、使い込むほどにしなやかさと深みある艶やかなパティーナを生み出します。",
      cta: "パティーナを確かめる",
    },
    cinema: {
      eyebrow: "アトリエの対話",
      titlePart1: "二つの工芸。",
      titlePart2: "ひとつの美学。",
      desc: "デニム職人とレザーアルティザンのシンクロナイズされた手仕事。力強いセルビッジの針目と、手作業で磨き上げられた革が織りなす極上の瞬間をご覧ください。",
      leftBadge: "左：セルビッジの針仕事",
      rightBadge: "右：フルグレインレザー工芸",
      pause: "一時停止",
      play: "動画を再生",
      tag: "4K マスタリング • デュアル画面",
    },
    atelier: {
      eyebrow: "インド伝統の仕立て技術",
      title: "KUMAR フィット・アトリエ",
      quote: "マスタージ、仕立ての中心にある技。",
      desc: "KUMARにおいて、マスタージは単なる職人ではなく魂そのものです。デニムとレザー双方の特性を熟知した仕立て専門職人が、身体の骨格とプロポーションを見極め、極上の着心地を実現します。",
      tagline: "— 至高のフィットは、身に纏えば解る。 —",
      card1Eyebrow: "建築的ルーツ",
      card1Title: "ジョードプル青の都",
      card2Eyebrow: "息づくアトリエ",
      card2Title: "職人の手仕事",
      card3Eyebrow: "工業的プレシジョン",
      card3Title: "マスタージの真髄",
    },
    products: {
      eyebrow: "パーマネント コレクション",
      title: "アイコニック・ピース",
      subtitle: "ハンドクラフトによるセルビッジデニムとレザーのシルエットギャラリー。",
      viewSilhouette: "商品を見る (View Product)",
      materialsOrigin: "素材と原産地",
      fulfillment: "配送",
      preStocked: "プレストック・エディション",
      items: [
        {
          id: "01",
          tag: "作品 01",
          title: "ARJUNA I — セルビッジ ジーンズ",
          price: "€1,300",
          category: "セルビッジデニム",
          image: "/images/products/ARJUNA I — The Selvedge Jean (€1,300).jpg",
          materials: "14.5oz 日本産シャトル織機生デニム • 純銅リベット",
          description:
            "旧式織機で織り上げられた端正なジーンズ。チェーンステッチ仕上げ、特注KUMAR刻印金具、そして美しい赤耳ラインが際立ちます。",
        },
        {
          id: "02",
          tag: "作品 02",
          title: "ARJUNA II — モス（蛾）ジーンズ",
          price: "€1,900",
          category: "エンボスデニム",
          image: "/images/products/ARJUNA II — The Moth Jean( €1,900).jpg",
          materials: "ディープインディゴ セルビッジデニム • 手彫りレザー モスエンブレム",
          description:
            "高密度セルビッジデニムに、職人が手彫りで仕上げた植物性レザーの蛾（モス）の紋章をバックポケットに精緻に縫い付けました。",
        },
        {
          id: "03",
          tag: "作品 03",
          title: "DRAUPADI I — ハウストート",
          price: "€6,900",
          category: "ファインレザーグッズ",
          image: "/images/products/DRAUPADI I — The House Tote (€6,900).jpg",
          materials: "ダイヤジャカード インディゴデニム • トスカーナ産フルグレインサドルレザー",
          description:
            "幾何学的なデニムジャカードのボディに、植物タンニン鞣しのイタリアンレザーハンドルを組み合わせた最高級トートバッグ。",
        },
        {
          id: "04",
          tag: "作品 04",
          title: "KARNA I — ホライズン ジャケット",
          price: "€5,900",
          category: "アウターウェア",
          image: "/images/products/KARNA I — The Horizon Jacket ( €5,900 ).jpeg",
          materials: "14.5oz 日本産セルビッジデニム • タン色フルグレインレザーカラー＆カフス",
          description:
            "剛健なインディゴデニムに、手作業で磨かれた上質レザーの襟と袖口を融合したKUMARの象徴的ジャケット。柔らかな裏地付き。",
        },
        {
          id: "05",
          tag: "作品 05",
          title: "KUNTI IV — ハウスジャケット",
          price: "€4,900",
          category: "アウターウェア",
          image: "/images/products/KUNTI IV — The House Jacket (€4,900).jpg",
          materials: "ディープインディゴ セルビッジキャンバス • アンティーク真鍮シャンクボタン",
          description:
            "肩回りの運動量を計算したマスタージ仕立てのワークウェアジャケット。ツインパッチポケットと堅牢な二重ステッチ仕様。",
        },
        {
          id: "06",
          tag: "作品 06",
          title: "KUNTI V — モス（蛾）ジャケット",
          price: "€6,900",
          category: "アトリエ限定エディション",
          image: "/images/products/KUNTI V — The Moth Jacket ( €6,900).jpeg.jpeg",
          materials: "リジッドセルビッジデニム • フルグレインレザートリム • 手刺繍モス紋章",
          description:
            "艶やかなレザーアクセントと背面にあしらわれた繊細なモスの手刺繍が圧倒的な存在感を放つ、アトリエ屈指の限定ピース。",
        },
      ],
    },
    footer: {
      manifesto: "デニムとレザーが出逢い、個性が形を成す。",
      subline:
        "手仕上げのセルビッジデニムと極上フルグレインレザー。熟練のインド職人による至高の仕立てをお届けします。",
      gazetteTitle: "メゾン・ガゼットへのご登録",
      gazetteDesc: "限定コレクションの先行案内や特別アトリエ体験のご案内をお届けします。",
      placeholder: "メールアドレスを入力",
      subscribe: "登録する",
      subscribed: "登録完了",
      craftTitle: "クラフツマンシップ",
      collectionTitle: "コレクション",
      atelierTitle: "マスタージと仕立て",
      boutiquesTitle: "プライベートブティック",
      craftLinks: [
        { name: "メゾンについて", href: "/about" },
        { name: "セルビッジの品格", href: "/#character-selvedge" },
        { name: "フルグレインレザーの魅力", href: "/#character-leather" },
        { name: "二大工芸のシネマ", href: "/#craft-cinema" },
      ],
      collectionLinks: [
        { name: "ARJUNA I — セルビッジジーンズ", href: "/products/01" },
        { name: "KARNA I — ホライゾンジャケット", href: "/products/04" },
        { name: "KUNTI V — モスジャケット", href: "/products/06" },
        { name: "ARJUNA II — モスジーンズ", href: "/products/02" },
        { name: "全コレクションを見る", href: "/#iconic-products" },
      ],
      atelierLinks: [
        { name: "マスタージの哲学", href: "/about#values" },
        { name: "インド仕立ての伝統", href: "/#fit-atelier" },
        { name: "精密サイズ測定ガイド", href: "/#fit-atelier" },
        { name: "世界14の旗艦サロン", href: "/locations" },
      ],
      boutiquesList: [
        { name: "ムンバイ • BKC＆カラ・ゴーダ", href: "/locations" },
        { name: "東京 • 銀座＆南青山", href: "/locations" },
        { name: "ドバイ • DIFC＆ドバイモール", href: "/locations" },
        { name: "ニューヨーク • マディソン＆ソーホー", href: "/locations" },
        { name: "世界14旗艦サロン一覧へ →", href: "/locations" },
      ],
      copyright: "© 2026 KUMAR MAISON. ALL RIGHTS RESERVED.",
      rights: "利用規約 • プライバシーポリシー • 法的表記",
    },
  },
  AR: {
    localeName: "العربية",
    isRtl: true,
    nav: {
      menu: "القائمة",
      close: "إغلاق",
      collection: "المجموعة",
      search: "بحث",
      welcome: "مرحبًا بكم في دار كومار",
    },
    menuOverlay: {
      close: "إغلاق",
      welcome: "مرحبًا بكم في دار كومار",
      categories: [
        {
          title: "المجموعة",
          href: "#iconic-products",
          subItems: [
            { name: "ARJUNA I — جينز السيلفدج", desc: "دنيم سيلفدج خام نيلي 14.5 أونصة • 1,300 يورو", href: "/products/01" },
            { name: "ARJUNA II — جينز الفراشة الليلية", desc: "شعار فراشة نباتي منقوش يدويًا • 1,900 يورو", href: "/products/02" },
            { name: "KARNA II — بنطال دريب", desc: "تطعيمات جلد طبيعي كامل انسيابي • 1,700 يورو", href: "/products/03" },
            { name: "KARNA I — جاكيت هورايزون", desc: "دنيم أوكاياما مع ياقة جلد توسكاني • 5,900 يورو", href: "/products/04" },
            { name: "KUNTI I — تركر دنيم خام", desc: "سيلفدج بسيط مع حواف جلد عجل فرنسي • 4,500 يورو", href: "/products/05" },
            { name: "KUNTI II — جاكيت الفراشة الليلية", desc: "تطريز حريري ذهبي على دنيم السيلفدج • 6,500 يورو", href: "/products/06" },
          ],
        },
        {
          title: "الحِرفية",
          href: "#character-selvedge",
          subItems: [
            { name: "طابع دنيم السيلفدج", desc: "نول تقليدي ضيق، حواف مصقولة وعمق نيلي أخاذ" },
            { name: "جلد كامل الحبيبات", desc: "طبقة خارجية مرنة ذات ملمس طبيعي يزداد بهاءً" },
            { name: "سينما الحِرف المتناغمة", desc: "حوار الحياكة المتقنة بين نسيج الدنيم وفن الجلود" },
          ],
        },
        {
          title: "تجربة القياس",
          href: "#fit-atelier",
          subItems: [
            { name: "محدد القياس المثالي", desc: "مطابقة دقيقة مبنية على 5 قياسات أساسية للجسم" },
            { name: "دليل المقاسات", desc: "جداول الكتف، الصدر، الخصر والأكمام" },
            { name: "حجز موعد أخذ القياس", desc: "جلسات قياس خاصة مع حرفيي كومار في المتجر" },
          ],
        },
        {
          title: "مواقع متاجرنا",
          href: "/locations",
          subItems: [
            { name: "14 صالونًا عالميًا", desc: "الهند، اليابان، الإمارات، أمريكا، إيطاليا، إسبانيا، بريطانيا", href: "/locations" },
            { name: "الموقع على خرائط Google", desc: "اتجاهات مباشرة إلى أرقى صالوناتنا العالمية", href: "/locations" },
          ],
        },
        {
          title: "عن الدار",
          href: "/about",
          subItems: [
            { name: "الدار الفاخرة", desc: "الأصول والفلسفة ورؤية القطع المتوارثة عبر الأجيال", href: "/about" },
            { name: "قصتنا", desc: "حيث يلتقي دنيم السيلفدج العتيق بالجلد الطبيعي الكامل", href: "/about" },
            { name: "قيمنا", desc: "تكريم الحرفية الهندية الأصيلة والقصات الشخصية المتقنة", href: "/about" },
          ],
        },
      ],
    },
    hero: {
      eyebrow: "دنيم السيلفدج والجلد الفاخر",
      title1: "حيث يلتقي الدنيم بالجلد،",
      titleCharacter: "الطابع الفريد",
      title2: "يتشكل ويتجسد.",
      subtitle:
        "متجذرة في براعة الحرفية الهندية، تجمع كل قطعة بين أنقى الخامات وقصة مصممة خصيصًا لتلائم شخصيتك.",
      ctaMaison: "استكشف الدار",
      ctaMasterji: "قصة الماسترجي",
    },
    selvedge: {
      eyebrow: "أصالة المواد",
      title: "طابع دنيم السيلفدج",
      desc: "يُنسج دنيم السيلفدج على أنوال تقليدية ضيقة لتشكيل حواف محكمة تقاوم التلف والانسلال. يمنحه نسيجه المتماسك ولون النيلي الساحر طابعًا يزداد نعومة وجاذبية مع مرور الزمن.",
      cta: "استكشف أسرار النسيج",
    },
    leather: {
      eyebrow: "جلود حرفية فاخرة",
      title: "طابع الجلد كامل الحبيبات",
      desc: "يُقص من أقوى طبقات الجلد الخارجية، ليحتفظ بمسامه الطبيعية وعلاماته الأصيلة. متين وفائق المرونة، ويكتسب مع الاستخدام بريقًا عميقًا يعكس تفرد صاحبه.",
      cta: "اكتشف رونق الجلود",
    },
    cinema: {
      eyebrow: "حوار الأتيليه",
      titlePart1: "مهارتان حرفيتان.",
      titlePart2: "معيار واحد للكمال.",
      desc: "شاهد التناغم الفني بين صانع الدنيم وخبير الجلود — حيث تلتقي حياكة السيلفدج المعقدة مع الجلود المصقولة يدويًا بأعلى درجات الإتقان.",
      leftBadge: "اليسار: حياكة السيلفدج",
      rightBadge: "اليمين: صناعة الجلد الأصيل",
      pause: "إيقاف مؤقت",
      play: "تشغيل الفيديو",
      tag: "ماستر 4K • شاشتان متزامنتان",
    },
    atelier: {
      eyebrow: "إرث الخياطة الهندية",
      title: "أتيليه كومار للقصات والمقاس",
      quote: "الماسترجي، في جوهر القصة والإتقان.",
      desc: "في دار كومار، يمثل الماسترجي ركيزة التجربة برمتها. حرفيونا مدربون على تطويع الدنيم والجلد معًا، وبعين ثاقبة للنسب والتفصيل، يقدمون قصة هندية أصيلة في ثوب فخامة عالمية.",
      tagline: "— أروع المقاسات ما يُشعر به في كل حركة. —",
      card1Eyebrow: "جذور معمارية",
      card1Title: "مدينة جودبور الزرقاء",
      card2Eyebrow: "أتيليه في حركة مستمرة",
      card2Title: "يد الحرفي الماهرة",
      card3Eyebrow: "دقة صناعية متناهية",
      card3Title: "براعة الماسترجي",
    },
    products: {
      eyebrow: "المجموعة الدائمة",
      title: "قطع أيقونية",
      subtitle: "معرض فريد من تصاميم دنيم السيلفدج والجلد المشغولة بحرفية يدوية رفيعة.",
      viewSilhouette: "عرض المنتج (View Product)",
      materialsOrigin: "المواد ومصدر الصنع",
      fulfillment: "التسليم",
      preStocked: "إصدار متوفر حصريًا",
      items: [
        {
          id: "01",
          tag: "القطعة 01",
          title: "ARJUNA I — بنطال السيلفدج الكلاسيكي",
          price: "€1,300",
          category: "دنيم سيلفدج",
          image: "/images/products/ARJUNA I — The Selvedge Jean (€1,300).jpg",
          materials: "دنيم سيلفدج ياباني خام 14.5 أونصة • مسامير نحاس نقي",
          description:
            "بنطال بقصة هندسية منسوج على أنوال قديمة. مزود بخياطة الحلقات المتسلسلة، وأزرار نحاسية خاصة منقوشة باسم كومار وشريط السيلفدج الشهير.",
        },
        {
          id: "02",
          tag: "القطعة 02",
          title: "ARJUNA II — بنطال العثة المطرز",
          price: "€1,900",
          category: "دنيم منقوش",
          image: "/images/products/ARJUNA II — The Moth Jean( €1,900).jpg",
          materials: "دنيم سيلفدج نيلي مكثف • شعار فراشة العثة من الجلد المنحوت يدويًا",
          description:
            "مصنوع من دنيم السيلفدج الفاخر ومزين برمز العثة النباتية المنحوتة يدويًا على الجلد والمثبتة بإتقان على الجيب الخلفي.",
        },
        {
          id: "03",
          tag: "القطعة 03",
          title: "DRAUPADI I — حقيبة تسوق الدار",
          price: "€6,900",
          category: "المصنوعات الجلدية الفاخرة",
          image: "/images/products/DRAUPADI I — The House Tote (€6,900).jpg",
          materials: "دنيم جاكار منسوج بنمط الماس • جلد سروج توسكاني كامل الحبيبات",
          description:
            "حقيبة تسوق استثنائية تجمع بين متانة نسيج الدنيم الجاكار ومقابض الجلد الإيطالي المصقول والمصبوغ بالمواد الطبيعية.",
        },
        {
          id: "04",
          tag: "القطعة 04",
          title: "KARNA I — سترة هورايزون",
          price: "€5,900",
          category: "الملابس الخارجية والسترات",
          image: "/images/products/KARNA I — The Horizon Jacket ( €5,900 ).jpeg",
          materials: "دنيم سيلفدج ياباني 14.5 أونصة • ياقة وأساور من الجلد الطبيعي بلون التان",
          description:
            "التصميم الأيقوني لكومار الذي يجمع بين صلابة الدنيم النيلي ونعومة الجلد المدبوغ للياقة والأساور، مبطنة بالقطن الناعم الخفيف.",
        },
        {
          id: "05",
          tag: "القطعة 05",
          title: "KUNTI IV — سترة الدار",
          price: "€4,900",
          category: "الملابس الخارجية والسترات",
          image: "/images/products/KUNTI IV — The House Jacket (€4,900).jpg",
          materials: "قماش سيلفدج بلون النيلي العميق • أزرار نحاسية معتقة",
          description:
            "سترة عمل فاخرة مفصلة براحة أكتاف الماسترجي الانسيابية، وجيوب مزدوجة وخياطة متبادلة معززة بالخيوط الذهبية.",
        },
        {
          id: "06",
          tag: "القطعة 06",
          title: "KUNTI V — سترة العثة الحصرية",
          price: "€6,900",
          category: "إصدار الأتيليه الخاص",
          image: "/images/products/KUNTI V — The Moth Jacket ( €6,900).jpeg.jpeg",
          materials: "دنيم سيلفدج خام • حواف جلدية كاملة • تطريز يدوي لشعار العثة",
          description:
            "إصدار محدود من الأتيليه يجمع بين لمسات الجلد الفاخرة، والقطع النحاسية المخصصة، وتطريز متقن لشعار العثة على الظهر.",
        },
      ],
    },
    footer: {
      manifesto: "حيث يلتقي الدنيم بالجلد، يتشكل الطابع الفريد.",
      subline:
        "دنيم سيلفدج مشغول يدويًا مدمج مع جلد كامل الحبيبات، بقصات أبدية على أيدي أمهر خبراء الخياطة الهندية.",
      gazetteTitle: "انضم إلى نشرة الدار الخاصة",
      gazetteDesc: "احصل على دعوات حصرية لأحدث الإصدارات الموسمية وزيارات الأتيليه الخاصة.",
      placeholder: "أدخل بريدك الإلكتروني",
      subscribe: "اشتراك",
      subscribed: "تم الاشتراك",
      craftTitle: "الحِرفية",
      collectionTitle: "المجموعة",
      atelierTitle: "الماسترجي والمقاس",
      boutiquesTitle: "المتاجر الخاصة",
      craftLinks: [
        { name: "عن الدار الفاخرة", href: "/about" },
        { name: "طابع دنيم السيلفدج", href: "/#character-selvedge" },
        { name: "رونق الجلد كامل الحبيبات", href: "/#character-leather" },
        { name: "سينما الحِرف المتناغمة", href: "/#craft-cinema" },
      ],
      collectionLinks: [
        { name: "ARJUNA I — جينز السيلفدج", href: "/products/01" },
        { name: "KARNA I — جاكيت هورايزون", href: "/products/04" },
        { name: "KUNTI V — جاكيت الفراشة الليلية", href: "/products/06" },
        { name: "ARJUNA II — جينز الفراشة", href: "/products/02" },
        { name: "استكشف كامل المجموعة", href: "/#iconic-products" },
      ],
      atelierLinks: [
        { name: "فلسفة الماسترجي", href: "/about#values" },
        { name: "إرث الخياطة الهندية الأصيلة", href: "/#fit-atelier" },
        { name: "دليل المقاسات التفاعلي", href: "/#fit-atelier" },
        { name: "14 صالونًا عالميًا", href: "/locations" },
      ],
      boutiquesList: [
        { name: "مومباي • بي كيه سي وكالا غودا", href: "/locations" },
        { name: "طوكيو • جينزا ومينامي أوياما", href: "/locations" },
        { name: "دبي • مركز دبي المالي ودبي مول", href: "/locations" },
        { name: "نيويورك • ماديسون أفينيو وسوهو", href: "/locations" },
        { name: "استكشف كافة الصالونات الـ 14 →", href: "/locations" },
      ],
      copyright: "© 2026 دار كومار للأزياء الراقية. جميع الحقوق محفوظة.",
      rights: "شروط الخدمة • سياسة الخصوصية • الإشعارات القانونية",
    },
  },
};
