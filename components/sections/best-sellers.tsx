import { products } from "@/lib/products";
import { ProductCard, SectionHeader } from "../product-card";

export function BestSellers() {
  const items = products.filter((p) => p.bestseller);

  return (
    <section aria-labelledby="best-title" className="py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <SectionHeader
          id="best-title"
          eyebrow="Most loved"
          title="Best Sellers"
          aside={
            <a href="#collection" className="self-start text-sm font-medium underline underline-offset-4 hover:text-wine sm:self-auto">
              Explore Collection
            </a>
          }
        />
      </div>

      {/* Swipeable row on phones, grid from tablet up */}
      <ul
        className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 pb-2 sm:mx-auto sm:grid sm:max-w-7xl sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-6 md:grid-cols-4 lg:px-10"
        data-reveal
      >
        {items.map((p) => (
          <li key={p.slug} className="w-[68%] shrink-0 snap-start sm:w-auto">
            <ProductCard product={p} sizes="(min-width: 768px) 25vw, (min-width: 640px) 50vw, 68vw" />
          </li>
        ))}
      </ul>
    </section>
  );
}
