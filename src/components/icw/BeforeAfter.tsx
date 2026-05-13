import { useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };
  return (
    <section id="results" className="relative py-32 px-6 lg:px-10 border-t border-border bg-carbon">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Before · After</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            THE DIFFERENCE IS<br />IN THE <span className="text-shine">DETAIL.</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="relative aspect-[16/9] w-full overflow-hidden select-none cursor-ew-resize shadow-card"
          onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
          onMouseDown={(e) => onMove(e.clientX)}
          onTouchMove={(e) => onMove(e.touches[0].clientX)}
        >
          <img src={afterImg} alt="After detailing" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={800} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img
              src={beforeImg}
              alt="Before detailing"
              className="absolute inset-0 h-full object-cover"
              style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
              loading="lazy"
              width={1280}
              height={800}
            />
          </div>
          <div
            className="absolute inset-y-0 w-px bg-foreground shadow-glow"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 border border-foreground bg-background/80 backdrop-blur flex items-center justify-center rounded-full">
              <span className="text-foreground text-xs">◀ ▶</span>
            </div>
          </div>
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] bg-background/70 backdrop-blur px-3 py-1.5 text-muted-foreground">Before</div>
          <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.3em] bg-background/70 backdrop-blur px-3 py-1.5 text-foreground">After</div>
        </div>
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mt-6">
          Drag to reveal · Real ICW work
        </p>
      </div>
    </section>
  );
}
