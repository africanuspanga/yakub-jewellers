import Image from "next/image";
import { SectionHeader } from "../product-card";
import { ArrowRight } from "../icons";

const tiles = [
  { label: "Tanzanite", note: "Rare violet-blue gems", href: "#shop-tanzanite", image: "/images/tanzanite-ring-pillow.jpg", alt: "Tanzanite ring resting on a cream pillow", pos: "object-center" },
  { label: "Gold", note: "Warm, timeless pieces", href: "#shop-gold", image: "/images/products/gold-hoop-earrings.webp", alt: "Pair of sculpted gold hoop earrings", pos: "object-center" },
  { label: "Engagement", note: "For the forever question", href: "#shop-tanzanite", image: "/images/bride-ring.jpg", alt: "Bride showing her engagement ring", pos: "object-[30%_50%]" },
  { label: "Silver", note: "Polished everyday shine", href: "#shop-silver", image: "/images/products/silver-rope-bracelet.webp", alt: "Silver rope bracelet on black", pos: "object-center" },
];

export function Categories() {
  return (
    <section id="categories" aria-labelledby="cat-title" className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container-x">
        <SectionHeader
          id="cat-title"
          eyebrow="Find your style"
          title="Categories"
          aside={
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Timeless collections in Tanzanite, gold and silver — chosen for lasting beauty and every
              meaningful occasion.
            </p>
          }
        />

        <ul className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4" data-reveal>
          {tiles.map((t) => (
            <li key={t.label}>
              <a href={t.href} className="group relative block aspect-[3/4] overflow-hidden bg-ink lg:aspect-[3/4.4]">
                <Image
                  src={t.image}
                  alt={t.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className={`object-cover ${t.pos} transition-transform duration-1000 ease-out group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-cream sm:p-5">
                  <div>
                    <h3 className="heading text-xl sm:text-3xl">{t.label}</h3>
                    <p className="mt-1 hidden text-xs text-cream/75 sm:block">{t.note}</p>
                  </div>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-cream/15 backdrop-blur transition-colors group-hover:bg-cream group-hover:text-wine sm:size-10">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
