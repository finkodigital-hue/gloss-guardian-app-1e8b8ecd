import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/icw/Nav";
import { Hero } from "@/components/icw/Hero";
import { Marquee } from "@/components/icw/Marquee";
import { Testimonials } from "@/components/icw/Testimonials";
import { Services } from "@/components/icw/Services";
import { BeforeAfter } from "@/components/icw/BeforeAfter";
import { Why } from "@/components/icw/Why";
import { Process } from "@/components/icw/Process";
import { Gallery } from "@/components/icw/Gallery";
import { CTA } from "@/components/icw/CTA";
import { Footer } from "@/components/icw/Footer";
import { StickyCTA } from "@/components/icw/StickyCTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground pb-16 md:pb-0">
      <Nav />
      <Hero />
      <Marquee />
      <Testimonials />
      <Services />
      <BeforeAfter />
      <Why />
      <Process />
      <Gallery />
      <CTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
