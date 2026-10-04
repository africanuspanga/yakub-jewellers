import Image from "next/image";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="bg-wine text-cream">
      <div className="container-x grid gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[30rem]" data-reveal>
          <Image
            src="/images/couple-hands.jpg"
            alt="A woman's hands resting on a partner's shoulder, wearing rings"
            fill
            sizes="(min-width: 1024px) 40rem, 100vw"
            className="object-cover object-[30%_40%]"
          />
        </div>

        <div className="flex flex-col justify-between gap-8" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold">Our promise</p>
            <h2 id="story-title" className="heading text-4xl sm:text-5xl xl:text-6xl">
              Crafted with passion. Designed to last a lifetime.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="max-w-lg text-sm leading-relaxed text-cream/80 sm:text-[15px]">
              Every piece at Yakub Jewellers is chosen for its beauty, quality and the story it will
              carry. From rich violet-blue Tanzanite to warm gold and polished silver, we help you find
              jewellery that marks life&rsquo;s most meaningful moments — and becomes a treasured part of
              your own story.
            </p>
            <dl className="grid max-w-lg grid-cols-3 border-y border-cream/20 py-5 text-center">
              {[
                ["Tanzanite", "Gems"],
                ["Gold", "Jewellery"],
                ["Silver", "& Watches"],
              ].map(([a, b]) => (
                <div key={a} className="border-cream/20 [&:not(:first-child)]:border-l">
                  <dt className="heading text-lg text-gold sm:text-xl">{a}</dt>
                  <dd className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-cream/70">{b}</dd>
                </div>
              ))}
            </dl>
            <a
              href="#visit"
              className="inline-flex min-h-12 items-center justify-center bg-cream px-7 text-sm font-medium text-wine transition-colors hover:bg-white"
            >
              Visit Our Showroom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
