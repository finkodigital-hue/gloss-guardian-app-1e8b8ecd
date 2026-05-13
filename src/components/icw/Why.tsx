const points = [
  { t: "Genuine Attention to Detail", d: "Customers repeatedly mention spotless finishes — every panel, seam and stitch is checked." },
  { t: "Friendly Local Service", d: "Professional, welcoming, no hard sell. Just honest detailing and good Highland hospitality." },
  { t: "Fair, Honest Pricing", d: "Premium results without dealership prices. Transparent quotes — no hidden extras." },
  { t: "Trusted by Inverness", d: "Dozens of 5-star reviews and a long list of repeat customers across the Highlands." },
  { t: "Fast Turnaround", d: "Quick, flexible booking and reliable timing — your car back when you need it." },
  { t: "Passion for Cars", d: "Enthusiast-level work. We treat every vehicle like it belongs in our own garage." },
];

export function Why() {
  return (
    <section id="why" className="relative py-32 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Why ICW</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              OBSESSED<br />WITH THE<br /><span className="text-shine">DETAILS.</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">
              We're not the cheapest car wash in Inverness — and we're not trying to be.
              We're the team that finishes the job properly, every single time.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border">
            {points.map((p, i) => (
              <div key={p.t} className="bg-background p-8 hover:bg-carbon transition-colors">
                <div className="text-xs tracking-[0.3em] text-accent">0{i + 1}</div>
                <h3 className="font-display text-xl mt-4">{p.t}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
