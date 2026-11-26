import { MessageCircle, Phone } from "lucide-react";
import Button from "../components/Button";
import { company } from "../data/company";
import { buildWhatsAppUrl } from "../utils/whatsapp";

const HOMEPAGE_MESSAGE =
  "Hello RPG Technologies, I would like to know more about your solar and EV charging products.";

function ContactCTA() {
  return (
    <section className="section section-dark">
      <div className="container cta-inner">
        <h2>Discuss your solar or EV charging requirement</h2>
        <p>
          Send your details through the contact form, or start a quick
          conversation on WhatsApp.
        </p>

        <div className="btn-group">
          <Button variant="light" to="/contact">
            Send an Enquiry
          </Button>

          {/* Go live only after RPG confirms this number is registered as WhatsApp Business. */}
          <Button
            variant="gold"
            href={buildWhatsAppUrl(HOMEPAGE_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Chat on WhatsApp
          </Button>

          <Button variant="outline" href={`tel:${company.phone}`} className="on-dark">
            <Phone size={18} aria-hidden="true" />
            Call Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;