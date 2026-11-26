
import {
  Sun,
  PanelsTopLeft,
  BatteryCharging,
  MessageCircle,
} from "lucide-react";

const trustItems = [
  {
    icon: Sun,
    title: "Solar Energy",
    desc: "Residential & Commercial",
  },
  {
    icon: PanelsTopLeft,
    title: "Solar Equipment",
    desc: "Panels, Inverters & More",
  },
  {
    icon: BatteryCharging,
    title: "EV Charging",
    desc: "Explore Charging Options",
  },
  {
    icon: MessageCircle,
    title: "Get in Touch",
    desc: "Discuss Your Requirement",
  },
];

function TrustStrip() {
  return (
    <section className="trust-strip-mockup">
      <div className="container trust-strip-inner">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="trust-mockup-item">
              <div className="trust-mockup-icon">
                <Icon size={23} />
              </div>

              <div className="trust-mockup-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TrustStrip;
