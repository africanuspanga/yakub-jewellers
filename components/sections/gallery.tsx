import Image from "next/image";

const shots = [
  { src: "/images/model-gold.jpg", alt: "Model wearing gold necklaces and hoops", pos: "object-[50%_30%]" },
  { src: "/images/tanzanite-ring-pillow.jpg", alt: "Tanzanite ring on a pillow", pos: "object-center" },
  { src: "/images/products/tanzanite-halo-pendant.webp", alt: "Tanzanite halo pendant", pos: "object-center" },
  { src: "/images/bride-ring.jpg", alt: "Bride wearing her engagement ring", pos: "object-[30%_50%]" },
  { src: "/images/products/gold-bangle-stack.webp", alt: "Stack of gold bangles", pos: "object-center" },
  { src: "/images/couple-hands.jpg", alt: "Hands wearing rings", pos: "object-[25%_40%]" },
  { src: "/images/products/silver-rope-bracelet.webp", alt: "Silver rope bracelet", pos: "object-center" },
  { src: "/images/products/tanzanite-three-stone-ring.webp", alt: "Three-stone tanzanite ring", pos: "object-center" },
];

export function Gallery() {
  // Duplicated once so the marquee loops seamlessly.
  const loop = [...shots, ...shots];
  return (
    <section aria-label="Gallery" className="overflow-hidden bg-ink py-1">
      <ul className="flex w-max animate-marquee gap-1 hover:[animation-play-state:paused]">
        {loop.map((s, i) => (
          <li key={i} className="relative aspect-[4/5] w-40 shrink-0 sm:w-56 lg:w-64" aria-hidden={i >= shots.length}>
            <Image src={s.src} alt={i >= shots.length ? "" : s.alt} fill sizes="(min-width: 1024px) 16rem, (min-width: 640px) 14rem, 10rem" className={`object-cover ${s.pos}`} />
          </li>
        ))}
      </ul>
    </section>
  );
}
