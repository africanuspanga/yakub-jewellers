import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const MenuIcon = (p: P) => (
  <svg {...base} {...p}><path d="M3 7h18M3 12h18M3 17h12" /></svg>
);
export const CloseIcon = (p: P) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const ArrowRight = (p: P) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowLeft = (p: P) => (
  <svg {...base} {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);
export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
);
export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
export const GemIcon = (p: P) => (
  <svg {...base} {...p}><path d="M6 3h12l4 6-10 12L2 9l4-6zM2 9h20M12 21L8 9l4-6 4 6-4 12" /></svg>
);
export const HandIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21a8 8 0 01-8-8V9a1.5 1.5 0 013 0v3M7 12V5a1.5 1.5 0 013 0v6M10 11V4a1.5 1.5 0 013 0v7M13 11V5.5a1.5 1.5 0 013 0V14a7 7 0 01-4 7" />
  </svg>
);
export const RulerIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
  </svg>
);
export const ChatIcon = (p: P) => (
  <svg {...base} {...p}><path d="M4 5h16v11H9l-5 4V5z" /><path d="M8 9.5h8M8 12.5h5" /></svg>
);

export const WhatsAppIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 01-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 01-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47a9.4 9.4 0 016.7 2.78 9.4 9.4 0 012.77 6.7c0 5.22-4.25 9.46-9.47 9.46zm8.06-17.52A11.32 11.32 0 0012.04.65C5.76.65.65 5.76.65 12.04c0 2 .52 3.97 1.52 5.7L.55 23.65l6.05-1.59a11.37 11.37 0 005.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.19-5.9-3.34-8.05z" />
  </svg>
);
