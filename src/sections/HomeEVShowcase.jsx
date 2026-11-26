
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BatteryCharging,
  Building2,
  BriefcaseBusiness,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

function HomeEVShowcase() {
  return (
    <section className="rpg-ev-showcase">
      <div className="rpg-ev-image">
        <img
          src="/images/ev/ev-charging.jpg"
          alt="Electric vehicle charging station"
          loading="lazy"
        />
      </div>

      <div className="rpg-ev-overlay" />

      <div className="container rpg-ev-inner">
        <motion.div
          className="rpg-ev-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="rpg-ev-label">
            <BatteryCharging size={17} />
            ELECTRIC VEHICLE CHARGING
          </span>

          <h2>
            Powering the
            <br />
            <span>Electric Journey.</span>
          </h2>

          <p>
            Explore EV charging possibilities for apartment
            parking facilities and commercial locations.
            Discover charging solutions and business
            opportunities with RPG Technologies.
          </p>

          <Link to="/ev-charging" className="rpg-ev-main-link">
            Explore EV Charging
            <ArrowUpRight size={19} />
          </Link>
        </motion.div>

        <div className="rpg-ev-options">
          <Link to="/ev-charging" className="rpg-ev-option">
            <span>
              <Building2 size={22} />
            </span>
            <div>
              <strong>EV Charging Solutions</strong>
              <small>Explore charging options</small>
            </div>
            <ArrowUpRight size={18} />
          </Link>

          <Link
            to="/contact?topic=EV%20Charging%20Opportunities"
            className="rpg-ev-option"
          >
            <span>
              <BriefcaseBusiness size={22} />
            </span>
            <div>
              <strong>EV Charging Opportunities</strong>
              <small>Discuss business enquiries</small>
            </div>
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="rpg-ev-bottom">
          <Zap size={16} />
          EXPLORING ELECTRIC MOBILITY
        </div>
      </div>
    </section>
  );
}

export default HomeEVShowcase;
