"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLeft, navRight, site, whatsappLink } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const allLinks = [...navLeft, ...navRight];

  return (
    <>
      <div className="bg-ink text-cream/90">
        <p className="container-x py-2 text-center text-[11px] tracking-wide sm:text-xs">
          Genuine Tanzanite, Gold &amp; Silver ·{" "}
          <a href={whatsappLink()} className="underline underline-offset-2 hover:text-gold">
            Chat with us on WhatsApp
          </a>
        </p>
      </div>

      <header
        className={`sticky top-0 z-40 border-b bg-ivory/95 backdrop-blur-md transition-shadow ${
          scrolled ? "border-line shadow-[0_6px_24px_-12px_rgba(22,18,20,0.25)]" : "border-transparent"
        }`}
      >
        <div className="container-x grid h-16 grid-cols-[1fr_auto_1fr] items-center lg:h-20">
          {/* Left */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="-ml-2 grid size-11 place-items-center rounded-full text-ink lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <MenuIcon className="size-6" />
            </button>
            <nav aria-label="Primary" className="hidden gap-8 lg:flex">
              {navLeft.map((l) => (
                <a key={l.href} href={l.href} className="text-xs font-medium uppercase tracking-[0.14em] text-ink/80 hover:text-wine">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5" aria-label={`${site.name} — home`}>
            <Image src="/images/logo-y.png" alt="" width={323} height={526} className="h-9 w-auto lg:h-12" preload />
            <Image src="/images/logo-script.png" alt={site.name} width={1137} height={263} className="h-7 w-auto sm:h-8 lg:h-10" preload />
          </Link>

          {/* Right */}
          <div className="flex items-center justify-end gap-6">
            <nav aria-label="Secondary" className="hidden gap-8 lg:flex">
              {navRight.map((l) => (
                <a key={l.href} href={l.href} className="text-xs font-medium uppercase tracking-[0.14em] text-ink/80 hover:text-wine">
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href={`tel:${site.phoneE164}`}
              className="hidden size-10 place-items-center rounded-full text-ink/80 hover:text-wine lg:grid"
              aria-label={`Call ${site.phoneDisplay}`}
            >
              <PhoneIcon className="size-5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              className="-mr-2 grid size-11 place-items-center rounded-full text-[#1f9d55] lg:mr-0 lg:size-auto lg:gap-2 lg:rounded-none lg:bg-wine lg:px-4 lg:py-2.5 lg:text-cream lg:hover:bg-wine-deep"
              aria-label="Chat on WhatsApp"
            >
              <span className="flex items-center gap-2">
                <WhatsAppIcon className="size-6 lg:size-4" />
                <span className="hidden text-xs font-medium uppercase tracking-[0.12em] lg:inline">WhatsApp</span>
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          inert={!open}
          className={`absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-wine text-cream shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex h-16 items-center justify-between px-4">
            <Image src="/images/logo-script-light.png" alt={site.name} width={1137} height={263} className="h-7 w-auto" />
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-11 place-items-center rounded-full"
              aria-label="Close menu"
            >
              <CloseIcon className="size-6" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 pt-6">
            <ul className="divide-y divide-cream/15 border-y border-cream/15">
              {allLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="heading flex min-h-14 items-center justify-between py-3 text-2xl"
                  >
                    {l.label}
                    <span aria-hidden className="text-gold">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3 p-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              className="flex min-h-12 items-center justify-center gap-2 bg-cream text-sm font-medium text-wine"
            >
              <WhatsAppIcon className="size-5" /> Chat on WhatsApp
            </a>
            <a
              href={`tel:${site.phoneE164}`}
              className="flex min-h-12 items-center justify-center gap-2 border border-cream/40 text-sm font-medium"
            >
              <PhoneIcon className="size-5" /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
