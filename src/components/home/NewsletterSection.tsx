import { Send } from "lucide-react";

const instagramImages = [
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/1.jpeg",
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/2.jpeg",
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/3.jpeg",
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/4.jpeg",
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/5.jpeg",
];

export function NewsletterSection() {
  return (
    <div className="mx-auto max-w-7xl overflow-x-clip px-4 sm:px-6">
      <section className="mt-20 mb-20">
        <p className="text-center text-xs font-bold uppercase tracking-[0.35em] text-[var(--gold)]">Our Newsletter</p>
        <h2 className="display-font mt-3 text-center text-5xl text-[var(--deep)]">Get Our Latest Update</h2>
        <p className="mt-3 text-center text-[var(--deep)]/55">Sign up to our newsletter for information on sales.</p>

        <form className="mx-auto mt-8 flex w-full max-w-2xl flex-col border border-black/70 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-14 flex-1 bg-[#111320] px-4 text-white outline-none placeholder:text-white/60"
          />
          <button className="inline-flex h-14 items-center justify-center gap-2 bg-[var(--surface)] px-8 text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)] transition hover:bg-[#ecebe5]">
            <Send size={16} />
            Subscribe
          </button>
        </form>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {instagramImages.map((imageUrl, index) => (
            <a
              key={index}
              href="https://www.instagram.com/"
              className="group relative block h-64 overflow-hidden border border-black/5 bg-[#d9d9d9] sm:h-72 lg:h-[330px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${imageUrl})` }}
                aria-hidden="true"
              />
              <span className="absolute inset-0 hidden place-items-center bg-black/35 text-sm font-bold uppercase tracking-[0.2em] text-white group-hover:grid">
                Instagram
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}