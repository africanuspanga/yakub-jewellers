import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";
import { PhoneIcon, PinIcon, WhatsAppIcon } from "../icons";

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="py-16 sm:py-20 lg:py-24">
      <div className="container-x grid items-stretch gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <div className="flex items-center justify-center bg-white p-8 sm:p-12" data-reveal>
          <Image
            src="/images/logo-full.png"
            alt={`${site.name} — ${site.tagline}`}
            width={1221}
            height={1072}
            sizes="(min-width: 1024px) 28rem, 80vw"
            className="h-auto w-full max-w-[22rem] mix-blend-multiply"
          />
        </div>

        <div className="flex flex-col justify-center" data-reveal>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-wine">Visit or get in touch</p>
          <h2 id="visit-title" className="heading text-4xl sm:text-5xl">
            We&rsquo;d love to see you
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-[15px]">
            Come and see our Tanzanite, gold and silver jewellery in person, or message us to ask about
            a piece, check availability or arrange a viewing.
          </p>

          <ul className="mt-8 divide-y divide-line border-y border-line">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener" className="group flex min-h-16 items-center gap-4 py-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#1f9d55] text-white">
                  <WhatsAppIcon className="size-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-xs uppercase tracking-[0.16em] text-muted">WhatsApp</span>
                  <span className="block font-medium group-hover:text-wine">{site.phoneDisplay}</span>
                </span>
                <span aria-hidden className="text-wine transition-transform group-hover:translate-x-1">→</span>
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneE164}`} className="group flex min-h-16 items-center gap-4 py-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-wine text-cream">
                  <PhoneIcon className="size-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-xs uppercase tracking-[0.16em] text-muted">Call us</span>
                  <span className="block font-medium group-hover:text-wine">{site.phoneDisplay}</span>
                </span>
                <span aria-hidden className="text-wine transition-transform group-hover:translate-x-1">→</span>
              </a>
            </li>
            <li className="flex min-h-16 items-center gap-4 py-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-tanzanite text-cream">
                <PinIcon className="size-5" />
              </span>
              <span className="flex-1">
                <span className="block text-xs uppercase tracking-[0.16em] text-muted">Showroom</span>
                <span className="block font-medium">
                  {site.address || "Call or WhatsApp us for directions"}
                </span>
              </span>
            </li>
          </ul>

          <p className="mt-6 text-sm text-muted" lang="zh">{site.chineseLine}</p>
        </div>
      </div>
    </section>
  );
}
