const services = [
  { n: "01", t: "Hand Wash", d: "Safe, contact-free pre-rinse and pH-neutral hand wash with premium products and microfibre care." },
  { n: "02", t: "Gold Wash & Valet", d: "Full interior + exterior deep clean finished to true showroom standard. Our signature service." },
  { n: "03", t: "Paint Correction", d: "Multi-stage machine correction to remove swirl marks, holograms and restore mirror gloss." },
  { n: "04", t: "Machine Polishing", d: "Professional enhancement polishing for faded, oxidised, or tired paintwork." },
  { n: "05", t: "Interior Deep Clean", d: "Seats, carpets, plastics, trims, headlining and boot space — extracted, sanitised and dressed." },
  { n: "06", t: "Motorhome & Vans", d: "Large vehicle specialists. Caravans, motorhomes, vans and commercial fleet detailing." },
  { n: "07", t: "Ceramic Protection", d: "Long-lasting ceramic coatings for hydrophobic gloss and years of paint protection." },
  { n: "08", t: "Glass Chip Repair", d: "Quick, professional windscreen chip repairs to stop cracks before they spread." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Our Services</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-2xl">
              DETAILING<br />DONE <span className="text-shine">PROPERLY.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            From an everyday hand wash to multi-stage paint correction and ceramic
            coatings — every service is delivered with the same obsessive attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((s) => (
            <div
              key={s.n}
              className="group relative p-8 bg-card-gradient hover:bg-graphite transition-colors duration-500 min-h-[260px] flex flex-col"
            >
              <div className="text-xs tracking-[0.3em] text-muted-foreground">{s.n}</div>
              <h3 className="font-display text-2xl mt-6 text-foreground">{s.t}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{s.d}</p>
              <div className="mt-6 h-px w-8 bg-accent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
