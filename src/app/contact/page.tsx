import { Camera, Globe, Mail, MessageCircle, PhoneCall } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--background)]">
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div
          className="relative h-[320px] bg-cover bg-center"
          style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/our_image/bg.jpg")' }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/18" />
          <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-12 sm:px-8">
            <div>
              <h1 className="display-font text-6xl font-semibold uppercase text-white sm:text-7xl">Contact Us</h1>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-[var(--gold)]">
                Home <span className="text-[var(--gold)]">&gt;</span> <span className="text-white">Contact Us</span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-3 [background:radial-gradient(circle,#0e2230_3px,transparent_4px)] [background-size:22px_100%]" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_1.35fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Contact Info</p>
          <h2 className="display-font mt-3 text-6xl uppercase leading-[1.04] text-[var(--deep)]">Get In Touch</h2>

          <div className="mt-8 space-y-5">
            <p className="text-lg font-bold uppercase text-[var(--deep)]">
              Address: <span className="text-[var(--gold)]">Abx Xyd</span>
            </p>

            <div className="h-px bg-black/12" />

            <div className="flex flex-wrap items-center gap-3 text-[var(--deep)]">
              <PhoneCall size={22} className="text-[var(--deep)]" />
              <p className="text-lg font-bold uppercase">Customer Service :</p>
              <p className="text-lg font-bold text-[var(--gold)]">+9-555-888-679</p>
            </div>

            <div className="h-px bg-black/12" />

            <div className="flex flex-wrap items-center gap-3 text-[var(--deep)]">
              <Mail size={22} className="text-[var(--deep)]" />
              <p className="text-lg font-bold uppercase">Careers :</p>
              <p className="text-lg font-bold uppercase text-[var(--gold)]">Dalila@Info.Com</p>
            </div>

            <div className="h-px bg-black/12" />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <p className="text-lg font-bold uppercase text-[var(--deep)]">Follow</p>
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center bg-[#3f6ad8] text-white" aria-label="Facebook">
                <Globe size={15} />
              </a>
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center bg-[#7f3fcc] text-white" aria-label="Instagram">
                <Camera size={15} />
              </a>
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center bg-[#2f9adf] text-white" aria-label="Twitter">
                <MessageCircle size={15} />
              </a>
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center bg-[#0c76aa] text-white" aria-label="LinkedIn">
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>

        <form className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name *"
              className="h-14 border border-black/25 bg-[#090f1a] px-4 text-base font-semibold text-white outline-none placeholder:text-[#8f9298]"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="h-14 border border-black/25 bg-[#090f1a] px-4 text-base font-semibold text-white outline-none placeholder:text-[#8f9298]"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="email"
              placeholder="Email Address"
              className="h-14 border border-black/25 bg-[#090f1a] px-4 text-base font-semibold text-white outline-none placeholder:text-[#8f9298]"
            />
            <input
              type="tel"
              placeholder="Phone *"
              className="h-14 border border-black/25 bg-[#090f1a] px-4 text-base font-semibold text-white outline-none placeholder:text-[#8f9298]"
            />
          </div>

          <textarea
            placeholder="Type Your Message"
            className="h-44 resize-none border border-black/25 bg-[#090f1a] px-4 py-4 text-base font-semibold text-white outline-none placeholder:text-[#8f9298]"
          />

          <div>
            <button className="bg-[var(--deep)] px-8 py-4 text-lg font-extrabold uppercase tracking-[0.04em] text-white transition hover:bg-[#0a2e28]">
              Submit Now
            </button>
          </div>
        </form>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Find Us</p>
        <h2 className="display-font mt-3 text-center text-5xl uppercase text-[var(--deep)]">Location Map</h2>

        <div className="mt-8 overflow-hidden border border-black/15 bg-white">
          <iframe
            title="Dalila Location Map"
            src="https://maps.google.com/maps?q=Dubai&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
