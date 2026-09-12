import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "Necklace Length Guide: Inches, CM & Placement",
  description: "Compare necklace lengths in inches and centimetres, see approximate placement, and learn how neck size, pendant dimensions, layering and design affect fit.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/select-right-necklace-length/" },
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "image", src: "/images/blog/select-right-necklace-length/69 (1).jpg", alt: "Necklace length guide inches cm placement pendant layering neck size", title: "How to Select the Right Necklace Length", caption: "A useful process: start with a reference table, test the length against your own neck and chest, then account for pendant size, necklace design and any layering.", priority: true },
      { type: "paragraph", text: "Necklace length determines where a chain, pendant or diamond design sits on the body, but the number alone does not guarantee the same appearance on every wearer. An 18-inch necklace may sit around the collarbone on one person and slightly higher or lower on another. Neck circumference, body proportions, chain construction and the size of any pendant all affect the finished position." },
      { type: "paragraph", text: "That is why necklace length should be chosen using two things together: the physical chain length and: where that exact length sits on the intended wearer. A useful process is to start with a reference table, test the length against your own neck and chest, then account for pendant size, necklace design and any layering you intend to do." },
    ],
  },
  {
    heading: "Quick Necklace Length Guide",
    content: [
      { type: "paragraph", text: "The table below converts common necklace lengths from inches to centimetres and gives an approximate placement reference. The placement descriptions are deliberately approximate. They should help you visualise the difference between lengths, not promise that a particular necklace will sit in exactly the same place on every person." },
      { type: "table", headers: ["Necklace Length", "Approx. Centimetres", "Approximate Placement"], rows: [["14 in", "35.6 cm", "Close around the neck / choker position"], ["16 in", "40.6 cm", "Base of neck or just above the collarbone"], ["18 in", "45.7 cm", "Around or just below the collarbone"], ["20 in", "50.8 cm", "Below the collarbone / upper chest"], ["22 in", "55.9 cm", "Upper chest"], ["24 in", "61.0 cm", "Lower on the upper chest; often works over some necklines"], ["30 in", "76.2 cm", "Lower chest / long necklace position"], ["36 in", "91.4 cm", "Long rope-style placement"]] },
      { type: "paragraph", text: "These conversions use the standard relationship 1 inch = 2.54 centimetres. The placement column is a visual guide only. Your own proportions and the necklace design can move the final position noticeably." },
    ],
  },
  {
    heading: "Why Necklace Length Does Not Sit the Same on Everyone",
    content: [
      { type: "paragraph", text: "A chain is a fixed measurement. The person wearing it is not. Two people can wear the same 18-inch necklace and see the pendant land at different heights because their neck circumferences differ. Body proportions also influence how a necklace looks once it moves below the neck. That means a necklace-length chart should be used as a starting reference, not as a substitute for actually checking the length against the wearer. Current Tiffany sizing guidance makes the same point: necklace position depends not only on chain length but also on neck circumference and the size of the pendant." },
    ],
  },
  {
    heading: "How to Test a Necklace Length Before Buying",
    content: [
      { type: "paragraph", text: "One of the simplest methods is to reproduce the intended length using a soft string or ribbon. Measure a piece to the same length as the necklace you are considering. For an 18-inch necklace, for example, measure approximately 45.7 cm. Place the string around your neck and let it fall naturally. Do not pull it tightly unless the actual necklace is intended to fit closely. Look at where the centre point falls. If you are considering a pendant necklace, remember that the pendant will extend below that point. This quick test is often more useful than trying to predict placement from a generic model image." },
      { type: "table", headers: ["Length", "Approx. CM", "What to Look For"], rows: [["16 in", "40.6 cm", "Does it sit comfortably at the base of your neck?"], ["18 in", "45.7 cm", "Does the centre fall where you want around the collarbone?"], ["20 in", "50.8 cm", "Does the lower position suit your neckline or pendant?"]] },
    ],
  },
  {
    heading: "14-Inch to 24-Inch Necklace Lengths",
    content: [
      { type: "paragraph", text: "A 14-inch necklace is a short length and will normally sit close to the neck. However, a true 14-inch necklace may be too close for some wearers depending on neck circumference. Do not choose a choker length purely from the category name. Measure your neck and test the actual length." },
      { type: "paragraph", text: "A 16-inch necklace usually sits close to the base of the neck or near the upper collarbone area on many adults. It can work well for small pendants, delicate chains and shorter layered arrangements. But the pendant itself changes the final visual position. A 16-inch chain with a 10 mm pendant will finish much higher than a 16-inch chain carrying a 40 mm vertical pendant. The chain length may be identical, but the complete jewellery is not." },
      { type: "paragraph", text: "An 18-inch necklace is one of the most common general-purpose lengths. On many wearers, it falls around or just below the collarbone. However, 18 inches should not be described as universally perfect. A person with a larger neck circumference may experience a much closer fit. Someone with a smaller neck may see it fall lower. Use the length as a reference rather than a guarantee." },
      { type: "paragraph", text: "A 20-inch necklace adds approximately 5.1 cm compared with an 18-inch necklace. That difference is visually significant. The necklace generally falls below the collarbone and begins to occupy more of the upper chest. A 22-inch chain moves the focal point farther down the upper chest. A 24-inch necklace is a noticeably longer design. Blue Nile's current necklace guide describes 24 inches as a more dramatic length and notes that it can be worn over a blouse or dress." },
    ],
  },
  {
    heading: "30-Inch and 36-Inch Necklaces",
    content: [
      { type: "paragraph", text: "At 30 inches and beyond, the necklace becomes a long styling element rather than simply a close neckline piece. These lengths can create strong vertical emphasis and can work as the lowest layer in a multi-necklace arrangement. A 36-inch chain or strand may fall very low and, depending on its construction, some long necklaces may also support alternative styling. Do not assume every long diamond necklace can be doubled or wrapped. That depends on the specific clasp, articulation and construction." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/select-right-necklace-length/69 (2).jpg", alt: "Necklace length inches centimetres conversion table pendant size chain measurement", title: "Inches to Centimetres: Necklace Length Conversion Table", caption: "If Aurelia lists both units, they should describe the same physical necklace rather than being independently rounded to inconsistent values.", priority: false },
    ],
  },
  {
    heading: "Inches to Centimetres: Necklace Length Conversion Table",
    content: [
      { type: "table", headers: ["Inches", "Exact CM Conversion", "Practical Rounded Reference"], rows: [["14", "35.56 cm", "35.6 cm"], ["15", "38.10 cm", "38.1 cm"], ["16", "40.64 cm", "40.6 cm"], ["17", "43.18 cm", "43.2 cm"], ["18", "45.72 cm", "45.7 cm"], ["19", "48.26 cm", "48.3 cm"], ["20", "50.80 cm", "50.8 cm"], ["21", "53.34 cm", "53.3 cm"], ["22", "55.88 cm", "55.9 cm"], ["24", "60.96 cm", "61.0 cm"], ["26", "66.04 cm", "66.0 cm"], ["28", "71.12 cm", "71.1 cm"], ["30", "76.20 cm", "76.2 cm"], ["36", "91.44 cm", "91.4 cm"]] },
      { type: "paragraph", text: "If a product page gives only inches, use this table to understand the approximate centimetre equivalent." },
    ],
  },
  {
    heading: "Necklace Length Is Usually the Chain Measurement, Not the Pendant Drop",
    content: [
      { type: "paragraph", text: "A pendant necklace has at least two relevant vertical measurements: the chain length and: the pendant length. The chain determines where the top of the pendant is positioned. The pendant's own height determines how far the jewellery extends below that point. For example, two necklaces may both use an 18-inch chain. One has a small 8 mm solitaire pendant. The other uses a 35 mm elongated diamond design. Their chains are identical in length, but their lowest visible points are dramatically different." },
      { type: "paragraph", text: "Those measurements describe different parts of the jewellery and should not be added together. The 18 inches refers to the chain path around the neck. The 30 mm refers to the decorative element extending from its attachment point. Keep them as separate product specifications. Pendant width matters too. A broad halo or large motif can dominate the neckline even if it does not extend far vertically." },
    ],
  },
  {
    heading: "Necklace Length vs Necklace Design",
    content: [
      { type: "paragraph", text: "Different necklace architectures react differently to length. A pendant necklace has one central focal element. A station necklace spreads diamonds around the chain. A line necklace creates diamond coverage across a larger section of the neckline. Changing the length therefore does not produce the same visual effect across all three designs." },
      { type: "table", headers: ["Design", "Why Length Matters"], rows: [["Pendant necklace", "Controls where the pendant starts to sit"], ["Station necklace", "Changes position of all diamond stations"], ["Line necklace", "Changes how the diamond line follows the neckline"], ["Fixed-centre necklace", "Positions a non-moving centre motif"], ["Long chain necklace", "Determines overall vertical drop"]] },
      { type: "paragraph", parts: [{ text: "If you are still choosing the overall necklace architecture, use " }, { text: "How to Compare Different Diamond Necklace Designs", href: "/blog/compare-diamond-necklace-designs/" }] },
    ],
  },
  {
    heading: "Line Necklaces Need More Than a Length Number",
    content: [
      { type: "paragraph", text: "A diamond line necklace can be 16 or 18 inches long, but that does not tell you how much of the chain is actually diamond-set. One necklace might carry diamonds around nearly the complete circumference. Another might use diamonds only across the front and transition to plain metal or chain behind the neck. That means overall necklace length and diamond-set section length are separate specifications. They should not be confused." },
    ],
  },
  {
    heading: "Neck Circumference Changes Placement",
    content: [
      { type: "paragraph", text: "Consider two wearers. One has a 32 cm neck circumference. The other has a 40 cm neck circumference. Both put on a 45.7 cm / 18-inch necklace. The amount of extra chain beyond the neck circumference is clearly different. The necklace cannot therefore sit identically on both people. This is why generic diagrams are useful only as references. Body proportions also matter below the neck — a 24-inch necklace can look quite different on two people even after accounting for neck circumference." },
    ],
  },
  {
    heading: "Measuring an Existing Necklace",
    content: [
      { type: "paragraph", text: "If you already own a necklace that sits exactly where you want, use it as a reference. Lay it flat without stretching it. Measure using the same convention applied by the seller whenever possible. Some retailers, including Blue Nile, state that their necklace length is measured end-to-end including the clasp. Aurelia should use one consistent method and document it. A customer should not have to guess whether a stated 45 cm length includes the clasp." },
    ],
  },
  {
    heading: "Adjustable Necklaces Need a Range, Not One Number",
    content: [
      { type: "paragraph", text: "If a verified necklace adjusts between several lengths, the product page should state that range explicitly. For example: Wearable length: 40–45 cm is clearer than calling it simply: 45 cm necklace. However, do not assume Aurelia necklaces are adjustable until the individual product confirms an extender, sliding mechanism or multiple fastening positions. Do not invent an extension length. If the chain image shows several links near the clasp, that does not automatically prove they are designed as adjustment points." },
    ],
  },
  {
    heading: "Choosing Length for Layering",
    content: [
      { type: "paragraph", text: "Layering works best when the necklaces have enough visual separation for the individual designs to remain visible. If two necklaces are extremely close in length, pendants and chains can overlap. Greater length separation usually creates more distinct layers. But there is no mandatory two-inch rule. Pendant dimensions, chain thickness and necklace architecture all affect how much spacing looks appropriate." },
      { type: "table", headers: ["Layer", "Example Length", "Possible Role"], rows: [["First", "16 in / 40.6 cm", "Short chain or small focal piece"], ["Second", "18 in / 45.7 cm", "Main pendant"], ["Third", "20–22 in / 50.8–55.9 cm", "Lower pendant or station necklace"]] },
      { type: "paragraph", text: "This is a styling example, not a fixed formula. A large pendant may require more separation than a very small one. Test the complete layering combination rather than evaluating every necklace independently." },
    ],
  },
  {
    heading: "Necklace Length and Clothing Neckline",
    content: [
      { type: "paragraph", text: "Clothing changes the visual background behind the jewellery. A necklace may sit above a neckline, within an open neckline or over the clothing itself. The correct choice depends on whether you want the necklace to: follow the neckline, sit inside it, or contrast against the fabric. This should be treated as styling preference rather than a rigid rule connecting one necklace length to one garment type. Do not state that high necklines require one exact necklace length." },
    ],
  },
  {
    heading: "Necklace Length for a Gift",
    content: [
      { type: "paragraph", text: "Length uncertainty becomes more significant when buying for someone else. If possible, check a necklace the recipient already wears frequently. Measure it using the same end-to-end method. That gives you direct evidence of their preferred placement. If you cannot access one, a mid-range length can be versatile, but do not claim any one length is universally suitable. Also consider whether the product actually allows exchange if the recipient prefers another length. Use only Aurelia's confirmed policy." },
    ],
  },
  {
    heading: "Should Necklace Length Include the Pendant?",
    content: [
      { type: "paragraph", text: "Normally, chain or necklace length and pendant size should be stated separately. For a conventional pendant necklace, do not add the pendant's height to the chain measurement and call the result the necklace length. A customer should be able to see: Chain length and: Pendant dimensions as two distinct specifications. Two inches equals 5.08 cm — enough to change necklace placement noticeably. A 16-inch necklace and an 18-inch necklace are not near-identical fits." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/select-right-necklace-length/69 (3).jpg", alt: "Necklace length comparison pendant effect chain 16 18 20 24 inches placement", title: "Necklace Length Comparison Example", caption: "Actual body placement still depends on the wearer — these examples are about relative movement.", priority: false },
    ],
  },
  {
    heading: "Necklace Length Comparison Example",
    content: [
      { type: "paragraph", text: "Imagine a pendant is 25 mm tall and is offered with several hypothetical chain lengths." },
      { type: "table", headers: ["Chain Length", "Approx. CM", "Pendant Effect"], rows: [["16 in", "40.6 cm", "Pendant begins higher near neckline"], ["18 in", "45.7 cm", "Pendant moves roughly 5 cm farther into the composition compared with 16 in"], ["20 in", "50.8 cm", "More separation from neck and shorter layers"], ["24 in", "61.0 cm", "Clearly longer upper-chest placement"]] },
    ],
  },
  {
    heading: "How Aurelia Necklace Products Should Display Length",
    content: [
      { type: "paragraph", text: "Aurelia's product pages should avoid vague sizing such as: Standard length without the physical measurement." },
      { type: "table", headers: ["Product Information", "Example Format"], rows: [["Necklace length", "45 cm / 17.7 in"], ["Adjustment range", "40–45 cm, only if verified"], ["Pendant height", "e.g. confirmed millimetre measurement"], ["Pendant width", "confirmed millimetre measurement"], ["Chain included", "Yes / No"], ["Chain removable", "Yes / No, only if verified"], ["Measurement method", "End-to-end including clasp, if that is Aurelia's method"]] },
      { type: "paragraph", text: "Do not infer length from model photography. A model photograph can show general scale, but the model's neck size is unknown, camera perspective can alter appearance, and the same length sits differently on different people. Use model images as context and stated measurements as evidence." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/select-right-necklace-length/69 (4).jpg", alt: "Necklace length FAQ final answer guide inches cm pendant layering design placement", title: "Frequently Asked Questions", caption: "The best necklace length is the one whose physical measurement + wearer proportions + pendant dimensions + necklace design place the jewellery where you actually want it.", priority: false },
    ],
  },
  {
    heading: "Frequently Asked Questions",
    content: [
      { type: "faq", items: [
        { question: "What is the most common necklace length?", answer: "Lengths around 16–20 inches are commonly offered, with 18 inches widely used for pendant necklaces. However, popularity does not make one length correct for every wearer." },
        { question: "How long is an 18-inch necklace in centimetres?", answer: "18 inches equals approximately 45.7 cm." },
        { question: "How long is a 20-inch necklace in centimetres?", answer: "20 inches equals 50.8 cm." },
        { question: "Where does an 18-inch necklace sit?", answer: "On many wearers it sits around or just below the collarbone, but neck circumference and body proportions can move that position." },
        { question: "Is a 16-inch necklace a choker?", answer: "It can sit close to the base of the neck, but actual placement depends on the wearer's neck circumference. A 14-inch length is generally closer to traditional choker positioning." },
        { question: "What length should I choose for a pendant?", answer: "Choose the chain length according to where you want the pendant to begin sitting, then account separately for the pendant's height and width." },
        { question: "Does necklace length include the pendant?", answer: "For a conventional pendant necklace, chain length and pendant dimensions should normally be stated separately." },
        { question: "Does the same necklace length fit everyone the same?", answer: "No. Neck circumference, body proportions and pendant size change the finished placement." },
        { question: "What necklace length is best for layering?", answer: "There is no universal combination. Use enough separation that the necklace designs remain visible without unwanted overlap." },
        { question: "How do I test necklace length at home?", answer: "Measure string or ribbon to the exact necklace length, place it around your neck and check where its centre falls. Add the pendant's approximate dimensions if relevant." },
        { question: "What if I am between 18 and 20 inches?", answer: "Test both physically. The difference is approximately 5.1 cm and can noticeably change pendant placement." },
        { question: "What is the biggest mistake when choosing necklace length?", answer: "Choosing a length from a generic diagram without accounting for your neck circumference, pendant size and the jewellery's actual measurement method." },
      ]},
    ],
  },
  {
    heading: "Final Answer: How Should You Select the Right Necklace Length?",
    content: [
      { type: "paragraph", text: "Start with the physical measurement. Common reference lengths include: 16 inches / 40.6 cm, 18 inches / 45.7 cm, 20 inches / 50.8 cm, 22 inches / 55.9 cm, and: 24 inches / 61.0 cm. Then test the length against the actual wearer using string, ribbon or an existing necklace. Do not rely only on a model photograph." },
      { type: "paragraph", text: "Next, account for the necklace design. A pendant necklace needs both chain length and pendant dimensions considered. A station necklace distributes elements around the complete chain. A diamond line necklace may need both total length and diamond-set coverage checked. Then consider the wearer. Neck circumference and body proportions change where the same chain length sits. Finally, consider whether the necklace will be layered and how the chosen length interacts with the other jewellery." },
      { type: "paragraph", text: "The best necklace length is not automatically: the most common length or: the length shown on the model. It is the length whose: physical measurement + wearer proportions + pendant dimensions + necklace design place the jewellery where you actually want it." },
      { type: "paragraph", parts: [{ text: "For the complete necklace purchase process, continue with " }, { text: "How to Choose a Lab-Grown Diamond Necklace", href: "/blog/how-to-choose-lab-grown-diamond-necklace/" }] },
      { type: "paragraph", parts: [{ text: "For pendant construction, chain inclusion and bail compatibility, use " }, { text: "How to Choose a Lab-Grown Diamond Pendant", href: "/blog/how-to-choose-lab-grown-diamond-pendant/" }] },
      { type: "paragraph", parts: [{ text: "For pendant-versus-necklace terminology, use " }, { text: "Diamond Necklace vs Diamond Pendant: What Is the Difference?", href: "/blog/diamond-necklace-vs-diamond-pendant/" }] },
      { type: "paragraph", parts: [{ text: "For comparing pendant, station and line designs, use " }, { text: "How to Compare Different Diamond Necklace Designs", href: "/blog/compare-diamond-necklace-designs/" }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Necklaces", subtitle: "Test the length, account for pendant dimensions, consider layering — find the right fit.", shopHref: "/shop/", contactHref: "/contact/" },
    ],
  },
];

export default function BlogNecklaceLengthPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Education</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">How to Select the Right Necklace Length</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">Inches, Centimetres, Placement, Pendant Size and Layering Explained • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="select-right-necklace-length" />
      <NewsletterSection />
    </main>
  );
}

