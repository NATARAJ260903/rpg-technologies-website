import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";

import Button from "../components/Button";
import { company } from "../data/company";
import { visibleProducts } from "../data/products";
import { buildWhatsAppUrl } from "../utils/whatsapp";

function ProductDetails() {
  const { slug } = useParams();

  // Searches only visible products, so pending products are never shown,
  // even when their URL is typed directly.
  const product = visibleProducts.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Product Not Found</h1>
            <p className="lead">
              The product you requested is not in our catalogue.
            </p>
            <Button to="/products">
              <ArrowLeft size={18} aria-hidden="true" /> Back to Products
            </Button>
          </div>
        </section>
      </main>
    );
  }

  // The brand line is only included when a brand is confirmed.
  const messageLines = [
    `Hello ${company.name}, I would like to enquire about ${product.name}.`,
  ];
  if (product.brand) {
    messageLines.push(`Brand: ${product.brand}`);
  }
  messageLines.push("Please share more details.");

  const whatsappUrl = buildWhatsAppUrl(messageLines.join("\n"));

  return (
    <main>
      <section className="section">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li aria-current="page">{product.name}</li>
            </ol>
          </nav>

          <div className="product-detail">
            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
                width="800"
                height="600"
                decoding="async"
              />
            </div>

            <div className="product-detail-info">
              <span className="card-label">{product.badge}</span>
              <h1>{product.name}</h1>
              <p className="product-brand">
                Brand: {product.brand ?? "To be confirmed"}
              </p>
              <p className="lead">{product.overview}</p>

              <ul className="highlight-list">
                {product.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="btn-group">
                <Button to="/contact">Send an Enquiry</Button>
                <Button
                  variant="gold"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          <div className="spec-section">
            <h2>Specifications</h2>

            {product.specifications.length > 0 ? (
              <table className="spec-table">
                <tbody>
                  {product.specifications.map((spec) => (
                    <tr key={spec.label}>
                      <th scope="row">{spec.label}</th>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>
                Specifications are not listed yet.{" "}
                <Link to="/contact">Request specifications</Link>.
              </p>
            )}
          </div>

          <div className="back-link">
            <Link to="/products" className="text-link">
              <ArrowLeft size={16} aria-hidden="true" /> Back to all products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;