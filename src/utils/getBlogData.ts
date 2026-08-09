import fs from "fs";
import path from "path";
import { ArticleSection } from "@/components/shared/DynamicArticle";

export function getBlogDataByLocale(slug: string, locale: string): ArticleSection[] | null {
  if (!locale || locale === "en") return null;
  try {
    const jsonPath = path.join(process.cwd(), "src/data/blogs", locale, `${slug}.json`);
    if (fs.existsSync(jsonPath)) {
      const fileContent = fs.readFileSync(jsonPath, "utf-8");
      const parsed = JSON.parse(fileContent);
      if (Array.isArray(parsed)) {
        return parsed as ArticleSection[];
      } else if (parsed && Array.isArray(parsed.sections)) {
        return parsed.sections as ArticleSection[];
      }
    }
  } catch (error) {
    console.error(`Error loading ${locale} blog JSON for ${slug}:`, error);
  }
  return null;
}

export function getBlogDataEs(slug: string): ArticleSection[] | null {
  return getBlogDataByLocale(slug, "es");
}

export function getBlogDataFr(slug: string): ArticleSection[] | null {
  return getBlogDataByLocale(slug, "fr");
}

export function getBlogDataNl(slug: string): ArticleSection[] | null {
  return getBlogDataByLocale(slug, "nl");
}

export function getBlogDataDe(slug: string): ArticleSection[] | null {
  return getBlogDataByLocale(slug, "de");
}

