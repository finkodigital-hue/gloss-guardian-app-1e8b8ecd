import { useEffect, useState } from "react";

const reviews = [
  { quote: "Best valet I've ever had. Genuinely could not believe the difference.", name: "James M.", car: "BMW M3" },
  { quote: "Showroom standard. The car looks better than the day I bought it.", name: "Sarah L.", car: "Range Rover" },
  { quote: "Fast, friendly, and immaculate finish. Couldn't be more impressed.", name: "Andrew K.", car: "Audi RS6" },
  { quote: "Excellent value for money. Premium service without dealer pricing.", name: "Fiona R.", car: "Mercedes A-Class" },
  { quote: "These guys clearly love what they do. The attention to detail is unreal.", name: "Mark T.", car: "Porsche Cayman" },
  { quote: "My motorhome looks brand new. Booked them again already.", name: "David W.", car: "Hymer Motorhome" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-glow-radial opacity-50" />
      <div className="relative max-w-5xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Trusted Locally</p>
        <div className="flex justify-center gap-1 mb-10 text-2xl text-foreground">
          {"★★★★★".split("").map((s, k) => <span key={k}>{s}</span>)}
        </div>
        <div className="min-h-[180px] flex flex-col items-center justify-center">
          {reviews.map((r, k) => (
            <blockquote
              key={k}
              className={`absolute max-w-3xl px-6 transition-all duration-700 ${
                k === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <p className="font-display text-3xl md:text-5xl leading-tight text-foreground">
                "{r.quote}"
              </p>
              <footer className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {r.name} · <span className="text-silver">{r.car}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-32">
          {reviews.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Show review ${k + 1}`}
              className={`h-px transition-all ${k === i ? "w-10 bg-foreground" : "w-5 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
