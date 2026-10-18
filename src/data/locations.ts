export interface BoutiqueLocation {
  id: string;
  country: string;
  countryKey: "India" | "Japan" | "UAE" | "USA" | "Italy" | "Spain" | "UK";
  city: string;
  district: string;
  address: string;
  googleMapsUrl: string;
  image: string;
  hours: string;
  phone: string;
  services: string[];
}

export const STORE_LOCATIONS: BoutiqueLocation[] = [
  // 1. INDIA
  {
    id: "mumbai-bkc",
    country: "India",
    countryKey: "India",
    city: "Mumbai",
    district: "Bandra-Kurla Complex",
    address: "Around Jio World Plaza, G Block, Bandra Kurla Complex, Mumbai, Maharashtra 400051",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jio+World+Plaza+Bandra+Kurla+Complex+Mumbai",
    image: "/images/Location/boutique-india-night.jpg",
    hours: "Monday – Sunday: 11:00 AM – 9:00 PM",
    phone: "+91 22 8892 0100",
    services: ["Private Fitting Salon", "Masterji Tailoring", "Bespoke Measurement", "Champagne Reception"],
  },
  {
    id: "delhi-vasant-kunj",
    country: "India",
    countryKey: "India",
    city: "New Delhi",
    district: "Vasant Kunj",
    address: "Around DLF Emporio, 4 Nelson Mandela Marg, Vasant Kunj II, New Delhi 110070",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=DLF+Emporio+Vasant+Kunj+New+Delhi",
    image: "/images/Location/boutique-india-day.jpg",
    hours: "Monday – Sunday: 11:00 AM – 9:00 PM",
    phone: "+91 11 4455 0200",
    services: ["Masterji Bespoke Atelier", "Personal Styling", "Private Client Lounge", "Made-to-Order"],
  },

  // 2. JAPAN
  {
    id: "tokyo-ginza",
    country: "Japan",
    countryKey: "Japan",
    city: "Tokyo",
    district: "Ginza District",
    address: "Around Chuo-dori Avenue, Ginza, Chuo City, Tokyo 104-0061",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ginza+Chuo+City+Tokyo+Japan",
    image: "/images/Location/boutique-sculptural.jpg",
    hours: "Daily: 11:00 AM – 8:00 PM (By Appointment & Walk-in)",
    phone: "+81 3 5524 8800",
    services: ["Japanese Selvedge Archive", "Masterji Consultation", "Private Fitting Suite", "Tax-Free Salon"],
  },
  {
    id: "osaka-shinsaibashi",
    country: "Japan",
    countryKey: "Japan",
    city: "Osaka",
    district: "Shinsaibashi / Midosuji",
    address: "Around Midosuji Luxury Boulevard, Shinsaibashisuji, Chuo Ward, Osaka 542-0085",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Midosuji+Shinsaibashi+Osaka+Japan",
    image: "/images/Location/boutique-green.jpg",
    hours: "Daily: 11:00 AM – 8:00 PM",
    phone: "+81 6 6281 9900",
    services: ["Denim Patina Care", "Bespoke Measurement", "VIP Lounge", "White-Glove Delivery"],
  },

  // 3. UAE
  {
    id: "dubai-fashion-avenue",
    country: "UAE",
    countryKey: "UAE",
    city: "Dubai",
    district: "Downtown Dubai",
    address: "Around Dubai Mall's Fashion Avenue, Financial Center Road, Downtown Dubai",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fashion+Avenue+The+Dubai+Mall+Downtown+Dubai",
    image: "/images/Location/salon-interior.jpg",
    hours: "Monday – Thursday: 10:00 AM – 11:00 PM | Friday – Sunday: 10:00 AM – 12:00 AM",
    phone: "+971 4 362 7500",
    services: ["Private Royal Majlis Salon", "Bespoke Masterji Fitting", "Concierge Delivery", "Private Viewing"],
  },
  {
    id: "abudhabi-galleria",
    country: "UAE",
    countryKey: "UAE",
    city: "Abu Dhabi",
    district: "Al Maryah Island",
    address: "Around The Galleria, Luxury Collection, Al Maryah Island, Abu Dhabi",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Galleria+Al+Maryah+Island+Abu+Dhabi",
    image: "/images/Location/boutique-stone-arch.jpg",
    hours: "Monday – Thursday: 10:00 AM – 10:00 PM | Friday – Saturday: 10:00 AM – 12:00 AM",
    phone: "+971 2 493 7400",
    services: ["Private Salon Suite", "Dedicated Concierge", "Masterji Tailor On-Site", "Personal Fitting"],
  },

  // 4. USA
  {
    id: "new-york-fifth-avenue",
    country: "USA",
    countryKey: "USA",
    city: "New York",
    district: "Fifth Avenue / Madison Avenue",
    address: "Around Fifth Avenue & 57th Street, Manhattan, New York, NY 10022",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fifth+Avenue+New+York+NY",
    image: "/images/Location/boutique-stone-arch.jpg",
    hours: "Monday – Saturday: 10:00 AM – 7:00 PM | Sunday: 12:00 PM – 6:00 PM",
    phone: "+1 212 753 4000",
    services: ["Manhattan Flagship Salon", "Masterji In-Residence", "Private Fitting Floor", "Private Courier"],
  },
  {
    id: "los-angeles-rodeo-drive",
    country: "USA",
    countryKey: "USA",
    city: "Los Angeles",
    district: "Beverly Hills",
    address: "Around Rodeo Drive & Wilshire Boulevard, Beverly Hills, CA 90210",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rodeo+Drive+Beverly+Hills+CA",
    image: "/images/Location/salon-interior.jpg",
    hours: "Monday – Saturday: 10:00 AM – 6:30 PM | Sunday: 12:00 PM – 5:00 PM",
    phone: "+1 310 275 3000",
    services: ["Private VIP Bungalow", "Bespoke Measurement", "Beverly Hills Concierge", "Styling Suite"],
  },

  // 5. ITALY
  {
    id: "milan-montenapoleone",
    country: "Italy",
    countryKey: "Italy",
    city: "Milan",
    district: "Quadrilatero della Moda",
    address: "Around Via Montenapoleone, 20121 Milano MI, Italy",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Via+Montenapoleone+Milan+Italy",
    image: "/images/Location/boutique-green.jpg",
    hours: "Monday – Saturday: 10:30 AM – 7:30 PM | Sunday: 11:00 AM – 7:00 PM",
    phone: "+39 02 7600 5500",
    services: ["Tuscan Leather Showcase", "Italian Fitting Salon", "Masterji Tailor Appointments", "Aperitivo Service"],
  },
  {
    id: "rome-condotti",
    country: "Italy",
    countryKey: "Italy",
    city: "Rome",
    district: "Spanish Steps / Via Condotti",
    address: "Around Via dei Condotti, Piazza di Spagna district, 00187 Roma RM, Italy",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Via+dei+Condotti+Rome+Italy",
    image: "/images/Location/boutique-stone-arch.jpg",
    hours: "Monday – Sunday: 10:30 AM – 7:30 PM",
    phone: "+39 06 6790 3300",
    services: ["Historic Palazzo Salon", "Private Measurement Room", "Bespoke Tailoring", "Private Viewing"],
  },

  // 6. SPAIN
  {
    id: "madrid-salamanca",
    country: "Spain",
    countryKey: "Spain",
    city: "Madrid",
    district: "Barrio de Salamanca",
    address: "Around Calle de Serrano, Barrio de Salamanca, 28001 Madrid, Spain",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Calle+de+Serrano+Barrio+de+Salamanca+Madrid+Spain",
    image: "/images/Location/boutique-green.jpg",
    hours: "Monday – Saturday: 10:30 AM – 8:30 PM",
    phone: "+34 91 435 6000",
    services: ["Salamanca Fitting Salon", "Bespoke Tailoring", "Private Viewing Suite", "Concierge Service"],
  },
  {
    id: "barcelona-passeig-de-gracia",
    country: "Spain",
    countryKey: "Spain",
    city: "Barcelona",
    district: "Passeig de Gràcia",
    address: "Around Passeig de Gràcia Boulevard, Eixample, 08007 Barcelona, Spain",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Passeig+de+Gracia+Barcelona+Spain",
    image: "/images/Location/boutique-stone-arch.jpg",
    hours: "Monday – Saturday: 10:00 AM – 8:30 PM",
    phone: "+34 93 487 7200",
    services: ["Modernist Salon Suite", "Masterji In-Store Fitting", "Personalized Adjustments", "White-Glove Shipping"],
  },

  // 7. UK
  {
    id: "london-bond-street",
    country: "UK",
    countryKey: "UK",
    city: "London",
    district: "Mayfair",
    address: "Around New Bond Street, Mayfair, London W1S 2TE, United Kingdom",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=New+Bond+Street+Mayfair+London+UK",
    image: "/images/Location/boutique-green.jpg",
    hours: "Monday – Saturday: 10:00 AM – 7:00 PM | Sunday: 12:00 PM – 6:00 PM",
    phone: "+44 20 7493 8000",
    services: ["Mayfair Private Townhouse Salon", "Masterji Bespoke Atelier", "Private Fitting Floor", "Tea Reception"],
  },
  {
    id: "manchester-king-street",
    country: "UK",
    countryKey: "UK",
    city: "Manchester",
    district: "King Street District",
    address: "Around King Street Retail Quarter, Manchester M2 4AY, United Kingdom",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=King+Street+Manchester+UK",
    image: "/images/Location/salon-interior.jpg",
    hours: "Monday – Saturday: 10:00 AM – 6:00 PM | Sunday: 11:30 AM – 5:30 PM",
    phone: "+44 161 832 9000",
    services: ["Private Fitting Suite", "Masterji Tailor Appointments", "Personal Styling", "Made-to-Order"],
  },
];
