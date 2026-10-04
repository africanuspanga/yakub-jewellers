"use client";

import { useEffect, useRef, useState } from "react";
import { categoryLabels, products, type Category } from "@/lib/products";
import { ProductCard, SectionHeader } from "../product-card";

type Filter = "all" | Category;
const filters: Filter[] = ["all", "tanzanite", "gold", "silver", "watches"];

export function Collection() {
  const [active, setActive] = useState<Filter>("all");
  const sectionRef = useRef<HTMLElement>(null);

  // Category tiles link to "#shop-<category>" — pick that filter and scroll here.
  useEffect(() => {
    const apply = () => {
      const m = window.location.hash.match(/^#shop-(\w+)$/);
      if (m && (filters as string[]).includes(m[1])) {
        setActive(m[1] as Filter);
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const visible = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section id="collection" ref={sectionRef} aria-labelledby="col-title" className="py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <SectionHeader
          id="col-title"
          eyebrow="The collection"
          title="Shop Our Jewellery"
          aside={
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Tap any piece to ask about price, sizing and availability on WhatsApp.
            </p>
          }
        />

        <div
          role="tablist"
          aria-label="Filter by category"
          className="no-scrollbar -mx-4 mb-6 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:mb-8 sm:px-0"
        >
          {filters.map((f) => {
            const selected = f === active;
            const count = f === "all" ? products.length : products.filter((p) => p.category === f).length;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={selected}
                aria-controls="collection-grid"
                onClick={() => setActive(f)}
                className={`min-h-11 shrink-0 border px-4 text-xs font-medium uppercase tracking-[0.14em] transition-colors ${
                  selected ? "border-wine bg-wine text-cream" : "border-line bg-ivory text-ink/75 hover:border-wine/50 hover:text-wine"
                }`}
              >
                {f === "all" ? "All" : categoryLabels[f]}
                <span className={`ml-1.5 ${selected ? "text-cream/60" : "text-muted/70"}`}>{count}</span>
              </button>
            );
          })}
        </div>

        <ul id="collection-grid" role="tabpanel" className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((p) => (
            <li key={p.slug} className="animate-[fade-in_0.5s_ease-out]">
              <ProductCard product={p} sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 48vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
