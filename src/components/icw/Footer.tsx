export function Footer() {
  return (
    <footer className="border-t border-border bg-carbon">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-[0.2em]">ICW</div>
          <div className="text-[10px] tracking-[0.35em] text-muted-foreground mt-1">
            DETAILING · VALETING · INVERNESS
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Premium detailing in the Highlands. Driven by detail, trusted by Inverness drivers.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-foreground mb-4">Visit</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Inverness, IV1</li>
            <li>Mon–Sat · 8:00 – 18:00</li>
            <li>Sun · By appointment</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-foreground mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="tel:+441463000000" className="hover:text-foreground transition-colors">01463 000 000</a></li>
            <li><a href="https://wa.me/441463000000" className="hover:text-foreground transition-colors">WhatsApp</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Google Reviews</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <div>© {new Date().getFullYear()} ICW Detailing</div>
          <div>Premium detailing in the Highlands.</div>
        </div>
      </div>
    </footer>
  );
}
