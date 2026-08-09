import os
import re

base_dir = "C:/Users/shinj/aurelia-royale-web/src/app/blog"

fixed_count = 0

for entry in sorted(os.listdir(base_dir)):
    dir_path = os.path.join(base_dir, entry)
    if os.path.isdir(dir_path):
        page_file = os.path.join(dir_path, "page.tsx")
        if os.path.exists(page_file):
            with open(page_file, "r", encoding="utf-8") as f:
                content = f.read()

            new_content = content
            if 'import { getBlogDataEs }' not in new_content:
                new_content = 'import { getBlogDataEs } from "@/utils/getBlogDataEs";\n' + new_content

            # Update BlogPage component body to integrate getBlogDataEs
            fn_match = re.search(r'export default async function\s+([A-Za-z0-9_]+)', new_content)
            fn_name = fn_match.group(1) if fn_match else "BlogPage"

            pattern = rf'export default async function {fn_name}\(\{{\s*searchParams\s*\}}:[^\)]*\)\s*\{{[\s\S]*?\n\}}'
            
            replacement = f'''export default async function {fn_name}({{ searchParams }}: {{ searchParams: Promise<{{ locale?: string }}> }}) {{
  const resolvedSearchParams = await searchParams;
  const locale = resolvedSearchParams.locale ?? "en";
  const esData = locale === "es" ? getBlogDataEs("{entry}") : null;
  const sections = esData?.sections && esData.sections.length > 0 ? esData.sections : (locale === "es" && typeof articleSectionsEs !== "undefined" ? articleSectionsEs : articleSectionsEn);
  const schema = locale === "es" && typeof schemaMarkupEs !== "undefined" ? schemaMarkupEs : schemaMarkupEn;
  const meta = locale === "es" && typeof metadataEs !== "undefined" ? metadataEs : metadataEn;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
      {{/* Script injection for SEO */}}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: JSON.stringify(schema) }}}}
      />

      {{/* Hero Header */}}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {{locale === "es" ? (esData?.category ?? "Guías de joyería") : "Journal"}}
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            {{esData?.title ?? meta.title ?? metadataEn.title}}
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            {{locale === "es" ? "Diario • Publicado el 2026-07-16" : "Journal • Published 2026-07-16"}}
          </p>
        </div>
      </section>

      {{/* Content Layout */}}
      <DynamicArticle sections={{sections}} />

      {{/* Footer Newsletter Section */}}
      <NewsletterSection />
    </main>
  );
}}'''
            new_content = re.sub(pattern, replacement, new_content)

            if new_content != content:
                with open(page_file, "w", encoding="utf-8") as f:
                    f.write(new_content)
                fixed_count += 1
                print(f"Wired up ES JSON loader for {entry}")

print(f"Wired up ES JSON loader in {fixed_count} blog page files!")
