const items = [
  "Hand Wash",
  "Gold Valet",
  "Paint Correction",
  "Machine Polishing",
  "Ceramic Protection",
  "Interior Deep Clean",
  "Glass Repair",
  "Motorhome Specialists",
];

export function Marquee() {
  return (
    <div className="border-y border-border bg-carbon py-6 overflow-hidden">
      <div className="flex animate-[marquee_40s_linear_infinite] gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-16 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            <span>{it}</span>
            <span className="text-accent">◆</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }`}</style>
    </div>
  );
}
