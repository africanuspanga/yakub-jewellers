import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener"
      aria-label="Chat with Yakub Jewellers on WhatsApp"
      className="fixed z-30 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_-6px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 active:scale-95"
      style={{
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
