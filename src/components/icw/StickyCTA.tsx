export function StickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur-xl">
      <a href="tel:+441463000000" className="py-4 text-center text-xs uppercase tracking-[0.25em] border-r border-border">
        Call
      </a>
      <a href="https://wa.me/441463000000" className="py-4 text-center text-xs uppercase tracking-[0.25em] bg-foreground text-background">
        WhatsApp
      </a>
    </div>
  );
}
