
import { useState, useMemo } from "react";
import {
  Zap,
  Building,
  Home as HomeIcon,
  Clock,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PlugZap,
  Gauge,
  BatteryCharging,
} from "lucide-react";

import { motion } from "framer-motion";
import { company } from "../data/company";
import { heroReveal, reveal } from "../utils/motion";
import { visibleProducts } from "../data/products";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";

function EVCharging() {
  const [application, setApplication] = useState("home");
  const [priority, setPriority] = useState("standard");

  const evProducts = useMemo(
    () => visibleProducts.filter((product) => product.category === "EV Charging"),
    []
  );

  const recommendation = useMemo(() => {
    if (application === "home") {
      if (priority === "standard") {
        return {
          title: "AC Smart Wallbox",
          rating: "7.4 kW - 11 kW",
          type: "AC Home Charging",
          connector: "Type 2 (IEC 62196)",
          chargeTime: "Depends on vehicle and battery capacity",
          powerReq: "Single-phase or three-phase supply",
          idealFor: "Overnight home charging, apartments and private parking.",
        };
      }

      return {
        title: "Higher-Power AC Charging",
        rating: "Up to 22 kW",
        type: "Higher-Power AC",
        connector: "Type 2",
        chargeTime: "Depends on vehicle onboard charger",
        powerReq: "Suitable three-phase electrical supply",
        idealFor: "Multi-car homes, residential communities and workplace parking.",
      };
    }

    if (priority === "standard") {
      return {
        title: "Commercial AC Charging Station",
        rating: "Up to 22 kW",
        type: "Destination AC Charging",
        connector: "Type 2",
        chargeTime: "Suitable for longer parking durations",
        powerReq: "Three-phase commercial electrical supply",
        idealFor: "Offices, hotels, malls and employee parking facilities.",
      };
    }

    return {
      title: "DC Fast Charging Station",
      rating: "60 kW - 240 kW",
      type: "DC Fast Charging",
      connector: "CCS2",
      chargeTime: "Vehicle-dependent; rapid charging may take around 30-60 minutes",
      powerReq: "High-capacity three-phase supply; site assessment required",
      idealFor: "Highway stops, commercial charging hubs and fleet depots.",
    };
  }, [application, priority]);

  const whatsappSelectorUrl = useMemo(() => {
    const msg =
      `Hello RPG Technologies, I used the EV Charger Selector on your website:\n` +
      `- Application: ${application === "home" ? "Residential / Home" : "Commercial / Business"}\n` +
      `- Priority: ${priority === "standard" ? "Standard / Destination" : "Fast Turnaround"}\n` +
      `- Recommended Setup: ${recommendation.title}\n` +
      `- Power Range: ${recommendation.rating}\n\n` +
      `I would like to enquire about equipment options and site feasibility.`;

    return buildWhatsAppUrl(msg);
  }, [application, priority, recommendation]);

  return (
    <main className="ev-page">

      
{/* HERO */}
<section className="ev2-hero">
  <div className="ev2-hero-image">
    <img
      src="/images/ev/ev-hero.jpg"
      alt="Electric vehicle charging infrastructure"
    />
  </div>

  <div className="ev2-hero-overlay" />

  <div className="container ev2-hero-content">
    <motion.span className="ev2-eyebrow" {...heroReveal(0)}>
      <Zap size={15} />
      ELECTRIC MOBILITY SOLUTIONS
    </motion.span>

    <motion.h1 {...heroReveal(0.1)}>
      Powering the <span>Future of Mobility</span>
    </motion.h1>

    <motion.p {...heroReveal(0.2)}>
      Explore EV charging solutions for homes, apartments,
      workplaces and commercial charging facilities.
      Find the right charging approach for your requirements.
    </motion.p>

    <motion.div className="ev2-hero-actions" {...heroReveal(0.3)}>
      <Button to="/contact" variant="gold">
        Discuss Your Requirement
        <ArrowRight size={17} />
      </Button>

      <a href="#ev-solutions" className="ev2-text-link">
        Explore Solutions
        <ArrowRight size={17} />
      </a>
    </motion.div>

    <motion.div className="ev2-hero-points" {...heroReveal(0.4)}>
      <span><CheckCircle2 size={16} /> Residential charging</span>
      <span><CheckCircle2 size={16} /> Commercial infrastructure</span>
      <span><CheckCircle2 size={16} /> AC and DC options</span>
    </motion.div>
  </div>
</section>



      {/* INTRODUCTION */}
      <section className="ev2-intro section" id="ev-solutions">
        <div className="container ev2-intro-grid">
          <motion.div className="ev2-intro-content" {...reveal({ x: -30, y: 0 })}>
            <span className="ev2-eyebrow">EV CHARGING SOLUTIONS</span>

            <h2>
              The Right Charging Setup Starts With the Right Plan
            </h2>

            <p>
              Every EV charging requirement is different. Home charging,
              workplace parking and public charging facilities each need
              a suitable combination of charger capacity, electrical supply
              and installation planning.
            </p>

            <p>
              RPG Technologies helps customers explore suitable charging
              equipment and discuss their site requirements.
            </p>

            <div className="ev2-intro-features">
              <div>
                <PlugZap />
                <span>AC and DC charger options</span>
              </div>
              <div>
                <Gauge />
                <span>Charging capacity guidance</span>
              </div>
              <div>
                <ShieldCheck />
                <span>Electrical feasibility discussions</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="ev2-intro-image" {...reveal({ x: 30, y: 0 })}>
            <img
              src="/images/ev/ev-business-complex.jpg"
              alt="Modern electric vehicle charging facility"
              loading="lazy"
            />

            <div className="ev2-image-label">
              <span>SMARTER MOBILITY</span>
              <strong>Charging infrastructure for tomorrow</strong>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHARGING SOLUTIONS */}
      <section className="section ev2-solutions-section">
        <div className="container">
          <motion.div className="ev2-section-heading" {...reveal()}>
            <div>
              <span className="ev2-eyebrow">OUR SOLUTIONS</span>
              <h2>Charging Solutions for Every Environment</h2>
            </div>

            <p>
              From private parking spaces to commercial charging
              facilities, explore the possibilities.
            </p>
          </motion.div>

          <div className="ev2-solution-grid">
            <motion.article className="ev2-solution-card" {...reveal({ y: 35, delay: 0.0 })}>
              <div className="ev2-solution-image">
                <img
                  src="/images/ev/ev-home-charging.jpg"
                  alt="Residential electric vehicle wallbox charger"
                  loading="lazy"
                />
                <span className="ev2-image-tag">RESIDENTIAL</span>
              </div>

              <div className="ev2-solution-content">
                <div className="ev2-solution-icon">
                  <HomeIcon />
                </div>

                <h3>Home & Residential Charging</h3>

                <p>
                  Convenient charging options for individual homes,
                  apartments and residential communities.
                </p>

                <ul>
                  <li>Wall-mounted AC chargers</li>
                  <li>Private parking installations</li>
                  <li>Residential electrical assessment</li>
                </ul>

                <button
                  type="button"
                  className="ev2-inline-link"
                  onClick={() => {
                    setApplication("home");
                    setPriority("standard");
                    document.getElementById("ev-selector")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Explore home charging <ArrowRight size={17} />
                </button>
              </div>
            </motion.article>

            <motion.article className="ev2-solution-card" {...reveal({ y: 35, delay: 0.12 })}>
              <div className="ev2-solution-image">
                <img
                  src="/images/ev/ev-commercial-hub.jpg"
                  alt="Commercial electric vehicle charging hub"
                  loading="lazy"
                />
                <span className="ev2-image-tag">COMMERCIAL</span>
              </div>

              <div className="ev2-solution-content">
                <div className="ev2-solution-icon">
                  <Building />
                </div>

                <h3>Commercial & Business Charging</h3>

                <p>
                  Charging infrastructure options for offices, hotels,
                  shopping centres, fleets and public facilities.
                </p>

                <ul>
                  <li>Commercial AC charging stations</li>
                  <li>DC fast charging options</li>
                  <li>Site capacity and infrastructure planning</li>
                </ul>

                <button
                  type="button"
                  className="ev2-inline-link"
                  onClick={() => {
                    setApplication("business");
                    setPriority("faster");
                    document.getElementById("ev-selector")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Explore commercial charging <ArrowRight size={17} />
                </button>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SELECTOR */}
      <section className="section ev2-selector-section" id="ev-selector">
        <div className="container">
          <motion.div className="ev2-section-heading centered" {...reveal()}>
            <div>
              <span className="ev2-eyebrow">INTERACTIVE CHARGER GUIDE</span>
              <h2>Find a Suitable Charging Setup</h2>
            </div>

            <p>
              Select your application and charging priority to explore
              a suggested charger configuration.
            </p>
          </motion.div>

          <motion.div className="ev2-selector-layout" {...reveal()}>
            <div className="ev2-selector-controls">
              <div className="ev2-control-block">
                <span className="ev2-step-label">STEP 01</span>
                <h3>Where will the charger be used?</h3>

                <div className="ev2-choice-grid">
                  <button
                    type="button"
                    className={`ev2-choice ${application === "home" ? "active" : ""}`}
                    onClick={() => setApplication("home")}
                    aria-pressed={application === "home"}
                  >
                    <HomeIcon />
                    <strong>Home & Residential</strong>
                    <span>Homes and apartments</span>
                  </button>

                  <button
                    type="button"
                    className={`ev2-choice ${application === "business" ? "active" : ""}`}
                    onClick={() => setApplication("business")}
                    aria-pressed={application === "business"}
                  >
                    <Building />
                    <strong>Commercial & Business</strong>
                    <span>Workplaces and public sites</span>
                  </button>
                </div>
              </div>

              <div className="ev2-control-block">
                <span className="ev2-step-label">STEP 02</span>
                <h3>What is your charging priority?</h3>

                <div className="ev2-priority-list">
                  <button
                    type="button"
                    className={`ev2-priority ${priority === "standard" ? "active" : ""}`}
                    onClick={() => setPriority("standard")}
                    aria-pressed={priority === "standard"}
                  >
                    <Clock />
                    <span>
                      <strong>Standard / Destination</strong>
                      <small>Longer parking and regular charging</small>
                    </span>
                    <span className="ev2-radio-dot" />
                  </button>

                  <button
                    type="button"
                    className={`ev2-priority ${priority === "faster" ? "active" : ""}`}
                    onClick={() => setPriority("faster")}
                    aria-pressed={priority === "faster"}
                  >
                    <Zap />
                    <span>
                      <strong>Fast Turnaround</strong>
                      <small>Higher-power charging requirements</small>
                    </span>
                    <span className="ev2-radio-dot" />
                  </button>
                </div>
              </div>

              <div className="ev2-selector-photo">
                <img
                  src="/images/ev/ev-charger-closeup.jpg"
                  alt="Electric vehicle charger and connector"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="ev2-result-card">
              <div className="ev2-result-top">
                <span className="ev2-result-label">
                  <Zap size={15} /> SUGGESTED CONFIGURATION
                </span>
                <span className="ev2-result-type">{recommendation.type}</span>
              </div>

              <h3>{recommendation.title}</h3>

              <div className="ev2-result-rating">
                <BatteryCharging />
                <span>{recommendation.rating}</span>
              </div>

              <p className="ev2-result-description">
                {recommendation.idealFor}
              </p>

              <div className="ev2-result-specs">
                <div>
                  <span>Connector standard</span>
                  <strong>{recommendation.connector}</strong>
                </div>

                <div>
                  <span>Charging duration</span>
                  <strong>{recommendation.chargeTime}</strong>
                </div>

                <div>
                  <span>Power requirement</span>
                  <strong>{recommendation.powerReq}</strong>
                </div>
              </div>

              <div className="ev2-disclaimer">
                <HelpCircle size={17} />
                <p>
                  These are indicative options, not a final equipment
                  specification. Actual charging performance depends on
                  the vehicle, battery, charger and available electrical supply.
                </p>
              </div>

              <a
                href={whatsappSelectorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ev2-whatsapp-button"
              >
                <MessageCircle size={19} />
                Enquire About This Setup
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AC VS DC */}
      <section className="section ev2-comparison-section">
        <div className="container">
          <motion.div className="ev2-section-heading centered" {...reveal()}>
            <div>
              <span className="ev2-eyebrow">CHARGING TECHNOLOGY</span>
              <h2>Understanding AC and DC Charging</h2>
            </div>

            <p>
              The right technology depends on where the vehicle is parked,
              how long it stays and what the vehicle supports.
            </p>
          </motion.div>

          <div className="ev2-comparison-grid">
            <motion.article className="ev2-comparison-card" {...reveal({ y: 35, delay: 0.0 })}>
              <div className="ev2-comparison-image">
                <img
                  src="/images/ev/ev-charging-detail.jpg"
                  alt="Electric vehicle AC charging equipment"
                  loading="lazy"
                />
                <span>AC CHARGING</span>
              </div>

              <div className="ev2-comparison-content">
                <h3>AC Charging</h3>
                <p>
                  Alternating current is supplied to the vehicle, where its
                  onboard charger converts it for battery charging.
                </p>

                <div className="ev2-comparison-points">
                  <div><CheckCircle2 /> Commonly used for home charging</div>
                  <div><CheckCircle2 /> Suitable for longer parking durations</div>
                  <div><CheckCircle2 /> Type 2 connector options</div>
                  <div><CheckCircle2 /> Available in different power ratings</div>
                </div>

                <span className="ev2-power-label">Typical options</span>
                <strong className="ev2-power-value">3.3 kW to 22 kW</strong>
              </div>
            </motion.article>

            <motion.article className="ev2-comparison-card" {...reveal({ y: 35, delay: 0.15 })}>
              <div className="ev2-comparison-image">
                <img
                  src="/images/ev/ev-commercial-charging.jpg"
                  alt="Electric vehicle DC fast charging station"
                  loading="lazy"
                />
                <span>DC FAST CHARGING</span>
              </div>

              <div className="ev2-comparison-content">
                <h3>DC Fast Charging</h3>
                <p>
                  The charging station converts AC power to DC and supplies
                  it directly to the vehicle battery through compatible equipment.
                </p>

                <div className="ev2-comparison-points">
                  <div><CheckCircle2 /> Suitable for rapid charging locations</div>
                  <div><CheckCircle2 /> Useful for fleet and highway facilities</div>
                  <div><CheckCircle2 /> CCS2 connector options</div>
                  <div><CheckCircle2 /> Requires higher-capacity infrastructure</div>
                </div>

                <span className="ev2-power-label">Typical options</span>
                <strong className="ev2-power-value">30 kW to 240 kW</strong>
              </div>
            </motion.article>
          </div>

          <motion.p className="ev2-comparison-note" {...reveal()}>
            Power ratings are indicative examples. Vehicle compatibility,
            supported charging rates and installation requirements must
            be checked before selecting equipment.
          </motion.p>
        </div>
      </section>

      {/* SITE FEASIBILITY */}
      <section className="section ev2-feasibility-section">
        <div className="container">
          <div className="ev2-feasibility-grid">
            <motion.div className="ev2-feasibility-content" {...reveal({ x: -30, y: 0 })}>
              <span className="ev2-eyebrow">SITE EVALUATION</span>

              <h2>
                Planning EV Charging Infrastructure for Your Property
              </h2>

              <p className="ev2-feasibility-lead">
                A suitable charging installation begins with understanding
                the site, electrical capacity and expected usage.
              </p>

              <div className="ev2-feasibility-steps">
                <div className="ev2-feasibility-step">
                  <span>01</span>
                  <div>
                    <h3>Electrical Load Assessment</h3>
                    <p>
                      Review the available electrical supply, sanctioned load
                      and additional capacity requirements.
                    </p>
                  </div>
                </div>

                <div className="ev2-feasibility-step">
                  <span>02</span>
                  <div>
                    <h3>Charger Selection</h3>
                    <p>
                      Evaluate AC or DC charging options based on vehicle
                      compatibility and expected parking duration.
                    </p>
                  </div>
                </div>

                <div className="ev2-feasibility-step">
                  <span>03</span>
                  <div>
                    <h3>Installation Planning</h3>
                    <p>
                      Discuss cabling, protection equipment, metering,
                      parking layout and site-specific requirements.
                    </p>
                  </div>
                </div>
              </div>

              <Button to="/contact" variant="primary">
                Discuss Site Feasibility
                <ArrowRight size={17} />
              </Button>
            </motion.div>

            <motion.div className="ev2-feasibility-visual" {...reveal({ x: 30, y: 0, delay: 0.1 })}>
              <img
                src="/images/ev/ev-commercial-hub.jpg"
                alt="Commercial EV charging infrastructure"
                loading="lazy"
              />

              <div className="ev2-feasibility-contact">
                <span className="ev2-eyebrow">TALK TO OUR TEAM</span>
                <h3>Have a site to evaluate?</h3>
                <p>
                  Discuss your property, parking facility or commercial
                  charging requirements with RPG Technologies.
                </p>

                <div>
                  <strong>Location</strong>
                  <span>{company.location}</span>
                </div>

                <div>
                  <strong>Phone</strong>
                  <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
                </div>

                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>

                <a
                  href={buildWhatsAppUrl(
                    "Hello RPG Technologies, I would like to discuss EV charging infrastructure for my property."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ev2-contact-link"
                >
                  <MessageCircle size={17} />
                  Chat on WhatsApp
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATALOGUE */}
      <section className="section ev2-catalogue-section">
        <div className="container">
          <motion.div className="ev2-section-heading" {...reveal()}>
            <div>
              <span className="ev2-eyebrow">PRODUCT CATALOGUE</span>
              <h2>Explore EV Charging Hardware</h2>
            </div>

            <p>
              Explore charging equipment categories for residential,
              commercial and fleet applications.
            </p>
          </motion.div>

          {evProducts.length > 0 ? (
            <div className="grid grid-2">
              {evProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="ev2-empty-catalogue">
              <PlugZap size={38} />
              <h3>Charging Equipment Enquiries</h3>
              <p>
                Share your required power rating, connector standard
                and application with our team to discuss suitable options.
              </p>

              <Button to="/contact" variant="primary">
                Enquire About Hardware
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ev2-final-cta">
        <div className="ev2-final-image">
          <img
            src="/images/ev/ev-charging.jpg"
            alt="Electric vehicle at a modern charging station"
            loading="lazy"
          />
        </div>

        <div className="ev2-final-overlay" />

        <motion.div className="container ev2-final-content" {...reveal({ y: 30 })}>
          <span className="ev2-eyebrow">YOUR EV CHARGING JOURNEY</span>
          <h2>Ready to Plan Your EV Charging Setup?</h2>
          <p>
            Connect with RPG Technologies to discuss charging equipment,
            electrical feasibility and infrastructure requirements.
          </p>

          <div className="ev2-final-actions">
            <Button to="/contact" variant="gold">
              Get in Touch
              <ArrowRight size={17} />
            </Button>

            <a
              href={buildWhatsAppUrl(
                "Hello RPG Technologies, I would like to enquire about EV charging solutions."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="ev2-final-whatsapp"
            >
              <MessageCircle size={18} />
              WhatsApp Enquiry
            </a>
          </div>
        </motion.div>
      </section>

    </main>
  );
}

export default EVCharging;
