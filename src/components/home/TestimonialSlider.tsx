"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Alaxander Lee",
    text: "Lorem Ipsum Dolor Sit Amet, Conse Elit, Sedid Do Eiusmod Tempor Incidit Laboret Dolore Magna Aliqua. Quis Ipsum Usndi Laboris Ipsum Dolor Sitamet Conseelit, Sedid Mollit",
    avatarUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/tstimonal/1.jpg",
  },
  {
    name: "Dalaxander Dee",
    text: "Premium service and elegant finishing made every order memorable. Their design language feels timeless while still modern and wearable.",
    avatarUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/tstimonal/2.jpg",
  },
];

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="relative left-1/2 mt-24 w-screen -translate-x-1/2 overflow-hidden bg-[#f6f6f8]">
      <div className="grid min-h-[740px] md:grid-cols-[1fr_1.62fr]">
        <div
          className="min-h-[420px] bg-cover bg-center"
          style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/our_image/testi-1-1.jpg")' }}
          aria-hidden="true"
        />

        <div className="relative flex items-center justify-center px-6 py-16 sm:px-12">
          <div
            className="pointer-events-none absolute bottom-20 right-20 hidden h-28 w-28 bg-contain bg-center bg-no-repeat opacity-35 lg:block"
            style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/img/shapes/ele-m-1-1.svg")' }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-36 right-64 hidden h-28 w-28 bg-contain bg-center bg-no-repeat opacity-30 lg:block"
            style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/img/shapes/ele-m-1-2.svg")' }}
            aria-hidden="true"
          />

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--gold)]">Client Testimonials</p>
            <h2 className="display-font mt-4 text-5xl uppercase leading-[1.02] text-[var(--deep)] sm:text-6xl">
              Our Happy Clients
            </h2>
            <div
              className="mx-auto mt-6 h-5 w-40 bg-contain bg-center bg-no-repeat opacity-50"
              style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/img/shapes/title-shape-2.svg")' }}
              aria-hidden="true"
            />

            <div className="mx-auto mt-12 grid max-w-md grid-cols-[1fr_auto_1fr] items-center gap-5">
              <button onClick={prev} className="justify-self-start text-[#1f2328] transition hover:text-[var(--deep)]" aria-label="Previous testimonial">
                <ChevronLeft size={34} strokeWidth={1.6} />
              </button>

              <div
                className="h-24 w-24 rounded-full border-[5px] border-[var(--gold)] bg-cover bg-center"
                style={{ backgroundImage: `url(${current.avatarUrl})` }}
                aria-label={current.name}
              />

              <button onClick={next} className="justify-self-end text-[#1f2328] transition hover:text-[var(--deep)]" aria-label="Next testimonial">
                <ChevronRight size={34} strokeWidth={1.6} />
              </button>
            </div>

            <p className="mx-auto mt-10 max-w-4xl text-center text-[2rem] leading-[1.9] text-[#5f6368] sm:text-[2.1rem]">
              “{current.text}“
            </p>
            <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.14em] text-[#162321]">- {current.name} -</p>
          </div>
        </div>
      </div>
    </section>
  );
}
