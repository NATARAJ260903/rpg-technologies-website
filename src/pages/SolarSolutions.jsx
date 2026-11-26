
import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sun,
  Zap,
  Shield,
  MessageCircle,
  Info,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { visibleProducts } from "../data/products";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import {
  ResidentialSolar,
  CommercialSolar,
  EquipmentSolar,
} from "../components/SolarCategoryContent";
import Button from "../components/Button";
import { heroReveal, reveal } from "../utils/motion";


const categoryContent = {
  all: {
    eyebrow: "Renewable Energy Solutions",
    title: "Solar Energy Systems for Homes & Businesses",
    description:
      "Explore rooftop solar possibilities, solar equipment and clean energy options for a greener tomorrow.",
    highlights: [
      "Residential rooftop solar",
      "Commercial solar possibilities",
      "Solar panels and inverters",
    ],
  },

  residential: {
    eyebrow: "Residential Solar Solutions",
    title: "Bring Solar Energy Home",
    description:
      "Explore rooftop solar possibilities for independent houses and residential properties. Discover system types, capacity requirements and equipment options.",
    highlights: [
      "Rooftop solar possibilities for homes",
      "Explore on-grid, off-grid and hybrid systems",
      "Discuss household electricity requirements",
    ],
  },

  commercial: {
    eyebrow: "Commercial Solar Solutions",
    title: "Power Your Business with Solar",
    description:
      "Discover rooftop solar possibilities for commercial buildings, offices and business premises. Explore system configurations based on your energy requirements.",
    highlights: [
      "Commercial rooftop solar possibilities",
      "Explore different solar configurations",
      "Discuss business energy requirements",
    ],
  },

  equipment: {
    eyebrow: "Solar Equipment",
    title: "Explore Solar Panels & Inverters",
    description:
      "Discover solar panels, inverters and related solar equipment categories. Contact RPG Technologies to confirm product specifications and availability.",
    highlights: [
      "Solar panel enquiries",
      "Solar inverter enquiries",
      "Product specifications and availability",
    ],
  },
};

const categoryCards = [
  {
    type: "residential",
    title: "Residential Solar",
    description: "Rooftop solar possibilities for independent houses and homes.",
    image: "/images/solar/residential-solar.jpg",
  },
  {
    type: "commercial",
    title: "Commercial Solar",
    description: "Solar options for offices, buildings and business premises.",
    image: "/images/solar/commercial-solar.jpg",
  },
  {
    type: "equipment",
    title: "Solar Equipment",
    description: "Solar panels, inverters and related clean-energy equipment.",
    image: "/images/solar/solar-equipment.jpg",
  },
];

function SolarSolutions() {
  const [searchParams, setSearchParams] = useSearchParams();

  const requestedType = searchParams.get("type") || "all";

  const selectedType = Object.hasOwn(categoryContent, requestedType)
    ? requestedType
    : "all";

  const activeContent = categoryContent[selectedType];
  const detailRef = useRef(null);

  // Each button below opens its own content; keep the URL in step so the
  // links from the home page (?type=...) open the same content.
  const chooseType = (type) => {
    if (type === selectedType) {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setSearchParams({ type });
  };

  // Bring the chosen content into view.
  useEffect(() => {
    if (selectedType === "all") return;
    const frame = requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [selectedType]);

  const scrollToCalculator = () => {
    document
      .getElementById("solar-calculator")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Calculator state
  const [monthlyBill, setMonthlyBill] = useState("3000");
  const [tariffRate, setTariffRate] = useState("8");
  const [sunHours, setSunHours] = useState("4.5");

  // Filter solar products
  const solarProducts = useMemo(
    () => visibleProducts.filter((p) => p.category === "Solar"),
    []
  );

  // Solar capacity estimate
  const calculation = useMemo(() => {
    const bill = Math.max(0, parseFloat(monthlyBill) || 0);
    const rate = Math.max(0, parseFloat(tariffRate) || 0);
    const sun = Math.max(0, parseFloat(sunHours) || 4.5);
    const systemEfficiency = 0.8;

    if (bill <= 0 || rate <= 0 || sun <= 0) {
      return {
        monthlyUnits: 0,
        rawCapacity: "0.00",
        recommendedCapacity: "0.0",
        estimatedGeneration: 0,
        approxAreaSqFt: 0,
      };
    }

    const monthlyUnits = bill / rate;
    const dailyUnits = monthlyUnits / 30;
    const rawCapacity = dailyUnits / (sun * systemEfficiency);

    const recommendedCapacity = Math.ceil(rawCapacity * 2) / 2;

    const estimatedGeneration = Math.round(
      recommendedCapacity * sun * systemEfficiency * 30
    );

    const approxAreaSqFt = Math.round(recommendedCapacity * 90);

    return {
      monthlyUnits: Math.round(monthlyUnits),
      rawCapacity: rawCapacity.toFixed(2),
      recommendedCapacity: recommendedCapacity.toFixed(1),
      estimatedGeneration,
      approxAreaSqFt,
    };
  }, [monthlyBill, tariffRate, sunHours]);

  // WhatsApp calculator message
  const whatsappEstimateUrl = useMemo(() => {
    const msg =
      `Hello RPG Technologies, I used the Solar Calculator on your website:\n` +
      `- Monthly Electricity Bill: ₹${monthlyBill || 0}\n` +
      `- Tariff Rate: ₹${tariffRate || 8}/unit\n` +
      `- Recommended System Size: ~${calculation.recommendedCapacity} kW\n` +
      `- Estimated Monthly Generation: ~${calculation.estimatedGeneration} units\n\n` +
      `I would like to discuss a customized solar rooftop enquiry.`;

    return buildWhatsAppUrl(msg);
  }, [monthlyBill, tariffRate, calculation]);


  return (
    <div className="solar-page">

      {/* Dynamic Page Hero - FIRST */}
      <section className="page-hero">
        <div className="container">
          <motion.span className="eyebrow" {...heroReveal(0)}>
            {activeContent.eyebrow}
          </motion.span>

          <motion.h1 {...heroReveal(0.1)}>{activeContent.title}</motion.h1>

          <motion.p className="lead" {...heroReveal(0.2)}>
            {activeContent.description}
          </motion.p>

          <motion.div
            className="solar-category-highlights"
            {...heroReveal(0.3)}
          >
            {activeContent.highlights.map((item) => (
              <div key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Navigation - AFTER HERO */}
      <section className="section section-alt solar-category-section">
        <div className="container">
          <div className="solar-category-cards">
            {categoryCards.map((card, index) => (
              <motion.button
                key={card.type}
                type="button"
                {...reveal({ y: 35, delay: index * 0.12 })}
                onClick={() => chooseType(card.type)}
                aria-pressed={selectedType === card.type}
                className={`solar-category-card${
                  selectedType === card.type ? " active" : ""
                }`}
              >
                <span className="solar-category-card-image">
                  <img src={card.image} alt={card.title} loading="lazy" />
                </span>
                <span className="solar-category-card-body">
                  <strong>{card.title}</strong>
                  <span>{card.description}</span>
                  <em>
                    View details
                    <ArrowRight size={16} />
                  </em>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Content for the selected category - each button has its own */}
      {selectedType !== "all" && (
        <section
          className="section solar-detail-section"
          ref={detailRef}
          key={selectedType}
        >
          <div className="container">
            {selectedType === "residential" && (
              <ResidentialSolar onCalculator={scrollToCalculator} />
            )}
            {selectedType === "commercial" && (
              <CommercialSolar onCalculator={scrollToCalculator} />
            )}
            {selectedType === "equipment" && (
              <EquipmentSolar products={solarProducts} />
            )}

            <button
              type="button"
              className="solar-detail-back"
              onClick={() => setSearchParams({})}
            >
              View all solar solutions
            </button>
          </div>
        </section>
      )}

      {/* Solar Rooftop Calculator */}
      <section
        className="section solar-calculator-section"
        id="solar-calculator"
      >
        <div className="container">
          <motion.div className="section-heading" {...reveal()}>
            <span className="eyebrow">Solar Rooftop Calculator</span>
            <h2>Estimate Your Solar Requirements</h2>
            <p>
              Enter your electricity bill and usage details to get an
              approximate rooftop solar system recommendation.
            </p>
          </motion.div>

          <div className="calculator-wrapper">
            <motion.div
              className="calculator-inputs"
              {...reveal({ x: -30, y: 0 })}
            >
              <h3>Your Electricity Details</h3>

              <div className="form-group">
                <label htmlFor="monthlyBill">
                  Monthly Electricity Bill
                </label>
                <div className="input-with-unit">
                  <span className="unit-prefix">₹</span>
                  <input
                    id="monthlyBill"
                    className="calc-input"
                    type="number"
                    min="0"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                  />
                </div>
                <span className="field-hint">
                  Enter your average monthly electricity bill.
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="tariffRate">
                  Electricity Tariff Rate
                </label>
                <div className="input-with-unit">
                  <span className="unit-prefix">₹</span>
                  <input
                    id="tariffRate"
                    className="calc-input"
                    type="number"
                    min="0"
                    step="0.5"
                    value={tariffRate}
                    onChange={(e) => setTariffRate(e.target.value)}
                  />
                </div>
                <span className="field-hint">
                  Approximate cost per electricity unit.
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="sunHours">
                  Average Daily Sunlight Hours
                </label>
                <div className="input-with-unit">
                  <input
                    id="sunHours"
                    className="calc-input"
                    type="number"
                    min="0"
                    max="24"
                    step="0.5"
                    value={sunHours}
                    onChange={(e) => setSunHours(e.target.value)}
                  />
                  <span className="unit-prefix unit-suffix">Hours</span>
                </div>
                <span className="field-hint">
                  Estimated usable sunlight per day.
                </span>
              </div>
            </motion.div>

            <motion.div
              className="calculator-results"
              {...reveal({ x: 30, y: 0 })}
            >
              <span className="eyebrow">Your Solar Estimate</span>
              <h3>Recommended System Size</h3>

              <div className="result-metric highlighted">
                <span className="metric-value">
                  {calculation.recommendedCapacity}
                </span>
                <span className="metric-unit">kW</span>
                <span className="metric-label">
                  Estimated Solar Capacity
                </span>
              </div>

              <div className="results-grid">
                <div className="result-metric">
                  <span className="metric-label">
                    Monthly Consumption
                  </span>
                  <span className="metric-value">
                    {calculation.monthlyUnits}
                  </span>
                  <span className="metric-unit">Units</span>
                </div>

                <div className="result-metric">
                  <span className="metric-label">
                    Monthly Generation
                  </span>
                  <span className="metric-value">
                    {calculation.estimatedGeneration}
                  </span>
                  <span className="metric-unit">Units</span>
                </div>

                <div className="result-metric">
                  <span className="metric-label">
                    Approximate Roof Area
                  </span>
                  <span className="metric-value">
                    {calculation.approxAreaSqFt}
                  </span>
                  <span className="metric-unit">Sq. Ft.</span>
                </div>

                <div className="result-metric">
                  <span className="metric-label">
                    Calculated Capacity
                  </span>
                  <span className="metric-value">
                    {calculation.rawCapacity}
                  </span>
                  <span className="metric-unit">kW</span>
                </div>
              </div>

              <p className="calc-assumptions">
                Estimates use 80% system efficiency and 90 sq. ft. per kW.
                Actual generation and installation requirements may vary.
              </p>

              <div className="calc-actions">
                <a
                  href={whatsappEstimateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-block"
                >
                  <MessageCircle size={18} />
                  Discuss This Estimate
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolarSolutions;
