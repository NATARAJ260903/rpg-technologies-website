
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sun,
  Leaf,
  Zap,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    number: "01",
    title: "Solar Energy",
    description:
      "Explore rooftop solar possibilities for residential and commercial spaces.",
    image: "/images/solar/residential-solar.jpg",
    icon: Sun,
    link: "/solar-solutions",
  },
  {
    number: "02",
    title: "Solar Equipment",
    description:
      "Discover solar panels, inverters and related solar equipment.",
    image: "/images/solar/solar-equipment.jpg",
    icon: Zap,
    link: "/solar-solutions?type=equipment",
  },
  {
    number: "03",
    title: "EV Charging",
    description:
    "Explore electric vehicle charging possibilities for homes and businesses.",
    image: "/images/ev/ev-charging.jpg",
    icon: Zap,
    link: "/ev-charging",
  },
];

function About() {
  return (
    <main className="rpg-about-page">

      {/* HERO */}
      <section className="rpg-about-hero">
        <img
          className="rpg-about-hero-image"
          src="/images/solar/commercial-solar.jpg"
          alt="Solar energy installation"
        />

        <div className="rpg-about-hero-overlay" />

        <div className="rpg-about-hero-content">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Leaf size={16} />
            ABOUT RPG TECHNOLOGIES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Powering Progress.
            <br />
            <strong>Choosing Green.</strong>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Exploring cleaner energy solutions and smarter
            possibilities for a sustainable tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link to="/solar-solutions" className="rpg-about-hero-button">
              Explore Green Solutions
              <ArrowUpRight size={19} />
            </Link>
          </motion.div>
        </div>

        <div className="rpg-about-hero-bottom">
          <span>THE FUTURE IS GREEN</span>
          <span>01 / ABOUT US</span>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="rpg-about-overview">
        <div className="rpg-about-overview-label">
          <span />
          WHO WE ARE
        </div>

        <div className="rpg-about-overview-grid">
          <motion.div
            className="rpg-about-overview-heading"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>
              A greener way
              <br />
              <span>to move forward.</span>
            </h2>
          </motion.div>

          <motion.div
            className="rpg-about-overview-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>
              RPG Technologies focuses on solar energy solutions,
              solar equipment and EV charging possibilities.
              We aim to help homes and businesses explore
              cleaner energy choices for a more sustainable future.
            </p>

            <div className="rpg-about-check-list">
              <div>
                <CheckCircle2 size={19} />
                <span>Rooftop solar possibilities</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Solar products and equipment</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Electric vehicle charging possibilities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="rpg-about-solutions">
        <div className="rpg-about-section-heading">
          <div>
            <span className="rpg-about-eyebrow">WHAT WE FOCUS ON</span>
            <h2>
              Exploring a cleaner
              <br />
              <span>energy future.</span>
            </h2>
          </div>

          <p>
            Discover the areas where renewable energy
            and modern technology come together.
          </p>
        </div>

        <div className="rpg-about-solution-grid">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="rpg-about-solution-card"
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <Link to={item.link} className="rpg-about-solution-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="rpg-about-solution-number">
                    {item.number}
                  </span>
                  <span className="rpg-about-solution-arrow">
                    <MoveUpRight size={21} />
                  </span>
                </Link>

                <div className="rpg-about-solution-content">
                  <div className="rpg-about-solution-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <Link to={item.link}>
                    Explore solution
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* GO GREEN SECTION */}
      <section className="rpg-about-green">
        <div className="rpg-about-green-decoration">
          <Leaf size={190} />
        </div>

        <div className="rpg-about-green-content">
          <span>
            <Leaf size={17} />
            A GREENER TOMORROW STARTS TODAY
          </span>

          <h2>
            Go Green.
            <br />
            Live Better.
            <br />
            <strong>Power Tomorrow.</strong>
          </h2>

          <p>
            Every step towards cleaner energy creates
            possibilities for a more sustainable future.
            Explore your options with RPG Technologies.
          </p>

          <Link to="/contact" className="rpg-about-green-button">
            Get in Touch
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>

    </main>
  );
}

export default About;
