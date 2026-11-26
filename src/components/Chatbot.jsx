import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, X, Send, Leaf } from "lucide-react";
import { company } from "../data/company";
import { buildWhatsAppUrl } from "../utils/whatsapp";

const quickOptions = [
  "Rooftop Solar",
  "EV Charging",
  "Get a Quote",
  "Contact Details",
];

// Simple rule-based answers. Each rule has keywords and a reply.
// Replies can include a link { to, label } shown as a button.
const rules = [
  {
    keys: ["rooftop", "solar", "panel", "inverter", "on-grid", "on grid", "roof"],
    reply:
      "We help with rooftop solar systems, solar panels and inverters for homes and businesses. You can see the options on our Solar Solutions page, or share your requirement and our team will guide you.",
    link: { to: "/solar-solutions", label: "View Solar Solutions" },
  },
  {
    keys: ["ev", "charger", "charging", "electric vehicle", "car", "bike"],
    reply:
      "We offer EV charging solutions for homes, apartments and businesses. Tell us your vehicle and location and our team will suggest a suitable setup.",
    link: { to: "/ev-charging", label: "View EV Charging" },
  },
  {
    keys: ["quote", "price", "cost", "rate", "estimate", "enquiry", "inquiry"],
    reply:
      "For a quote, please send us a few details about your requirement. Our team will get back to you with the next steps.",
    link: { to: "/contact", label: "Get a Quote" },
  },
  {
    keys: ["contact", "phone", "call", "email", "mail", "address", "location", "where", "reach"],
    reply: `You can reach us at ${company.phoneDisplay} or ${company.email}. Our address: ${company.address}.`,
    link: { to: "/contact", label: "Open Contact Page" },
  },
  {
    keys: ["hi", "hello", "hey", "hai", "vanakkam"],
    reply:
      "Hello! Welcome to RPG Technologies. Ask me about rooftop solar, EV charging or getting a quote.",
  },
  {
    keys: ["thanks", "thank you", "ok", "okay"],
    reply: "You're welcome! Let us know if you need anything else.",
  },
];

const fallback = {
  reply:
    "I'm not sure about that one. Our team can help you directly. Tap the button below to continue on WhatsApp.",
};

const optionToQuery = {
  "Rooftop Solar": "rooftop solar",
  "EV Charging": "ev charging",
  "Get a Quote": "quote",
  "Contact Details": "contact",
};

function getReply(text) {
  const lower = text.toLowerCase();
  const words = lower.split(/[^a-z0-9-]+/).filter(Boolean);

  const match = rules.find((rule) =>
    rule.keys.some((key) =>
      key.includes(" ") || key.length > 3 ? lower.includes(key) : words.includes(key)
    )
  );

  return match ?? fallback;
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm the RPG Technologies assistant. How can I help you today?",
    },
  ]);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = (text) => {
    const clean = text.trim();
    if (!clean) return;

    const answer = getReply(optionToQuery[clean] ?? clean);

    setMessages((current) => [
      ...current,
      { from: "user", text: clean },
      { from: "bot", text: answer.reply, link: answer.link },
    ]);
    setInput("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    send(input);
  };

  // Sends the visitor's last question to WhatsApp so the team can continue.
  const lastUserMessage = [...messages].reverse().find((m) => m.from === "user");
  const whatsappUrl = buildWhatsAppUrl(
    lastUserMessage
      ? `Hello ${company.name}, I have a question: ${lastUserMessage.text}`
      : `Hello ${company.name}, I would like to enquire about your solar and EV charging solutions.`
  );

  return (
    <div className="rpg-chatbot">
      {open && (
        <section
          className="rpg-chat-panel"
          role="dialog"
          aria-label="RPG Technologies chat assistant"
        >
          <header className="rpg-chat-header">
            <div className="rpg-chat-title">
              <span className="rpg-chat-avatar">
                <Leaf size={18} />
              </span>
              <div>
                <strong>RPG Assistant</strong>
                <small>Solar &amp; EV help</small>
              </div>
            </div>
            <button
              type="button"
              className="rpg-chat-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </header>

          <div className="rpg-chat-body" ref={bodyRef}>
            {messages.map((message, index) => (
              <div key={index} className={`rpg-chat-row rpg-chat-${message.from}`}>
                <div className="rpg-chat-bubble">
                  {message.text}
                  {message.link && (
                    <Link
                      to={message.link.to}
                      className="rpg-chat-link"
                      onClick={() => setOpen(false)}
                    >
                      {message.link.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}

            <div className="rpg-chat-quick">
              {quickOptions.map((option) => (
                <button key={option} type="button" onClick={() => send(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <a
            className="rpg-chat-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} />
            Continue on WhatsApp
          </a>

          <form className="rpg-chat-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your question..."
              aria-label="Type your question"
            />
            <button type="submit" aria-label="Send message">
              <Send size={17} />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className="rpg-chat-toggle"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={26} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}

export default Chatbot;
