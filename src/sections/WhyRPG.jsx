
import { motion } from "framer-motion";
import {
  Sun,
  PanelsTopLeft,
  BatteryCharging,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    number: "01",
    icon: Sun,
    title: "Solar Energy",
    description:
      "Explore rooftop solar possibilities for residential and commercial requirements.",
  },
  {
    number: "02",
    icon: PanelsTopLeft,
    title: "Solar Equipment",
    description:
      "Discover solar panels, inverters and related equipment options.",
  },
  {
    number: "03",
    icon: BatteryCharging,
    title: "Electric Mobility",
    description:
      "Explore EV charging possibilities for apartments and commercial locations.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Personalised Enquiries",
    description:
      "Discuss your requirements with the RPG Technologies team and confirm available options.",
  },
];

function WhyRPG() {
  return (
    <section className="rpg-why-section">
      <div className="container">
        <div className="rpg-why-layout">
          <motion.div
            className="rpg-why-intro"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="rpg-why-label">
              <span />
              ABOUT RPG TECHNOLOGIES
            </span>

            <h2>
              Your Partner in
              <br />
              <span>Clean Energy.</span>
            </h2>

            <p>
              RPG Technologies brings together solar energy,
              solar equipment and electric vehicle charging
              enquiries. We help visitors explore relevant
              categories and connect with our team to discuss
              their requirements.
            </p>

            <Link to="/about" className="rpg-why-link">
              Know More About Us
              <ArrowUpRight size={19} />
            </Link>
          </motion.div>

          <div className="rpg-why-list">
            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="rpg-why-item"
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <span className="rpg-why-number">
                    {item.number}
                  </span>

                  <span className="rpg-why-icon">
                    <Icon size={23} />
                  </span>

                  <div className="rpg-why-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyRPG;
