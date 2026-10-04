# Yakub Jewellers — website

Next.js 16 (App Router, Turbopack) + Tailwind CSS 4. A single, mobile-first landing page for Yakub Jewellers — Tanzanite, gold and silver jewellery.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

To preview on a phone on the same Wi-Fi: `npm run dev -- -H 0.0.0.0`, then open `http://<your-computer-ip>:3000`.

## Where to edit

| What | File |
| --- | --- |
| Phone, WhatsApp number, showroom address | `lib/site.ts` |
| Products (name, category, photo, best seller) | `lib/products.ts` |
| Product photos | `public/images/products/` |
| Colours & fonts | `app/globals.css` (`@theme`) and `app/layout.tsx` |
| Page sections | `components/sections/*` (order set in `app/page.tsx`) |

Every product card and call-to-action opens WhatsApp with a pre-written message naming the piece, so no prices are shown on the site. Set `address` in `lib/site.ts` and the Visit section shows it in place of "Call or WhatsApp us for directions".
