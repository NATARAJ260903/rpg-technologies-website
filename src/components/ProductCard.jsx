import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { reveal } from "../utils/motion";

function ProductCard({ product, index = 0 }) {
  return (
    <motion.article
      className="card product-card"
      {...reveal({ y: 35, delay: (index % 3) * 0.12 })}
    >
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
        />
      </div>

      <span className="card-label">{product.badge}</span>
      <h3>{product.name}</h3>
      <p className="product-brand">
        Brand: {product.brand ?? "To be confirmed"}
      </p>
      <p className="product-description">{product.description}</p>

      <Link
        to={`/contact?topic=${encodeURIComponent(product.name)}`}
        className="text-link"
      >
        Enquire Now <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </motion.article>
  );
}

export default ProductCard;