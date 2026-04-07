// import { Link } from "lucide-react";

import Link from "next/link";

export function Hero() {
  return (
    <section className="rise relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-black/5 bg-[#efeff1]">
      <div className="relative min-h-[500px] sm:min-h-[620px] lg:min-h-[766px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/our_image/bg2.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-6xl items-center px-6 sm:min-h-[620px] sm:px-10 lg:min-h-[766px] lg:px-6">
          <div>
            <h1 className="display-font max-w-2xl  leading-[0.9] uppercase text-[#06211d] sm:text-7xl lg:text-[4.45rem]">
              Earrings <span className="text-[var(--gold)]">Look</span>
            </h1>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.09em] text-[#35524d] sm:text-[1.05rem]">
              Designed For Dalila Unique Shop
            </p>
            <Link href="/shop" className="mt-10 inline-flex h-12 min-w-36 items-center justify-center bg-[var(--deep)] px-8 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#0a2e28]">
              Shop Now
            </Link>
            <div className="mt-16 flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-black/70" />
              <span className="h-1 w-2 rounded-full bg-black/50" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 " />
      </div>
    </section>
  );
}
