
import { motion } from "framer-motion";
import { ArrowUpRight, House, Building2, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const solarItems = [
  {
    number: "01",
    title: "Residential Solar",
    description:
      "Explore rooftop solar possibilities for homes and residential properties.",
    image: "/images/solar/residential-solar.jpg",
    icon: House,
    path: "/solar-solutions?type=residential",
    className: "rpg-solar-residential",
  },
  {
    number: "02",
    title: "Commercial Solar",
    description:
      "Discover solar energy options for commercial buildings and businesses.",
    image: "/images/solar/commercial-solar.jpg",
    icon: Building2,
    path: "/solar-solutions?type=commercial",
    className: "rpg-solar-commercial",
  },
  {
    number: "03",
    title: "Solar Equipment",
    description:
      "Explore solar panels, inverters and related clean-energy equipment.",
    image: "/images/solar/solar-equipment.jpg",
    icon: Sun,
    path: "/solar-solutions?type=equipment",
    className: "rpg-solar-equipment",
  },
];

function SolarShowcase() {
  return (
    <section className="rpg-solar-section" id="solar-showcase">
      <div className="container">
        <motion.div
          className="rpg-solar-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="rpg-section-label">
            <span />
            CLEAN ENERGY SOLUTIONS
          </span>

          <div className="rpg-solar-heading-row">
            <h2>
              Make the switch.
              <br />
              <span>Choose solar.</span>
            </h2>

            <p>
              Move towards a greener tomorrow with solar energy.
              Explore rooftop solar possibilities and equipment
              options with RPG Technologies.
            </p>
          </div>
        </motion.div>

        <div className="rpg-solar-editorial-grid">
          {solarItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                className={`rpg-solar-feature ${item.className}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <Link
                  to={item.path}
                  className="rpg-solar-feature-link"
                  aria-label={`Explore ${item.title}`}
                >
                  <div className="rpg-solar-feature-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                    <span className="rpg-solar-image-label">
                      {item.number}
                    </span>
                  </div>

                  <div className="rpg-solar-feature-content">
                    <div className="rpg-solar-category">
                      <Icon size={17} />
                      SOLAR SOLUTIONS
                    </div>

                    <div className="rpg-solar-feature-title">
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>

                      <span className="rpg-solar-arrow">
                        <ArrowUpRight size={21} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        <div className="rpg-solar-bottom">
          <span>POWER A GREENER TOMORROW</span>

          <Link to="/solar-solutions">
            Discover Solar Solutions
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SolarShowcase;
