

| Priority | Confirmed SEO mistake | Why it matters |
| ----- | ----- | ----- |
| Critical | The [non-www domain](https://aureliaroyale.com/) returned a **502 Bad Gateway**, while the www domain works | Google has already surfaced the non-www version. Authority and visitors may be sent to a broken hostname. |
| Critical | [robots.txt](https://www.aureliaroyale.com/robots.txt) returns a 404 | There is no proper crawler guidance or sitemap location. |
| Critical | [sitemap.xml](https://www.aureliaroyale.com/sitemap.xml) returns a 404 | Google has no reliable list of the 57 products, categories and business pages. |
| Critical | Shop pagination uses JavaScript buttons instead of crawlable links | Google does not normally click pagination buttons. Products after the first eight can therefore remain undiscovered. [Google confirms pagination should use crawlable `<a href>` links.](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading) |
| High | Every inspected page uses the same title: “Aurelia Royale \- Luxury Jewelry Store” | Homepage, Shop, category, product, About and Contact pages compete with identical titles. |
| High | Every inspected page uses the same 219-character meta description | It is generic, overlong and unrelated to the specific product/category. Google recommends unique page-specific descriptions. [Google guidance.](https://developers.google.com/search/docs/appearance/snippet) |
| High | No canonical tags anywhere | Category parameters, pagination, hostname variants and potential URL duplicates have no preferred canonical version. [Canonical guidance.](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) |
| High | No structured data was found | There is no `Product`, `Offer`, `BreadcrumbList`, `Organization` or `WebSite` schema. Products are therefore not properly eligible for product-rich results. [Product structured-data requirements.](https://developers.google.com/search/docs/appearance/structured-data/product) |
| High | Product H1 is “Product Details” | The actual product name is an H2. The product name should be the primary H1. |
| High | Product pages have no visible price, currency or clear availability | The sample product says “Coming Soon” but still shows Add to Cart. Google and customers cannot understand the offer. |
| High | Rating displays “3.5 out of 5” alongside “0 Reviews” | This is contradictory and damages trust. It must not be placed in review schema unless supported by genuine reviews. |
| High | Categories are query parameters such as `shop/?category=Earring` | They have the same title, description and “SHOP” H1. Proper pages such as `/earrings/`, `/necklaces/` and `/bracelets/` are needed. |
| Medium | Product URLs are opaque | URLs like `/shop-details/jewel-19-b8a4a1/` should become descriptive slugs containing the product name. |
| Medium | Homepage H1 is “WORN WITH INTENTION.” | Beautiful branding, but it does not tell Google that the business sells lab-grown diamond jewellery. |
| Medium | Contact page has no visible address, phone or email | The page only contains a generic Dubai map, weakening business-entity and local SEO signals. |
| Medium | The map is titled “Dalila Location Map” | This is the wrong brand name and creates an entity-consistency problem on the [Contact page](https://www.aureliaroyale.com/contact/). |
| Medium | Brand name changes to “Aurelia Royal” on the About page | The correct name appears to be “Aurelia Royale.” It must be identical everywhere. |
| Medium | No shipping, returns, warranty, privacy or terms links appear in the footer | These are important ecommerce trust and Merchant Center signals. |
| Medium | No Open Graph or Twitter metadata | Product links shared on WhatsApp, Facebook and other platforms may generate weak previews. |
| Medium | 12 of 14 homepage images lack explicit width and height | This creates a potential layout-shift/Core Web Vitals risk. The homepage also loads 27 scripts, so performance needs a proper Lighthouse check. |
| Low | `meta keywords` is being used | Google ignores this tag. |
| Low | Page author is set to `yudee.dev` | The developer should not be presented as the author of the jewellery business website. |

