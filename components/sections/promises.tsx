import { site } from "@/lib/site";
import { ChatIcon, GemIcon, HandIcon, RulerIcon } from "../icons";

const items = [
  { icon: GemIcon, title: "Genuine Tanzanite", text: "Stones from Tanzania — the only source of Tanzanite in the world." },
  { icon: RulerIcon, title: "Gold, Silver & Watches", text: "Rings, chains, bangles, earrings and timepieces, all under one roof." },
  { icon: HandIcon, title: "Personal Guidance", text: "We help you choose the right piece for the person and the moment." },
  { icon: ChatIcon, title: "欢迎光临", text: `${site.chineseLine} — we welcome Chinese-speaking customers.` },
];

export function Promises() {
  return (
    <section aria-label="Why shop with us" className="border-y border-line bg-ivory">
      <ul className="container-x grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }, i) => (
          <li
            key={title}
            className={`flex gap-4 py-6 sm:py-10 sm:pr-6 lg:px-6 lg:first:pl-0 ${i > 0 ? "lg:border-l lg:border-line" : ""}`}
            data-reveal
            style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-wine/8 text-wine">
              <Icon className="size-5" />
            </span>
            <div>
              <h3 className="heading text-lg">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
