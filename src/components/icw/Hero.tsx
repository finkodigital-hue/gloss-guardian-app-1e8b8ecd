import { motion } from "framer-motion";
import heroCar from "@/assets/hero-car.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Glossy black luxury car being detailed"
          className="w-full h-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-24 min-h-screen flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-silver mb-8"
        >
          <span className="h-px w-10 bg-silver" />
          Driven by Detail
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight max-w-5xl"
        >
          SHOWROOM <br />
          <span className="text-shine">FINISH.</span> <span className="text-muted-foreground">EVERY TIME.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
        >
          Premium car valeting & detailing in Inverness. Trusted by local drivers for
          immaculate results, fair pricing, and genuine attention to detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-[0.25em] hover:bg-silver transition-colors"
          >
            Book Now
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-3 border border-border px-8 py-4 text-sm uppercase tracking-[0.25em] text-foreground hover:border-foreground transition-colors"
          >
            View Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8 max-w-3xl"
        >
          {[
            { k: "★ 4.9", v: "Google Rated" },
            { k: "60+", v: "5-Star Reviews" },
            { k: "100%", v: "Detail-Obsessed" },
            { k: "Local", v: "Inverness" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl text-foreground">{s.k}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
