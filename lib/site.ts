export const site = {
  name: "Yakub Jewellers",
  tagline: "Gems & Jewellery",
  description:
    "Yakub Jewellers — genuine Tanzanite, gold and silver jewellery. Engagement rings, necklaces, bracelets, bangles and watches, chosen with care in Tanzania.",
  phoneDisplay: "+255 766 677 524",
  phoneE164: "+255766677524",
  whatsappNumber: "255766677524",
  // Shown on the shop's signage for Chinese-speaking customers.
  chineseLine: "我们卖黄金、银和坦桑石珠宝",
  // Add the showroom address here when ready; the Visit section adapts.
  address: "",
};

export function whatsappLink(message?: string) {
  const text =
    message ?? `Hello ${site.name}, I would like to know more about your jewellery.`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const navLeft = [
  { label: "Shop", href: "#collection" },
  { label: "Tanzanite", href: "#tanzanite" },
  { label: "Categories", href: "#categories" },
];

export const navRight = [
  { label: "Our Story", href: "#story" },
  { label: "Visit Us", href: "#visit" },
];
