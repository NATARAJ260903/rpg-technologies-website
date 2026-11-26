// Shared entrance animations so every page loads like the landing page.
//
// heroReveal: plays once when the page opens (staggered with `delay`).
// reveal:     plays once when the element scrolls into view.

export const heroReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
});

export const reveal = ({ x = 0, y = 28, delay = 0, duration = 0.7 } = {}) => ({
  initial: { opacity: 0, x, y },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, margin: "0px 0px -80px 0px" },
  transition: { duration, delay },
});
