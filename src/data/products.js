
// Product catalogue.
//
// SHOW_UNCONFIRMED controls whether pending products are visible.
// Keep it false for publishing. Set it to true only on your own computer
// to review layouts, then set it back to false before deployment.

export const SHOW_UNCONFIRMED = true;

// brand: keep null unless RPG confirms in writing which brands it sells.

export const products = [
  {
    id: 1,
    slug: "solar-panels",
    name: "Solar Panels",
    category: "Solar",
    brand: null,
    badge: "Solar Energy",
    description: "Explore solar panel options for your requirement.",
    overview:
      "Product details, specifications and availability are confirmed individually. Contact RPG Technologies for current information.",
   image: "/images/products/Solar%20Panels.jpg",
    featured: false,
    status: "pending",
    highlights: [
      "Explore available panel options",
      "Confirm technical specifications",
      "Ask about current availability",
    ],
    specifications: [],
  },
  {
    id: 2,
    slug: "solar-inverters",
    name: "Solar Inverters",
    category: "Solar",
    brand: null,
    badge: "Power Solutions",
    description: "Explore inverter options for solar power systems.",
    overview:
      "Product details, specifications and availability are confirmed individually. Contact RPG Technologies for current information.",
    image: "/images/products/Solar%20Inverters.jpg",
    featured: false,
    status: "pending",
    highlights: [
      "Explore available inverter options",
      "Confirm capacity and compatibility",
      "Ask about current availability",
    ],
    specifications: [],
  },
  {
    id: 3,
    slug: "on-grid-rooftop-systems",
    name: "On-Grid Rooftop Systems",
    category: "Solar",
    brand: null,
    badge: "Rooftop Solar",
    description: "Explore grid-connected rooftop solar system options.",
    overview:
      "System design depends on your roof, electricity usage and site conditions. Contact RPG Technologies to discuss your requirement.",
    image: "/images/products/On-Grid%20Rooftop%20Systems.jpg",
    featured: false,
    status: "pending",
    highlights: [
      "Explore grid-connected rooftop options",
      "Discuss your site and requirement",
      "Confirm system details before deciding",
    ],
    specifications: [],
  },
  {
    id: 4,
    slug: "ac-ev-chargers",
    name: "AC EV Chargers",
    category: "EV Charging",
    brand: null,
    badge: "EV Charging",
    description: "Explore AC charging equipment for electric vehicles.",
    overview:
      "Charger options, connector types and ratings are confirmed individually. Contact RPG Technologies for available models.",
    image: "/images/products/ac-ev-charger.svg",
    featured: false,
    status: "pending",
    highlights: [
      "Explore AC charging options",
      "Confirm connector and power ratings",
      "Ask about installation requirements",
    ],
    specifications: [],
  },
  {
    id: 5,
    slug: "dc-ev-charging-stations",
    name: "DC EV Charging Stations",
    category: "EV Charging",
    brand: null,
    badge: "Electric Mobility",
    description: "Explore higher-capacity DC charging station options.",
    overview:
      "Station ratings and suitability depend on the site and the vehicles served. Contact RPG Technologies to discuss your requirement.",
    image: "/images/products/dc-ev-charging-station.svg",
    featured: false,
    status: "pending",
    highlights: [
      "Explore higher-capacity station options",
      "Confirm electrical supply requirements",
      "Discuss your site and usage",
    ],
    specifications: [],
  },
];

// Use visibleProducts for every product display.
export const visibleProducts = products.filter(
  (product) => product.status === "confirmed" || SHOW_UNCONFIRMED
);
