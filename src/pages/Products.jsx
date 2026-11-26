import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  PackageSearch,
  ShoppingBag,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { visibleProducts } from "../data/products";
import { buildWhatsAppUrl } from "../utils/whatsapp";

const filters = [
  { id: "all", label: "All Products" },
  { id: "Solar", label: "Solar" },
  { id: "EV Charging", label: "EV Charging" },
];

function Products() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = useMemo(
    () =>
      activeFilter === "all"
        ? visibleProducts
        : visibleProducts.filter((product) => product.category === activeFilter),
    [activeFilter]
  );

  return (
    <main className="products-page">
      {/* HERO */}
      <section className="ev2-hero products-hero">
        <div className="ev2-hero-image">
          <img
            src="/images/products/products-hero.svg"
            alt="Solar panels and EV chargers at dusk"
          />
        </div>

        <div className="ev2-hero-overlay" />

        <div className="container ev2-hero-content">
          <span className="ev2-eyebrow">
            <ShoppingBag size={15} />
            OUR PRODUCT COLLECTION
          </span>

          <h1>
            Solar and EV <span>Charging Products</span>
          </h1>

          <p>
            Explore our range of solar energy and electric vehicle charging
            products. Find suitable solutions for residential, commercial,
            and industrial requirements.
          </p>

          <div className="ev2-hero-actions">
            <Button to="/contact" variant="gold">
              Discuss Your Requirement
              <ArrowRight size={17} />
            </Button>

            <a href="#product-range" className="ev2-text-link">
              Browse Products
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="ev2-hero-points">
            <span>
              <CheckCircle2 size={16} /> {visibleProducts.length} products
              available
            </span>
            <span>
              <CheckCircle2 size={16} /> Solar energy solutions
            </span>
            <span>
              <CheckCircle2 size={16} /> EV charging solutions
            </span>
          </div>
        </div>
      </section>

      {/* CATALOGUE */}
      <section className="section products-catalogue" id="product-range">
        <div className="container">
          <div className="products-section-heading">
            <div>
              <span className="ev2-eyebrow">EXPLORE OUR RANGE</span>
              <h2>Our Products</h2>
              <p>
                Browse our available products and explore their details.
                Specifications and availability are confirmed individually.
              </p>
            </div>

            <span className="products-count">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "Product" : "Products"}
            </span>
          </div>

          <div className="products-filters" role="tablist" aria-label="Filter products">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                className={`products-filter${
                  activeFilter === filter.id ? " is-active" : ""
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="card empty-state products-empty-state">
              <PackageSearch size={42} />
              <h2>Product catalogue coming soon</h2>
              <p>
                We are preparing our product information. In the meantime,
                please contact us about your requirement.
              </p>
              <Link to="/contact" className="products-contact-link">
                Contact Us <ArrowRight size={17} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-3 products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ev2-final-cta">
        <div className="ev2-final-image">
          <img
            src="/images/products/products-cta.svg"
            alt="EV charging stations at night"
            loading="lazy"
          />
        </div>

        <div className="ev2-final-overlay" />

        <div className="container ev2-final-content">
          <span className="ev2-eyebrow">NEED HELP CHOOSING?</span>
          <h2>Not Sure Which Product Fits Your Requirement?</h2>
          <p>
            Talk to RPG Technologies about your site, load and budget, and
            we will help you explore suitable solar and EV charging options.
          </p>

          <div className="ev2-final-actions">
            <Button to="/contact" variant="gold">
              Get in Touch
              <ArrowRight size={17} />
            </Button>

            <a
              href={buildWhatsAppUrl(
                "Hello RPG Technologies, I would like to enquire about your solar and EV charging products."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="ev2-final-whatsapp"
            >
              <MessageCircle size={18} />
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;
