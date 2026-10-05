import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "How to Choose a Lab-Grown Diamond Pendant",
  description: "Choose a lab-grown diamond pendant by checking bail size, chain compatibility, removability, pendant dimensions, diamond weight and exactly what is included.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/how-to-choose-lab-grown-diamond-pendant/" },
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "image", src: "/images/blog/how-to-choose-lab-grown-diamond-pendant/71 (1).jpg", alt: "How to choose lab-grown diamond pendant bail chain compatibility removability dimensions", title: "How to Choose a Lab-Grown Diamond Pendant", caption: "The strongest pendant-buying sequence: pendant construction → bail → chain compatibility → removability → included components → physical dimensions → diamond distribution → setting → final specification check.", priority: true },
      { type: "paragraph", text: "Choosing a lab-grown diamond pendant is not the same as choosing a complete diamond necklace. A pendant is the decorative component that hangs from or connects to a chain. Depending on the product, the chain may be included, sold separately or permanently integrated with the pendant design. That distinction changes what you need to check." },
      { type: "paragraph", text: "If you are buying a pendant by itself, bail size and chain compatibility become essential. If the pendant comes with a chain, you need to know whether it can be removed and used with another chain later. If the decorative element is permanently fixed into the chain, it may function more accurately as a complete pendant necklace rather than an interchangeable pendant." },
      { type: "paragraph", text: "The strongest pendant-buying sequence is therefore: pendant construction → bail → chain compatibility → removability → included components → physical dimensions → diamond distribution → setting → final specification check." },
    ],
  },
  {
    heading: "Quick Answer: What Should You Check Before Buying a Diamond Pendant?",
    content: [
      { type: "paragraph", text: "First determine exactly what is being sold. Is it: a pendant only, a pendant with an included chain, or: a pendant permanently incorporated into a complete necklace? Then check how the pendant connects to the chain. If it uses a bail, confirm that the opening can accommodate the intended chain and, crucially, the chain's clasp or end fitting." },
      { type: "paragraph", text: "Next, determine whether the pendant is removable. A pendant shown sliding along a chain may be interchangeable; a fixed-centre design may not be. After that, check the finished pendant dimensions rather than relying only on the diamond's carat weight. Finally, verify the metal, diamond information and exactly what is included with the product." },
    ],
  },
  {
    heading: "The Pendant Buying Framework",
    content: [
      { type: "table", headers: ["Decision", "Main Question"], rows: [["Product type", "Pendant only or complete pendant necklace?"], ["Bail", "How does the pendant connect to the chain?"], ["Compatibility", "Will the intended chain actually fit through the bail?"], ["Removability", "Can the pendant be moved to another chain?"], ["Included components", "Is the chain included?"], ["Dimensions", "How large is the finished pendant?"], ["Diamond distribution", "One focal diamond or multiple stones?"], ["Setting", "How is the diamond held?"], ["Metal", "What metal and fineness does the pendant use?"], ["Verification", "Do product description and imagery agree?"]] },
    ],
  },
  {
    heading: "What Is a Diamond Pendant?",
    content: [
      { type: "paragraph", text: "A pendant is the decorative element designed to hang from or connect to a necklace chain. It may contain: one solitaire diamond, a halo, multiple diamonds, a geometric design, a symbolic motif, or another decorative form. The important distinction is structural. The pendant is the focal component. The necklace or chain is the structure that allows that component to be worn around the neck. That means the word pendant does not automatically mean you are purchasing a complete necklace." },
      { type: "table", headers: ["Term", "Practical Meaning"], rows: [["Pendant only", "Decorative component; chain not included unless stated"], ["Pendant with chain", "Pendant and chain supplied together"], ["Pendant necklace", "Complete necklace centred around a pendant"], ["Fixed-centre necklace", "Decorative element permanently connected between chain sections"], ["Removable pendant", "Pendant can potentially be moved to another compatible chain"]] },
      { type: "paragraph", parts: [{ text: "If you need the full terminology distinction, use " }, { text: "Diamond Necklace vs Diamond Pendant: What Is the Difference?", href: "/blog/diamond-necklace-vs-diamond-pendant/" }] },
    ],
  },
  {
    heading: "The First Question: Is the Chain Included?",
    content: [
      { type: "paragraph", text: "This is the most important product-content question on this page. Do not assume the chain is included simply because a pendant is photographed on one. Retailers may show a chain because the pendant needs to be displayed in the way it will eventually be worn. The chain may still be sold separately. The product page should state clearly: Pendant only — chain not included or: Chain included where applicable. There should be no need for the buyer to infer this from an image." },
    ],
  },
  {
    heading: "The Bail Is Central to Pendant Compatibility",
    content: [
      { type: "paragraph", text: "Many pendants connect to a chain through a bail. The bail is the component or opening through which the chain passes or attaches. Its design affects: how the pendant hangs, how freely it moves, whether it can be removed, and: which chains can fit." },
      { type: "table", headers: ["Question", "Why It Matters"], rows: [["Is there a bail?", "Establishes connection method"], ["Is the bail fixed or articulated?", "Changes pendant movement"], ["How large is the opening?", "Determines chain compatibility"], ["Will the chain itself fit?", "Chain width matters"], ["Will the clasp/end fitting fit through?", "Often wider than the chain"], ["Is the bail removable/opening?", "Affects interchangeability"], ["Does the bail form part of the decorative design?", "Changes finished pendant size"]] },
    ],
  },
  {
    heading: "Chain Compatibility Is More Than Matching Metal Colour",
    content: [
      { type: "paragraph", text: "A compatible chain needs to work physically as well as visually. Check: the chain width, the dimensions of the bail opening, the size of the chain's end fittings, the clasp, and: the pendant's overall mass. A very fine chain might physically fit through a bail while still looking or feeling too delicate for a larger pendant." },
    ],
  },
  {
    heading: "Bail Opening vs Chain Clasp",
    content: [
      { type: "paragraph", text: "This is one of the most overlooked pendant checks. Imagine a chain that is 1.5 mm wide. The pendant bail opening easily accommodates that thickness. But the chain's end tab or clasp is 3.5 mm wide. If the bail opening is smaller than the end fitting, the pendant still cannot be placed onto the chain unless the chain or pendant has another removable connection." },
      { type: "table", headers: ["Measurement", "Fictional Size"], rows: [["Chain width", "1.5 mm"], ["Bail opening", "2.5 mm"], ["Chain clasp/end fitting", "3.5 mm"]] },
      { type: "paragraph", text: "The chain itself fits. The clasp does not. The combination is therefore not automatically interchangeable." },
    ],
  },
  {
    heading: "Fixed Bail vs Articulated Bail",
    content: [
      { type: "table", headers: ["Bail Type", "Typical Behaviour"], rows: [["Fixed bail", "Pendant/bail relationship remains controlled"], ["Articulated bail", "More movement between chain and pendant"], ["Double bail", "Can create a different hanging structure"], ["Hidden/integrated bail", "Connection is less visually obvious"], ["Fixed chain connection", "Pendant may not be independently removable"]] },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/how-to-choose-lab-grown-diamond-pendant/71 (2).jpg", alt: "Pendant removable fixed dimensions carat weight solitaire halo setting", title: "Is the Pendant Removable?", caption: "Interchangeability should be treated as a product feature that needs confirmation, not an automatic characteristic of every pendant.", priority: false },
    ],
  },
  {
    heading: "Is the Pendant Removable?",
    content: [
      { type: "paragraph", text: "Do not assume it is. Some pendants slide freely along a chain and can potentially be removed. Others are permanently attached. Some have a bail large enough for the chain but not for the clasp. Others may require a jeweller to disconnect part of the chain before the pendant can be transferred. If changing chains matters to you, confirm removability before buying." },
      { type: "table", headers: ["Factor", "Removable Pendant", "Fixed Pendant"], rows: [["Can use another compatible chain?", "Potentially", "Usually not directly"], ["Can slide on existing chain?", "Often", "Usually fixed in position"], ["Chain can be replaced independently?", "More easily", "May require jewellery work"], ["Focal position", "Can move", "More controlled"], ["Main buying check", "Bail compatibility", "Integrated construction"]] },
    ],
  },
  {
    heading: "Pendant Dimensions Matter More Than an Enlarged Product Image",
    content: [
      { type: "paragraph", text: "Macro jewellery photography is useful for seeing setting details. It is poor at communicating actual scale. A small pendant can fill an entire screen. A much larger pendant can be photographed with an almost identical crop. Use finished dimensions. At minimum, pendant height and width should be clear where size materially affects the buying decision." },
      { type: "table", headers: ["Measurement", "What It Tells You"], rows: [["Pendant height", "Total top-to-bottom size"], ["Pendant width", "Visible horizontal scale"], ["Depth", "How far the setting projects where relevant"], ["Diamond dimensions", "Size of the focal diamond"], ["Bail dimensions", "Chain-connection compatibility"]] },
      { type: "paragraph", parts: [{ text: "For detailed dimensional terminology, use " }, { text: "How to Check Jewellery Dimensions and Weight Online", href: "/blog/check-jewellery-product-dimensions-weight/" }] },
    ],
  },
  {
    heading: "Carat Weight Does Not Tell You Pendant Size",
    content: [
      { type: "paragraph", text: "Carat measures diamond weight. It does not directly state: pendant width, pendant height, or: how much of the finished piece is diamond versus metal. Two 1 ct pendant designs can therefore look very different. One might use a single diamond in a minimal setting. Another might use several diamonds totalling 1 ct inside a larger decorative motif. Another could use a 0.75 ct centre with 0.25 ct of accents." },
      { type: "table", headers: ["Fictional Pendant", "Diamond Distribution", "Likely Effect"], rows: [["A", "One 1.00 ct focal diamond", "Diamond-led"], ["B", "0.75 ct centre + 0.25 ct halo", "Larger finished outline"], ["C", "Several diamonds totalling 1.00 ct", "Design-led motif"]] },
    ],
  },
  {
    heading: "Solitaire Pendant vs Halo Pendant vs Multi-Stone Pendant",
    content: [
      { type: "table", headers: ["Pendant Type", "Main Visual Focus", "Most Useful Scale Check"], rows: [["Solitaire", "One focal diamond", "Diamond dimensions + setting size"], ["Bezel solitaire", "Diamond framed by metal", "Finished bezel diameter"], ["Halo", "Centre + surrounding diamonds", "Complete halo dimensions"], ["Cluster", "Multiple diamonds as one motif", "Full motif width/height"], ["Geometric/motif", "Overall design", "Complete pendant dimensions"]] },
      { type: "paragraph", text: "The design structure should be chosen before deciding whether a particular carat figure is \"large enough\"." },
    ],
  },
  {
    heading: "Choose the Setting in the Context of the Pendant",
    content: [
      { type: "table", headers: ["Setting", "Visual Character", "Finished Scale Effect"], rows: [["Prong", "Open, diamond-forward", "Often closer to stone outline"], ["Bezel", "Framed, defined", "Adds visible border"], ["Halo", "Broader sparkle around centre", "Increases face-up outline"], ["Pavé motif", "Design-led sparkle", "Scale driven by entire motif"], ["Cluster", "Several stones create one form", "Can appear larger than individual stones"]] },
    ],
  },
  {
    heading: "Pendant Balance Matters",
    content: [
      { type: "paragraph", text: "A pendant should hang in the orientation intended by the design. If the pendant continually flips, rotates or sits at an unintended angle, construction and weight distribution may be contributing. Several variables can contribute: bail position, pendant depth, centre of gravity, chain movement, and: the relationship between the front and back of the setting. This should be evaluated from the complete jewellery construction rather than blamed automatically on chain length." },
    ],
  },
  {
    heading: "Look at the Back and Side Profile of the Pendant",
    content: [
      { type: "paragraph", text: "The reverse can reveal: how the diamond setting is built, whether the pendant has an open or closed back, where the bail connects, whether the design has a clear front and back, and: how much the setting projects. Side views are especially useful for checking: setting depth, bail orientation, how the pendant sits against the body, and: whether the focal diamond projects substantially. A front view may make two pendants appear similar even when one has a much deeper construction." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/how-to-choose-lab-grown-diamond-pendant/71 (3).jpg", alt: "Chain compatibility pendant chain style metal same different length proportion", title: "Chain Thickness Should Suit the Pendant", caption: "Use pendant mass, bail size, chain construction and visual proportion together — there is no universal formula.", priority: false },
    ],
  },
  {
    heading: "Chain Thickness Should Suit the Pendant",
    content: [
      { type: "paragraph", text: "If you are selecting your own chain, consider visual and structural proportion. A very fine chain may create a floating-diamond effect with a small pendant. The same chain may look disproportionately delicate with a large metal-heavy pendant. Conversely, a very thick chain can visually overpower a small pendant. There is no universal formula that links pendant carat weight to one chain thickness. Use: pendant mass, bail size, chain construction, and: visual proportion together." },
    ],
  },
  {
    heading: "Check Pendant Metal Independently From the Diamond",
    content: [
      { type: "paragraph", text: "The diamond's origin tells you nothing about the precious metal holding it. Verify: metal type, fineness, and any applicable plating or surface treatment. A laboratory diamond report does not automatically verify the metal. For the complete process, use How to Check the Metal Used in Diamond Jewellery. Where UK hallmarking requirements apply to a precious-metal article, hallmarking concerns the metal. It does not grade or authenticate the diamond's quality." },
      { type: "paragraph", parts: [{ text: "For the complete process, use " }, { text: "How to Check the Metal Used in Diamond Jewellery", href: "/blog/check-metal-used-diamond-jewellery/" }] },
    ],
  },
  {
    heading: "The Diamond Report May Cover Only One Stone",
    content: [
      { type: "paragraph", text: "A solitaire pendant may contain one significant diamond with an individual laboratory report. A halo or multi-stone pendant can contain many diamonds. Do not assume a document for the centre diamond covers the surrounding accent stones. Likewise, a diamond report does not grade: the pendant setting, the bail, the chain, or: the finished workmanship. Documentation scope should always be explicit." },
    ],
  },
  {
    heading: "Pendant Only vs Complete Necklace: Final Comparison",
    content: [
      { type: "table", headers: ["Question", "Pendant Only", "Pendant With Chain"], rows: [["Chain supplied?", "No", "Yes"], ["Need separate chain?", "Yes", "No"], ["Bail compatibility critical before purchase?", "Very high", "Still useful if changing chains"], ["Chain length predetermined?", "No", "Usually yes"], ["Can choose own chain style?", "Yes, if compatible", "Possibly later if removable"], ["Complete wearable piece immediately?", "No", "Yes"]] },
    ],
  },
  {
    heading: "Buying a Pendant as a Gift",
    content: [
      { type: "paragraph", text: "A pendant can be easier to gift than a ring because no finger size is required. But chain inclusion can create an unexpected problem. If the pendant is sold alone, the recipient either needs an existing compatible chain or the giver needs to provide one separately. If you want the gift to be immediately wearable, confirm whether a chain is included. Do not assume special gift packaging, gift receipts or extended exchange terms unless Aurelia has confirmed them." },
    ],
  },
  {
    heading: "What if Aurelia Does Not Publish a Price?",
    content: [
      { type: "paragraph", text: "Do not estimate it. Where an Aurelia pendant does not have an approved direct-purchase price, use: Join Waitlist or: Enquire About This Piece. The waitlist should register interest only. It should not automatically mean: the pendant has been purchased, a chain has been selected, a specific piece has been reserved, a price has been accepted, or: production has begun." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/how-to-choose-lab-grown-diamond-pendant/71 (4).jpg", alt: "Diamond pendant FAQ final answer guide bail chain removability dimensions metal", title: "Frequently Asked Questions", caption: "The biggest mistake: assuming that the chain shown in the product image is included or that the pendant will automatically fit another chain.", priority: false },
    ],
  },
  {
    heading: "Frequently Asked Questions",
    content: [
      { type: "faq", items: [
        { question: "How do I choose a lab-grown diamond pendant?", answer: "Start by checking whether it is pendant-only or includes a chain, then review the bail, chain compatibility, removability, finished dimensions, diamond distribution, setting and metal." },
        { question: "What is a diamond pendant?", answer: "A pendant is the decorative element designed to hang from or connect to a necklace chain." },
        { question: "Is a pendant the same as a necklace?", answer: "No. A pendant is a component; a necklace is the complete neck-worn piece." },
        { question: "Does a diamond pendant always come with a chain?", answer: "No. Chain inclusion must be confirmed." },
        { question: "Can I buy a diamond pendant without a chain?", answer: "Yes, where the product is explicitly offered as pendant-only." },
        { question: "Why would I buy the pendant separately?", answer: "You may already own a compatible chain or want to choose your own chain length or style." },
        { question: "What is a pendant bail?", answer: "It is the part through or by which many pendants connect to a chain." },
        { question: "Why does bail size matter?", answer: "It can determine whether the intended chain and its end fittings can pass through." },
        { question: "If the chain fits through the bail, is it compatible?", answer: "Not necessarily. The clasp or end fitting may be larger than the chain itself." },
        { question: "Can every pendant be moved to another chain?", answer: "No." },
        { question: "How do I know if a pendant is removable?", answer: "Check the actual connection and product specification." },
        { question: "What is a fixed-centre necklace?", answer: "It is a necklace where the focal decorative element is connected directly between sections of chain rather than freely sliding along it." },
        { question: "Is a removable pendant better?", answer: "Not automatically. It offers greater chain flexibility, while a fixed design can provide more controlled positioning." },
        { question: "Does chain thickness matter?", answer: "Yes. It affects both physical compatibility and visual proportion." },
        { question: "Should the chain and pendant be the same metal?", answer: "Not necessarily, but if you want a matching look, verify both materials rather than judging by colour." },
        { question: "Is carat weight the same as pendant size?", answer: "No. Carat measures diamond weight." },
        { question: "Can two 1 ct pendants look different?", answer: "Yes. Setting, halo, motif and finished dimensions can make them appear very different." },
        { question: "What is the difference between centre carat and TCW?", answer: "Centre carat refers to one focal diamond. TCW can include the centre diamond plus any accent diamonds." },
        { question: "Should I check pendant dimensions?", answer: "Yes. Finished height and width are important for judging real scale." },
        { question: "Should I check the back of the pendant?", answer: "Yes. It can reveal setting construction, bail connection and reverse finish." },
        { question: "Why does my pendant flip?", answer: "Pendant balance, depth, bail placement and chain movement can all contribute." },
        { question: "Does a diamond report cover the whole pendant?", answer: "No. A report for one diamond does not automatically verify the metal, bail, chain or accent stones." },
        { question: "Does a hallmark verify the diamond?", answer: "No. A hallmark relates to precious-metal fineness." },
        { question: "Can I use my existing chain?", answer: "Potentially, but confirm bail opening, clasp dimensions and structural/visual suitability." },
        { question: "What is the biggest mistake when buying a pendant online?", answer: "Assuming that the chain shown in the product image is included or that the pendant will automatically fit another chain." },
      ]},
    ],
  },
  {
    heading: "Final Answer: How Should You Choose a Lab-Grown Diamond Pendant?",
    content: [
      { type: "paragraph", text: "Start by establishing exactly what the product includes. Is it: pendant only, or: pendant with chain? Then inspect the bail. If you plan to use another chain, the pendant needs to accommodate not only the chain width but also whichever clasp or end fitting must pass through the opening. Next, confirm removability. A pendant can look interchangeable while actually being fixed to the supplied chain." },
      { type: "paragraph", text: "Then check the finished pendant dimensions. Do not use diamond carat weight as a substitute for physical height and width. After that, understand the diamond distribution. Separate centre-stone weight from total carat weight where the pendant includes accent diamonds. Then review the setting and metal. Finally, confirm the documentation scope, imagery and availability." },
      { type: "paragraph", text: "The strongest pendant is not automatically the design with: the largest diamond, the highest grade, or: the most elaborate chain. It is the pendant whose: bail + chain compatibility + removability + physical scale + construction match how you actually intend to wear it." },
      { type: "paragraph", parts: [{ text: "For overall necklace selection, use " }, { text: "How to Choose a Lab-Grown Diamond Necklace", href: "/blog/how-to-choose-lab-grown-diamond-necklace/" }] },
      { type: "paragraph", parts: [{ text: "For pendant-versus-necklace terminology and chain inclusion, use " }, { text: "Diamond Necklace vs Diamond Pendant: What Is the Difference?", href: "/blog/diamond-necklace-vs-diamond-pendant/" }] },
      { type: "paragraph", parts: [{ text: "For physical measurements, use " }, { text: "How to Check Jewellery Dimensions and Weight Online", href: "/blog/check-jewellery-product-dimensions-weight/" }] },
      { type: "paragraph", parts: [{ text: "For metal verification, use " }, { text: "How to Check the Metal Used in Diamond Jewellery", href: "/blog/check-metal-used-diamond-jewellery/" }] },
      { type: "paragraph", parts: [{ text: "For the final product specification check, use " }, { text: "What to Check Before Buying Lab-Grown Diamond Jewellery", href: "/blog/what-to-check-before-buying-lab-grown-diamond-jewellery/" }] },
      { type: "paragraph", parts: [{ text: "Where an Aurelia Royale pendant does not yet have an approved direct-purchase price, " }, { text: "Join the Waitlist", href: "/contact/" }, { text: " or submit an enquiry. This should register interest only and should not be presented as an order, reservation or preorder." }] },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Pendants", subtitle: "Bail + chain compatibility + removability + physical scale — find the pendant that suits you.", shopHref: "/shop/", contactHref: "/contact/" },
    ],
  },
];

export default function BlogPendantBuyingGuidePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Education</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">How to Choose a Lab-Grown Diamond Pendant</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">Bail, Chain Compatibility, Removability, Dimensions and Diamond Weight Explained • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="how-to-choose-lab-grown-diamond-pendant" />
      <NewsletterSection />
    </main>
  );
}

