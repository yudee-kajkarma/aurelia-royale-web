import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "How to Check Diamond Jewellery for Loose Stones",
  description: "Learn the warning signs of a loose diamond, how to inspect prongs, bezels and pavé safely, when to stop wearing jewellery and when to seek professional repair.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/check-diamond-jewellery-loose-stones/" },
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "image", src: "/images/blog/clean-lab-grown-diamond-jewellery/1.jpg", alt: "How to check diamond jewellery for loose stones prongs visual inspection warning signs", title: "How to Check Diamond Jewellery for Loose Stones", caption: "The safest home check is observational — look for warning signs, but do not push, probe or shake the stone to test it.", priority: true },
      { type: "paragraph", text: "A loose diamond should be treated as a jewellery-repair issue, not something to test aggressively at home. A diamond can remain visually present in a ring, bracelet, necklace or pair of earrings even when part of its setting has already been damaged. A bent prong, visible gap, changed stone position or unusual clicking can all indicate that the setting is no longer holding the diamond as intended." },
      { type: "paragraph", text: "The safest home check is therefore observational. Look closely at the jewellery under good light. Compare the stone with neighbouring stones where relevant. Look for damaged or uneven prongs, new gaps, visible tilting, snagging, missing metal or a diamond that no longer sits in its normal position. If you suspect movement or setting damage, stop wearing the jewellery and have it professionally inspected. Do not try to tighten claws, push a diamond back into position or test the stone repeatedly with tools." },
    ],
  },
  {
    heading: "Quick Answer: How Can You Tell if a Diamond Is Loose?",
    content: [
      { type: "paragraph", text: "Warning signs include a diamond that visibly changes position, sits at a different angle, makes an unusual clicking or rattling sound during normal handling, has a visible gap between the stone and setting, or is held by a bent, lifted, broken or missing prong." },
      { type: "paragraph", text: "Pavé and channel-set jewellery may show different signs, such as one small diamond sitting higher than neighbouring stones, a visible empty space, damaged setting metal or a row that no longer looks even. If anything appears different from the surrounding setting, do not continue wearing the piece simply to see whether the problem becomes worse. A loose diamond can damage the setting further and may eventually be lost." },
    ],
  },
  {
    heading: "The Safest Rule: If You Suspect a Loose Stone, Stop Wearing the Jewellery",
    content: [
      { type: "paragraph", text: "If you can see a damaged claw, notice a new gap around the diamond, hear unexplained clicking during ordinary handling or believe the stone has moved, remove the jewellery. Place it somewhere secure and separate from other jewellery. Do not keep wearing it until the stone falls out. The fact that the diamond is still present does not mean the setting is secure. GIA notes that a loose diamond can wear against the precious metal around it and can eventually damage a prong further." },
      { type: "table", headers: ["Situation", "Best Response"], rows: [["Stone appears tilted", "Stop wearing"], ["One prong looks bent or missing", "Stop wearing"], ["Visible gap between stone and setting", "Stop wearing"], ["Unusual click/rattle during ordinary handling", "Stop wearing"], ["Pavé stone appears displaced", "Stop wearing"], ["Stone has fallen out", "Store jewellery and loose stone separately and safely"], ["Unsure whether damage is real", "Have the piece professionally inspected"]] },
    ],
  },
  {
    heading: "What Not to Do",
    content: [
      { type: "paragraph", text: "Do not turn a home inspection into a stress test. Avoid trying to make the diamond move so that you can prove it is loose. That means you should not: push it repeatedly with a fingernail, probe around it with a pin, use tweezers, press the prongs, bend the metal, shake the jewellery deliberately, or attempt to tighten anything with pliers. A consumer inspection should identify warning signs. The actual diagnosis and repair should be left to someone equipped to inspect and work on the setting." },
    ],
  },
  {
    heading: "Why a Loose Diamond Is More Serious Than It Looks",
    content: [
      { type: "paragraph", text: "Diamonds are extremely hard, but the precious metal holding them is much softer. If a diamond moves inside its setting, its edge can rub against the metal that is supposed to secure it. Over time, that can contribute to additional wear. A loose stone can also be more vulnerable to impact because the setting may no longer support or protect it in the way the design intended. GIA notes that a diamond loose in its mounting can damage the prongs and that damaged prongs can increase the risk of stone loss. That is why early detection matters." },
    ],
  },
  {
    heading: "Start With a Visual Inspection",
    content: [
      { type: "paragraph", text: "Use bright, even lighting. Clean hands are helpful because fingerprints can make the surface harder to inspect. Look at the jewellery from several angles: front, side, and where possible, the reverse. You are looking for changes, asymmetry and obvious damage. If you have another identical or symmetrical part of the jewellery to compare with, that can be useful. For example, one side of a ring setting may reveal how the opposite side should normally look." },
    ],
  },
  {
    heading: "Look at the Stone's Position First",
    content: [
      { type: "paragraph", text: "Before concentrating on the individual prongs, look at the diamond itself. Does it appear centred? Is it sitting level? Has it visibly tilted? Does one edge sit unusually high? A diamond that has changed position relative to the setting should be treated seriously. The setting may still appear mostly intact while no longer holding the stone evenly." },
      { type: "table", headers: ["What You See", "Why It Matters"], rows: [["Diamond visibly tilted", "Stone may no longer be seated properly"], ["One side sits higher", "Setting contact may be uneven"], ["Stone no longer centred", "Possible movement or setting damage"], ["Obvious gap beneath/around one side", "Contact may be incomplete"], ["One stone in a row sits differently", "Individual setting may be compromised"]] },
      { type: "paragraph", text: "Do not push the stone to see whether the position changes further. The visible difference itself is enough reason to seek inspection." },
    ],
  },
  {
    heading: "Check Prongs or Claws Carefully",
    content: [
      { type: "paragraph", text: "Prong-set jewellery relies on small sections of metal making proper contact with the diamond. Look at all the prongs rather than checking only one. They should appear deliberate and consistent with the design. A problem can develop when one prong becomes: bent, lifted, worn, shortened, broken, or visibly separated from the stone." },
      { type: "table", headers: ["What to Look For", "More Reassuring", "Warning Sign"], rows: [["Position", "Consistent around stone", "One visibly displaced"], ["Contact", "Appears to meet diamond", "Visible gap"], ["Shape", "Similar to neighbouring prongs", "Bent or distorted"], ["Height", "Consistent with design", "One unusually short"], ["Tip", "Complete", "Broken/missing"], ["Alignment", "Symmetrical where intended", "One pointing away"]] },
      { type: "paragraph", text: "Small differences can exist by design and hand-finishing, so this is not a manufacturing tolerance test. You are looking for obvious changes or damage." },
    ],
  },
  {
    heading: "Snagging Can Be an Early Warning Sign",
    content: [
      { type: "paragraph", text: "A prong that begins catching on clothing or hair can deserve inspection, particularly when the jewellery did not behave that way previously. The snag may result from a prong that has lifted or changed position. However, snagging alone does not prove the diamond is loose. The important clue is new or increased snagging. If a ring suddenly starts catching on fabric where it did not before, inspect it rather than simply pulling the fabric free and continuing to wear it." },
    ],
  },
  {
    heading: "What if One Prong Is Missing?",
    content: [
      { type: "paragraph", text: "Treat the jewellery as needing professional attention immediately. A multi-prong setting may still physically retain the diamond after one prong has failed, but the design no longer has the same level of support. GIA specifically warns that even a single damaged prong can leave a diamond less securely held. The correct response is not: \"There are still three prongs left.\" It is: \"The setting has suffered damage and should be inspected before further wear.\"" },
    ],
  },
  {
    heading: "Listen for New Clicking or Rattling During Normal Handling",
    content: [
      { type: "paragraph", text: "Sometimes movement becomes noticeable through sound. If a stone produces a new click or rattle while the jewellery is being handled normally, that can be a warning sign. Do not deliberately shake the piece to try to reproduce the sound. If you already noticed it during ordinary handling, that is sufficient reason to stop wearing the jewellery and have the setting checked. A secure stone should not normally move freely enough in its setting to create obvious repeated contact noise." },
      { type: "paragraph", text: "Do Not Use the Shake Test. Some informal jewellery advice recommends holding a piece close to the ear and shaking it. That is not necessary for Aurelia's consumer guide. If the setting is already compromised, repeatedly shaking the jewellery adds movement precisely when the goal should be to minimise it. A visual inspection and professional assessment are the safer path." },
    ],
  },
  {
    heading: "Use Magnification for Looking, Not Manipulating",
    content: [
      { type: "paragraph", text: "If you own a jewellery loupe or magnifying lens, it can help you see the setting more clearly. Use it to inspect: prong contact, possible gaps, damage, misalignment, and neighbouring stones. Magnification should not become an invitation to start adjusting the setting. Seeing a suspicious gap under magnification is a reason to seek professional inspection, not to repair it at home." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/clean-lab-grown-diamond-jewellery/2.jpg", alt: "How to check pavé channel bezel halo tennis bracelet ring earring loose stone", title: "How to Check Pavé Diamond Jewellery", caption: "Pavé, channel and bezel settings show different warning signs — compare neighbouring stones for consistency rather than pressing individual stones.", priority: false },
    ],
  },
  {
    heading: "How to Check Pavé Diamond Jewellery",
    content: [
      { type: "paragraph", text: "Pavé settings use many small diamonds held closely across a surface. Because the stones are small and numerous, one loose stone may be less obvious than a loose centre diamond. Look for the overall pattern first. Warning signs include: a dark or empty-looking spot, one diamond sitting noticeably higher or lower, damaged metal beside a stone, a visible gap, or one stone that appears rotated or out of alignment. Do not press individual pavé stones to test them." },
      { type: "paragraph", text: "A small empty setting can sometimes be mistaken for a dark patch or trapped dirt. If normal visual inspection suggests that one point in a pavé surface looks materially different from the others, inspect the area under magnification. Do not scrub aggressively in an attempt to determine whether the area is dirty. Shared-prong settings need extra attention — if one shared element becomes damaged, more than one diamond may potentially be affected." },
    ],
  },
  {
    heading: "How to Check Channel-Set, Bezel-Set and Halo Settings",
    content: [
      { type: "paragraph", text: "Channel settings hold diamonds between rails of metal. Look for: a diamond that has shifted out of alignment, one stone sitting higher than neighbouring stones, a visible gap between stone and channel wall, damage or bending in the metal rail, or an empty space where a stone is missing. Do not deliberately press a channel-set stone from above." },
      { type: "paragraph", text: "A bezel surrounds much or all of the diamond's perimeter with metal. Warning signs include a new visible gap, deformation in the rim or a stone that appears to have changed position. Do not attempt to push a bezel back towards the diamond. A partial bezel intentionally leaves some areas exposed — compare both sides rather than mistaking designed openings for damage." },
      { type: "paragraph", text: "A halo contains multiple small accent diamonds around a central stone. Inspect the centre diamond and its setting separately, then inspect the halo as a group. A secure centre does not prove every halo diamond is secure. Treat each area as its own setting structure." },
    ],
  },
  {
    heading: "How to Check a Tennis Bracelet",
    content: [
      { type: "paragraph", text: "A tennis bracelet contains many individually set diamonds connected through flexible links. Look along the complete bracelet rather than checking only one section. The diamond line should look consistent. Warning signs include: one stone sitting differently, an obvious missing stone, a setting that looks bent, a gap in a prong, or a link that no longer aligns properly with its neighbours. Do not force links backwards or beyond their normal range during inspection. Lay the bracelet carefully on a soft surface and inspect how the settings line up." },
    ],
  },
  {
    heading: "How to Check Diamond Earrings, Pendants and Rings",
    content: [
      { type: "paragraph", text: "For diamond studs, inspect the setting from the front and side. Look for bent prongs, a stone sitting at an unexpected angle or a visible gap. For drop earrings, inspect each articulated diamond-setting section as well as the connections between them. Because earrings are worn as a pair, comparison can help — if one earring's setting suddenly looks different from the other, that is worth investigating." },
      { type: "paragraph", text: "Inspect pendant central diamond settings and any accent stones, then look at how the pendant connects to the chain. For line or station necklaces, compare neighbouring settings for consistency. For rings, inspect the centre setting, accent stones, pavé rows, halo, and shoulders from the side as well as from above. If the ring recently experienced a hard impact, an inspection is sensible even if the diamond remains present." },
    ],
  },
  {
    heading: "A Diamond Can Chip as Well as Become Loose",
    content: [
      { type: "paragraph", text: "Diamond is extremely hard, but hardness is resistance to scratching. It does not mean the stone is impossible to chip. GIA notes that diamonds can fracture when hit in vulnerable directions, and exposed points and thin girdle areas can be particularly susceptible. If you see what appears to be a new chip, stop wearing the jewellery even if the setting still looks secure. Pear, marquise and other pointed shapes can have vulnerable tips often protected through the setting design. If the protective prong or metal around a point becomes damaged, the diamond may be more exposed to impact." },
    ],
  },
  {
    heading: "Do Not Clean Jewellery Aggressively if You Suspect a Loose Stone",
    content: [
      { type: "paragraph", text: "If you suspect that a stone is loose, this is not the moment for vigorous home cleaning. Avoid scrubbing around the questionable setting. Also avoid home ultrasonic or steam cleaning. GIA states that ultrasonic and steam cleaning can dislodge stones that are already loose, which is why jewellery professionals inspect for loose stones before using these methods. Never put jewellery into an ultrasonic cleaner to see whether the stones stay in place. If a setting is already compromised, the vibration can make the problem worse." },
    ],
  },
  {
    heading: "What Should You Do After Finding a Warning Sign?",
    content: [
      { type: "paragraph", text: "Remove the piece. Place it in a secure, soft-lined jewellery box or individual pouch where it cannot rub against other jewellery. Then arrange professional inspection. If a diamond has already fallen out and you still have it, keep the loose stone safely separated so that it cannot scratch other jewellery or disappear. Take both the jewellery and the loose stone for assessment. Do Not Use Glue — the setting needs to be assessed to determine why the stone became loose. Do Not Tighten Prongs Yourself — incorrect pressure can damage the stone, the prong, the bearing, or neighbouring settings." },
    ],
  },
  {
    heading: "When Should You Seek Professional Inspection?",
    content: [
      { type: "paragraph", text: "Seek inspection when you notice: a visible setting change, a bent or missing prong, unusual stone position, a new gap, rattling or clicking during ordinary handling, a missing accent diamond, damage after an impact, or any uncertainty about whether the stone remains secure. Professional inspection is also useful periodically even when no obvious problem is visible, particularly for jewellery worn frequently. GIA has historically suggested periodic prong inspections—often around every six to twelve months for frequently worn engagement rings." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/clean-lab-grown-diamond-jewellery/3.jpg", alt: "Loose stone warning sign table prong pavé channel bezel tennis professional inspection", title: "Loose-Stone Warning-Sign Table", caption: "If you notice a warning sign, stop wearing, store safely and arrange professional inspection — do not clean, glue or tighten at home.", priority: false },
    ],
  },
  {
    heading: "Loose-Stone Warning-Sign Table",
    content: [
      { type: "table", headers: ["Warning Sign", "Possible Issue", "What to Do"], rows: [["New clicking during normal handling", "Stone may be moving", "Stop wearing"], ["Diamond visibly tilted", "Setting may have shifted", "Stop wearing"], ["Gap beside a prong", "Reduced contact", "Professional inspection"], ["Bent prong", "Setting damaged", "Stop wearing"], ["Missing prong", "Security compromised", "Stop wearing immediately"], ["New snagging", "Lifted/damaged prong possible", "Inspect and seek assessment"], ["One pavé stone sits high/low", "Individual setting issue", "Stop wearing"], ["Missing pavé stone", "Setting has already failed", "Professional repair"], ["Channel row no longer even", "Stone/rail movement possible", "Stop wearing"], ["Bezel visibly deformed", "Metal may no longer secure stone correctly", "Professional inspection"], ["Recent heavy impact", "Hidden setting damage possible", "Inspect before further wear"]] },
    ],
  },
  {
    heading: "What Aurelia Should Not Promise Without Confirmation",
    content: [
      { type: "paragraph", text: "The consumer guide should not state that Aurelia automatically provides: complimentary claw inspections, free prong tightening, lifetime stone-setting checks, free replacement of missing diamonds, or: free repair after normal wear. Those are commercial service commitments. They need explicit client confirmation and clear terms. Until then, the article should simply say: If you notice a warning sign, arrange inspection with a qualified jeweller or contact Aurelia to ask what after-sales support is available for your piece." },
    ],
  },
  {
    heading: "Frequently Asked Questions",
    content: [
      { type: "faq", items: [
        { question: "How can I tell if a diamond is loose?", answer: "Look for visible tilting, a new gap around the setting, damaged prongs, unusual clicking during ordinary handling or a stone that no longer sits consistently with neighbouring diamonds." },
        { question: "Should I wiggle a diamond to see if it is loose?", answer: "No. Aurelia's consumer guidance should stay non-invasive. If you already see warning signs, stop wearing the jewellery and have it inspected." },
        { question: "Is a clicking sound a sign of a loose diamond?", answer: "It can be. If a new click or rattle occurs during normal handling, stop wearing the piece rather than repeatedly shaking it to confirm the sound." },
        { question: "What should I do if one prong is bent?", answer: "Stop wearing the jewellery and arrange professional inspection. Do not bend the prong back yourself." },
        { question: "Can I wear a ring if one claw is missing?", answer: "You should not continue normal wear. Even one damaged prong can reduce the security and protection provided by the setting." },
        { question: "Can a bezel-set diamond become loose?", answer: "Yes. Bezel settings can also be damaged or deformed. Look for gaps, changes in stone position or damage to the surrounding rim." },
        { question: "How do I check pavé diamonds?", answer: "Inspect the overall row for missing stones, gaps, changed alignment or one diamond sitting noticeably differently from its neighbours. Do not press the small stones." },
        { question: "Can an ultrasonic cleaner make a loose diamond fall out?", answer: "Potentially. GIA notes that ultrasonic cleaning can dislodge stones that are already loose, so suspected settings should be inspected before ultrasonic cleaning." },
        { question: "Can I tighten a diamond prong at home?", answer: "No. Prong tightening is professional jewellery work. Incorrect pressure can damage the setting or stone." },
        { question: "Can I glue a loose diamond back into place?", answer: "Do not use household glue. The setting itself needs to be inspected and repaired correctly." },
        { question: "Does a loose diamond mean the jewellery was badly made?", answer: "Not necessarily. Setting problems can result from wear, impact, damage or workmanship. A professional inspection is needed to determine the cause." },
        { question: "How often should diamond settings be inspected?", answer: "There is no one interval for every piece. Frequently worn jewellery benefits from periodic professional inspection, with additional checks after impacts or whenever a warning sign appears." },
        { question: "Does Aurelia offer free prong tightening?", answer: "Do not state that unless Aurelia has confirmed the service and its terms. Contact Aurelia for the currently available after-sales support for the specific piece." },
      ]},
    ],
  },
  {
    heading: "Final Answer: How Should You Check Diamond Jewellery for Loose Stones?",
    content: [
      { type: "paragraph", text: "Use a non-invasive visual inspection. Look at the diamond from the front and side. Check whether it still sits level and in its normal position. Inspect prongs or claws for visible gaps, bending, wear or missing metal. On pavé, halo and channel-set jewellery, compare neighbouring stones and look for one diamond sitting differently from the others. Pay attention to new snagging or unexplained clicking during ordinary handling." },
      { type: "paragraph", text: "But do not deliberately shake, push or probe the stone to prove that it is loose. If you see a warning sign: stop wearing the jewellery, avoid ultrasonic or aggressive cleaning, store the piece safely, and then arrange professional inspection. Do not tighten prongs, reshape bezels or use household glue yourself." },
      { type: "paragraph", parts: [{ text: "For general workmanship and setting quality, continue with " }, { text: "What Makes Lab-Grown Diamond Jewellery High Quality?", href: "/blog/what-makes-lab-grown-diamond-jewellery-high-quality/" }] },
      { type: "paragraph", parts: [{ text: "For routine cleaning after the setting is known to be secure, use " }, { text: "How to Clean Lab-Grown Diamond Jewellery at Home", href: "/blog/clean-lab-grown-diamond-jewellery/" }] },
      { type: "paragraph", parts: [{ text: "For storage guidance, use " }, { text: "How to Store Diamond Jewellery Properly", href: "/blog/store-diamond-jewellery/" }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Jewellery", subtitle: "Keep your jewellery secure — inspect regularly and seek professional care when warning signs appear.", shopHref: "/shop/", contactHref: "/contact/" },
    ],
  },
];

export default function BlogLooseStonesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Care</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">How to Check Diamond Jewellery for Loose Stones</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">Warning Signs, Safe Inspection and When to Seek Professional Repair • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="check-diamond-jewellery-loose-stones" />
      <NewsletterSection />
    </main>
  );
}

