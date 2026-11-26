
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sun,
  Zap,
  House,
  BatteryCharging,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    number: "01",
    title: "Solar Panels",
    description: "Explore solar panel options for your requirements.",
    icon: Sun,
    path: "/solar-solutions",
    type: "Solar Energy",
  },
  {
    number: "02",
    title: "Solar Inverters",
    description: "Discover inverter options for solar power systems.",
    icon: Zap,
    path: "/solar-solutions",
    type: "Power Solutions",
  },
  {
    number: "03",
    title: "Rooftop Solar Systems",
    description: "Explore grid-connected rooftop solar system options.",
    icon: House,
    path: "/solar-solutions",
    type: "Rooftop Solar",
  },
  {
    number: "04",
    title: "AC EV Chargers",
    description: "Explore AC charging equipment for electric vehicles.",
    icon: BatteryCharging,
    path: "/ev-charging",
    type: "EV Charging",
  },
  {
    number: "05",
    title: "DC EV Charging Stations",
    description: "Explore higher-capacity DC charging station options.",
    icon: Zap,
    path: "/ev-charging",
    type: "Electric Mobility",
  },
];

function HomeProductCategories() {
  return (
    <section className="rpg-products-section">
      <div className="container">
        <motion.div
          className="rpg-products-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="rpg-section-label">
            <span />
            EXPLORE OUR CATALOGUE
          </span>

          <div className="rpg-products-heading-row">
            <h2>
              Solutions for a
              <br />
              <span>cleaner tomorrow.</span>
            </h2>

            <p>
              Explore solar energy and EV charging product
              categories. Product specifications and availability
              can be confirmed directly with our team.
            </p>
          </div>
        </motion.div>

        <div className="rpg-products-layout">
          <motion.div
            className="rpg-products-intro"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rpg-products-intro-icon">
              <Sun size={32} />
            </div>

            <span>EXPLORE POSSIBILITIES</span>

            <h3>
              Clean energy.
              <br />
              Smarter choices.
            </h3>

            <p>
              Find a product category that matches your
              requirement and get in touch to discuss the details.
            </p>

            <Link to="/contact" className="rpg-products-main-link">
              Ask About Products
              <ArrowUpRight size={19} />
            </Link>
          </motion.div>

          <div className="rpg-products-list">
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="rpg-product-row"
                  key={item.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Link to={item.path} className="rpg-product-row-link">
                    <span className="rpg-product-number">
                      {item.number}
                    </span>

                    <span className="rpg-product-icon">
                      <Icon size={22} />
                    </span>

                    <span className="rpg-product-copy">
                      <span>{item.type}</span>
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </span>

                    <span className="rpg-product-arrow">
                      <ArrowUpRight size={20} />
                    </span>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeProductCategories;
