import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "When Should Diamond Jewellery Be Inspected?",
  description: "Learn when diamond rings, earrings, necklaces and bracelets need professional inspection, what a jeweller should check and which warning signs need immediate attention.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/professional-diamond-jewellery-inspection/" },
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "paragraph", text: "Diamond jewellery does not need professional inspection simply because a fixed date appears on a calendar. Inspection should combine a reasonable maintenance interval with condition-based triggers. A diamond ring worn every day experiences far more contact, pressure and abrasion than a pendant worn a few times each year. A tennis bracelet contains many articulated links and individual diamond settings. Stud earrings have posts and backings. A necklace may depend on a clasp, jump ring and bail as much as it depends on the diamond setting itself." },
      { type: "paragraph", text: "For jewellery worn frequently, having stone-set pieces professionally inspected roughly every six to twelve months is a useful starting point. But that interval should become shorter whenever the jewellery has: received a significant knock, started snagging unexpectedly, developed a visibly bent prong, shown unusual stone movement, suffered damage to a clasp or chain, or changed shape. A calendar should never override a warning sign. The correct sequence is: notice condition → stop wearing if security is uncertain → arrange professional inspection → repair where necessary → clean only when appropriate." },
    ],
  },
  {
    heading: "Quick Answer: How Often Should Diamond Jewellery Be Professionally Inspected?",
    content: [
      { type: "paragraph", text: "For frequently worn stone-set jewellery, approximately once or twice a year is a useful general maintenance starting point. A ring worn every day may deserve closer monitoring than an occasional pendant. However, professional inspection should happen sooner if you notice: a loose or tilted diamond, a bent or missing prong, a new gap around a setting, unusual clicking, a damaged clasp, a deformed ring shank, a broken link, a loose bail, or damage following a significant impact." },
      { type: "paragraph", text: "Cleaning and inspection are not the same service. A piece can be perfectly clean while still having a weakened setting. Likewise, dirty jewellery can be structurally secure. Professional inspection is about condition and security, not simply restoring shine." },
    ],
  },
  {
    heading: "What Is a Professional Jewellery Inspection?",
    content: [
      { type: "paragraph", text: "A professional jewellery inspection evaluates the physical condition of the finished piece. Depending on the design, that can include: the diamond settings, prongs or claws, bezels, pavé, channels, ring shank, clasps, posts, earring backs, bails, jump rings, hinges, links, and other structural connections. The objective is to identify visible wear or damage before it results in: stone loss, component failure, or more extensive repair. It is not the same thing as diamond grading." },
    ],
  },
  {
    heading: "Professional Inspection Is Not Diamond Grading",
    content: [
      { type: "paragraph", text: "A laboratory report evaluates the diamond according to the service performed by that laboratory. It does not assess whether, months or years later: the ring's claw has worn thin, the bracelet clasp still closes securely, the pendant bail has opened, or the chain has developed a damaged link. Likewise, a jewellery inspection does not automatically re-grade the diamond. These are separate functions." },
    ],
  },
  {
    heading: "Why Professional Inspection Matters Even When Nothing Looks Broken",
    content: [
      { type: "paragraph", text: "Some jewellery damage develops gradually. A prong can become thinner through wear. A clasp can lose tension. A chain connection can slowly deform. A ring shank can become slightly misshapen. A pavé bead can wear down without the diamond immediately falling out. A wearer may not notice those changes because they happen over months rather than in one dramatic event. Professional inspection gives the piece a closer condition check before failure becomes obvious." },
    ],
  },
  {
    heading: "How Often Should an Engagement Ring Be Inspected?",
    content: [
      { type: "paragraph", text: "An engagement ring worn daily is one of the strongest candidates for periodic professional inspection. GIA has historically recommended having engagement-ring prongs checked around every six months, while other major jewellers recommend at least annual professional attention and more frequent checks for pieces worn regularly. A practical consumer guideline is therefore: frequently worn engagement ring: consider inspection approximately every six to twelve months. The setting architecture, wear pattern and lifestyle all matter." },
      { type: "paragraph", text: "You Should Not Wait Six Months After a Hard Knock. Suppose a ring was inspected two weeks ago. Then it hits a stone countertop hard today. The next scheduled inspection may be months away, but the jewellery's condition has changed. Inspect it visually — if a diamond appears different, a prong is damaged, the ring is deformed, or anything feels uncertain, stop wearing it and obtain professional assessment. Maintenance intervals never replace event-triggered inspection." },
    ],
  },
  {
    heading: "Professional Inspection Frequency by Jewellery Type",
    content: [
      { type: "table", headers: ["Jewellery Type", "Useful Starting Point", "Inspect Earlier When…"], rows: [["Daily diamond ring", "Around every 6–12 months", "Impact, snagging, loose stone, deformation"], ["Pavé or halo ring", "Around every 6–12 months when frequently worn", "Any small stone appears displaced"], ["Tennis bracelet", "Around every 6–12 months when frequently worn", "Link, clasp or setting looks different"], ["Frequently worn earrings", "Periodically according to wear", "Post/backing or setting becomes unreliable"], ["Frequently worn pendant necklace", "Periodically according to wear", "Bail, chain or clasp is damaged"], ["Occasional jewellery", "Less frequent may be reasonable", "Any damage or unusual change occurs"], ["After significant impact", "Immediate condition check", "Professional assessment if uncertain"]] },
    ],
  },
  {
    heading: "What Should a Professional Inspection Check?",
    content: [
      { type: "paragraph", text: "The inspection should reflect the actual jewellery construction. A useful professional condition check can include: stone security → setting condition → metal structure → joints/connections → fastening → articulation → visible damage." },
      { type: "paragraph", text: "1. Diamond Security: The most important question is whether every diamond remains securely positioned. GIA's Quality Assurance Benchmarks emphasise that proper prong contact and correct stone seating are essential to stable stone setting." },
      { type: "paragraph", text: "2. Prongs or Claws: Prongs are small, exposed structures vulnerable to: wear, bending, snagging, impact, and gradual thinning. A visually present prong is not necessarily a healthy prong. GIA warns that even one damaged prong can leave the stone less securely protected. A compromised claw should therefore be treated as a repair issue rather than ignored until another one fails." },
      { type: "paragraph", text: "3. Pavé and Small Accent Settings: Pavé jewellery contains many tiny setting points. A professional inspection can look for: worn beads, displaced stones, gaps, uneven stone position, or metal that no longer appears sufficient to hold the diamond securely. 4. Channel Settings: inspection should consider whether the row remains aligned, the rails are undamaged, stones remain properly seated, and no section of metal has been bent away from the diamonds." },
      { type: "paragraph", text: "5. Bezel Settings: a professional can assess whether the rim remains properly formed, the metal maintains appropriate contact, the diamond has shifted, or impact has deformed part of the bezel. Do not assume bezel-set jewellery never needs inspection. 6. Ring Shank: the shank should be checked for: out-of-round shape, thinning, deep wear, cracks, previous repair areas, or deformation around the setting." },
    ],
  },
  {
    heading: "7. Soldered Joints and Connections",
    content: [
      { type: "paragraph", text: "GIA describes soldering as a standard jewellery manufacturing and repair process and notes that poor soldering technique can result in a weak joint. That makes joined areas relevant during inspection. However, Aurelia's consumer page should not promise a formal \"solder test\" unless a specific jeweller or workshop has defined exactly what that test is. A more accurate description is: \"A professional may inspect visible soldered joints and previous repair areas for signs of cracking, separation, porosity or failure where relevant to the piece.\" Routine jewellery inspection should not imply that a jeweller will heat every soldered seam or perform destructive strength testing on finished customer jewellery." },
    ],
  },
  {
    heading: "8–13. Clasps, Posts, Bails, Chains, Links and Hinges",
    content: [
      { type: "paragraph", text: "8. Clasps: professional inspection can include whether the clasp closes correctly, remains aligned, retains appropriate tension, and shows obvious wear or deformation. 9. Earring Posts and Backs: inspection can include post alignment, threads where screw backs are used, friction fit, locking mechanism, and general condition. A backing that has become unreliable is part of the jewellery's security system." },
      { type: "paragraph", text: "10. Pendant Bails and Jump Rings: the bail, connecting rings and chain attachment points should be included where relevant — a worn jump ring can potentially lead to loss of the entire pendant. 11. Necklace Chains: stretched links, damaged sections, weak connections, clasp condition, and areas receiving repeated friction. 12. Bracelet Links and Articulation: whether links move as intended, remain aligned, and show no obvious signs of distortion. 13. Hinges: alignment, movement, closure, and obvious wear." },
      { type: "table", headers: ["Component", "What a Professional May Assess"], rows: [["Centre diamond", "Seating, movement, security"], ["Prongs/claws", "Wear, position, contact, damage"], ["Pavé", "Small-stone security, worn setting metal"], ["Channel", "Rail condition and stone alignment"], ["Bezel", "Rim condition and stone position"], ["Ring shank", "Distortion, wear, cracking"], ["Soldered/repair joins", "Visible integrity where relevant"], ["Clasp", "Closure and wear"], ["Earring post/back", "Alignment and fastening security"], ["Bail/jump ring", "Wear, opening, deformation"], ["Chain", "Weak links and connections"], ["Bracelet links", "Articulation and alignment"], ["Hinge", "Movement and closure"]] },
    ],
  },
  {
    heading: "Cleaning Should Usually Follow the Security Check",
    content: [
      { type: "paragraph", text: "Professional cleaning can improve the appearance of jewellery and remove residue from areas that are difficult to reach at home. But powerful equipment should not be the first step when setting security is uncertain. GIA notes that professional jewellers check jewellery for loose stones before using techniques such as ultrasonic or steam cleaning because vibration or pressure can dislodge a stone that is already insecure. The sequence should therefore be: inspect → establish suitability → clean." },
      { type: "table", headers: ["Service", "Primary Purpose"], rows: [["Cleaning", "Remove dirt, oils and residue"], ["Inspection", "Evaluate condition and security"], ["Polishing", "Reduce selected metal surface scratches"], ["Replating", "Renew a confirmed plated surface where appropriate"], ["Repair", "Correct identified mechanical damage"], ["Stone tightening", "Correct specific setting looseness"], ["Resizing", "Alter ring dimensions where structurally feasible"]] },
    ],
  },
  {
    heading: "Event-Based Triggers Always Override the Calendar",
    content: [
      { type: "paragraph", text: "What if the Jewellery Has Been Dropped? A significant drop or impact is a condition-based trigger. Inspect it immediately. Professional assessment is sensible if: the stone position has changed, the setting looks bent, the clasp or hinge has been hit, the ring is deformed, or you are uncertain about what happened. What if the Jewellery Starts Snagging? New snagging can indicate a lifted or bent prong — have the setting assessed rather than smoothing it yourself. What if You Hear Clicking or Rattling? Stop wearing the jewellery and have it checked. What if the Jewellery Changes Shape? Professional inspection should happen before you attempt to bend it back yourself." },
    ],
  },
  {
    heading: "Aurelia London Workshop and Solder-Testing Claims",
    content: [
      { type: "paragraph", text: "This article should not say that Aurelia operates a London workshop or performs \"solder testing\" as a named consumer inspection service unless Aurelia has formally confirmed and verified those capabilities. Do not publish statements such as: \"Our London workshop inspects every Aurelia piece\" or \"Our London bench jewellers provide complimentary checks\" until the location and service are confirmed. Do not promise: free inspections, complimentary tightening, London workshop appointments, in-house solder repair, rhodium replating, replacement stones, or lifetime maintenance unless each is separately verified. A neutral alternative is: If you are concerned about the condition of an Aurelia piece, contact Aurelia to ask what current after-sales inspection or repair options are available." },
    ],
  },
  {
    heading: "A Practical Inspection Schedule",
    content: [
      { type: "table", headers: ["Situation", "Action"], rows: [["Frequently worn stone-set piece, no warning signs", "Consider professional inspection around every 6–12 months"], ["Occasional piece, no visible change", "Condition-based / less frequent may be appropriate"], ["Significant knock or drop", "Check immediately"], ["Bent/missing prong", "Stop wearing; professional inspection"], ["New snagging", "Inspect setting"], ["New clicking/rattle", "Stop wearing"], ["Loose or tilted diamond", "Stop wearing immediately"], ["Broken clasp/link", "Do not rely on piece until repaired"], ["Previous repair area looks different", "Professional assessment"], ["Jewellery is visibly deformed", "Do not reshape it yourself"]] },
    ],
  },
  {
    heading: "Frequently Asked Questions",
    content: [
      { type: "faq", items: [
        { question: "How often should diamond jewellery be professionally inspected?", answer: "For frequently worn stone-set jewellery, approximately every six to twelve months is a useful starting point, with earlier inspection whenever damage or unusual changes occur." },
        { question: "How often should an engagement ring be checked?", answer: "Frequently worn engagement rings are commonly checked once or twice a year, particularly because prongs are exposed to daily wear." },
        { question: "Should I have jewellery inspected after dropping it?", answer: "Yes, particularly if the impact was significant or you notice any change in stone position, shape, setting or fastening." },
        { question: "Is professional cleaning the same as an inspection?", answer: "No. Cleaning removes residue. Inspection assesses stone security, settings, metal and structural components." },
        { question: "What does a jeweller check during an inspection?", answer: "Depending on the piece, a jeweller may assess diamonds, prongs, pavé, bezels, channels, clasps, links, hinges, chains, bails, posts, backs and visible joints." },
        { question: "Can a jeweller inspect a soldered joint?", answer: "Yes. Joined areas and previous repairs can be assessed where relevant. However, Aurelia should not promise a specific solder test unless such a service has been formally defined." },
        { question: "Does a loose diamond always need new prongs?", answer: "No. The correct repair depends on why the diamond is loose and how much setting metal remains." },
        { question: "Should I stop wearing jewellery if a prong is bent?", answer: "Yes. A damaged prong can compromise stone security, so the piece should be assessed before further wear." },
        { question: "Does lab-grown diamond jewellery need different inspections?", answer: "No. The main inspection concerns are mechanical: setting, metal, fastening and overall construction." },
        { question: "Can I perform the inspection myself?", answer: "Home visual checks are useful for noticing warning signs, but they do not replace professional condition assessment." },
        { question: "Does Aurelia have a London workshop for inspections?", answer: "Do not assume so. Only publish a London workshop claim if Aurelia confirms the facility and its current services." },
        { question: "Does Aurelia provide complimentary jewellery inspections or repairs?", answer: "Do not state that unless Aurelia formally confirms the service and its terms. Contact Aurelia to ask what after-sales options are currently available." },
      ]},
    ],
  },
  {
    heading: "Final Answer: When Should Diamond Jewellery Be Professionally Inspected?",
    content: [
      { type: "paragraph", text: "For jewellery worn frequently, every six to twelve months is a sensible starting point for professional condition inspection. But condition is more important than the calendar. Arrange inspection sooner if you notice: a loose or tilted stone, a bent or missing prong, new snagging, clicking or rattling, a broken clasp, a damaged link, a loose bail, a deformed ring, or: damage after an impact. A professional inspection should look beyond the diamond itself. Depending on the jewellery, it can include: settings + prongs + metal + clasps + links + hinges + posts + bails + relevant joined or previously repaired areas. Do not confuse inspection with cleaning. And do not wait for the next scheduled service if something has already changed." },
      { type: "paragraph", parts: [{ text: "For loose-stone warning signs, continue with " }, { text: "How to Check Diamond Jewellery for Loose Stones", href: "/blog/check-diamond-jewellery-loose-stones/" }] },
      { type: "paragraph", parts: [{ text: "For cleaning, use " }, { text: "How to Clean Lab-Grown Diamond Jewellery at Home", href: "/blog/clean-lab-grown-diamond-jewellery/" }] },
      { type: "paragraph", parts: [{ text: "For scratch/contact prevention, use " }, { text: "How to Prevent Jewellery from Scratching", href: "/blog/prevent-jewellery-scratches/" }] },
      { type: "paragraph", parts: [{ text: "For storage, use " }, { text: "How to Store Diamond Jewellery Properly", href: "/blog/store-diamond-jewellery/" }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Jewellery", subtitle: "Inspect regularly, act on warning signs early — protect your investment through proper care.", shopHref: "/shop/", contactHref: "/contact/" },
    ],
  },
];

export default function BlogInspectionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Care</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">When Should Diamond Jewellery Be Professionally Inspected?</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">Warning Signs, Maintenance Intervals and What a Jeweller Should Check • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="professional-diamond-jewellery-inspection" />
      <NewsletterSection />
    </main>
  );
}

