const steps = [
  {
    title: "Share your requirement",
    text: "Use the contact form or send a quick WhatsApp message.",
  },
  {
    title: "Review your details",
    text: "The team reviews your requirement and discusses suitable options with you.",
  },
  {
    title: "Confirm the details",
    text: "Check products, specifications and availability before you decide.",
  },
];

function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow">Getting Started</span>
          <h2>How enquiries work</h2>
        </div>

        <div className="grid grid-3">
          {steps.map((step, index) => (
            <div className="card" key={step.title}>
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;