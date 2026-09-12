import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";

import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";

export const metadata: Metadata = {
  title: "How to Measure Ring Size: UK, EU & US Chart",
  description: "Measure your ring size accurately using an existing ring or your finger, then convert UK, EU and US sizes with diameter and circumference measurements.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/how-to-measure-ring-size/" },
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "image", src: "/images/blog/how-to-measure-ring-size/73 (1).jpg", alt: "How to measure ring size UK EU US conversion chart diameter circumference", title: "How to Measure Your Ring Size Accurately", caption: "The most useful process: measure → verify → account for ring width → convert → then assess real-world fit.", priority: true },
      { type: "paragraph", text: "The most reliable way to choose a ring size is to measure the exact finger on which the ring will be worn and then interpret that measurement in the sizing system used by the retailer. Ring sizing becomes confusing because different markets describe essentially the same physical ring using different labels. The UK commonly uses letters, the US uses numbers and half or quarter sizes, while European sizing commonly follows the ring's internal circumference in millimetres." },
      { type: "paragraph", text: "The underlying physical measurements are therefore more useful than the label alone. A ring has an inside diameter and an inside circumference. Those physical measurements can then be translated into UK, EU or US sizing. For the most accurate result, professional finger-sizing gauges remain preferable. If you are measuring at home, an existing ring that already fits the intended finger well is usually a stronger reference than loosely wrapping string around the finger. The most useful process is: measure → verify → account for ring width → convert → then assess real-world fit." },
    ],
  },
  {
    heading: "Quick Answer: How Do You Measure Ring Size?",
    content: [
      { type: "paragraph", text: "If you already own a ring that fits the correct finger, measure its inside diameter in millimetres, from one inner edge directly across to the opposite inner edge. Do not include the metal itself. Then compare the measurement with the conversion table in this guide." },
      { type: "paragraph", text: "If you do not have an existing ring, use a proper ring-sizing gauge or flexible measuring tool to estimate the circumference of the finger where the ring will sit. Measure more than once and under normal conditions. Do not choose the final size while your hands are unusually cold, very warm or temporarily swollen. Also consider band width. A broad ring can feel tighter than a narrow ring with the same nominal size, so the final size should reflect the construction of the actual ring being purchased." },
    ],
  },
  {
    heading: "The Most Accurate Ways to Measure Ring Size",
    content: [
      { type: "table", headers: ["Method", "Reliability", "Best Used When", "Main Limitation"], rows: [["Professional metal ring sizer", "Highest", "Buying an important ring", "Requires access to a jeweller"], ["Existing well-fitting ring", "High", "You already own a correct-fit ring", "Must fit same finger properly"], ["Plastic ring sizer", "Good", "Measuring at home", "Tool quality and technique vary"], ["Flexible measuring tape", "Moderate", "No ring or sizer available", "Can be pulled too tightly"], ["Paper/string method", "Lower", "Rough estimate only", "Can stretch, bend or compress"]] },
      { type: "paragraph", text: "If you are ordering a ring that may be difficult to resize, professional measurement is worth prioritising." },
    ],
  },
  {
    heading: "Method 1: Measure an Existing Ring",
    content: [
      { type: "paragraph", text: "This is one of the easiest home methods when you already own a ring that fits well. Choose a ring that is worn comfortably on the same finger for which the new ring is intended. Place it on a flat surface. Measure the inside diameter across the centre of the ring from one inside edge to the other. Do not measure the outside diameter. Do not include the thickness of the metal." },
      { type: "paragraph", text: "For example, if the internal diameter measures approximately 17.3 mm, the ring sits around the region of a US size 7 in commonly used conversion charts. The UK and EU equivalents then depend on the conversion system being used." },
    ],
  },
  {
    heading: "How to Measure the Inside Diameter Correctly",
    content: [
      { type: "paragraph", text: "The measurement needs to pass directly through the centre of the ring. If you measure slightly above or below the centre, the result can be smaller than the true diameter. Also check that the ring is reasonably round. If the shank has become oval, distorted or intentionally non-circular, one horizontal measurement may not represent its effective size accurately. In that case, professional measurement using a ring mandrel is much safer." },
      { type: "paragraph", text: "Do Not Measure the Outside Diameter. The ring-size chart refers to the space available for the finger, not the total width of the metal ring. Using the outside measurement would lead to a substantially incorrect ring size. Always measure: inside edge → inside edge. The Existing Ring Must Fit the Correct Finger. A ring that fits your index finger cannot automatically be used to determine the correct size for your ring finger. Measure for the actual finger on which the new ring will be worn." },
    ],
  },
  {
    heading: "Method 2: Measure the Finger Directly",
    content: [
      { type: "paragraph", text: "If you do not own a suitable ring, measure the finger itself. A proper finger-sizing gauge is preferable. If one is unavailable, a flexible measuring tape can provide an estimate of finger circumference. Wrap it around the part of the finger where the ring will normally sit. It should be comfortably snug rather than pulled tightly into the skin. Record the circumference in millimetres. Then compare that measurement with the chart." },
      { type: "paragraph", text: "Ring-size differences are small. Using millimetres avoids unnecessary conversion and gives a more useful level of precision. A difference of only a fraction of a millimetre in internal diameter can correspond to a meaningful change in ring fit. If your measurement is in centimetres, convert it to millimetres before comparing it with the chart." },
    ],
  },
  {
    heading: "Why String and Paper Can Be Inaccurate",
    content: [
      { type: "paragraph", text: "String can stretch. Paper can crease. Both can be pulled more tightly around the finger than a metal ring would naturally fit. Even a difference of a millimetre in the measured circumference can affect the resulting size recommendation. If you use string or paper because no better method is available, repeat the measurement several times and treat the result as an estimate rather than an exact size. For an important ring, verify the result using a ring sizer before committing to the final size." },
    ],
  },
  {
    heading: "Measure the Knuckle as Well",
    content: [
      { type: "paragraph", text: "Some people have knuckles that are noticeably wider than the part of the finger where the ring rests. That creates a sizing compromise. The ring must be large enough to pass over the knuckle while still being secure once it reaches the base of the finger. If the difference is substantial, measuring only the finger base can produce a ring that technically matches the circumference but cannot comfortably pass the joint. Measure both areas. The final size needs to work with both." },
      { type: "paragraph", text: "This is one of the situations where a numerical chart cannot solve the entire problem. Professional fitting is especially useful in this situation. After choosing the numerical size, use How Should a Diamond Ring Fit? to understand whether the finished ring is behaving correctly." },
    ],
  },
  {
    heading: "Finger Size Changes During the Day",
    content: [
      { type: "paragraph", text: "Your finger is not a fixed measurement. Temperature, humidity, activity and other ordinary conditions can affect finger circumference. Cold hands can make fingers temporarily smaller. Heat can make them feel fuller. That means one measurement taken under unusual conditions may not represent your normal ring size. Measure under comfortable everyday conditions rather than immediately after exposing your hands to significant heat or cold. Take measurements on more than one occasion if possible." },
    ],
  },
  {
    heading: "Ring Size Conversion Chart: UK, EU and US",
    content: [
      { type: "paragraph", text: "The table below provides a practical reference between European numeric sizing, UK letter sizing and US numeric sizing, alongside the physical inner diameter and circumference. Because there is no single worldwide conversion table used identically by every manufacturer, international equivalents can differ slightly between jewellers. For that reason, inside diameter and circumference should be treated as the physical anchor, while the UK, EU and US labels are conversion references." },
      { type: "table", headers: ["EU Size", "UK Size", "US Size", "Inside Diameter", "Inside Circumference"], rows: [["44", "F ½", "3", "14.0 mm", "44 mm"], ["45", "G", "3 ¼", "14.3 mm", "45 mm"], ["46", "H", "3 ¾", "14.6 mm", "46 mm"], ["47", "H ½", "4", "15.0 mm", "47 mm"], ["48", "I ½", "4 ½", "15.3 mm", "48 mm"], ["49", "J ½", "4 ¾", "15.6 mm", "49 mm"], ["50", "K", "5 ¼", "15.9 mm", "50 mm"], ["51", "L", "5 ¾", "16.2 mm", "51 mm"], ["52", "L ½", "6", "16.6 mm", "52 mm"], ["53", "M ½", "6 ¼", "16.9 mm", "53 mm"], ["54", "N ½", "6 ¾", "17.2 mm", "54 mm"], ["55", "O", "7 ¼", "17.5 mm", "55 mm"], ["56", "P", "7 ½", "17.8 mm", "56 mm"], ["57", "P ½", "8", "18.1 mm", "57 mm"], ["58", "Q ½", "8 ¼", "18.5 mm", "58 mm"], ["59", "R", "8 ¾", "18.8 mm", "59 mm"], ["60", "S", "9", "19.1 mm", "60 mm"], ["61", "S ½", "9 ½", "19.4 mm", "61 mm"], ["62", "T ½", "10", "19.7 mm", "62 mm"], ["63", "U ½", "10 ¼", "20.1 mm", "63 mm"], ["64", "V", "10 ¾", "20.4 mm", "64 mm"], ["65", "W", "11", "20.7 mm", "65 mm"], ["66", "W ½", "11 ½", "21.0 mm", "66 mm"], ["67", "X ½", "11 ¾", "21.3 mm", "67 mm"], ["68", "Z", "12 ¼", "21.6 mm", "68 mm"], ["69", "Z ½", "12 ½", "22.0 mm", "69 mm"]] },
      { type: "paragraph", text: "Important: use this as a conversion reference rather than assuming every jeweller will map UK and US labels identically. If the retailer publishes its own size chart, use the retailer's physical dimensions first." },
    ],
  },
  {
    heading: "Why EU Ring Size Is Easier to Understand Physically",
    content: [
      { type: "paragraph", text: "European numerical ring sizing is particularly intuitive because the number commonly corresponds closely to the ring's internal circumference in millimetres. An EU 54 ring therefore corresponds to approximately a 54 mm internal circumference. That does not mean every international retailer will use precisely identical manufacturing tolerances. But it makes the physical logic of the sizing system easier to understand than letter-based UK sizes." },
    ],
  },
  {
    heading: "UK and US Ring Sizes",
    content: [
      { type: "paragraph", text: "UK ring sizes commonly use letters. The system can also include half sizes. A UK size N and UK size N ½ are therefore different physical ring sizes. Do not convert a UK letter to another country's system using memory alone. Use the physical diameter or circumference where possible. The US system uses numbers. Half sizes are common, and some sizing systems also use quarter increments. For example, a US 7 and US 7.5 are different sizes. The US number itself does not directly state a physical measurement, so use a conversion table to connect it to diameter or circumference." },
    ],
  },
  {
    heading: "Why Different Ring-Size Charts Sometimes Disagree",
    content: [
      { type: "paragraph", text: "You may notice that one jeweller's chart maps a particular UK letter to one US size while another chart differs by a quarter or half step. That does not necessarily mean one chart is defective. International systems do not align perfectly at every point, and retailers can use slightly different manufacturing increments and rounding conventions. This is why the most reliable cross-check is: inside diameter + inside circumference + retailer-specific chart. Do not treat international labels as more precise than the underlying physical measurement." },
    ],
  },
  {
    heading: "Band Width Can Change the Size You Need",
    content: [
      { type: "paragraph", text: "This is one of the most important qualifications in the article. A wider band normally contacts more of the finger. That can make it feel tighter than a narrow ring in the same nominal size. Professional sizing guidance distinguishes between narrow and wide rings for exactly this reason. Rings up to roughly 4 mm wide can generally be evaluated using narrow sizing gauges. When the ring becomes wider than roughly 4 mm, wide-band sizing needs additional consideration. That does not mean every ring over 4 mm automatically requires the same fixed size increase." },
      { type: "table", headers: ["Factor", "Narrow Ring", "Wide Ring"], rows: [["Finger contact", "Lower", "Higher"], ["Same nominal size may feel", "Less restrictive", "More snug"], ["Sizing gauge", "Narrow gauge", "Wide-band gauge preferred"], ["Automatic size-up rule", "No", "No"], ["Professional assessment useful", "Yes", "Especially"]] },
      { type: "paragraph", text: "Do not publish a rule such as \"add half a size to every wide ring\". That oversimplifies the fitting process." },
    ],
  },
  {
    heading: "Engagement Ring + Wedding Band Width Matters Too",
    content: [
      { type: "paragraph", text: "A narrow engagement ring may fit comfortably alone. A wedding band beside it increases the total width of metal around the finger. Together, they can feel tighter. Professional sizing guidance specifically treats combined bridal sets wider than approximately 4–5 mm as requiring additional fit consideration. If the rings will usually be worn together, it can be useful to test the combination rather than sizing each piece only in isolation." },
    ],
  },
  {
    heading: "What if Your Measurement Falls Between Two Sizes?",
    content: [
      { type: "paragraph", text: "Do not automatically use one universal rule such as \"always choose the larger size\". Band width, finger shape and ring construction all affect the final fit. For a narrow conventional ring, the answer may differ from a broad band or multi-ring stack. If your physical measurement sits between available sizes, compare it with the retailer's actual size chart and consider the construction of the ring. For a high-value or difficult-to-resize ring, professional sizing is the safer answer." },
    ],
  },
  {
    heading: "Example: Converting an Existing Ring Measurement",
    content: [
      { type: "paragraph", text: "Imagine an existing ring has an internal diameter of approximately 17.5 mm. Its internal circumference is close to 55 mm. Using the reference table, that places the ring around: EU 55, UK O, US 7 ¼ in the conversion system used by this chart. The next step is not automatically to order that size. First check whether the new ring has a similar band width and interior construction. Then verify that the reference ring genuinely fits the intended finger." },
    ],
  },
  {
    heading: "Example: Converting Finger Circumference",
    content: [
      { type: "paragraph", text: "Imagine you measure your finger several times and consistently obtain approximately 60 mm circumference. The reference chart places that close to: EU 60, UK S, US 9. If the ring being purchased is a broad band, do not automatically order that nominal size without considering the extra width. Use the figure as the starting measurement." },
    ],
  },
  {
    heading: "How Should the Ring Fit After You Choose the Size?",
    content: [
      { type: "paragraph", text: "This article should stop at size determination. The real-world fit assessment belongs to How Should a Diamond Ring Fit? In practical terms, the finished ring should normally pass over the knuckle with some resistance, sit comfortably at the finger base and remain reasonably stable during ordinary movement. A numerical size can be technically correct while the ring still spins because of finger anatomy or top-heavy construction. Likewise, a size can appear correct on a chart but feel restrictive because the ring is unusually wide. Measurement and fit therefore work together." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/how-to-measure-ring-size/73 (2).jpg", alt: "Ring size measurement checklist UK EU US conversion inside diameter circumference", title: "Ring-Size Measurement Checklist", caption: "The objective is not to produce a number as quickly as possible — it is to produce a number you can trust.", priority: false },
    ],
  },
  {
    heading: "Ring-Size Measurement Checklist",
    content: [
      { type: "table", headers: ["Check", "Why It Matters"], rows: [["Measure the exact intended finger", "Different fingers vary"], ["Measure the correct hand", "Left/right may differ"], ["Use millimetres", "Better precision"], ["Measure more than once", "Reduces one-off error"], ["Avoid very cold hands", "Fingers may measure smaller"], ["Avoid temporary swelling", "Can inflate measurement"], ["Check the knuckle", "Ring must pass it comfortably"], ["Consider band width", "Wider rings can feel tighter"], ["Use similar reference-ring width", "Improves comparison"], ["Confirm retailer's own chart", "International mappings vary"]] },
    ],
  },
  {
    heading: "Measuring Ring Size for Special Situations",
    content: [
      { type: "paragraph", text: "For an engagement ring, measure the exact finger and hand on which the engagement ring will be worn. If the ring has a conventional narrow shank, a standard sizing gauge provides a good starting point. If the ring has a wide shank, unusual inner profile or will nearly always be paired with a broad wedding band, those factors should be considered." },
      { type: "paragraph", text: "For an eternity ring, correct initial sizing is particularly important for rings with diamonds extending around most or all of the circumference. Full-eternity designs can be more difficult to resize because there may be little or no plain metal section available for conventional alteration. Do not deliberately choose a questionable size on the assumption that resizing will always be possible later." },
      { type: "paragraph", text: "For a surprise gift, use a ring they already wear on the correct finger if possible. Measure its inside diameter or have a jeweller measure it on a ring mandrel. Make sure you know which finger and hand the ring normally fits. A ring worn on the middle finger is not a reliable substitute for the ring finger." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/how-to-measure-ring-size/73 (3).jpg", alt: "Ring size conversion chart UK EU US existing ring measurement finger circumference", title: "Inner Diameter vs Inner Circumference", caption: "If you have an existing ring, diameter is usually easier to measure accurately at home. If you are measuring the finger itself, circumference is the more natural measurement.", priority: false },
    ],
  },
  {
    heading: "Inner Diameter vs Inner Circumference",
    content: [
      { type: "paragraph", text: "These are two ways of describing the same internal circle. Inside diameter measures directly across the centre. Inside circumference measures all the way around the internal surface. If you have an existing ring, diameter is usually easier to measure accurately at home. If you are measuring the finger itself, circumference is the more natural measurement. Both can lead to the same ring-size range when measured correctly." },
    ],
  },
  {
    heading: "Why Small Measurement Errors Matter",
    content: [
      { type: "paragraph", text: "Ring sizes are physically close together. A difference of around 0.2–0.4 mm in internal diameter can shift the recommended size. That means measuring with a thick ruler, reading the wrong edge or rounding too early can create an avoidable error. Where possible, record your raw measurement before converting it to a ring-size label. Do not convert 5.45 cm straight to \"about 5.5 cm\" and then select a ring. That rounding can change the size recommendation." },
    ],
  },
  {
    content: [
      { type: "image", src: "/images/blog/how-to-measure-ring-size/73 (4).jpg", alt: "Ring size FAQ final answer guide UK EU US conversion diameter circumference band width", title: "Frequently Asked Questions", caption: "Measurement and fit work together — this page determines the numerical size, How Should a Diamond Ring Fit? checks whether the ring behaves correctly once worn.", priority: false },
    ],
  },
  {
    heading: "Frequently Asked Questions",
    content: [
      { type: "faq", items: [
        { question: "How do I measure my ring size accurately?", answer: "The most accurate approach is a professional finger-sizing gauge. At home, measure the inside diameter of an existing ring that already fits the correct finger well, then compare that measurement with a conversion chart." },
        { question: "How do I measure ring size from an existing ring?", answer: "Measure directly across the centre from one inside edge to the opposite inside edge. Use the internal diameter, not the outside measurement." },
        { question: "How do I measure ring size in millimetres?", answer: "Measure either the ring's internal diameter in millimetres or the finger's circumference in millimetres, then compare that measurement with a ring-size chart." },
        { question: "Is EU ring size the same as finger circumference?", answer: "European numerical sizing commonly corresponds closely to the internal circumference in millimetres, although you should still check the retailer's own chart." },
        { question: "Are UK and US ring-size conversions exact?", answer: "Not always. Conversion charts can differ slightly between manufacturers, so use physical diameter and circumference as the anchor." },
        { question: "Should I measure my knuckle?", answer: "Yes, especially if the knuckle is wider than the finger base. The ring needs to pass the joint without becoming excessively loose once in position." },
        { question: "Should I measure my ring size when my hands are cold?", answer: "No. Cold fingers may temporarily measure smaller than they do under normal conditions." },
        { question: "Does ring width affect size?", answer: "Yes. Wider bands generally feel more snug because more metal contacts the finger. Rings wider than approximately 4 mm deserve additional sizing consideration." },
        { question: "Should I automatically size up for a wide band?", answer: "No. There is no universal size increase that applies to every wide ring and every finger." },
        { question: "Can I measure ring size with string?", answer: "You can obtain a rough estimate, but string can stretch or be pulled too tightly. A physical ring sizer or existing well-fitting ring is more reliable." },
        { question: "What if I fall between two ring sizes?", answer: "Check the actual ring width, interior construction and retailer's sizing chart rather than automatically rounding up or down." },
        { question: "Is measuring ring size the same as checking ring fit?", answer: "No. This page determines the numerical size. How Should a Diamond Ring Fit? explains whether the finished ring is actually secure and comfortable once worn." },
      ]},
    ],
  },
  {
    heading: "Final Answer: How Do You Measure Ring Size Accurately?",
    content: [
      { type: "paragraph", text: "For the highest accuracy, use a professional ring-sizing gauge. If you are measuring at home and already own a properly fitting ring, measure its inside diameter in millimetres and compare the measurement with the UK / EU / US conversion chart. If you are measuring the finger itself, measure the circumference at the position where the ring will sit, while also accounting for the knuckle. Take more than one measurement. Measure under normal temperature conditions. Use millimetres rather than rough centimetre estimates." },
      { type: "paragraph", text: "Then consider the actual ring. A wide band can feel tighter than a narrow ring with the same nominal size, and several rings worn together can effectively behave like a wider band. Use the conversion chart to identify the correct numerical region, but use the retailer's product-specific sizing information before finalising the order." },
      { type: "paragraph", parts: [{ text: "Once you have chosen the size, continue with " }, { text: "How Should a Diamond Ring Fit?", href: "/blog/how-should-diamond-ring-fit/" }, { text: " to assess real-world comfort, knuckle resistance, spinning and pressure." }] },
      { type: "paragraph", parts: [{ text: "For the complete ring-buying journey, continue with " }, { text: "How to Choose a Lab-Grown Diamond Ring", href: "/blog/how-to-choose-lab-grown-diamond-ring/" }] },
      { type: "paragraph", text: "Where an Aurelia Royale ring does not yet have a confirmed size and purchase route, use Join the Waitlist or Enquire About This Piece. Providing a preferred ring size during an enquiry should not itself be presented as an order, reservation or production instruction." },
      { type: "cta-banner", title: "Explore Aurelia Royale Lab-Grown Diamond Rings", subtitle: "Measure accurately — then find the ring whose size, fit and design work together.", shopHref: "/shop/", contactHref: "/contact/" },
    ],
  },
];

export default function BlogRingSizePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">Lab-Grown Diamond Education</span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">How to Measure Your Ring Size Accurately</h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">UK, EU and US Conversion Chart with Diameter and Circumference • Published September 10, 2026</p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
      <RelatedArticles currentSlug="how-to-measure-ring-size" />
      <NewsletterSection />
    </main>
  );
}

