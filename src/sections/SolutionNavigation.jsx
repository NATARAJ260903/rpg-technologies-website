
import { motion } from "framer-motion";
import {
  Sun,
  PanelsTopLeft,
  BatteryCharging,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    number: "01",
    title: "Rooftop Solar",
    description: "Solar solutions for homes and businesses.",
    icon: Sun,
    path: "/solar-solutions",
  },
  {
    number: "02",
    title: "Solar Equipment",
    description: "Panels, inverters and related products.",
    icon: PanelsTopLeft,
    path: "/solar-solutions?type=equipment",
  },
  {
    number: "03",
    title: "EV Charging",
    description: "Charging options for apartments and businesses.",
    icon: BatteryCharging,
    path: "/ev-charging",
  },
  {
    number: "04",
    title: "Business Enquiries",
    description: "Discuss EV charging business opportunities.",
    icon: BriefcaseBusiness,
    path: "/contact?topic=EV%20Charging%20Opportunities",
  },
];

function SolutionNavigation() {
  return (
    <section className="rpg-solution-navigation">
      <div className="container">
        <div className="rpg-solution-heading">
          <span>WHAT WE OFFER</span>
          <h2>Explore Our Solutions</h2>
          <p>
            Discover solutions across solar energy and electric mobility.
          </p>
        </div>

        <div className="rpg-solution-grid">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                className="rpg-solution-grid-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Link to={item.path} className="rpg-solution-card">
                  <span className="rpg-solution-number">
                    {item.number}
                  </span>

                  <span className="rpg-solution-icon">
                    <Icon size={24} />
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span className="rpg-solution-link">
                    Explore <ArrowUpRight size={17} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SolutionNavigation;
