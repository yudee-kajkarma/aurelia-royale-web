import { Phone } from "lucide-react";
import Link from "next/link";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--background)]">
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div
          className="relative h-[290px] bg-cover bg-center"
          style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/our_image/bg.jpg")' }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/15" />
          <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-10 sm:px-8">
            <div>
              <h1 className="display-font text-6xl font-semibold uppercase text-white sm:text-7xl">About Us</h1>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-[var(--gold)]">
                Home <span className="text-[var(--gold)]">&gt;</span> <span className="text-white">About Us</span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-3 [background:radial-gradient(circle,#0e2230_3px,transparent_4px)] [background-size:22px_100%]" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--gold)]">About Us</p>
          <h2 className="display-font mt-3 text-6xl uppercase leading-[1.04] text-[var(--deep)]">Graceful Drops</h2>
          <p className="mt-8 max-w-xl text-[1.05rem] font-semibold leading-10 text-[#8d8f94]">
            Lorem Ipsum Dolor Sit Amet, Conse Elit, Sedid Golden Eiusmod Tempor Aboret Dolore Magna Aliqua. Ipsum
            Conseel Dimonds Usndi Labois Sitamet Sedid Sedid Do Eiusm.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-10 text-[#8e9094]">
            <div className="inline-flex items-center gap-3 text-lg font-semibold">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--gold)] bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/img/icons/vs-about-icon-1.svg")', backgroundSize: "20px 20px" }}
              />
              Online Booking
            </div>
            <div className="inline-flex items-center gap-3 text-lg font-semibold">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--gold)] bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/img/icons/vs-about-icon-2.svg")', backgroundSize: "20px 20px" }}
              />
              Amazing Deals
            </div>
          </div>

          <div className="mt-8 h-px w-full max-w-[560px] bg-black/12" />

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="inline-flex bg-[var(--gold)] px-10 py-4 text-base font-extrabold uppercase tracking-[0.05em] text-white">
              Contact Us
            </Link>

            <div className="inline-flex items-center gap-3">
              {/* <span
                className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#b8b8b8] bg-cover bg-center"
                style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/img/author/about-auth-1-1.jpg")' }}
              /> */}
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold)] text-white">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-lg font-bold uppercase tracking-[0.08em] text-[#8e9094]">Call For Us</p>
                <p className="text-3xl font-bold text-[var(--gold)]">+1 444 888 966</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-[430px] w-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/our_image/about/About-1.jpg")' }}
          aria-hidden="true"
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-6 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div className="relative mx-auto h-[560px] w-full max-w-[420px]">
          <div className="absolute left-0 top-0 h-44 w-6 bg-[var(--gold)]" />
          <div
            className="absolute right-0 top-6 h-[530px] w-[95%] bg-cover bg-center"
            style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/our_image/about/About-2.jpg")' }}
            aria-hidden="true"
          />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[160px_1fr]">
          <div className="mx-auto inline-flex h-56 w-40 items-center justify-center rounded-[5rem] bg-[var(--gold)]">
            <div
              className="h-20 w-20 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/img/about/about-1-2.svg")' }}
              aria-hidden="true"
            />
          </div>

          <div className="text-center lg:text-left">
            <div
              className="mx-auto mb-5 h-24 w-24 bg-contain bg-center bg-no-repeat opacity-45 lg:mx-0"
              style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/img/about/about-1-6.svg")' }}
              aria-hidden="true"
            />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--gold)]">Customs Jewelry</p>
            <h3 className="display-font mt-3 text-6xl uppercase leading-[1.04] text-[var(--deep)]">Graceful Ear Drops</h3>
            <p className="mx-auto mt-7 max-w-2xl text-[1.05rem] font-semibold leading-10 text-[#8d8f94] lg:mx-0">
              Lorem Ipsum Dolor Sit Amet, Conse Elit, Sedid Do Eiusmod Tempor Incidit Laboret Dolore Magna Aliqua.
              Quis Ipsum Conseel Usndi Laboris Sitamet Sedid Sedid Do Eiusm.
            </p>
            <Link href="/shop" className="mt-9 inline-flex bg-[var(--gold)] px-10 py-4 text-base font-extrabold uppercase tracking-[0.05em] text-white">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <NewsletterSection />
    </main>
  );
}
