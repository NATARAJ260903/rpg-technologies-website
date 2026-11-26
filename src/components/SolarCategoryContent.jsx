import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sun,
  Zap,
  Home as HomeIcon,
  Building2,
  Factory,
  Store,
  School,
  Plug,
  BatteryCharging,
  Gauge,
} from "lucide-react";

import Button from "./Button";
import ProductCard from "./ProductCard";
import { reveal } from "../utils/motion";
import { buildWhatsAppUrl } from "../utils/whatsapp";

/* ---------- Small shared pieces ---------- */

function Intro({ image, eyebrow, title, text, points, topic, onCalculator }) {
  return (
    <div className="solar-detail-grid">
      <motion.div className="solar-detail-image" {...reveal({ x: -30, y: 0 })}>
        <img src={image} alt={eyebrow} />
      </motion.div>

      <motion.div className="solar-detail-content" {...reveal({ x: 30, y: 0 })}>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{text}</p>

        <ul className="solar-detail-points">
          {points.map((point) => (
            <li key={point}>
              <CheckCircle2 size={18} />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="solar-detail-actions">
          <Button to={`/contact?topic=${encodeURIComponent(topic)}`}>
            Enquire Now
            <ArrowRight size={17} />
          </Button>

          <a
            className="btn btn-outline on-light"
            href={buildWhatsAppUrl(
              `Hello RPG Technologies, I would like to enquire about ${topic}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} />
            WhatsApp Us
          </a>

          {onCalculator && (
            <button
              type="button"
              className="solar-detail-link"
              onClick={onCalculator}
            >
              Try the Solar Calculator
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function BlockHeading({ eyebrow, title, text }) {
  return (
    <motion.div className="solar-block-heading" {...reveal()}>
      <span className="eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

function InfoCards({ items, columns = 3 }) {
  return (
    <div className={`solar-info-grid solar-info-grid-${columns}`}>
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.article
            className="solar-info-card"
            key={item.title}
            {...reveal({ y: 30, delay: (index % columns) * 0.1 })}
          >
            <span className="solar-info-icon">
              <Icon size={22} />
            </span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </motion.article>
        );
      })}
    </div>
  );
}

function Steps({ items }) {
  return (
    <ol className="solar-steps">
      {items.map((item, index) => (
        <motion.li
          key={item.title}
          {...reveal({ y: 30, delay: index * 0.1 })}
        >
          <span className="solar-step-number">0{index + 1}</span>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </motion.li>
      ))}
    </ol>
  );
}

function ReadyList({ title, items }) {
  return (
    <motion.div className="solar-ready" {...reveal()}>
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <CheckCircle2 size={17} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ---------- Residential ---------- */

export function ResidentialSolar({ onCalculator }) {
  return (
    <>
      <Intro
        image="/images/solar/residential-solar.jpg"
        eyebrow="Residential Solar"
        title="Rooftop Solar for Independent Houses"
        text="A residential rooftop system is planned around your household electricity usage, the roof space available and the type of system that suits you."
        points={[
          "Rooftop solar possibilities for homes",
          "System capacity based on monthly electricity usage",
          "Roof space, direction and shadow considerations",
        ]}
        topic="Residential Solar"
        onCalculator={onCalculator}
      />

      <BlockHeading
        eyebrow="System Types"
        title="Choose the Right Type of Home System"
        text="The right system depends on your power supply, backup needs and budget."
      />
      <InfoCards
        items={[
          {
            icon: Plug,
            title: "On-Grid",
            text: "Connected to the electricity grid. Solar power is used first and the grid supports you when needed.",
          },
          {
            icon: BatteryCharging,
            title: "Off-Grid",
            text: "Works independently of the grid using batteries, useful where the grid supply is unavailable or unreliable.",
          },
          {
            icon: Zap,
            title: "Hybrid",
            text: "Combines grid connection with battery storage to provide backup during power cuts.",
          },
        ]}
      />

      <BlockHeading
        eyebrow="How It Works"
        title="From First Enquiry to Planning"
      />
      <Steps
        items={[
          { title: "Share Your Usage", text: "Tell us your average electricity bill and how you use power at home." },
          { title: "Roof Review", text: "We discuss your available roof area, direction and any shading." },
          { title: "Explore Options", text: "Discuss system type, capacity and equipment that suit your needs." },
          { title: "Plan Next Steps", text: "Confirm specifications, availability and installation planning." },
        ]}
      />

      <ReadyList
        title="Helpful to Keep Ready"
        items={[
          "A recent electricity bill",
          "Approximate roof or terrace area",
          "Photos of the roof, if available",
        ]}
      />
    </>
  );
}

/* ---------- Commercial ---------- */

export function CommercialSolar({ onCalculator }) {
  return (
    <>
      <Intro
        image="/images/solar/commercial-solar.jpg"
        eyebrow="Commercial Solar"
        title="Solar for Offices, Buildings and Businesses"
        text="Commercial rooftop solar is planned around your connected load, daytime consumption and the roof or open area available at your premises."
        points={[
          "Rooftop solar possibilities for commercial buildings",
          "System configuration based on business energy use",
          "Site review of roof area and electrical supply",
        ]}
        topic="Commercial Solar"
        onCalculator={onCalculator}
      />

      <BlockHeading
        eyebrow="Where It Fits"
        title="Solar for Different Kinds of Premises"
        text="Tell us about your site and we will discuss what may suit it."
      />
      <InfoCards
        columns={4}
        items={[
          { icon: Building2, title: "Offices & Buildings", text: "Rooftop systems for office blocks and commercial buildings." },
          { icon: Store, title: "Shops & Showrooms", text: "Solar to help manage daytime electricity use in retail spaces." },
          { icon: Factory, title: "Factories & Warehouses", text: "Larger roof areas that can support bigger systems." },
          { icon: School, title: "Institutions", text: "Schools, hospitals and other institutional premises." },
        ]}
      />

      <BlockHeading
        eyebrow="How It Works"
        title="Planning a Commercial Solar System"
      />
      <Steps
        items={[
          { title: "Share Your Load", text: "Provide your electricity bills and connected load details." },
          { title: "Site Review", text: "We discuss roof area, structure type and electrical supply." },
          { title: "Configuration", text: "Explore system size and equipment options for your usage." },
          { title: "Plan Next Steps", text: "Confirm specifications, availability and installation planning." },
        ]}
      />

      <ReadyList
        title="Helpful to Keep Ready"
        items={[
          "Recent electricity bills",
          "Connected or sanctioned load details",
          "Roof layout or approximate usable area",
        ]}
      />
    </>
  );
}

/* ---------- Equipment ---------- */

export function EquipmentSolar({ products }) {
  return (
    <>
      <Intro
        image="/images/solar/solar-equipment.jpg"
        eyebrow="Solar Equipment"
        title="Solar Panels, Inverters and Rooftop Systems"
        text="Explore solar equipment categories below. Specifications, brands and availability are confirmed individually, so contact RPG Technologies for current information."
        points={[
          "Solar panel enquiries",
          "Solar inverter enquiries",
          "On-grid rooftop system enquiries",
        ]}
        topic="Solar Equipment"
      />

      <BlockHeading
        eyebrow="Equipment Categories"
        title="What You Can Enquire About"
      />
      <InfoCards
        items={[
          { icon: Sun, title: "Solar Panels", text: "Panel options for homes and businesses. Capacity and type are confirmed individually." },
          { icon: Gauge, title: "Solar Inverters", text: "Inverter options that match your system size and type." },
          { icon: HomeIcon, title: "On-Grid Rooftop Systems", text: "Complete grid-connected rooftop system options." },
        ]}
      />

      {products.length > 0 && (
        <>
          <BlockHeading
            eyebrow="Our Range"
            title="Solar Products"
            text="Press Enquire Now on any product to ask about it."
          />
          <div className="grid grid-3 solar-detail-products">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
