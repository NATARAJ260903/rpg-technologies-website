
import { motion } from "framer-motion";
import { ArrowUpRight, Leaf, Sun, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

function GreenBenefits() {
  return (
    <section className="rpg-green-feature">
      <div className="rpg-green-feature-image" aria-hidden="true">
        <img
          src="/images/About/about-hero.jpg"
          alt=""
          loading="lazy"
        />
      </div>

      <div className="rpg-green-feature-overlay" />

      <div className="container rpg-green-feature-inner">
        <motion.div
          className="rpg-green-feature-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="rpg-green-feature-label">
            <Leaf size={17} />
            A MORE SUSTAINABLE TOMORROW
          </div>

          <h2>
            Every Choice
            <br />
            <span>Shapes Our Future.</span>
          </h2>

          <p>
            A sustainable future begins with the choices we
            make today. Explore cleaner energy possibilities
            through solar solutions and electric mobility,
            and take a step towards a greener tomorrow.
          </p>

          <Link to="/solar-solutions" className="rpg-green-feature-link">
            Explore Green Solutions
            <ArrowUpRight size={19} />
          </Link>
        </motion.div>

        <div className="rpg-green-feature-points">
          <div>
            <Sun size={23} />
            <span>Solar Energy</span>
          </div>

          <div>
            <Leaf size={23} />
            <span>Cleaner Choices</span>
          </div>

          <div>
            <Globe2 size={23} />
            <span>Sustainable Living</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GreenBenefits;
