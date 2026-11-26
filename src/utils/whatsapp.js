import { company } from "../data/company";

// Builds a standard wa.me link with a prefilled message.
// The visitor must still press Send in WhatsApp.
export function buildWhatsAppUrl(message) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}