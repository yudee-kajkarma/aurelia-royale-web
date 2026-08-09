import urllib.parse
import urllib.request
import json
import time
import re
import os
import sys

def translate_text(text, source_lang='en', target_lang='es'):
    if not text or not isinstance(text, str) or not text.strip() or len(text.strip()) < 2:
        return text
    if text.startswith('/') or text.startswith('http') or text.startswith('#') or text.startswith('@'):
        return text
    if any(tag in text for tag in ['<', '>', 'bg-', 'text-', 'flex', 'grid', 'font-', 'py-', 'px-']):
        return text

    url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + source_lang + "&tl=" + target_lang + "&dt=t&q=" + urllib.parse.quote(text)
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=5) as response:
                result = json.loads(response.read().decode('utf-8'))
                translated = "".join([part[0] for part in result[0] if part[0]])
                return translated
        except Exception:
            time.sleep(0.2)
    return text

def process_blog_file(file_path, output_dir):
    slug = os.path.basename(os.path.dirname(file_path))
    out_file = os.path.join(output_dir, f"{slug}.json")
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract metadataEn title and description
    title_match = re.search(r'export const metadataEn:[^\{]*\{\s*title:\s*"([^"]+)"', content)
    desc_match = re.search(r'export const metadataEn:[^\{]*\{\s*description:\s*"([^"]+)"', content)

    if not title_match:
        title_match = re.search(r'title:\s*"([^"]+)"', content)
    if not desc_match:
        desc_match = re.search(r'description:\s*"([^"]+)"', content)

    title_en = title_match.group(1) if title_match else slug.replace('-', ' ').title()
    desc_en = desc_match.group(1) if desc_match else ""

    cat_match = re.search(r'schemaMarkupEn[\s\S]*?"articleSection":\s*"([^"]+)"', content)
    if not cat_match:
        cat_match = re.search(r'schemaMarkup[\s\S]*?"articleSection":\s*"([^"]+)"', content)
    cat_en = cat_match.group(1) if cat_match else "Journal"

    date_match = re.search(r'"datePublished":\s*"([^"]+)"', content)
    date_str = date_match.group(1) if date_match else "2026-07-16"

    # Extract articleSectionsEn block
    as_start = content.find("const articleSectionsEn")
    if as_start == -1:
        as_start = content.find("const articleSections")
    
    sections_block = ""
    if as_start != -1:
        as_end = content.find("export async function generateMetadata", as_start)
        if as_end == -1:
            as_end = content.find("export default async function", as_start)
        if as_end != -1:
            sections_block = content[as_start:as_end]

    # Translate strings in sections_block
    strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', sections_block)
    strings = [s for s in set(strings) if len(s.strip()) >= 3 and not s.startswith('/') and not s.startswith('http') and not s.startswith('@')]
    strings.sort(key=len, reverse=True)

    translated_map = {}
    for s in strings:
        if s not in translated_map:
            t = translate_text(s)
            t = t.replace('"', "'")
            if t != s:
                translated_map[s] = t

    translated_block = sections_block
    for s, t in translated_map.items():
        translated_block = translated_block.replace(f'"{s}"', f'"{t}"')

    # Convert JS object syntax to valid JSON string
    json_str = translated_block[translated_block.find("["):translated_block.rfind("]")+1]
    # Add quotes around keys
    json_str = re.sub(r'(\b[a-zA-Z0-9_]+\b)\s*:', r'"\1":', json_str)
    # Remove trailing commas
    json_str = re.sub(r',\s*([\]}])', r'\1', json_str)

    sections_data = []
    try:
        sections_data = json.loads(json_str)
    except Exception:
        sections_data = []

    title_es = translate_text(title_en)
    desc_es = translate_text(desc_en)
    cat_es = translate_text(cat_en)

    result = {
        "slug": slug,
        "title": title_es,
        "description": desc_es,
        "category": cat_es,
        "datePublished": date_str,
        "sections": sections_data
    }

    os.makedirs(output_dir, exist_ok=True)
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    return slug

base_dir = "C:/Users/shinj/aurelia-royale-web/src/app/blog"
out_dir = "C:/Users/shinj/aurelia-royale-web/src/data/blogs/es"

batch_limit = int(sys.argv[1]) if len(sys.argv) > 1 else 999

count = 0
for entry in sorted(os.listdir(base_dir)):
    dir_path = os.path.join(base_dir, entry)
    if os.path.isdir(dir_path):
        page_file = os.path.join(dir_path, "page.tsx")
        if os.path.exists(page_file):
            slug = process_blog_file(page_file, out_dir)
            count += 1
            print(f"[{count}] Generated Spanish JSON for: {slug}")
            if count >= batch_limit:
                break

print(f"Done! Created Spanish JSON files for {count} blogs in {out_dir}")
