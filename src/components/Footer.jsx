import { Link } from "react-router-dom";
import { company } from "../data/company";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/solar-solutions", label: "Solar Solutions" },
  { to: "/ev-charging", label: "EV Charging" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-column">
            <div className="footer-logo-wrap">
              <img
                src="/images/company/rpg-logo-full-440.png"
                alt="RPG Technologies"
                className="footer-logo-full"
                width="440"
                height="404"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="footer-description">{company.description}</p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul className="footer-list">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul className="footer-list">
              <li>
                <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {currentYear} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;