import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RevealObserver } from "@/components/reveal-observer";
import { BestSellers } from "@/components/sections/best-sellers";
import { Categories } from "@/components/sections/categories";
import { Collection } from "@/components/sections/collection";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Promises } from "@/components/sections/promises";
import { Story } from "@/components/sections/story";
import { Tanzanite } from "@/components/sections/tanzanite";
import { Visit } from "@/components/sections/visit";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BestSellers />
        <Categories />
        <Story />
        <Collection />
        <Tanzanite />
        <Promises />
        <CtaBanner />
        <Visit />
        <Gallery />
      </main>
      <Footer />
      <WhatsAppFloat />
      <RevealObserver />
    </>
  );
}
