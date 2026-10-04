import Image from "next/image";
import { navLeft, navRight, site, whatsappLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-wine-deep text-cream" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo-y.png" alt="" width={323} height={526} className="h-14 w-auto" />
            <Image src="/images/logo-script-light.png" alt={site.name} width={1137} height={263} className="h-10 w-auto" />
          </div>
          <p className="mt-2 pl-0.5 text-[11px] uppercase tracking-[0.35em] text-gold">{site.tagline}</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            We sell Tanzanite, gold and silver jewellery — and help you find the piece that marks your
            moment.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="heading text-sm tracking-[0.14em] text-cream/60">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 sm:grid-cols-1">
            {[...navLeft, ...navRight].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="flex min-h-10 items-center text-sm text-cream/85 hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="heading text-sm tracking-[0.14em] text-cream/60">Contact</h2>
          <ul className="mt-4 space-y-1">
            <li>
              <a href={`tel:${site.phoneE164}`} className="flex min-h-10 items-center gap-2 text-sm hover:text-gold">
                <PhoneIcon className="size-4" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener" className="flex min-h-10 items-center gap-2 text-sm hover:text-gold">
                <WhatsAppIcon className="size-4" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-cream/60" lang="zh">{site.chineseLine}</p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="container-x py-5 text-xs text-cream/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
