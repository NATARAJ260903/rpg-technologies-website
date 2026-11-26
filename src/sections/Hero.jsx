
import { motion } from "framer-motion";
import { ArrowUpRight, Leaf } from "lucide-react";

import Button from "../components/Button";
import { company } from "../data/company";

function Hero() {
  return (
    <section className="rpg-hero">
      <div className="rpg-hero-photo" aria-hidden="true" />
      <div className="rpg-hero-overlay" aria-hidden="true" />
      <div className="rpg-hero-grid" aria-hidden="true" />

      <div className="container rpg-hero-inner">
        <motion.div
          className="rpg-hero-main"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="rpg-hero-kicker">
            <span className="rpg-kicker-mark" />
            <span>POWERING A GREENER FUTURE</span>
          </div>

          <div className="rpg-hero-location">
            <span className="rpg-location-dot" />
            {company.location}
          </div>

          <h1>
            A Brighter
            <br />
            Future Starts
            <br />
            <span>With Green.</span>
          </h1>

          <div className="rpg-hero-description">
            <span className="rpg-description-rule" />
            <p>
              Discover cleaner energy possibilities with RPG
              Technologies. From rooftop solar to EV charging,
              let's move towards a more sustainable tomorrow.
            </p>
          </div>

          <div className="rpg-hero-buttons">
            <Button to="/solar-solutions">
              Explore Solutions
              <ArrowUpRight size={18} />
            </Button>

            <Button to="/contact" variant="outline">
              Talk to Our Team
            </Button>
          </div>

          <div className="rpg-green-tagline">
            <Leaf size={15} />
            CLEAN ENERGY. SMARTER LIVING. GREENER TOMORROW.
          </div>
        </motion.div>
      </div>

      <div className="rpg-hero-bottom">
        <div className="rpg-bottom-brand">
          <span className="rpg-bottom-dot" />
          RPG TECHNOLOGIES
        </div>

        <div className="rpg-bottom-center">
          SOLAR ENERGY <span /> EV CHARGING <span /> SUSTAINABILITY
        </div>
      </div>
    </section>
  );
}

export default Hero;
