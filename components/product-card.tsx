import Image from "next/image";
import { categoryLabels, type Product } from "@/lib/products";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function ProductCard({ product, sizes }: { product: Product; sizes: string }) {
  const href = whatsappLink(
    `Hello Yakub Jewellers, I'm interested in the ${product.name}. Could you share the price and availability?`,
  );

  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={sizes}
          className={`transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
            product.cover ? "object-cover" : "object-contain p-4 sm:p-6"
          }`}
        />
        <span className="absolute left-2.5 top-2.5 bg-cream/90 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-wine sm:left-3 sm:top-3">
          {categoryLabels[product.category]}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-3 bottom-3 hidden translate-y-2 items-center justify-center gap-2 bg-ink/90 py-2.5 text-xs font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:flex"
        >
          <WhatsAppIcon className="size-3.5" /> Enquire on WhatsApp
        </span>
      </div>
      <div className="flex flex-1 flex-col pt-3">
        <h3 className="text-sm font-medium leading-snug text-ink sm:text-[15px]">
          <a href={href} target="_blank" rel="noopener" className="after:absolute after:inset-0">
            {product.name}
          </a>
        </h3>
        <p className="mt-1 text-xs text-muted">
          <span className="text-wine underline underline-offset-4 md:no-underline">Ask for price</span>
        </p>
      </div>
    </article>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  aside,
  id,
}: {
  eyebrow?: string;
  title: string;
  aside?: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between" data-reveal>
      <div>
        {eyebrow && (
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-wine">{eyebrow}</p>
        )}
        <h2 id={id} className="heading text-[2rem] sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </div>
      {aside}
    </div>
  );
}
