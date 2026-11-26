import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { company } from "../data/company";
import { buildWhatsAppUrl } from "../utils/whatsapp";

function Contact() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    topic: searchParams.get("topic") ?? "",
    message: "",
  });

  const update = (field) => (event) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));

  // The form opens WhatsApp with the message filled in.
  // The visitor presses Send there, so no server is needed.
  const handleSubmit = (event) => {
    event.preventDefault();

    const lines = [
      `Hello ${company.name}, I would like to make an enquiry.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.topic ? `Topic: ${form.topic}` : null,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);

    window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <main className="contact-page">
      {/* HERO BAND - matches the other pages */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" aria-hidden="true" />
        <div className="container contact-hero-inner">
          <span className="contact-eyebrow">CONTACT US</span>
          <h1>
            Let&apos;s Discuss <span>Your Requirement</span>
          </h1>
          <p>
            Tell us about your solar or EV charging requirement and our team
            will get back to you with the next steps.
          </p>
        </div>
      </section>

      <section className="contact-body">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p className="contact-info-text">
              Call or email us, or fill in the enquiry form and send it on
              WhatsApp. We are happy to help you choose the right solution.
            </p>

            <ul className="contact-list">
              <li>
                <span className="contact-icon"><Phone size={20} /></span>
                <div>
                  <small>Phone</small>
                  <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon"><Mail size={20} /></span>
                <div>
                  <small>Email</small>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon"><MapPin size={20} /></span>
                <div>
                  <small>Address</small>
                  <span>{company.address}</span>
                </div>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send an Enquiry</h2>

            <label>
              Your Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={update("name")}
                required
                autoComplete="name"
                placeholder="Enter your name"
              />
            </label>

            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={update("phone")}
                required
                autoComplete="tel"
                placeholder="Enter your phone number"
              />
            </label>

            <label>
              Enquiry About
              <input
                type="text"
                name="topic"
                value={form.topic}
                onChange={update("topic")}
                placeholder="e.g. Rooftop solar, EV charger"
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={update("message")}
                placeholder="Tell us a little about your requirement"
              />
            </label>

            <button type="submit" className="btn btn-primary contact-submit">
              <Send size={17} />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
