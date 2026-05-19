import Image from "next/image";
import AboutHero from "@/assets/About-Hero.png";
import Vector1 from "@/assets/vector-1.png";
import Vector2 from "@/assets/vector-2.png";
import Vector3 from "@/assets/vector-3.png";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";

export default function AboutPage() {
    return (
        <main className="min-h-screen overflow-x-clip bg-background">
            {/* Hero banner */}
            <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc]">
                <div className="mx-auto flex h-[300px] max-w-7xl items-center justify-center px-6">
                    <h1 className="font-[family-name:var(--font-cormorant)] text-7xl font-semibold uppercase tracking-[0.04em] text-foreground sm:text-8xl">
                        About Us
                    </h1>
                </div>
            </section>

            {/* Legacy / intro */}
            <section className="mx-auto grid max-w-6xl gap-14 px-6 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div>
                    <div className="flex items-center gap-4">
                        <span className="h-px w-12 bg-gold" />
                        <p className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                            About Us
                        </p>
                    </div>

                    <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[1.05] text-foreground sm:text-6xl">
                        A Legacy Of Fine Craft.
                    </h2>

                    <div className="mt-8 space-y-6 font-[family-name:var(--font-jost)] text-[1.05rem] font-light  text-[#3b3b3b]">
                        <p>
                            At Aurelia Royal, elegance is more than a style — it
                            is a statement of timeless sophistication. Our
                            collection is crafted to celebrate modern luxury
                            through finely designed jewellery pieces that blend
                            contemporary artistry with classic charm. Every
                            detail reflects grace, confidence, and refined
                            beauty for those who appreciate exclusivity.
                        </p>
                        <p>
                            We believe jewellery should feel personal,
                            memorable, and effortlessly luxurious. From dazzling
                            statement rings to delicate necklaces and radiant
                            earrings, Aurelia Royal brings together
                            craftsmanship and premium aesthetics to create
                            pieces that elevate every occasion. Designed for the
                            modern muse, our creations embody luxury with a
                            minimalist touch.
                        </p>
                    </div>

                    <div className="mt-11 flex justify-between  gap-x-7 gap-y-8">
                        {[
                            { value: "5+", label: "Year's Of Expertise" },
                            { value: "850+", label: "Exclusive Designs" },
                            { value: "1500+", label: "Jewelry Lovers" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="font-[family-name:var(--font-cormorant)] text-6xl font-semibold leading-none text-gold">
                                    {stat.value}
                                </p>
                                <p className="mt-3 font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#5a5a5a]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-140 w-full">
                    <Image
                        src={AboutHero}
                        alt="Model wearing Aurelia Royal jewellery"
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </section>

            {/* Our philosophy */}
            <section className="relative left-1/2 w-screen -translate-x-1/2 [background:radial-gradient(ellipse_115%_85%_at_50%_16%,#2e5a48_0%,#173f31_52%,#0a261c_100%)]">
                <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
                    <div className="flex items-center gap-4">
                        <span className="h-px w-12 bg-gold" />
                        <p className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                            Our Philosophy
                        </p>
                    </div>

                    <h2 className="mt-7 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[1.12] text-[#f3f1e4] sm:text-6xl">
                        We Believe Jewellery Is Not Decoration{" "}
                        <span className="text-gold">—</span> It Is Memory Made
                        Permanent.
                    </h2>

                    <div className="mt-20 grid gap-14 sm:grid-cols-3 sm:gap-10">
                        {[
                            {
                                no: "01",
                                title: "Uncompromising Quality",
                                body: "Every gemstone is hand-selected by our master gemmologist. Every metal is tested and hallmarked. We accept only what is genuinely extraordinary.",
                                icon: Vector1,
                            },
                            {
                                no: "02",
                                title: "Ethical Provenance",
                                body: "Our supply chain is independently audited to ensure no conflict minerals or exploitative practices are ever part of your piece.",
                                icon: Vector2,
                            },
                            {
                                no: "03",
                                title: "Timeless Design",
                                body: "We resist trend. Our pieces are designed to be worn by your daughter and her daughter — forms that feel as relevant in fifty years as they do today.",
                                icon: Vector3,
                            },
                        ].map((item) => (
                            <div key={item.no}>
                                <div className="flex items-center justify-between md: gap-10">
                                    <span className="font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-none text-white/30">
                                        {item.no}
                                    </span>
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={44}
                                        height={44}
                                        className="h-11 w-11 object-contain"
                                    />
                                </div>

                                <h3 className="mt-7 font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#f3f1e4]">
                                    {item.title}
                                </h3>
                                <p className="mt-4 font-[family-name:var(--font-jost)] text-lg font-light leading-[1.8] text-[#FAE9BD]">
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TestimonialSlider />

            <NewsletterSection />
        </main>
    );
}
