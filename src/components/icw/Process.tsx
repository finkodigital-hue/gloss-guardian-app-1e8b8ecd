const steps = [
  { n: "01", t: "Book Your Valet", d: "Call, message or WhatsApp — we'll lock in a slot that suits you." },
  { n: "02", t: "Drop Off Your Vehicle", d: "Easy, friendly drop-off at our Inverness unit. Tea optional." },
  { n: "03", t: "We Restore The Shine", d: "Our team works through every panel, surface and detail." },
  { n: "04", t: "Drive Away Spotless", d: "Collect a vehicle that genuinely turns heads on the way home." },
];

export function Process() {
  return (
    <section className="relative py-32 px-6 lg:px-10 border-t border-border bg-carbon">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">The Process</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            SIMPLE. <span className="text-shine">PREMIUM.</span> EASY.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 min-h-[220px]">
              <div className="font-display text-6xl text-accent/70">{s.n}</div>
              <h3 className="font-display text-2xl mt-6">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
