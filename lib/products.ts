export type Category = "tanzanite" | "gold" | "silver" | "watches";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  image: string;
  bestseller?: boolean;
  /** Photo has its own backdrop — fill the card instead of floating on white. */
  cover?: boolean;
};

export const categoryLabels: Record<Category, string> = {
  tanzanite: "Tanzanite",
  gold: "Gold",
  silver: "Silver",
  watches: "Watches",
};

const p = (path: string) => `/images/products/${path}`;

export const products: Product[] = [
  { slug: "tanzanite-cushion-ring", name: "Cushion Tanzanite Ring", category: "tanzanite", image: p("tanzanite-cushion-ring.webp"), bestseller: true },
  { slug: "gold-hoop-earrings", name: "Sculpted Gold Hoops", category: "gold", image: p("gold-hoop-earrings.webp"), bestseller: true, cover: true },
  { slug: "tanzanite-halo-pendant", name: "Tanzanite Halo Pendant", category: "tanzanite", image: p("tanzanite-halo-pendant.webp"), bestseller: true, cover: true },
  { slug: "gold-bangle-stack", name: "Stacked Gold Bangles", category: "gold", image: p("gold-bangle-stack.webp"), bestseller: true },
  { slug: "tanzanite-three-stone-ring", name: "Three-Stone Tanzanite Ring", category: "tanzanite", image: p("tanzanite-three-stone-ring.webp") },
  { slug: "tanzanite-asscher-ring", name: "Asscher Tanzanite Ring", category: "tanzanite", image: p("tanzanite-asscher-ring.webp") },
  { slug: "tanzanite-solitaire-necklace", name: "Tanzanite Solitaire Necklace", category: "tanzanite", image: p("tanzanite-solitaire-necklace.webp") },
  { slug: "tanzanite-trillion-ring", name: "Trillion Tanzanite Ring", category: "tanzanite", image: p("tanzanite-trillion-ring.jpg"), cover: true },
  { slug: "tanzanite-halo-drop", name: "Tanzanite Halo Drop", category: "tanzanite", image: p("tanzanite-halo-drop.jpg") },
  { slug: "gold-emerald-cut-ring", name: "Emerald-Cut Three-Stone Ring", category: "gold", image: p("gold-emerald-cut-ring.webp") },
  { slug: "gold-wedding-set", name: "Gold Wedding Ring Set", category: "gold", image: p("gold-wedding-set.webp") },
  { slug: "gold-filigree-bangles", name: "Filigree Gold Bangles", category: "gold", image: p("gold-filigree-bangles.webp") },
  { slug: "gold-bezel-necklace", name: "Gold Bezel Necklace", category: "gold", image: p("gold-bezel-necklace.webp"), cover: true },
  { slug: "silver-rope-bracelet", name: "Silver Rope Bracelet", category: "silver", image: p("silver-rope-bracelet.webp") },
  { slug: "silver-cuban-chain", name: "Silver Cuban Chain", category: "silver", image: p("silver-cuban-chain.jpg") },
  { slug: "silver-byzantine-bracelet", name: "Silver Byzantine Bracelet", category: "silver", image: p("silver-byzantine-bracelet.jpg") },
  { slug: "silver-cable-chain", name: "Silver Cable Chain", category: "silver", image: p("silver-cable-chain.jpg") },
  { slug: "diamond-eternity-ring", name: "Pavé Solitaire Ring", category: "silver", image: p("diamond-eternity-ring.jpg") },
  { slug: "luxury-watch", name: "Skeleton Chronograph Watch", category: "watches", image: p("luxury-watch.webp") },
];
