import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "Can You Swim Wearing Diamond Jewellery?",
  description: "Learn whether you should wear diamond rings, earrings, necklaces or bracelets in pools or the sea, what chlorine and salt water can affect, and what to do after accidental exposure.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/swim-wearing-diamond-jewellery/" },
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "paragraph", text: "It is better to remove fine diamond jewellery before swimming. The diamond itself is highly durable, but swimming exposes the complete piece to risks that have little to do with diamond hardness. In a swimming pool or hot tub, chlorine can affect some of the metal alloys used in jewellery and can contribute to damage in settings over time. In the sea, salt water introduces a different combination of residue, abrasive particles, movement and a serious practical issue: loss. Cold water can also make fingers temporarily smaller, making a ring that normally feels secure easier to lose. The safest rule is therefore simple: remove fine diamond jewellery before entering a pool, hot tub, sea or other swimming environment. If you accidentally swim while wearing it, do not panic. Rinse the jewellery appropriately, dry it thoroughly and inspect it for any change in the setting or fastening." },
    ],
  },
  {
    heading: "Quick Answer",
    content: [
      { type: "paragraph", text: "You can physically swim while wearing diamond jewellery, but it is not recommended. The main reasons are: chlorine can affect jewellery metals, salt and other residue can collect around settings, water movement increases loss risk, and: cold water can temporarily reduce finger size. A diamond surviving the swim is not the same thing as the complete jewellery remaining unaffected. For valuable or sentimental pieces, removing them before swimming is the safer choice." },
    ],
  },
  {
    heading: "The Diamond Is Not the Main Problem",
    content: [
      { type: "paragraph", text: "Diamond ranks 10 on the Mohs hardness scale and is highly resistant to scratching. But jewellery is made from much more than diamond. A ring can contain: gold, platinum, silver, plating, prongs, soldered joints, pavé settings, and other components. An earring also relies on: posts, backs, hinges, and fastening mechanisms. A bracelet or necklace relies on: clasps, links, jump rings, bails, and articulated sections. The piece should therefore be judged according to its weakest or most vulnerable component, not just the hardness of its diamond." },
    ],
  },
  {
    heading: "Swimming Pool vs Sea: The Risks Are Different",
    content: [
      { type: "table", headers: ["Environment", "Main Concerns"], rows: [["Chlorinated pool", "Chemical exposure to metal/alloys + loss"], ["Hot tub", "Chlorine/chemicals + heat + loss"], ["Sea", "Salt residue + sand + movement + loss"], ["Cold open water", "Finger shrinkage + loss + impact"], ["Fresh water", "Loss + impact + residue depending on conditions"]] },
      { type: "paragraph", text: "The recommendation remains broadly the same: remove the jewellery first." },
    ],
  },
  {
    heading: "Can Chlorine Damage Diamond Jewellery?",
    content: [
      { type: "paragraph", text: "The diamond itself is not the main concern. GIA specifically warns that chlorine can damage or discolour precious metals and notes that chlorine can affect alloys used in gold jewellery. It also advises removing fine jewellery before entering chlorinated swimming pools. For diamond settings, this matters because weakened or damaged metal can affect the security of the stone. A diamond remaining intact does not help if the metal holding it becomes compromised." },
    ],
  },
  {
    heading: "Why Chlorine Matters for Gold Settings",
    content: [
      { type: "paragraph", text: "Pure gold is very resistant to corrosion, but jewellery gold is usually alloyed with other metals to create the required strength, colour and working properties. Chlorine can affect some of those alloy metals. GIA warns that chlorine exposure can erode metal alloys used in diamond settings and can contribute to damaged or loosened prongs. This is why the advice should be: remove the ring before swimming rather than: \"the diamond will be fine.\"" },
    ],
  },
  {
    heading: "Platinum and Chlorine",
    content: [
      { type: "paragraph", text: "Platinum is highly durable, but a platinum jewellery piece can still contain: other components, joins, gemstone settings, clasps, or mixed materials. Aurelia should therefore avoid claiming that platinum jewellery is automatically \"pool safe\". Even if the metal itself tolerates exposure well, the jewellery can still be: lost, knocked, or affected through another component." },
    ],
  },
  {
    heading: "Sterling Silver and Swimming",
    content: [
      { type: "paragraph", text: "Sterling silver is especially relevant because chlorine and salty environments can accelerate surface changes and tarnish. Current Tiffany silver-care guidance specifically recommends removing sterling-silver jewellery before: pools, hot tubs, hot springs, and the ocean. If the product is plated silver, the care requirements may be even more specific. Plated jewellery has a surface layer over another metal. Repeated chemical exposure, friction and environmental contact can affect that finish depending on the plating system and construction. The accurate guidance is: avoid unnecessary swimming exposure and follow the care instructions for the confirmed metal and finish." },
    ],
  },
  {
    heading: "What About Salt Water?",
    content: [
      { type: "paragraph", text: "Salt water is different from chlorinated pool water. The main concerns are: residue, sand, abrasion, movement, and loss. Salt itself can dry onto the jewellery and leave deposits around: settings, clasps, hinges, and articulated links. The sea also creates constant movement, making jewellery easier to lose. For rings, colder water creates an additional risk because finger size can temporarily decrease. Normal sea water is unlikely to damage the diamond itself, but the finished jewellery still faces residue, metal, setting and loss concerns. The recommendation remains: take fine jewellery off before entering the sea." },
    ],
  },
  {
    heading: "Cold Water Can Make Rings Looser",
    content: [
      { type: "paragraph", text: "Finger circumference changes with temperature. Cold conditions can make fingers temporarily smaller. A ring that feels comfortably secure on land may therefore become looser in cold water. That makes beaches, lakes and open-water swimming particularly risky for rings. A ring does not need to be oversized under normal conditions to slip off in cold water. Swimming adds: cold, lubrication, movement, and water pressure. The combination makes loss much easier than during normal dry wear. For this reason, even a correctly fitted engagement ring is best removed before swimming." },
    ],
  },
  {
    heading: "Swimming With Earrings, Necklaces and Bracelets",
    content: [
      { type: "paragraph", text: "Stud earrings may appear safer because they do not slide from fingers. But they can still be lost. Water activity can affect: backings, posts, hair movement, swim caps, goggles, and towels. A friction back that is already worn can become an obvious weak point. Hoops and drop earrings introduce even more movement and can catch on hair, swimwear, goggles, or towels." },
      { type: "paragraph", text: "A necklace can be lost if: the clasp opens, a jump ring deforms, the chain catches, or movement places stress on a weak connection. Tennis bracelets combine: many diamond settings, articulated links, and a clasp — swimming therefore exposes multiple possible failure points. The safer approach for all of these is to store them securely before entering the water." },
    ],
  },
  {
    heading: "Hot Tubs Add More Than Just Water",
    content: [
      { type: "paragraph", text: "Hot tubs combine: chemical exposure, heat, jets, and movement. Tiffany's current care guidance specifically recommends removing jewellery before swimming in hot tubs. The combination of elevated chlorine and temperature makes this a more concerning environment than a brief rinse with clean water." },
    ],
  },
  {
    heading: "What if You Accidentally Swim in a Chlorinated Pool?",
    content: [
      { type: "paragraph", text: "Do not panic. One accidental exposure does not automatically mean the jewellery has been destroyed. Once you are out of the pool: rinse the jewellery appropriately with clean water if its materials permit it, dry it thoroughly, and inspect it under good light. Look for: changed stone position, bent prongs, damaged clasps, or unusual movement. If anything appears different, stop wearing the piece and arrange professional inspection. For salt water: rinse off salt and residue appropriately. Pay attention to areas where salt can remain trapped: under settings, inside clasps, around earring backs, and within articulated bracelet links. Dry completely. Then inspect the jewellery." },
    ],
  },
  {
    heading: "Do Not Use Aggressive Cleaning After Swimming",
    content: [
      { type: "paragraph", text: "Avoid reacting to chlorine or salt exposure by using: toothpaste, abrasive powders, bleach, harsh household chemicals, or hard scrubbing. The jewellery may already have experienced unnecessary exposure. Use the appropriate gentle cleaning method instead." },
      { type: "paragraph", parts: [{ text: "For the full process, use " }, { text: "How to Clean Lab-Grown Diamond Jewellery at Home", href: "/blog/clean-lab-grown-diamond-jewellery/" }] },
    ],
  },
  {
    heading: "Inspect the Setting After Accidental Exposure",
    content: [
      { type: "paragraph", text: "Swimming itself does not automatically loosen a diamond. But if the jewellery already had a weakened setting, exposure and movement can make an existing problem more obvious. Look for: a tilted stone, missing or bent prongs, new gaps, pavé irregularities, or unusual clicking during normal handling. Do not deliberately shake or push the stone to test it." },
      { type: "paragraph", parts: [{ text: "Use " }, { text: "How to Check Diamond Jewellery for Loose Stones", href: "/blog/check-diamond-jewellery-loose-stones/" }] },
    ],
  },
  {
    heading: "What if Sand Gets Into the Setting?",
    content: [
      { type: "paragraph", text: "Sand can be abrasive. Do not rub the jewellery aggressively while sand remains present. Rinse it appropriately first. Once obvious particles are removed, follow the normal cleaning method suitable for the piece. Avoid scrubbing gritty contamination across polished metal." },
    ],
  },
  {
    heading: "Does Swimming Make Lab-Grown Diamonds Cloudy?",
    content: [
      { type: "paragraph", text: "Swimming should not permanently change a sound lab-grown diamond's inherent optical properties. What may happen is that: residue, salt, oils, or other material collects on the surface and affects appearance. If the diamond looks hazy after swimming, clean it appropriately before assuming that the stone itself has changed. The basic swimming advice is the same for lab-grown and natural diamonds — the risks are mostly related to: the finished jewellery, metal, setting, fastening, and loss." },
    ],
  },
  {
    heading: "Aurelia Insurance Registration Claim Must Be Removed Unless Verified",
    content: [
      { type: "paragraph", text: "This article should not state: \"Aurelia registers your jewellery value for international insurance.\" It should not promise: international insurance registration, travel declarations, customs-value registration, or: insurance valuation assistance unless Aurelia has confirmed exactly what service exists. The safe wording is: \"If you need documentation for insurance or international travel, check the requirements with your insurer and contact Aurelia to ask what purchase or product documentation is currently available for your piece.\" Jewellery insurance does not make swimming safe — even if a piece is insured, policies can contain: limits, exclusions, excesses, documentation requirements, and geographic conditions." },
    ],
  },
  {
    heading: "Swimming Risk by Jewellery Type",
    content: [
      { type: "table", headers: ["Jewellery", "Main Swimming Risk"], rows: [["Ring", "Chlorine/metal exposure + cold-water loss"], ["Stud earrings", "Backing loss + product residue"], ["Hoops/drops", "Catching + greater movement"], ["Pendant necklace", "Chain/clasp failure + impact"], ["Tennis bracelet", "Clasp/link/setting exposure + loss"], ["Bangle", "Impact + slipping depending on fit"], ["Mixed-gem jewellery", "Additional material sensitivities"]] },
    ],
  },
  {
    heading: "A Simple Swimming Routine",
    content: [
      { type: "paragraph", text: "Before swimming: remove fine jewellery; place it into secure individual storage; do not leave it loose in a beach bag. After swimming: dry yourself first; apply any sunscreen or skincare you need; then put jewellery back on once your hands and skin are dry where practical. That also reduces sunscreen and lotion transfer onto the diamond. Beach Storage Matters — removing jewellery before swimming only helps if the storage method is secure. Do not place a ring loose into: a towel, open handbag pocket, shoe, or beach bag. Use an individual secure container." },
      { type: "paragraph", parts: [{ text: "For the full storage guide, use " }, { text: "How to Store Diamond Jewellery Properly", href: "/blog/store-diamond-jewellery/" }] },
    ],
  },
  {
    heading: "Frequently Asked Questions",
    content: [
      { type: "faq", items: [
        { question: "Can you swim in a pool wearing a diamond ring?", answer: "It is better not to. Chlorine can affect some jewellery metals and the water environment increases the risk of losing the ring." },
        { question: "Does chlorine damage diamonds?", answer: "The diamond itself is highly resistant, but chlorine can affect metals and alloys used in the setting." },
        { question: "Can chlorine loosen diamond prongs?", answer: "GIA warns that chlorine can erode some metal alloys used in diamond settings, potentially contributing to damaged or loosened prongs over time." },
        { question: "Can you wear a diamond ring in the sea?", answer: "It is not recommended. Salt residue, movement and cold-water finger shrinkage all increase risk, especially the risk of loss." },
        { question: "Does salt water damage lab-grown diamonds?", answer: "The diamond itself is unlikely to be harmed by ordinary sea water, but the finished jewellery still faces residue, metal, setting and loss concerns." },
        { question: "Why do rings fall off in cold water?", answer: "Fingers can temporarily become smaller in cold conditions, reducing the security of a ring that normally fits properly." },
        { question: "Can I swim wearing diamond earrings?", answer: "It is safer to remove them. Posts and backs can loosen or be lost, particularly with water movement, towels and swim equipment." },
        { question: "Can I swim wearing a tennis bracelet?", answer: "It is better to remove it because the bracelet contains many settings, links and a clasp, all while loss remains possible." },
        { question: "What should I do if I accidentally swim wearing jewellery?", answer: "Rinse and clean it appropriately for its materials, dry it completely and inspect the setting and fastening before wearing it again." },
        { question: "Should I have the jewellery inspected after swimming?", answer: "Not after every brief accidental exposure. But inspect it closely and seek professional assessment if there was impact, visible damage, unusual movement or an already questionable setting." },
        { question: "Does Aurelia arrange jewellery insurance for international travel?", answer: "Do not assume so. Insurance or travel-document support should only be claimed if Aurelia has confirmed that service." },
        { question: "Is lab-grown diamond jewellery safer to swim in than natural-diamond jewellery?", answer: "No meaningful swimming-care advantage comes from the diamond's origin. The risks are mainly about the jewellery construction, metals, fastening and loss." },
      ]},
    ],
  },
  {
    heading: "Final Answer: Should You Swim Wearing Diamond Jewellery?",
    content: [
      { type: "paragraph", text: "The safer answer is no. Remove fine diamond jewellery before entering: swimming pools, hot tubs, the sea, and: open water. The diamond itself is highly durable. The complete jewellery is the concern. Chlorine can affect some metal alloys. Salt and sand can create residue and abrasion. Cold water can make fingers temporarily smaller. And every swimming environment increases the possibility of simply losing the piece." },
      { type: "paragraph", text: "If accidental exposure happens, do not panic. Rinse and clean the jewellery appropriately for its confirmed materials, dry it thoroughly and inspect the settings and fastenings. If you notice damage or a loose stone, stop wearing it until professionally assessed." },
      { type: "paragraph", parts: [{ text: "For cleaning after exposure, use " }, { text: "How to Clean Lab-Grown Diamond Jewellery at Home", href: "/blog/clean-lab-grown-diamond-jewellery/" }] },
      { type: "paragraph", parts: [{ text: "For loose-stone warning signs, use " }, { text: "How to Check Diamond Jewellery for Loose Stones", href: "/blog/check-diamond-jewellery-loose-stones/" }] },
      { type: "paragraph", parts: [{ text: "For professional inspection, use " }, { text: "When Should Diamond Jewellery Be Professionally Inspected?", href: "/blog/professional-diamond-jewellery-inspection/" }] },
      { type: "paragraph", parts: [{ text: "For storage before swimming or while travelling, use " }, { text: "How to Store Diamond Jewellery Properly", href: "/blog/store-diamond-jewellery/" }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Jewellery", subtitle: "Remove before swimming — protect your diamonds from chlorine, salt and loss.", shopHref: "/shop/", contactHref: "/contact/" },
    ],
  },
];

export default function BlogSwimmingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Care</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">Can You Swim While Wearing Diamond Jewellery?</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">Pools, Hot Tubs, Sea Water and Cold Water Explained • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="swim-wearing-diamond-jewellery" />
      <NewsletterSection />
    </main>
  );
}

