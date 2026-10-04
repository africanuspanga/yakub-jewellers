import Image from "next/image";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "../icons";

const facts = [
  { value: "1", label: "Place on Earth it is mined" },
  { value: "1967", label: "Year it was discovered" },
  { value: "3", label: "Colours in a single stone" },
];

export function Tanzanite() {
  return (
    <section
      id="tanzanite"
      aria-labelledby="tz-title"
      className="relative overflow-hidden bg-tanzanite-deep text-cream"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_80%_40%,rgba(84,88,214,0.45),transparent_60%),radial-gradient(40rem_30rem_at_0%_100%,rgba(92,10,24,0.55),transparent_60%)]"
      />
      <div className="container-x relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28">
        <div className="order-2 lg:order-1" data-reveal>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold">The jewel of Tanzania</p>
          <h2 id="tz-title" className="heading text-4xl sm:text-5xl xl:text-6xl">
            A gem found in only one place on Earth
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-[15px]">
            Tanzanite is mined only in the Merelani Hills, in the shadow of Mount Kilimanjaro. Its
            velvety blue-violet colour shifts as the light moves — a stone as rare as the moments it
            celebrates. Bring home a piece of Tanzania, chosen with care by our team.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-3 sm:max-w-lg sm:gap-6">
            {facts.map((f) => (
              <div key={f.label} className="border-t border-cream/25 pt-3">
                <dt className="sr-only">{f.label}</dt>
                <dd className="heading text-3xl text-gold sm:text-4xl">{f.value}</dd>
                <dd className="mt-1 text-[11px] leading-snug text-cream/70 sm:text-xs">{f.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#shop-tanzanite"
              className="inline-flex min-h-12 items-center justify-center bg-cream px-7 text-sm font-medium text-tanzanite-deep transition-colors hover:bg-white"
            >
              Shop Tanzanite
            </a>
            <a
              href={whatsappLink("Hello Yakub Jewellers, I'd like advice on choosing a Tanzanite piece.")}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-cream/40 px-7 text-sm font-medium transition-colors hover:border-cream hover:bg-cream/10"
            >
              <WhatsAppIcon className="size-4" /> Ask an Expert
            </a>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none" data-reveal>
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-full border border-cream/15" />
            <div className="absolute inset-[7%] overflow-hidden rounded-full bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/products/tanzanite-cushion-ring.webp"
                alt="Cushion-cut tanzanite ring with diamond-set shoulders"
                fill
                sizes="(min-width: 1024px) 34rem, 90vw"
                className="object-contain p-[12%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
