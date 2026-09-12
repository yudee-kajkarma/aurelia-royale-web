import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "How to Prevent Jewellery from Scratching",
  description: "Learn how to prevent rings, bracelets, necklaces and diamond jewellery from scratching through better wear, stacking, storage and travel habits.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/prevent-jewellery-scratches/" },
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "paragraph", text: "Fine jewellery is designed to be worn, so some surface marks can develop naturally over time. That does not mean every scratch is unavoidable. A large proportion of jewellery abrasion comes from predictable contact: one piece rubbing against another, a diamond touching softer metal, rings knocking against hard surfaces, bracelets colliding with watches, or jewellery being stored loose together. The most effective prevention is therefore not a coating, polishing routine or repair service. It is controlling unnecessary contact." },
      { type: "paragraph", text: "A useful approach is: separate pieces in storage → avoid high-impact activities → check stacked jewellery for contact → protect pieces during travel → inspect settings after knocks." },
    ],
  },
  {
    heading: "Quick Answer: How Do You Stop Jewellery from Scratching?",
    content: [
      { type: "paragraph", text: "Store each piece separately or in divided, padded compartments. Do not allow diamond-set jewellery to rub repeatedly against other jewellery because diamond can scratch precious metals and can also damage other gemstones. Remove rings and bracelets before activities involving repeated contact with hard surfaces, tools, weights or abrasive materials. If you wear several rings together, check whether their settings or diamond edges rub against neighbouring bands. When travelling, use a jewellery case with separate compartments rather than placing several pieces together in one pouch. And remember: polishing can reduce or remove some metal scratches, but it also removes a small amount of metal, so it should not be treated as a routine response to every mark." },
    ],
  },
  {
    heading: "Why Jewellery Scratches",
    content: [
      { type: "paragraph", text: "Scratching happens when one material moves across another with enough hardness and pressure to abrade the surface. The important point is that different parts of the same piece can have very different hardness. A diamond is much harder than gold, platinum or silver. That means the diamond may remain visually unchanged while the surrounding metal develops scratches. A diamond can also scratch the metal of another piece of jewellery. This is one reason fine jewellery should not simply be thrown together in a drawer or pouch." },
      { type: "paragraph", text: "Diamond sits at 10 on the Mohs hardness scale. GIA specifically notes that diamond can scratch the precious metals commonly used in jewellery settings. That creates a practical risk when: a diamond edge rubs against another ring, a diamond bracelet contacts a metal watch, or diamond-set jewellery is stored against gold, platinum or silver pieces. Only another diamond can conventionally scratch a diamond, but that does not mean diamond jewellery should be stored touching other diamond jewellery — two pieces rubbing together can create surface abrasion, chips, damage to exposed edges, or damage to the metal settings holding the stones." },
    ],
  },
  {
    heading: "Scratching and Chipping Are Different",
    content: [
      { type: "paragraph", text: "A scratch affects a surface. A chip is a small fracture or loss of material. This distinction matters because diamonds are highly resistant to scratching but can still chip if struck hard enough in a vulnerable direction. GIA notes that pointed corners and exposed girdle areas can be particularly vulnerable to impact. That means avoiding hard knocks protects more than the jewellery's polish. It can also protect the stones and settings." },
    ],
  },
  {
    heading: "Everyday Metal Scratches Are Normal",
    content: [
      { type: "paragraph", text: "Gold and platinum can develop fine surface scratches through normal wear. Those marks do not automatically mean the jewellery is defective. Tiffany's care guidance notes that both gold and platinum can develop a patina of fine scratches over time. Some wearers prefer that natural surface character. Others prefer a more polished appearance. The important point is that normal micro-scratching and serious structural damage are not the same thing." },
      { type: "table", headers: ["Appearance", "Likely Category", "Response"], rows: [["Very fine hairline marks", "Normal wear", "Usually cosmetic"], ["Light surface abrasion", "Wear/contact", "Monitor"], ["Deep groove in metal", "More significant contact", "Consider professional assessment"], ["Bent prong", "Structural issue", "Stop wearing / inspect"], ["Chipped diamond", "Stone damage", "Professional assessment"], ["Missing metal around setting", "Structural issue", "Stop wearing"], ["Surface mark after ring stack contact", "Friction", "Adjust how pieces are worn"]] },
      { type: "paragraph", parts: [{ text: "If the issue involves the setting rather than just the surface, use " }, { text: "How to Check Diamond Jewellery for Loose Stones", href: "/blog/check-diamond-jewellery-loose-stones/" }] },
    ],
  },
  {
    heading: "The Best Scratch Prevention Starts With Storage",
    content: [
      { type: "paragraph", text: "Do not store jewellery loose in a drawer. Do not pile rings together. Do not place several diamond pieces into one small pouch where they can rub whenever the pouch moves. GIA recommends storing jewellery in separate boxes, pouches or padded compartments to reduce scratches and gem damage. That single habit can prevent a large amount of unnecessary abrasion." },
      { type: "paragraph", text: "Ring settings often contain protruding diamonds, prongs and hard edges. Use individual ring slots, separate soft pouches, or separate compartments. For stud earrings, the front of one stud can contact the other diamond, the post, the earring back, or another piece of jewellery. Use a dedicated earring section or secure each pair so the diamond faces are not rubbing against another hard surface. Keep necklaces separate — diamond pendants can also rub against neighbouring chains and jewellery." },
    ],
  },
  {
    heading: "Do Not Store Jewellery Touching Watches",
    content: [
      { type: "paragraph", text: "A watch combines metal, glass or crystal, clasp hardware and rigid edges. A diamond bracelet worn or stored directly against a watch can create abrasion on either piece. If you wear them together, monitor where they actually make contact. If they repeatedly collide or rub, increase the spacing or move one piece to the other wrist." },
    ],
  },
  {
    heading: "How to Prevent Rings from Scratching",
    content: [
      { type: "paragraph", text: "Rings experience more contact than most jewellery categories because the hands interact constantly with surfaces. Remove rings where practical before: cleaning, gardening, lifting weights, moving furniture, manual work, or other tasks involving hard repeated contact. This protects both the surface and the setting." },
      { type: "paragraph", text: "Two rings worn together can contact each other thousands of times during ordinary hand movement. Check where rings actually touch — look from the side to see whether a diamond girdle touches the neighbouring ring, a prong rests against the band, a pavé edge contacts another setting, or a raised gallery rubs against metal. Repeated localised contact can create wear even when the overall stack looks correct. Even two plain bands can develop contact marks when worn together." },
    ],
  },
  {
    heading: "Bracelets and Watches Can Scratch Each Other",
    content: [
      { type: "paragraph", text: "A bracelet sliding repeatedly into a watch case or clasp can mark both pieces. Diamond-set bracelets introduce an additional risk because the diamonds are harder than watch metals. If you wear a tennis bracelet beside a watch, check where the bracelet sits during normal movement. A visually attractive stack can still create constant abrasive contact." },
    ],
  },
  {
    heading: "Jewellery Can Scratch During Exercise and Other Activities",
    content: [
      { type: "paragraph", text: "Gym equipment creates repeated contact with metal bars, dumbbells, machines, floors, and other hard surfaces. Rings are particularly vulnerable. The concern is not only scratches — impact and pressure can also distort a band or affect settings. Removing fine jewellery before weight training or contact sport is a sensible protective habit. GIA specifically recommends taking diamond jewellery off before gardening and other higher-risk activities." },
      { type: "paragraph", text: "Household chores can expose jewellery to two separate problems: hard physical contact and: strong cleaning chemicals. Jewellery can also scratch through ordinary contact with: metal handbag hardware, zips, desk edges, door handles, and countertops. The practical goal is to notice repeated high-contact patterns." },
    ],
  },
  {
    heading: "Travelling With Jewellery",
    content: [
      { type: "paragraph", text: "Travel creates a high risk of pieces moving against each other. Use a case with separate compartments. Do not wrap several pieces together in one cloth. Do not place earrings, rings, necklaces and bracelets loose inside a handbag pocket. Tiffany and GIA both recommend individual or separated storage during travel to reduce scratching and tangling. Use ring rolls or individual compartments for rings. Fasten necklaces before storage where appropriate. Secure each earring pair in a dedicated section." },
    ],
  },
  {
    heading: "Can Polishing Remove Scratches?",
    content: [
      { type: "paragraph", text: "Professional polishing can reduce or remove some scratches from metals such as gold and platinum. But polishing is not consequence-free. Tiffany specifically notes that polishing removes a small amount of metal and therefore recommends limiting the number of times it is performed over the life of a piece. This makes prevention preferable to repeated polishing. Fine surface marks are part of ordinary wear for many metals — reserve polishing for situations where the cosmetic result matters to you, the metal/finish is suitable, and a professional recommends it." },
    ],
  },
  {
    heading: "Scratch Removal Is Different From Cleaning",
    content: [
      { type: "table", headers: ["Process", "Main Purpose"], rows: [["Cleaning", "Remove residue"], ["Polishing", "Reduce some metal surface scratches"], ["Replating", "Restore a confirmed plated surface where appropriate"], ["Inspection", "Assess condition"], ["Repair", "Correct mechanical damage"]] },
      { type: "paragraph", text: "Do not make home scratch removal a standard Aurelia recommendation. Metal-polishing compounds, abrasive cloths and jewellery pastes can alter surface finishes or remove material. Plated surfaces require even more caution. If a scratch genuinely needs removal, professional assessment is safer than experimenting on fine jewellery." },
    ],
  },
  {
    heading: "Can a Diamond Be Scratched?",
    content: [
      { type: "paragraph", text: "Diamond is extremely resistant to scratching. Another diamond, however, can scratch it. More importantly, a diamond can still chip or fracture from a sufficiently strong impact. Do not translate \"hardest natural material\" into \"impossible to damage\". Pear, marquise, princess and other shapes with pointed corners or exposed vulnerable areas benefit from appropriate setting protection. If a setting around one of those points is damaged, the stone can become more exposed." },
    ],
  },
  {
    heading: "Storing Different Gemstones Together",
    content: [
      { type: "paragraph", text: "Do not store harder gemstones directly against softer ones. GIA warns that diamonds can scratch many other gem materials. If a jewellery piece includes: pearls, opal, or other softer gems, keep it separated from diamond jewellery. Storage should protect the most vulnerable material. A matching necklace and earrings can still scratch each other — matching design does not change material hardness." },
    ],
  },
  {
    heading: "Scratches Near a Diamond Setting Need More Caution",
    content: [
      { type: "paragraph", text: "A deep mark on the bottom of a plain band is different from damage near a prong or channel wall. If abrasion appears to have removed or deformed metal that helps secure a stone, check for stone security. GIA specifically notes that a diamond moving inside its setting can wear against and damage the softer precious metal around it. That is another reason a loose diamond should not continue to be worn." },
      { type: "paragraph", parts: [{ text: "Use " }, { text: "How to Check Diamond Jewellery for Loose Stones", href: "/blog/check-diamond-jewellery-loose-stones/" }] },
    ],
  },
  {
    heading: "A Simple Scratch-Prevention Routine",
    content: [
      { type: "paragraph", text: "Before wear, ask whether the activity is likely to involve hard repeated contact. During wear, notice whether stacked jewellery is rubbing continuously. After wear, check for obvious new damage. When storing, separate each piece. When travelling, use individual padded compartments. That routine prevents far more damage than repeatedly polishing jewellery after scratches appear." },
    ],
  },
  {
    heading: "Aurelia Service Claims Must Be Verified",
    content: [
      { type: "paragraph", text: "This article should not state that Aurelia provides: rhodium replating at a London workshop, complimentary rhodium replating, claw tightening in London, free claw tightening, in-house workshop repairs, or: lifetime polishing or refinishing unless those services are formally confirmed by the client. A safer customer-facing statement is: If your jewellery has deep scratches, visible finish wear or damage near a diamond setting, contact Aurelia to ask what inspection or after-sales support is currently available for your specific piece." },
    ],
  },
  {
    heading: "Frequently Asked Questions",
    content: [
      { type: "faq", items: [
        { question: "How can I stop jewellery from scratching?", answer: "Reduce unnecessary contact. Store pieces separately, remove them during high-impact activities and check whether stacked jewellery is rubbing continuously." },
        { question: "Can diamonds scratch gold?", answer: "Yes. Diamond is much harder than gold and can scratch precious-metal settings and neighbouring jewellery." },
        { question: "Can diamonds scratch platinum?", answer: "Yes. Diamond can scratch platinum and other precious metals used in jewellery." },
        { question: "Can diamond jewellery scratch other diamonds?", answer: "Diamond can scratch diamond, and diamond-set pieces can also chip or damage each other if stored or worn in repeated contact." },
        { question: "Is it normal for rings to get small scratches?", answer: "Yes. Fine surface scratches can develop through normal wear, particularly on gold and platinum." },
        { question: "Should I polish every scratch out?", answer: "No. Polishing removes some metal, so it should not be used repeatedly for every minor mark." },
        { question: "How do I stop stacked rings scratching each other?", answer: "Check whether diamond edges, prongs or metal surfaces are making repeated contact. Adjust the stack if necessary rather than relying only on appearance from above." },
        { question: "Can a tennis bracelet scratch my watch?", answer: "Yes. Diamonds and metal settings can rub against a watch case or bracelet. Repeated contact can mark either piece." },
        { question: "Should I store jewellery in separate pouches?", answer: "Yes. One piece per pouch or separate padded compartments reduces scratching and tangling." },
        { question: "Can I remove scratches from jewellery at home?", answer: "Avoid making DIY scratch removal the default for fine jewellery. Abrasive products can remove metal or damage finishes and plating." },
        { question: "Does white gold always need rhodium replating?", answer: "No. The actual metal and surface finish must be confirmed for the product. Do not assume all white-coloured jewellery uses the same construction." },
        { question: "Does Aurelia offer rhodium replating or claw tightening?", answer: "Do not assume so. Those services should only be stated if Aurelia has formally confirmed them and their conditions." },
      ]},
    ],
  },
  {
    heading: "Final Answer: How Do You Prevent Jewellery from Scratching?",
    content: [
      { type: "paragraph", text: "Focus on preventing repeated contact. Store each piece separately. Do not let diamond jewellery rub against other jewellery in boxes or pouches. Check ring stacks for diamond-to-metal or prong-to-band contact. Avoid wearing rings and bracelets during gardening, weight training, manual work and other activities involving hard surfaces. Keep diamond bracelets from repeatedly colliding with watches. Use separated, padded storage when travelling. And do not treat professional polishing as routine maintenance for every small mark. Fine scratches can be part of normal wear, while polishing removes metal. If a mark is close to a setting, a prong looks damaged or a diamond appears loose, prioritise structural inspection over cosmetic polishing." },
      { type: "paragraph", parts: [{ text: "For loose-stone warning signs, use " }, { text: "How to Check Diamond Jewellery for Loose Stones", href: "/blog/check-diamond-jewellery-loose-stones/" }] },
      { type: "paragraph", parts: [{ text: "For storage, use " }, { text: "How to Store Diamond Jewellery Properly", href: "/blog/store-diamond-jewellery/" }] },
      { type: "paragraph", parts: [{ text: "For cleaning, use " }, { text: "How to Clean Lab-Grown Diamond Jewellery at Home", href: "/blog/clean-lab-grown-diamond-jewellery/" }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Jewellery", subtitle: "Separate, protect and avoid repeated contact — the simplest way to keep jewellery looking its best.", shopHref: "/shop/", contactHref: "/contact/" },
    ],
  },
];

export default function BlogScratchesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Care</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">How to Prevent Jewellery from Scratching</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">Wear, Stacking, Storage and Travel Habits Explained • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="prevent-jewellery-scratches" />
      <NewsletterSection />
    </main>
  );
}

