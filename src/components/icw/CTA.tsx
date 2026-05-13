import beading from "@/assets/beading.jpg";

export function CTA() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-10 overflow-hidden border-t border-border">
      <div className="absolute inset-0">
        <img src={beading} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Book Today</p>
        <h2 className="font-display text-5xl md:text-8xl leading-[0.9]">
          YOUR CAR DESERVES<br />BETTER THAN A<br /><span className="text-shine">BASIC WASH.</span>
        </h2>
        <p className="mt-8 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Book your valet today and experience the ICW finish.
          Friendly Highland service, showroom results.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+441463000000"
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-[0.25em] hover:bg-silver transition-colors"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/441463000000"
            className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
