
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { company } from "../data/company";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/solar-solutions", label: "Solar Solutions" },
  { to: "/ev-charging", label: "EV Charging" },
  { to: "/about", label: "About Us" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY < 40);

      if (menuOpen) {
        setVisible(true);
      } else if (currentScrollY < 40) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 5) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY - 5) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar rpg-navbar
        ${atTop ? "rpg-navbar-top" : "rpg-navbar-scrolled"}
        ${visible || menuOpen ? "rpg-navbar-visible" : "rpg-navbar-hidden"}
        ${menuOpen ? "rpg-navbar-menu-open" : ""}
      `}
    >
      <div className="container rpg-navbar-inner">
        <Link to="/" className="rpg-brand" onClick={closeMenu} aria-label="RPG Technologies - Home">
          <img
            src="/images/company/rpg-logo-full-440.png"
            alt="RPG Technologies"
            className="rpg-brand-logo-full"
            width="440"
            height="404"
            decoding="async"
          />
        </Link>

        <button
          type="button"
          className="rpg-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="rpg-main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          id="rpg-main-navigation"
          aria-label="Main navigation"
          className={menuOpen ? "rpg-nav-links rpg-nav-open" : "rpg-nav-links"}
        >
          <div className="rpg-nav-items">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "rpg-nav-link rpg-nav-active"
                    : "rpg-nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <Link to="/contact" className="rpg-nav-cta" onClick={closeMenu}>
            <span>Get a Quote</span>
            <ArrowUpRight size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
