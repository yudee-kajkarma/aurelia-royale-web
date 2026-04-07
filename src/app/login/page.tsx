import Link from "next/link";
import Image from "next/image";
import DalilaLogo from "@/assets/DalilaLogo.png";

export default async function LoginPage() {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return (
    <main className="min-h-screen overflow-x-clip ">
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-12 sm:px-8">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[280px] " />

        <section className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-[22px] border border-white/5 bg-white lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="flex min-h-[420px] items-center justify-center bg-[linear-gradient(160deg,#045942_0%,#022f25_58%,#010d0a_100%)] px-8 py-12 sm:min-h-[520px] sm:px-12">
            <div className="text-center text-white">
              <div className="mx-auto  inline-flex items-center justify-center">
               <Image
                  src={DalilaLogo}
                  alt="Dalila Diamonds"
                  width={150}
                  height={46}
                  className="h-auto w-[100px] sm:w-[150px]"
                />
              </div>

              <h2 className="text-4xl font-bold leading-[1.08] text-[var(--gold)] sm:text-3xl lg:text-3xl">Begin Your Diamond Journey</h2>
              <p className="mx-auto mt-6 max-w-sm text-lg leading-[1.45] text-white/85 sm:mt-8 sm:text-xl lg:text-2xl">
                Experience timeless elegance and brilliance.
              </p>
            </div>
          </aside>

          <div className="relative min-h-[520px] bg-[#f6f6f8] px-8 py-8 sm:px-12 sm:py-10">
            <div className="flex justify-end">
              <Link href="/home" className="inline-flex items-center rounded-full bg-[var(--deep)] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#0a2e28]">
                Home
              </Link>
            </div>

            <div className="mx-auto mt-10 max-w-lg sm:mt-16">
              <h1 className="text-4xl font-bold text-[#0f1216] sm:text-3xl lg:text-3xl">Login</h1>

              <form className="mt-8 grid gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-14 rounded-xl border border-black/12 bg-white px-4 text-base font-semibold text-[#1f242b] outline-none placeholder:text-[#9ea3ad] sm:text-lg"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="h-14 rounded-xl border border-black/12 bg-white px-4 text-base font-semibold text-[#1f242b] outline-none placeholder:text-[#9ea3ad] sm:text-lg"
                />
                <button
                  type="submit"
                  className="mt-2 h-14 rounded-xl bg-[var(--gold)] text-base font-extrabold text-[#1a1710] transition hover:bg-[#b8972f] sm:text-sm"
                >
                  Login
                </button>
              </form>

              <p className="mt-6 text-base font-medium text-[#1f242b] sm:text-lg">
                Don&apos;t have account? <a href="#" className="font-bold text-[#0e5a47]">Register</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}