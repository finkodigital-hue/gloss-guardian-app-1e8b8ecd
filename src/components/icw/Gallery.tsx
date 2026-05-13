import foamGolf from "@/assets/gallery-foam-golf.webp";
import bmw from "@/assets/gallery-bmw.webp";
import ferrari from "@/assets/gallery-ferrari.webp";
import wheel from "@/assets/wheel-detail.jpg";
import interior from "@/assets/interior.jpg";
import beading from "@/assets/beading.jpg";

const tiles = [
  { src: foamGolf, alt: "Snow foam wash on a Golf at ICW Detailing", span: "md:col-span-2 md:row-span-2" },
  { src: wheel, alt: "Polished black wheel detail", span: "" },
  { src: beading, alt: "Water beading on ceramic coating", span: "" },
  { src: ferrari, alt: "Red Ferrari detailed inside the ICW workshop", span: "md:col-span-2" },
  { src: interior, alt: "Immaculate detailed interior", span: "" },
  { src: bmw, alt: "Red BMW M8 freshly washed at ICW Detailing", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32 px-6 lg:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">The Work</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              REFLECTIONS<br /><span className="text-shine">WORTH SHOWING.</span>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors self-start md:self-end"
          >
            Follow on Instagram →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden bg-card-gradient ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
