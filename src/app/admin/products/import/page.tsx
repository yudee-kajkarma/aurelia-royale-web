"use client";

import Link from "next/link";
import { ChangeEvent, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";
import {
  CircleAlert,
  CircleCheck,
  Database,
  Download,
  FileSpreadsheet,
  FileUp,
  LoaderCircle,
  Upload,
} from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { adminProductService } from "@/services/products/admin-product.service";

type BulkImportProduct = {
  title: string;
  description: string;
  vendor: string;
  category: string;
  stoneType: string;
  color: string;
  shape: string;
  carat: number;
  origin: string;
  treatment: string;
  certificate: string;
  measurement: string;
  details: string;
  sku: string;
  price: number;
  stock: number;
  diamondPcs: number;
  availability: boolean;
  is_featured: boolean;
  tags: string[];
  videoUrls: string[];
  certificateUrls: string[];
};

type WorksheetRow = Record<string, string | number | boolean | null | undefined>;

const sampleWorksheetRows = [
  {
    "Serial No": 1,
    Title: "Diamond Ring",
    Description: "Beautiful diamond ring",
    Vendor: "Dallila",
    Category: "Rings",
    "Stone Type": "Diamond",
    Color: "D",
    Shape: "Round",
    Carat: 1.5,
    Origin: "Conflict Free",
    Treatment: "None",
    Certificate: "GIA",
    Measurement: "6.2mm",
    Details: "Premium quality",
    SKU: "SKU-001",
    Price: 5000,
    Stock: 10,
    "Diamond Pieces": 1,
    Availability: true,
    "Is Featured": true,
    Tags: "Engagement,Solitaire",
    "Video URLs": "https://example.com/video.mp4",
    "Certificate URLs": "https://example.com/cert.pdf",
  },
  {
    "Serial No": 2,
    Title: "Diamond Pendant",
    Description: "Elegant solitaire pendant",
    Vendor: "Dallila",
    Category: "Pendants",
    "Stone Type": "Diamond",
    Color: "E",
    Shape: "Princess",
    Carat: 0.9,
    Origin: "Conflict Free",
    Treatment: "None",
    Certificate: "IGI",
    Measurement: "5.1mm",
    Details: "Premium pendant with white gold finish",
    SKU: "SKU-002",
    Price: 2350,
    Stock: 6,
    "Diamond Pieces": 1,
    Availability: true,
    "Is Featured": false,
    Tags: "Pendant,Solitaire,Gift",
    "Video URLs": "https://example.com/pendant.mp4",
    "Certificate URLs": "https://example.com/pendant-cert.pdf",
  },
];

const columnAliases = {
  serialNo: ["Serial No", "Serial Number", "Serial"],
  title: ["Title", "title"],
  description: ["Description", "description"],
  vendor: ["Vendor", "vendor"],
  category: ["Category", "category"],
  stoneType: ["Stone Type", "stoneType"],
  color: ["Color", "color"],
  shape: ["Shape", "shape"],
  carat: ["Carat", "carat"],
  origin: ["Origin", "origin"],
  treatment: ["Treatment", "treatment"],
  certificate: ["Certificate", "certificate"],
  measurement: ["Measurement", "measurement"],
  details: ["Details", "details"],
  sku: ["SKU", "sku"],
  price: ["Price", "Selling Price", "price"],
  stock: ["Stock"],
  diamondPcs: ["Diamond Pieces", "diamondPcs"],
  availability: ["Availability", "availability"],
  isFeatured: ["Is Featured", "is_featured", "isFeatured"],
  tags: ["Tags"],
  videoUrls: ["Video URLs", "videoUrls"],
  certificateUrls: ["Certificate URLs", "certificateUrls"],
} as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function normalizeHeader(value: string) {
  return value.trim().toLowerCase();
}

function getRowValue(row: WorksheetRow, aliases: readonly string[]) {
  const entries = Object.entries(row);

  for (const alias of aliases) {
    const found = entries.find(([key]) => normalizeHeader(key) === normalizeHeader(alias));
    if (found) {
      return found[1];
    }
  }

  return undefined;
}

function toTrimmedString(value: unknown) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value).trim();
}

function toNumber(value: unknown, fallback = 0) {
  if (typeof value === "number") {
    return value;
  }

  const normalized = toTrimmedString(value);
  if (!normalized) {
    return fallback;
  }

  const parsed = Number(normalized);
  return Number.isNaN(parsed) ? fallback : parsed;
}

function toBoolean(value: unknown, fallback = false) {
  if (typeof value === "boolean") {
    return value;
  }

  const normalized = toTrimmedString(value).toLowerCase();
  if (!normalized) {
    return fallback;
  }

  return ["true", "1", "yes", "y"].includes(normalized);
}

function toStringArray(value: unknown) {
  const normalized = toTrimmedString(value);
  if (!normalized) {
    return [];
  }

  return normalized
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function validateProduct(product: unknown, index: number): string[] {
  const errors: string[] = [];

  if (!isRecord(product)) {
    return [`Product ${index + 1}: item must be an object.`];
  }

  for (const key of [
    "title",
    "description",
    "vendor",
    "category",
    "stoneType",
    "color",
    "shape",
    "origin",
    "treatment",
    "certificate",
    "measurement",
    "details",
    "sku",
  ] as const) {
    if (typeof product[key] !== "string" || !product[key]?.trim()) {
      errors.push(`Product ${index + 1}: ${key} must be a non-empty string.`);
    }
  }

  for (const key of ["carat", "price", "stock", "diamondPcs"] as const) {
    if (typeof product[key] !== "number" || Number.isNaN(product[key])) {
      errors.push(`Product ${index + 1}: ${key} must be a number.`);
    }
  }

  if (typeof product.availability !== "boolean") {
    errors.push(`Product ${index + 1}: availability must be a boolean.`);
  }

  if (typeof product.is_featured !== "boolean") {
    errors.push(`Product ${index + 1}: is_featured must be a boolean.`);
  }

  if (!isStringArray(product.tags)) {
    errors.push(`Product ${index + 1}: tags must be an array of strings.`);
  }

  if (!isStringArray(product.videoUrls)) {
    errors.push(`Product ${index + 1}: videoUrls must be an array of strings.`);
  }

  if (!isStringArray(product.certificateUrls)) {
    errors.push(`Product ${index + 1}: certificateUrls must be an array of strings.`);
  }

  return errors;
}

function parseImportRows(rows: WorksheetRow[]): { products: BulkImportProduct[]; errors: string[] } {
  if (rows.length === 0) {
    return { products: [], errors: ["Excel sheet is empty."] };
  }

  const transformedProducts: BulkImportProduct[] = [];
  const transformErrors: string[] = [];

  rows.forEach((row, index) => {
    try {
      transformedProducts.push({
        title: toTrimmedString(getRowValue(row, columnAliases.title)),
        description: toTrimmedString(getRowValue(row, columnAliases.description)),
        vendor: toTrimmedString(getRowValue(row, columnAliases.vendor)),
        category: toTrimmedString(getRowValue(row, columnAliases.category)),
        stoneType: toTrimmedString(getRowValue(row, columnAliases.stoneType)),
        color: toTrimmedString(getRowValue(row, columnAliases.color)),
        shape: toTrimmedString(getRowValue(row, columnAliases.shape)),
        carat: toNumber(getRowValue(row, columnAliases.carat)),
        origin: toTrimmedString(getRowValue(row, columnAliases.origin)),
        treatment: toTrimmedString(getRowValue(row, columnAliases.treatment)),
        certificate: toTrimmedString(getRowValue(row, columnAliases.certificate)),
        measurement: toTrimmedString(getRowValue(row, columnAliases.measurement)),
        details: toTrimmedString(getRowValue(row, columnAliases.details)),
        sku: toTrimmedString(getRowValue(row, columnAliases.sku)),
        price: toNumber(getRowValue(row, columnAliases.price)),
        stock: toNumber(getRowValue(row, columnAliases.stock), 0),
        diamondPcs: toNumber(getRowValue(row, columnAliases.diamondPcs), 1),
        availability: toBoolean(getRowValue(row, columnAliases.availability), true),
        is_featured: toBoolean(getRowValue(row, columnAliases.isFeatured), false),
        tags: toStringArray(getRowValue(row, columnAliases.tags)),
        videoUrls: toStringArray(getRowValue(row, columnAliases.videoUrls)),
        certificateUrls: toStringArray(getRowValue(row, columnAliases.certificateUrls)),
      });
    } catch (error) {
      const serialNo = toTrimmedString(getRowValue(row, columnAliases.serialNo));
      const message = error instanceof Error ? error.message : "Unable to parse row.";
      transformErrors.push(`Row ${serialNo || index + 2}: ${message}`);
    }
  });

  if (transformErrors.length > 0) {
    return { products: [], errors: transformErrors };
  }

  const validationErrors = transformedProducts.flatMap((product, index) => validateProduct(product, index));
  if (validationErrors.length > 0) {
    return { products: [], errors: validationErrors };
  }

  return { products: transformedProducts, errors: [] };
}

export default function AdminProductsImportPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isParsing, setIsParsing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");
  const [products, setProducts] = useState<BulkImportProduct[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const totals = useMemo(() => {
    const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
    const featuredCount = products.filter((product) => product.is_featured).length;

    return {
      totalStock,
      featuredCount,
    };
  }, [products]);

  function handleDownloadSample() {
    const worksheet = XLSX.utils.json_to_sheet(sampleWorksheetRows, {
      header: [
        "Serial No",
        "Title",
        "Description",
        "Vendor",
        "Category",
        "Stone Type",
        "Color",
        "Shape",
        "Carat",
        "Origin",
        "Treatment",
        "Certificate",
        "Measurement",
        "Details",
        "SKU",
        "Price",
        "Stock",
        "Diamond Pieces",
        "Availability",
        "Is Featured",
        "Tags",
        "Video URLs",
        "Certificate URLs",
      ],
    });

    worksheet["!cols"] = [
      { wch: 10 },
      { wch: 32 },
      { wch: 42 },
      { wch: 18 },
      { wch: 18 },
      { wch: 16 },
      { wch: 12 },
      { wch: 12 },
      { wch: 10 },
      { wch: 18 },
      { wch: 14 },
      { wch: 14 },
      { wch: 14 },
      { wch: 16 },
      { wch: 32 },
      { wch: 14 },
      { wch: 10 },
      { wch: 14 },
      { wch: 12 },
      { wch: 28 },
      { wch: 36 },
      { wch: 36 },
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
    XLSX.writeFile(workbook, "product-import-sample.xlsx", { bookType: "xlsx" });
  }

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setIsParsing(true);
    setFeedback(null);
    setErrors([]);
    setProducts([]);
    setFileName(file.name);

    try {
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer, { type: "array" });
      const firstSheetName = workbook.SheetNames[0];

      if (!firstSheetName) {
        setErrors(["Excel file does not contain any sheet."]);
        return;
      }

      const worksheet = workbook.Sheets[firstSheetName];
      const rows = XLSX.utils.sheet_to_json<WorksheetRow>(worksheet, { defval: "" });
      const result = parseImportRows(rows);

      if (result.errors.length > 0) {
        setErrors(result.errors);
        return;
      }

      setProducts(result.products);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to read the spreadsheet.";
      setErrors([message]);
    } finally {
      event.target.value = "";
      setIsParsing(false);
    }
  }

  async function handleImport() {
    if (products.length === 0) {
      setFeedback({ type: "error", message: "Upload a valid spreadsheet before importing." });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      await adminProductService.bulkCreateAdminProducts({
        products: products as Array<Record<string, unknown>>,
      });

      setFeedback({
        type: "success",
        message: `Imported ${products.length} product${products.length === 1 ? "" : "s"} successfully.`,
      });
      setProducts([]);
      setErrors([]);
      setFileName("");

      startTransition(() => {
        router.push("/admin/products");
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to import products.";
      setFeedback({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthGuard allowedRoles={["ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-6 py-12 sm:px-8">
        <section className="rounded-[28px] border border-[var(--foreground)]/10 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Bulk Import</p>
              <h1 className="display-font mt-3 text-3xl text-[var(--foreground)] sm:text-4xl">Import Products From Excel</h1>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/65 sm:text-base">
                Upload an Excel sheet, preview the transformed catalog data, and send it to the bulk create endpoint using the same admin workspace theme.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={handleDownloadSample}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[var(--foreground)]/12 px-5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] max-sm:w-full"
              >
                <Download className="h-4 w-4" />
                Download Sample Excel
              </button>
              <Link href="/admin/products" className="inline-flex max-sm:w-full">
                <span className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--gold)] px-5 text-sm font-extrabold text-[#17120a] transition hover:bg-[#b89428] max-sm:w-full">
                  Back To Products
                </span>
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
          <section className="min-w-0 rounded-[28px] border border-[var(--foreground)]/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)]">
                <Upload className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[var(--foreground)]">Upload Spreadsheet</h2>
                <p className="text-sm text-[var(--foreground)]/60">Accepts .xlsx or .xls and reads the first sheet automatically.</p>
              </div>
            </div>

            <label className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-[28px] border border-dashed border-[var(--foreground)]/12 bg-[var(--surface)] px-6 py-12 text-center transition hover:border-[var(--gold)]/45 hover:bg-[var(--gold)]/5">
              <FileSpreadsheet className="h-8 w-8 text-[var(--gold)]" />
              <p className="mt-4 text-base font-semibold text-[var(--foreground)]">Choose Excel File</p>
              <p className="mt-1 max-w-md text-sm text-[var(--foreground)]/60">
                Use the sample workbook if you need the exact column names expected by the importer.
              </p>
              <input
                type="file"
                accept=".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {fileName ? (
              <div className="mt-4 rounded-2xl border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)]">
                <span className="font-medium">Selected file:</span> {fileName}
              </div>
            ) : null}

            {feedback ? (
              <div
                className={feedback.type === "success"
                  ? "mt-4 flex items-start gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
                  : "mt-4 flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                }
              >
                {feedback.type === "success" ? (
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0" />
                ) : (
                  <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                )}
                <span>{feedback.message}</span>
              </div>
            ) : null}

            {isParsing ? (
              <div className="mt-5 rounded-[24px] border border-[var(--foreground)]/10 bg-[var(--surface)] px-5 py-6 text-center">
                <LoaderCircle className="mx-auto h-7 w-7 animate-spin text-[var(--gold)]" />
                <p className="mt-3 text-sm font-medium text-[var(--foreground)]">Parsing spreadsheet</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--foreground)]/45">Reading rows and transforming payload</p>
              </div>
            ) : null}

            {errors.length > 0 ? (
              <div className="mt-5 rounded-[24px] border border-red-200 bg-red-50 p-5">
                <h3 className="text-sm font-semibold text-red-700">Validation Errors</h3>
                <ul className="mt-3 space-y-2 text-sm text-red-700">
                  {errors.slice(0, 12).map((error) => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
                {errors.length > 12 ? (
                  <p className="mt-3 text-xs text-red-600">+{errors.length - 12} more errors in the sheet.</p>
                ) : null}
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleImport}
                disabled={products.length === 0 || errors.length > 0 || isSubmitting || isPending}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--gold)] px-5 text-sm font-extrabold text-[#17120a] transition hover:bg-[#b89428] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {(isSubmitting || isPending) ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <FileUp className="h-4 w-4" />}
                {(isSubmitting || isPending) ? "Importing..." : "Import Products"}
              </button>

              <Link href="/admin/products" className="inline-flex items-center justify-center rounded-xl border border-[var(--foreground)]/12 px-5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] h-12">
                Cancel
              </Link>
            </div>
          </section>

          <section className="min-w-0 space-y-5">
            <div className="min-w-0 rounded-[28px] border border-[var(--foreground)]/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)]">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[var(--foreground)]">Import Preview</h2>
                  <p className="text-sm text-[var(--foreground)]/60">Review the transformed data before sending it to the API.</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--foreground)]/45">Products</p>
                  <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{products.length}</p>
                </div>
                <div className="rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--foreground)]/45">Total Stock</p>
                  <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{totals.totalStock}</p>
                </div>
                <div className="rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--foreground)]/45">Featured</p>
                  <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{totals.featuredCount}</p>
                </div>
              </div>

              {products.length === 0 ? (
                <div className="mt-5 rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-8 text-center text-sm text-[var(--foreground)]/60">
                  No products parsed yet. Upload a spreadsheet to see the preview table.
                </div>
              ) : (
                <div className="mt-5 min-w-0 overflow-hidden rounded-[22px] border border-[var(--foreground)]/10">
                  <div className="grid grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)_0.8fr_0.7fr] gap-3 border-b border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]/55">
                    <span>Product</span>
                    <span>Category</span>
                    <span>Price</span>
                    <span>Stock</span>
                  </div>
                  <div className="divide-y divide-[var(--foreground)]/10">
                    {products.slice(0, 8).map((product) => (
                      <div key={product.sku} className="grid grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)_0.8fr_0.7fr] gap-3 px-4 py-4 text-sm">
                        <div className="min-w-0">
                          <p className="truncate font-semibold text-[var(--foreground)]">{product.title}</p>
                          <p className="truncate text-xs text-[var(--foreground)]/58">{product.vendor}</p>
                        </div>
                        <div className="min-w-0 text-[var(--foreground)]">{product.category}</div>
                        <div className="font-semibold text-[var(--gold)]">${product.price.toFixed(2)}</div>
                        <div className="text-[var(--foreground)]">{product.stock}</div>
                      </div>
                    ))}
                  </div>
                  {products.length > 8 ? (
                    <div className="border-t border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-3 text-xs text-[var(--foreground)]/55">
                      {products.length - 8} more product{products.length - 8 === 1 ? "" : "s"} ready to import.
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            <div className="min-w-0 rounded-[28px] border border-[var(--foreground)]/10 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-[var(--foreground)]">Sample Workbook</h2>
                  <p className="mt-2 text-sm text-[var(--foreground)]/60">
                    Download the starter file, keep the same headers, and fill each row with product data before uploading.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleDownloadSample}
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-[var(--foreground)]/12 px-5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--foreground)]/45">Step 1</p>
                  <p className="mt-2 text-sm font-medium text-[var(--foreground)]">Download the sample Excel file and keep the provided headers unchanged.</p>
                </div>
                <div className="rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--foreground)]/45">Step 2</p>
                  <p className="mt-2 text-sm font-medium text-[var(--foreground)]">Enter the same fields your product object uses, including vendor, stone details, stock, tags, and media URLs.</p>
                </div>
                <div className="rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--foreground)]/45">Step 3</p>
                  <p className="mt-2 text-sm font-medium text-[var(--foreground)]">Upload the file here, validate the preview, then send everything in one bulk import request.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </AuthGuard>
  );
}