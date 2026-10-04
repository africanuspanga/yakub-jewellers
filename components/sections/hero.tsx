import Image from "next/image";
import { whatsappLink } from "@/lib/site";
import { ArrowRight, WhatsAppIcon } from "../icons";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="grid lg:min-h-[min(88svh,52rem)] lg:grid-cols-2">
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-wine px-4 pb-12 pt-10 text-center text-cream sm:px-10 sm:pb-16 sm:pt-14 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(233,184,36,0.14),transparent_62%)]"
        />
        <p className="relative mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
          Tanzanite · Gold · Silver
        </p>
        <h1 id="hero-title" className="heading relative max-w-[14ch] text-[2.6rem] sm:text-6xl xl:text-7xl">
          Made for life&rsquo;s precious moments
        </h1>

        <div className="relative my-6 w-[min(78%,22rem)] sm:my-8 lg:w-[min(70%,24rem)]">
          <Image
            src="/images/hero-tanzanite-set.png"
            alt="Tanzanite pear pendant and matching oval tanzanite ring with diamond halos"
            width={1117}
            height={982}
            sizes="(min-width: 1024px) 24rem, 78vw"
            className="h-auto w-full drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
            preload
          />
        </div>

        <p className="relative max-w-md text-sm leading-relaxed text-cream/80 sm:text-[15px]">
          Discover genuine Tanzanite from the only place on Earth it is found, alongside fine gold and
          silver jewellery — for love, milestones and everyday elegance.
        </p>

        <div className="relative mt-7 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <a
            href="#collection"
            className="group inline-flex min-h-12 items-center justify-center gap-2 bg-cream px-7 text-sm font-medium text-wine transition-colors hover:bg-white"
          >
            Shop Collection
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-cream/40 px-7 text-sm font-medium transition-colors hover:border-cream hover:bg-cream/10"
          >
            <WhatsAppIcon className="size-4" /> WhatsApp Us
          </a>
        </div>
      </div>

      <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto">
        <Image
          src="/images/model-gold.jpg"
          alt="Woman wearing layered gold necklaces and gold hoop earrings"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[50%_25%]"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
