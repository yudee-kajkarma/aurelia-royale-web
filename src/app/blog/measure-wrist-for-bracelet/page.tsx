import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "How to Measure Your Wrist for a Bracelet",
  description: "Learn how to measure your wrist for chain, tennis, bangle and cuff bracelets, convert cm and inches, and understand wrist size versus bracelet length.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/measure-wrist-for-bracelet/" },
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "image", src: "/images/blog/measure-wrist-for-bracelet/67 (1).jpg", alt: "How to measure wrist for bracelet chain tennis bangle cuff convert cm inches wrist size", title: "How to Measure Your Wrist for a Bracelet", caption: "The right process: measure the body first → identify the bracelet construction → understand how that product is sized → then choose the appropriate fit.", priority: true },
      { type: "paragraph", text: "Measuring your wrist for a bracelet starts with one important distinction: your wrist circumference is not automatically your bracelet length. Wrist circumference measures your body. Bracelet length describes the jewellery." },
      { type: "paragraph", text: "A flexible bracelet normally needs some room beyond the bare wrist measurement so it can move comfortably. A rigid bangle follows different sizing logic. A closed slip-on bangle may need to pass over the widest part of the hand, while a hinged bangle can open around the wrist. A cuff uses an open rigid structure and should not automatically be treated like either a chain bracelet or a closed bangle." },
      { type: "paragraph", text: "That means the right process is: measure the body first → identify the bracelet construction → understand how that product is sized → then choose the appropriate fit. Do not add an arbitrary number to your wrist measurement before you know what type of bracelet you are buying." },
    ],
  },
  {
    heading: "Quick Answer: How Do You Measure Your Wrist for a Bracelet?",
    content: [
      { type: "paragraph", text: "Use a flexible measuring tape and measure the exact wrist where the bracelet will normally sit. Keep the tape close to the skin without pulling it tightly enough to compress the wrist. Record the measurement in centimetres or millimetres. That number is your wrist circumference." },
      { type: "paragraph", text: "If you do not have a flexible tape, wrap a non-stretch strip of paper or string around the wrist, mark where the ends meet, lay it flat and measure the marked length with a ruler. Then identify the bracelet type. For a flexible chain, station or tennis bracelet, the bracelet normally needs some ease beyond the body circumference. For a closed slip-on bangle, wrist circumference alone may be insufficient because the rigid circle also needs to pass over the hand. For a hinged bangle, the opening mechanism means sizing can be based more directly on wrist fit. For a cuff, use the maker's actual wrist-size guidance and internal dimensions where supplied." },
    ],
  },
  {
    heading: "Wrist Size and Bracelet Size Are Not the Same Number",
    content: [
      { type: "paragraph", text: "Imagine your wrist measures exactly 16 cm. That tells you that the circumference of your wrist at the measuring point is 16 cm. It does not automatically mean that every 16 cm bracelet will fit properly. A flexible bracelet that closes at exactly 16 cm may sit extremely close to the skin. A 17 cm flexible bracelet would provide approximately 1 cm of additional circumference. Whether either amount is correct depends on the bracelet design and the fit you want." },
      { type: "table", headers: ["Measurement", "What It Describes"], rows: [["Wrist circumference", "Circumference of your body where the bracelet will sit"], ["Bracelet length", "Physical length stated for the jewellery"], ["Usable closed circumference", "Internal wearing space created once the bracelet is fastened"], ["Bangle internal dimensions", "Rigid internal opening/shape"], ["Hand circumference", "Widest circumference a closed slip-on bangle may need to pass over"]] },
    ],
  },
  {
    heading: "Step 1: Decide Where You Will Wear the Bracelet",
    content: [
      { type: "paragraph", text: "Measure the point where the bracelet will actually sit. This becomes particularly important if you wear your bracelets above the wrist bone, close to the hand or as part of a stack. Your forearm gradually changes circumference as you move away from the wrist. A measurement taken in one position may therefore be wrong for jewellery intended to sit somewhere else. If you are planning a stack, measure at the location where each bracelet is expected to rest." },
    ],
  },
  {
    heading: "Step 2: Use a Flexible Measuring Tape",
    content: [
      { type: "paragraph", text: "Wrap a flexible tape measure around the wrist at the intended wearing position. Keep it flat against the skin. The tape should be snug enough to follow the actual circumference but should not dig into the wrist. Read the point where the tape meets itself. Record that number without adding any extra fit allowance yet. Keep the raw measurement. The additional room should be determined only after you know what type of bracelet you are choosing." },
    ],
  },
  {
    heading: "Common Wrist Measurement Conversions",
    content: [
      { type: "table", headers: ["Centimetres", "Millimetres", "Inches"], rows: [["13 cm", "130 mm", "5.12 in"], ["14 cm", "140 mm", "5.51 in"], ["15 cm", "150 mm", "5.91 in"], ["16 cm", "160 mm", "6.30 in"], ["17 cm", "170 mm", "6.69 in"], ["18 cm", "180 mm", "7.09 in"], ["19 cm", "190 mm", "7.48 in"], ["20 cm", "200 mm", "7.87 in"], ["21 cm", "210 mm", "8.27 in"], ["22 cm", "220 mm", "8.66 in"]] },
      { type: "paragraph", text: "Use the unrounded centimetre or millimetre measurement whenever the product's sizing system is precise enough to support it. Do not round too early. Suppose the wrist measures 16.4 cm. Rounding it immediately to 16 cm removes 4 mm. Rounding it to 17 cm adds 6 mm. That difference can matter on a closely fitted bracelet." },
    ],
  },
  {
    heading: "Step 4: Identify the Bracelet Construction",
    content: [
      { type: "paragraph", text: "This is where bracelet sizing separates into several different paths. A flexible bracelet follows the wrist. A bangle holds a rigid shape. A cuff is rigid but open. These designs should not share one universal sizing formula." },
      { type: "table", headers: ["Bracelet Type", "Primary Measurement", "Main Sizing Issue"], rows: [["Tennis bracelet", "Wrist circumference", "Enough ease for controlled movement"], ["Chain bracelet", "Wrist circumference", "Desired drape/ease"], ["Station bracelet", "Wrist circumference", "Movement and station positioning"], ["Closed slip-on bangle", "Hand/knuckle clearance + wrist fit", "Must pass over hand"], ["Hinged bangle", "Wrist circumference + internal dimensions", "Does not need to slide over entire hand"], ["Cuff", "Wrist circumference + product shape", "Open rigid fit"], ["Bracelet stack", "Circumference at each wearing position", "Several pieces can sit at different points"]] },
    ],
  },
  {
    heading: "Measuring for a Flexible Bracelet",
    content: [
      { type: "paragraph", text: "Flexible bracelets include many tennis, chain and station designs. Measure the bare wrist first. Then compare that circumference with the finished bracelet's actual wearable size. A flexible bracelet normally needs some room for movement, but the amount depends on the design. A tennis bracelet will generally be worn more closely than a deliberately loose chain bracelet. That means there should not be one site-wide rule such as: \"Always add 2 cm.\"" },
      { type: "table", headers: ["Closed Bracelet Length", "Difference From Wrist", "Likely Character"], rows: [["16.0 cm", "0 cm", "Very close fit; may be too restrictive depending on construction"], ["17.0 cm", "+1.0 cm", "Moderate ease"], ["18.0 cm", "+2.0 cm", "Looser movement"]] },
      { type: "paragraph", text: "These examples illustrate the mathematics. They are not universal fit recommendations. The correct choice depends on whether the product is a tennis bracelet, chain bracelet or another construction." },
    ],
  },
  {
    heading: "How to Measure for a Tennis Bracelet",
    content: [
      { type: "paragraph", text: "Start with your wrist circumference at the point where the tennis bracelet will sit. A tennis bracelet should normally have enough room for slight controlled movement without travelling excessively up and down the arm. Current GIA guidance uses the ability to place approximately one finger between the wrist and the bracelet as a practical reference for a classic tennis-bracelet fit. That does not mean you should convert \"one finger\" into one fixed centimetre allowance. Finger thickness differs between people. Use it as a final fit check rather than a mathematical sizing formula." },
      { type: "paragraph", parts: [{ text: "For the complete fit diagnosis, use " }, { text: "How Should a Diamond Bracelet Fit?", href: "/blog/how-should-diamond-bracelet-fit/" }] },
    ],
  },
  {
    heading: "Flexible Bracelet Length Is Not Always the Same as Usable Closed Circumference",
    content: [
      { type: "paragraph", text: "A retailer may publish a bracelet as 18 cm long. But what exactly has been measured? It could mean: the total end-to-end length laid flat, the length including part of the clasp, the nominal product size, or: the usable internal circumference when closed. Those are not automatically identical. For accurate online sizing, product pages should state how the length was measured. Aurelia should publish whichever measurement actually corresponds to the customer's fit decision and label it clearly." },
    ],
  },
  {
    heading: "Measuring for a Closed Slip-On Bangle",
    content: [
      { type: "paragraph", text: "A traditional closed bangle has no clasp or hinge. It must pass over the hand before reaching the wrist. That changes the measurement completely. Your wrist may measure only 16 cm, but the rigid bangle still has to clear the knuckles and widest section of the hand. For this type of bangle, wrist circumference alone is not enough. Measure the widest hand circumference that the rigid bangle must pass over." },
      { type: "paragraph", text: "Bring the thumb towards the palm as though you were about to slide on a bangle. Bring the fingers together naturally. Wrap the measuring tape around the widest group of knuckles and hand. Record that circumference. This measurement helps determine whether the rigid internal opening can physically pass over the hand." },
    ],
  },
  {
    heading: "Closed Bangle vs Hinged Bangle",
    content: [
      { type: "table", headers: ["Feature", "Closed Slip-On Bangle", "Hinged Bangle"], rows: [["Opens?", "No", "Yes"], ["Must pass over hand?", "Yes", "No"], ["Wrist circumference useful?", "Yes, for final fit", "Yes"], ["Hand circumference important?", "Usually", "Much less important"], ["Internal bangle dimensions important?", "Yes", "Yes"], ["Closure needs checking?", "None", "Yes"]] },
      { type: "paragraph", text: "Do not treat all products labelled bangle as mechanically identical. A hinged bangle opens, so sizing is based more on wrist fit and internal dimensions rather than hand clearance." },
    ],
  },
  {
    heading: "Measuring for a Cuff Bracelet",
    content: [
      { type: "paragraph", text: "A cuff is generally rigid or semi-rigid and has an opening rather than forming a fully closed circle. Measure the wrist where the cuff will sit. Because cuffs vary significantly in shape and opening width, wrist circumference is only the starting point. The product's actual internal dimensions and size range matter. Do not assume the cuff can simply be bent wider or narrower. Repeated bending can damage some constructions or alter stone settings. Only adjust a cuff if the specific product is designed for adjustment." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/measure-wrist-for-bracelet/67 (2).jpg", alt: "Wrist circumference bracelet sizing practical examples tennis chain bangle cuff", title: "Wrist Circumference vs Bracelet Size: Practical Examples", caption: "The construction must be identified before interpreting the wrist measurement — the same number means different things for different bracelet types.", priority: false },
    ],
  },
  {
    heading: "Wrist Circumference vs Bracelet Size: Practical Examples",
    content: [
      { type: "table", headers: ["Body Measurement", "Jewellery", "Product Information", "What to Assess"], rows: [["16 cm wrist", "Tennis bracelet", "17 cm usable closed length", "Whether +1 cm gives appropriate controlled movement"], ["16 cm wrist", "Chain bracelet", "18 cm closed length", "Whether +2 cm gives desired loose drape"], ["16 cm wrist / 20 cm hand", "Closed bangle", "Fixed internal opening", "Whether it clears 20 cm hand measurement"], ["16 cm wrist", "Hinged bangle", "Size designed for 15.5–16.5 cm wrists", "Use manufacturer range"], ["16 cm wrist", "Cuff", "Medium = 15.5–17 cm wrist range", "Use product-specific fit range"]] },
      { type: "paragraph", text: "These are measurement examples, not Aurelia product specifications." },
    ],
  },
  {
    heading: "Do You Add 1 cm or 2 cm to Your Wrist Measurement?",
    content: [
      { type: "paragraph", text: "Sometimes a particular brand or product may recommend that. It should not be treated as a universal jewellery rule. For example, Cartier's current general bracelet sizing tool recommends adding 1 cm for a loose fit within Cartier's sizing system. Other brands use different recommendations. This means the correct approach is: measure your bare wrist accurately first, then follow the sizing method for the actual bracelet you are buying. Do not alter the body measurement itself. Some bracelet systems and charm-bracelet guides use larger allowances because their constructions and intended contents require more room. Treat fixed centimetre additions as product-specific sizing instructions, not mathematical laws." },
    ],
  },
  {
    heading: "What if You Fall Between Two Bracelet Sizes?",
    content: [
      { type: "paragraph", text: "First identify how the retailer defines each size. If the product uses actual bracelet lengths, compare those lengths with your wrist measurement. If the product uses Small, Medium and Large, use the wrist ranges assigned by the manufacturer. If the piece is rigid, inspect the internal dimensions as well. Do not automatically choose the larger size unless the manufacturer's own sizing guidance recommends it. Bracelet size labels are not standardised — one brand's Medium does not necessarily equal another brand's Medium." },
    ],
  },
  {
    heading: "Measure Each Wrist Separately",
    content: [
      { type: "paragraph", text: "Your two wrists may not have identical circumferences. Measure the wrist on which the bracelet will actually be worn. Do not assume the measurement from the opposite wrist is interchangeable. This matters especially for close-fitting tennis bracelets, cuffs and bangles. If you wear several bracelets together, they may naturally sit at slightly different points on the arm. Measure those positions rather than assuming one wrist measurement works for the complete stack." },
    ],
  },
  {
    heading: "Does Bracelet Width Affect Fit?",
    content: [
      { type: "paragraph", text: "Yes, potentially. A broad rigid cuff covers more wrist surface than a very fine chain bracelet. Two bracelets with the same nominal internal size can therefore feel different. Width, finished weight, rigidity and movement all influence comfort. The numerical size is only part of the fit. Weight does not directly change wrist circumference, but it can change how the bracelet behaves. A heavier flexible bracelet may settle more noticeably around the wrist." },
    ],
  },
  {
    heading: "Wrist Measurement Does Not Tell You Whether the Bracelet Is Well Made",
    content: [
      { type: "paragraph", text: "A 17 cm bracelet can fit a wrist perfectly and still have poor articulation or an inadequate clasp. Sizing and workmanship are separate decisions. Once you determine the correct dimensions, check: the clasp, stone settings, link movement, hinges, and overall construction." },
      { type: "paragraph", parts: [{ text: "Use " }, { text: "What Makes Lab-Grown Diamond Jewellery High Quality?", href: "/blog/what-makes-lab-grown-diamond-jewellery-high-quality/" }, { text: " for the workmanship assessment." }] },
    ],
  },
  {
    heading: "A Waitlist Size Is Not a Production Instruction",
    content: [
      { type: "paragraph", text: "If a customer enters their wrist measurement into Aurelia's waitlist, that should be treated as preference information unless a later order process confirms a specific bracelet size. Joining the waitlist should not mean: a bracelet has been ordered, a bespoke size has been accepted, the bracelet has been reserved, or production has started." },
    ],
  },
  {
    heading: "Bracelet Measurement Checklist",
    content: [
      { type: "table", headers: ["Check", "Confirm"], rows: [["Correct wrist measured", "✓"], ["Exact wearing position measured", "✓"], ["Measurement recorded without added allowance", "✓"], ["cm/mm/inch unit recorded", "✓"], ["Bracelet type identified", "✓"], ["Flexible vs rigid construction identified", "✓"], ["Closed bangle hand clearance checked if relevant", "✓"], ["Manufacturer's size method checked", "✓"], ["Closed usable length understood", "✓"], ["Final fit checked separately using bracelet fit guide", "✓"]] },
      { type: "paragraph", text: "The key principle is simple: measure the body accurately first and interpret the jewellery second." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/measure-wrist-for-bracelet/67 (3).jpg", alt: "Bracelet sizing FAQ wrist measurement chain tennis bangle cuff final answer guide", title: "Frequently Asked Questions", caption: "Wrist circumference and bracelet length are related but not interchangeable — keep them as separate measurements throughout the process.", priority: false },
    ],
  },
  {
    heading: "Frequently Asked Questions",
    content: [
      { type: "faq", items: [
        { question: "How do I measure my wrist for a bracelet?", answer: "Wrap a flexible tape around the wrist where the bracelet will sit, keeping it close to the skin without compressing it. Record that number as your wrist circumference." },
        { question: "Should I add extra length while measuring my wrist?", answer: "No. Record the bare wrist circumference first. Add or select ease only after checking the sizing guidance for the actual bracelet." },
        { question: "Is wrist circumference the same as bracelet length?", answer: "No. Wrist circumference describes the body; bracelet length describes the jewellery." },
        { question: "How much longer should a bracelet be than my wrist?", answer: "There is no universal allowance. It depends on whether the bracelet is flexible, a tennis bracelet, chain, bangle or cuff and on the manufacturer's sizing method." },
        { question: "How should I measure for a tennis bracelet?", answer: "Measure the wrist where it will sit, then select a product size that allows controlled movement. GIA uses approximately one finger of room as a practical fit reference." },
        { question: "How do I measure for a closed bangle?", answer: "In addition to the wrist, measure the widest circumference of the hand and knuckles that the rigid bangle must pass over." },
        { question: "Do I need hand circumference for a hinged bangle?", answer: "Usually not in the same way, because the bangle opens rather than sliding over the entire hand. Use the product's wrist range and internal dimensions." },
        { question: "How do I measure for a cuff?", answer: "Measure the wrist at the point where the cuff will sit, then use the cuff manufacturer's own wrist range and internal dimensions." },
        { question: "Is 16 cm wrist the same as a 16 cm bracelet?", answer: "Not automatically. A 16 cm flexible bracelet could fit extremely closely on a 16 cm wrist, while another construction may use an entirely different size system." },
        { question: "Should I add 1 cm or 2 cm to my wrist?", answer: "Only when the specific bracelet manufacturer recommends that allowance for that product type. Neither figure is universal." },
        { question: "What if I fall between two bracelet sizes?", answer: "Use the actual manufacturer's fit chart and product construction rather than automatically choosing the larger or smaller option." },
        { question: "What is the difference between this guide and the bracelet-fit guide?", answer: "This page determines your wrist measurement and how to interpret bracelet sizing. How Should a Diamond Bracelet Fit? determines whether the finished bracelet is actually too tight, secure or too loose once worn." },
      ]},
    ],
  },
  {
    heading: "Final Answer: How Should You Measure Your Wrist for a Bracelet?",
    content: [
      { type: "paragraph", text: "Measure the bare wrist first. Use a flexible measuring tape around the exact location where the bracelet will sit. Keep the tape snug against the skin without compressing it. Record the result accurately in centimetres or millimetres. Do not immediately add 1 cm, 1.5 cm or 2 cm." },
      { type: "paragraph", text: "Next identify the bracelet construction. For a tennis, chain or station bracelet, use wrist circumference as the starting point and then select the appropriate additional room according to the actual product's sizing system. For a closed slip-on bangle, also measure the widest part of the hand because the rigid bangle must physically pass over it. For a hinged bangle, use wrist circumference and the manufacturer's internal sizing because it opens around the wrist. For a cuff, measure the intended wearing position and follow the cuff's product-specific wrist range and internal dimensions." },
      { type: "paragraph", text: "Most importantly, keep these two numbers separate: Wrist circumference = your body measurement. Bracelet length = the jewellery measurement. They are related, but they are not interchangeable." },
      { type: "paragraph", parts: [{ text: "Once you know your measurement, continue with " }, { text: "How Should a Diamond Bracelet Fit?", href: "/blog/how-should-diamond-bracelet-fit/" }, { text: " to determine whether the actual bracelet is secure and comfortable." }] },
      { type: "paragraph", parts: [{ text: "Use " }, { text: "How to Compare Different Diamond Bracelet Designs", href: "/blog/compare-diamond-bracelet-designs/" }, { text: " if you still need to choose between tennis, station, chain, bangle and cuff designs." }] },
      { type: "paragraph", parts: [{ text: "For the complete purchase decision, use " }, { text: "How to Choose a Lab-Grown Diamond Bracelet", href: "/blog/how-to-choose-lab-grown-diamond-bracelet/" }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Bracelets", subtitle: "Measure your wrist accurately — then find the bracelet whose fit and design work for you.", shopHref: "/shop/", contactHref: "/contact/" },
    ],
  },
];

export default function BlogWristMeasurePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Education</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">How to Measure Your Wrist for a Bracelet</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">Chain, Tennis, Bangle and Cuff Sizing Explained • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="measure-wrist-for-bracelet" />
      <NewsletterSection />
    </main>
  );
}

