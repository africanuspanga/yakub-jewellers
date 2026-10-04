import Image from "next/image";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "../icons";

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-ink text-cream">
      <Image
        src="/images/diamond-ring-silk.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[60%_50%] opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80 sm:bg-gradient-to-r sm:from-ink/85 sm:via-ink/45 sm:to-ink/10" />
      <div className="container-x flex min-h-[30rem] flex-col items-center justify-center py-20 text-center sm:min-h-[34rem] sm:items-start sm:text-left lg:min-h-[38rem]">
        <h2 id="cta-title" className="heading max-w-[18ch] text-4xl sm:text-5xl lg:text-6xl" data-reveal>
          Find the piece you&rsquo;ll treasure forever
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/80 sm:text-[15px]" data-reveal>
          Engagement rings, anniversary gifts or a little something for yourself — tell us what you
          have in mind and we&rsquo;ll help you find it.
        </p>
        <a
          href={whatsappLink("Hello Yakub Jewellers, I'm looking for a special piece. Can you help me?")}
          target="_blank"
          rel="noopener"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-cream px-7 text-sm font-medium text-wine transition-colors hover:bg-white"
          data-reveal
        >
          <WhatsAppIcon className="size-4" /> Start a Conversation
        </a>
      </div>
    </section>
  );
}
