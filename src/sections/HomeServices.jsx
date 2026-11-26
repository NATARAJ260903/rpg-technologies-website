import { Link } from "react-router-dom";
import { Sun, PanelsTopLeft, PlugZap, Briefcase, ArrowRight } from "lucide-react";
import { services } from "../data/services";

const icons = [Sun, PanelsTopLeft, PlugZap, Briefcase];

function HomeServices() {
  return (
    <section className="section services-mockup-section" id="services">
      <div className="container">
        <div className="mockup-heading centered">
          <div className="heading-line-wrap">
            <span className="heading-line" />
            <span className="heading-eyebrow">Our Services</span>
            <span className="heading-line" />
          </div>
          <h2>Comprehensive Solar & EV Solutions for Homes and Businesses</h2>
        </div>

        <div className="services-split-grid">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article className="split-service-card" key={service.id}>
                {/* Left decorative thumb */}
                <div className="service-thumb-box">
                  <Icon size={36} className="thumb-icon" />
                </div>

                {/* Right content */}
                <div className="service-body-box">
                  <div className="service-title-row">
                    <div className="service-round-icon">
                      <Icon size={16} />
                    </div>
                    <h3>{service.title}</h3>
                  </div>

                  <p>{service.description}</p>

                  <Link
                    to={`/contact?topic=${encodeURIComponent(service.title)}`}
                    className="service-learn-link"
                  >
                    Learn More <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeServices;