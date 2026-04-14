"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  FileUp,
  LoaderCircle,
  PackageSearch,
  Pencil,
  Plus,
  RefreshCw,
  Search,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { ProductImage } from "@/components/shared/ProductImage";
import { adminProductService } from "@/services/products/admin-product.service";
import { getAllProductFilters } from "@/services/products/product.service";
import type { AdminProductDetail } from "@/services/products/admin-product.types";
import type { ProductListItem, ProductsPagination } from "@/services/products/product.types";

const PAGE_SIZE = 10;

type ProductEditorMode = "create" | "edit";

type ProductFormState = {
  title: string;
  description: string;
  vendor: string;
  category: string;
  stoneType: string;
  color: string;
  shape: string;
  carat: string;
  origin: string;
  treatment: string;
  certificate: string;
  measurement: string;
  details: string;
  sku: string;
  price: string;
  stock: string;
  diamondPcs: string;
  availability: boolean;
  is_featured: boolean;
  tags: string;
  videoUrls: string;
  certificateUrls: string;
};

type ExistingImageState = {
  id: string;
  src: string;
  index: number;
};

type PendingDeleteProduct = {
  id: string;
  title: string;
};

const defaultFormState: ProductFormState = {
  title: "",
  description: "",
  vendor: " Diamonds",
  category: "",
  stoneType: "Diamond",
  color: "",
  shape: "",
  carat: "",
  origin: "",
  treatment: "",
  certificate: "",
  measurement: "",
  details: "",
  sku: "",
  price: "",
  stock: "",
  diamondPcs: "1",
  availability: true,
  is_featured: false,
  tags: "",
  videoUrls: "",
  certificateUrls: "",
};

function ModalShell({
  open,
  title,
  subtitle,
  onClose,
  align = "top",
  maxWidthClass = "max-w-6xl",
  children,
}: {
  open: boolean;
  title: string;
  subtitle: string;
  onClose: () => void;
  align?: "top" | "center";
  maxWidthClass?: string;
  children: React.ReactNode;
}) {
  const [portalReady, setPortalReady] = useState(false);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!open || !portalReady) {
      return;
    }

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;
    const previousDocumentOverflow = documentElement.style.overflow;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
      documentElement.style.overflow = previousDocumentOverflow;
    };
  }, [onClose, open, portalReady]);

  if (!open || !portalReady) {
    return null;
  }

  const viewportClass = "absolute inset-0 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-6";

  const wrapperClass = align === "top"
    ? "flex min-h-full items-start justify-center py-6 sm:py-10"
    : "flex min-h-full items-center justify-center py-6";

  const panelClass = align === "top"
    ? `relative w-full ${maxWidthClass} max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-[30px] border border-white/70 bg-white/96 shadow-[0_28px_90px_rgba(19,18,22,0.28)] sm:max-h-[calc(100dvh-3rem)]`
    : `relative w-full ${maxWidthClass} max-h-[min(calc(100dvh-2rem),32rem)] overflow-y-auto rounded-[30px] border border-white/70 bg-white/96 shadow-[0_28px_90px_rgba(19,18,22,0.28)]`;

  return createPortal(
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className={viewportClass}>
        <div className={wrapperClass}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className={panelClass}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-[30px] border-b border-[var(--foreground)]/10 bg-white/95 px-6 py-5 backdrop-blur sm:px-7">
              <div>
                <h2 className="display-font text-3xl text-[var(--foreground)]">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-[var(--foreground)]/68">{subtitle}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--foreground)] transition hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 sm:p-7">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function ThemedPagination({
  pagination,
  currentPage,
  onPageChange,
  disabled,
}: {
  pagination: ProductsPagination;
  currentPage: number;
  onPageChange: (page: number) => void;
  disabled: boolean;
}) {
  if (pagination.totalPages <= 1) {
    return null;
  }

  const windowStart = Math.max(1, currentPage - 2);
  const windowEnd = Math.min(pagination.totalPages, windowStart + 4);
  const visiblePages = Array.from({ length: windowEnd - windowStart + 1 }, (_, index) => windowStart + index);

  return (
    <div className="mt-6 flex flex-col gap-4 rounded-[28px] border border-[var(--foreground)]/10 bg-white px-5 py-4 shadow-[0_20px_60px_rgba(6,28,23,0.06)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="text-sm text-[var(--foreground)]/68">
        Showing page {pagination.currentPage} of {pagination.totalPages} with {pagination.totalRecords} total records
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={disabled || !pagination.hasPrevPage}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[var(--foreground)]/10 px-4 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-45"
        >
          <ChevronLeft size={16} />
          Prev
        </button>

        {visiblePages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            disabled={disabled}
            className={page === currentPage
              ? "inline-flex h-11 min-w-11 items-center justify-center rounded-full bg-[var(--gold)] px-4 text-sm font-extrabold text-[#17120a]"
              : "inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-[var(--foreground)]/10 px-4 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            }
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={disabled || !pagination.hasNextPage}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[var(--foreground)]/10 px-4 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-45"
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

function formatMoney(value: number) {
  return `$${value.toFixed(2)}`;
}

function buildCommaSeparatedList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .join(",");
}

function getProductCategory(product: ProductListItem) {
  return product.tags[0] ?? "Jewellery";
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<ProductListItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [pagination, setPagination] = useState<ProductsPagination | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editorMode, setEditorMode] = useState<ProductEditorMode>("create");
  const [saving, setSaving] = useState(false);
  const [loadingEditor, setLoadingEditor] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [formState, setFormState] = useState<ProductFormState>(defaultFormState);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [originalImages, setOriginalImages] = useState<ExistingImageState[]>([]);
  const [existingImages, setExistingImages] = useState<ExistingImageState[]>([]);
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [pendingDeleteProduct, setPendingDeleteProduct] = useState<PendingDeleteProduct | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPageData() {
      setLoading(true);
      setErrorMessage(null);

      try {
        const [listResult, filterResult] = await Promise.all([
          adminProductService.listAdminProducts({
            search: searchValue || undefined,
            category: selectedCategory || undefined,
            page: currentPage,
            limit: PAGE_SIZE,
          }),
          getAllProductFilters(),
        ]);

        if (cancelled) {
          return;
        }

        setProducts(listResult.products);
        setPagination(listResult.pagination);
        setCategories(filterResult.categories);
      } catch (error) {
        if (cancelled) {
          return;
        }

        setErrorMessage(error instanceof Error ? error.message : "Unable to load products.");
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadPageData();

    return () => {
      cancelled = true;
    };
  }, [currentPage, searchValue, selectedCategory]);

  const resultLabel = useMemo(() => {
    if (loading) {
      return "Loading products";
    }

    if (pagination) {
      return `${pagination.totalRecords} products found`;
    }

    return `${products.length} product${products.length === 1 ? "" : "s"} loaded`;
  }, [loading, pagination, products.length]);

  const hasActiveFilters = Boolean(searchValue || selectedCategory || searchTerm);

  function updateFormField<Key extends keyof ProductFormState>(key: Key, value: ProductFormState[Key]) {
    setFormState((currentValue) => ({
      ...currentValue,
      [key]: value,
    }));
  }

  function resetEditor() {
    setEditorMode("create");
    setEditingProductId(null);
    setFormState(defaultFormState);
    setSelectedFiles([]);
    setOriginalImages([]);
    setExistingImages([]);
    setFormError(null);
  }

  function openCreateEditor() {
    resetEditor();
    setEditorMode("create");
    setEditorOpen(true);
  }

  function closeEditor() {
    if (saving || loadingEditor) {
      return;
    }

    setEditorOpen(false);
  }

  function populateForm(product: AdminProductDetail) {
    const images = product.images.map((image, index) => ({
      id: image._id,
      src: image.src,
      index,
    }));

    setOriginalImages(images);
    setExistingImages(images);
    setSelectedFiles([]);
    setFormState({
      title: product.title,
      description: product.description,
      vendor: product.vendor,
      category: product.category,
      stoneType: product.stoneType,
      color: product.color,
      shape: product.shape,
      carat: String(product.carat),
      origin: product.origin,
      treatment: product.treatment,
      certificate: product.certificate,
      measurement: product.measurement,
      details: product.details,
      sku: product.sku,
      price: String(product.price),
      stock: String(product.stock),
      diamondPcs: String(product.diamondPcs),
      availability: product.availability,
      is_featured: product.is_featured,
      tags: product.tags.join(","),
      videoUrls: product.videoUrls.join(","),
      certificateUrls: product.certificateUrls.join(","),
    });
  }

  async function openEditEditor(productId: string) {
    resetEditor();
    setEditorMode("edit");
    setEditingProductId(productId);
    setEditorOpen(true);
    setLoadingEditor(true);

    try {
      const product = await adminProductService.getAdminProduct(productId);
      populateForm(product);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Unable to load product.");
    } finally {
      setLoadingEditor(false);
    }
  }

  function appendCommonFields(formData: FormData) {
    formData.append("title", formState.title.trim());
    formData.append("description", formState.description.trim());
    formData.append("vendor", formState.vendor.trim());
    formData.append("category", formState.category.trim());
    formData.append("stoneType", formState.stoneType.trim());
    formData.append("color", formState.color.trim());
    formData.append("shape", formState.shape.trim());
    formData.append("carat", formState.carat.trim());
    formData.append("origin", formState.origin.trim());
    formData.append("treatment", formState.treatment.trim());
    formData.append("certificate", formState.certificate.trim());
    formData.append("measurement", formState.measurement.trim());
    formData.append("details", formState.details.trim());
    formData.append("sku", formState.sku.trim());
    formData.append("price", formState.price.trim());
    formData.append("stock", formState.stock.trim());
    formData.append("diamondPcs", formState.diamondPcs.trim());
    formData.append("availability", String(formState.availability));
    formData.append("is_featured", String(formState.is_featured));
    formData.append("tags", buildCommaSeparatedList(formState.tags));
    formData.append("videoUrls", buildCommaSeparatedList(formState.videoUrls));
    formData.append("certificateUrls", buildCommaSeparatedList(formState.certificateUrls));
  }

  function buildCreatePayload() {
    if (selectedFiles.length === 0) {
      throw new Error("Add at least one product image.");
    }

    const formData = new FormData();
    appendCommonFields(formData);

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    formData.append("imageMapping", JSON.stringify(selectedFiles.map((_, index) => index)));

    return formData;
  }

  function buildUpdatePayload() {
    const formData = new FormData();
    appendCommonFields(formData);

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    if (selectedFiles.length > 0) {
      formData.append("imageMapping", JSON.stringify(selectedFiles.map((_, index) => index)));
    }

    const deletedIndexes = originalImages
      .map((image) => image.index)
      .filter((index) => !existingImages.some((item) => item.index === index));

    if (deletedIndexes.length > 0) {
      formData.append("delImgMapping", JSON.stringify(deletedIndexes));
    }

    return formData;
  }

  async function refreshProducts(targetPage = currentPage) {
    const result = await adminProductService.listAdminProducts({
      search: searchValue || undefined,
      category: selectedCategory || undefined,
      page: targetPage,
      limit: PAGE_SIZE,
    });

    setProducts(result.products);
    setPagination(result.pagination);
    setCurrentPage(targetPage);
  }

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setFormError(null);
    setSuccessMessage(null);

    try {
      if (editorMode === "create") {
        await adminProductService.createAdminProduct(buildCreatePayload());
        setSuccessMessage("Product created successfully.");
      } else if (editingProductId) {
        await adminProductService.updateAdminProduct(editingProductId, buildUpdatePayload());
        setSuccessMessage("Product updated successfully.");
      }

      await refreshProducts(currentPage);
      setEditorOpen(false);
      resetEditor();
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Unable to save product.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!pendingDeleteProduct) {
      return;
    }

    setDeletingId(pendingDeleteProduct.id);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      await adminProductService.deleteAdminProduct(pendingDeleteProduct.id);
      const shouldMoveBack = products.length === 1 && currentPage > 1;
      const nextPage = shouldMoveBack ? currentPage - 1 : currentPage;

      setPendingDeleteProduct(null);
      setSuccessMessage("Product deleted successfully.");
      await refreshProducts(nextPage);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to delete product.");
    } finally {
      setDeletingId(null);
    }
  }

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCurrentPage(1);
    setSearchValue(searchTerm.trim());
  }

  function handleClearFilters() {
    setSearchTerm("");
    setSearchValue("");
    setSelectedCategory("");
    setCurrentPage(1);
  }

  function handleFilesChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedFiles(Array.from(event.target.files ?? []));
  }

  return (
    <AuthGuard allowedRoles={["ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-6 py-12 sm:px-8">
        <section className="rounded-[28px] border border-[var(--foreground)]/10 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <form onSubmit={handleSearchSubmit} className="grid flex-1 gap-3 lg:grid-cols-[minmax(0,1.6fr)_minmax(12rem,0.95fr)_auto_auto]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--foreground)]/45" />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search products"
                  className="h-12 w-full rounded-xl border border-[var(--foreground)]/12 bg-white px-11 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/15"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(event) => {
                  setSelectedCategory(event.target.value);
                  setCurrentPage(1);
                }}
                className="h-12 rounded-xl border border-[var(--foreground)]/12 bg-white px-4 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/15"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--foreground)] px-5 text-sm font-bold text-white transition hover:bg-[#0f342c]"
              >
                Search
              </button>

              <button
                type="button"
                onClick={handleClearFilters}
                disabled={!hasActiveFilters}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--foreground)]/12 px-5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-45"
              >
                Clear
              </button>
            </form>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/admin/products/import" className="inline-flex max-sm:w-full">
                <span className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[var(--foreground)]/12 px-5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] max-sm:w-full">
                  <FileUp className="h-4 w-4" />
                  Import Data
                </span>
              </Link>
              <button
                type="button"
                onClick={openCreateEditor}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--gold)] px-5 text-sm font-extrabold text-[#17120a] transition hover:bg-[#b89428] max-sm:w-full"
              >
                <Plus className="h-4 w-4" />
                Add Product
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 text-sm text-[var(--foreground)]/62">
              <RefreshCw className={`h-4 w-4 shrink-0 ${loading ? "animate-spin" : ""}`} />
              <span>{resultLabel}</span>
            </div>

            <div className="rounded-full border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]/60">
              Page {currentPage}{pagination ? ` / ${pagination.totalPages}` : ""}
            </div>
          </div>
        </section>

        {successMessage ? (
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-700">
            {successMessage}
          </div>
        ) : null}

        <section className="mt-5 overflow-hidden rounded-[28px] border border-[var(--foreground)]/10 bg-white shadow-sm">
          <div className="hidden xl:grid xl:grid-cols-[minmax(0,2.4fr)_1fr_1fr_0.85fr_0.9fr_8.5rem] gap-4 border-b border-[var(--foreground)]/10 bg-[var(--surface)] px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]/55">
            <span>Product</span>
            <span>Category</span>
            <span>SKU</span>
            <span>Price</span>
            <span>Stock</span>
            <span className="text-right">Actions</span>
          </div>

          {loading ? (
            <div className="grid min-h-[320px] place-items-center px-6 py-12 text-center text-[var(--foreground)]/60">
              <div>
                <LoaderCircle className="mx-auto h-8 w-8 animate-spin text-[var(--gold)]" />
                <p className="mt-4 text-sm font-medium">Loading product workspace</p>
              </div>
            </div>
          ) : errorMessage ? (
            <div className="px-6 py-12">
              <div className="rounded-[24px] border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
                {errorMessage}
              </div>
            </div>
          ) : products.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                <PackageSearch className="h-9 w-9" />
              </div>
              <p className="display-font text-3xl text-[var(--foreground)]">No products matched</p>
              <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--foreground)]/65">Adjust the filter or add your first product to begin the catalog.</p>
              {hasActiveFilters ? (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="mt-6 inline-flex items-center justify-center rounded-xl border border-[var(--foreground)]/12 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  Clear Filters
                </button>
              ) : null}
            </div>
          ) : (
            <div className="divide-y divide-[var(--foreground)]/10">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="grid gap-4 px-5 py-5 md:grid-cols-2 xl:grid-cols-[minmax(0,2.4fr)_1fr_1fr_0.85fr_0.9fr_8.5rem] xl:items-center"
                >
                  <div className="flex items-start gap-4 min-w-0 md:col-span-2 xl:col-span-1">
                    <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-2xl border border-[var(--foreground)]/10 bg-gray-50">
                      <ProductImage src={product.thumbnail} alt={product.title} className="h-full w-full object-cover" />
                    </div>

                    <div className="min-w-0 space-y-1">
                      <p className="line-clamp-2 text-sm font-semibold text-[var(--foreground)]">{product.title}</p>
                      <p className="text-xs text-[var(--foreground)]/58">ID: {product.id}</p>
                      <p className="text-xs text-[var(--foreground)]/58">Vendor: {product.vendor}</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.14em] text-[var(--foreground)]/45 xl:hidden">Category</p>
                    <p className="text-sm font-medium text-[var(--foreground)]">{getProductCategory(product)}</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.14em] text-[var(--foreground)]/45 xl:hidden">SKU</p>
                    <p className="text-sm font-medium text-[var(--foreground)]">{product.sku}</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.14em] text-[var(--foreground)]/45 xl:hidden">Price</p>
                    <p className="text-sm font-semibold text-[var(--foreground)]">{formatMoney(product.price)}</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.14em] text-[var(--foreground)]/45 xl:hidden">Stock</p>
                    <span className={product.stock > 0
                      ? "inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                      : "inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700"
                    }>
                      {product.stock}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 md:col-span-2 xl:col-span-1 xl:justify-end xl:flex-nowrap">
                    <Link href={`/shop-details/${product.slug}`} className="inline-flex shrink-0">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--foreground)]/10 text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
                        <Eye className="h-4 w-4" />
                      </span>
                    </Link>
                    <button
                      type="button"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--foreground)]/10 text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                      onClick={() => openEditEditor(product.id)}
                      disabled={loading || deletingId === product.id}
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-red-200 text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-45"
                      onClick={() => setPendingDeleteProduct({ id: product.id, title: product.title })}
                      disabled={Boolean(deletingId && deletingId !== product.id) || loading}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {pagination ? (
          <ThemedPagination
            pagination={pagination}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            disabled={loading}
          />
        ) : null}

        <ModalShell
          open={pendingDeleteProduct !== null}
          title="Delete Product"
          subtitle={pendingDeleteProduct ? `Remove ${pendingDeleteProduct.title} from the catalog.` : "Delete this product from the catalog."}
          align="center"
          maxWidthClass="max-w-xl"
          onClose={() => {
            if (!deletingId) {
              setPendingDeleteProduct(null);
            }
          }}
        >
          <div className="space-y-5">
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700">
              This action permanently deletes the product record from the admin catalog.
            </div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setPendingDeleteProduct(null)}
                disabled={Boolean(deletingId)}
                className="inline-flex items-center justify-center rounded-xl border border-[var(--foreground)]/10 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-45"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={Boolean(deletingId)}
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-45"
              >
                {deletingId ? "Deleting..." : "Delete Product"}
              </button>
            </div>
          </div>
        </ModalShell>

        <ModalShell
          open={editorOpen}
          title={editorMode === "create" ? "Create Product" : "Edit Product"}
          subtitle={editorMode === "create"
            ? "Use the backend form-data fields exactly as your product API expects."
            : "Update the item and send only the new uploads or removed images as needed."}
          onClose={closeEditor}
        >
          {loadingEditor ? (
            <div className="grid min-h-[280px] place-items-center">
              <LoaderCircle className="h-8 w-8 animate-spin text-[var(--gold)]" />
            </div>
          ) : (
            <form onSubmit={handleSave} className="space-y-6">
              {formError ? (
                <div className="rounded-[22px] border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
                  {formError}
                </div>
              ) : null}

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Title</span>
                  <input value={formState.title} onChange={(event) => updateFormField("title", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Vendor</span>
                  <input value={formState.vendor} onChange={(event) => updateFormField("vendor", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Category</span>
                  <input value={formState.category} onChange={(event) => updateFormField("category", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>

                <label className="grid gap-2 md:col-span-2 xl:col-span-3">
                  <span className="text-sm font-medium text-[var(--foreground)]">Description</span>
                  <textarea value={formState.description} onChange={(event) => updateFormField("description", event.target.value)} className="min-h-28 rounded-[22px] border border-[var(--foreground)]/12 bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Stone Type</span>
                  <input value={formState.stoneType} onChange={(event) => updateFormField("stoneType", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Color</span>
                  <input value={formState.color} onChange={(event) => updateFormField("color", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Shape</span>
                  <input value={formState.shape} onChange={(event) => updateFormField("shape", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Carat</span>
                  <input type="number" min="0" step="0.01" value={formState.carat} onChange={(event) => updateFormField("carat", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Origin</span>
                  <input value={formState.origin} onChange={(event) => updateFormField("origin", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Treatment</span>
                  <input value={formState.treatment} onChange={(event) => updateFormField("treatment", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Certificate</span>
                  <input value={formState.certificate} onChange={(event) => updateFormField("certificate", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Measurement</span>
                  <input value={formState.measurement} onChange={(event) => updateFormField("measurement", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">SKU</span>
                  <input value={formState.sku} onChange={(event) => updateFormField("sku", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>

                <label className="grid gap-2 md:col-span-2 xl:col-span-3">
                  <span className="text-sm font-medium text-[var(--foreground)]">Details</span>
                  <textarea value={formState.details} onChange={(event) => updateFormField("details", event.target.value)} className="min-h-24 rounded-[22px] border border-[var(--foreground)]/12 bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Price</span>
                  <input type="number" min="0" step="0.01" value={formState.price} onChange={(event) => updateFormField("price", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Stock</span>
                  <input type="number" min="0" step="1" value={formState.stock} onChange={(event) => updateFormField("stock", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--foreground)]">Diamond Pieces</span>
                  <input type="number" min="0" step="1" value={formState.diamondPcs} onChange={(event) => updateFormField("diamondPcs", event.target.value)} className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" required />
                </label>

                <label className="grid gap-2 md:col-span-2 xl:col-span-3">
                  <span className="text-sm font-medium text-[var(--foreground)]">Tags</span>
                  <input value={formState.tags} onChange={(event) => updateFormField("tags", event.target.value)} placeholder="Engagement,Solitaire,White Gold" className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" />
                </label>

                <label className="grid gap-2 md:col-span-2 xl:col-span-3">
                  <span className="text-sm font-medium text-[var(--foreground)]">Video URLs</span>
                  <input value={formState.videoUrls} onChange={(event) => updateFormField("videoUrls", event.target.value)} placeholder="https://example.com/video1.mp4,https://example.com/video2.mp4" className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" />
                </label>

                <label className="grid gap-2 md:col-span-2 xl:col-span-3">
                  <span className="text-sm font-medium text-[var(--foreground)]">Certificate URLs</span>
                  <input value={formState.certificateUrls} onChange={(event) => updateFormField("certificateUrls", event.target.value)} placeholder="https://example.com/cert1.pdf" className="h-12 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 text-sm outline-none transition focus:border-[var(--gold)]" />
                </label>

                <div className="grid gap-3 md:col-span-2 xl:col-span-3 sm:grid-cols-2">
                  <label className="inline-flex items-center gap-3 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 py-3 text-sm font-medium text-[var(--foreground)]">
                    <input type="checkbox" checked={formState.availability} onChange={(event) => updateFormField("availability", event.target.checked)} className="h-4 w-4 rounded border-[var(--foreground)]/20" />
                    Available for sale
                  </label>
                  <label className="inline-flex items-center gap-3 rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 py-3 text-sm font-medium text-[var(--foreground)]">
                    <input type="checkbox" checked={formState.is_featured} onChange={(event) => updateFormField("is_featured", event.target.checked)} className="h-4 w-4 rounded border-[var(--foreground)]/20" />
                    Featured on storefront
                  </label>
                </div>

                <div className="md:col-span-2 xl:col-span-3">
                  <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-[24px] border border-dashed border-[var(--foreground)]/18 bg-[var(--surface)] px-6 py-8 text-center transition hover:border-[var(--gold)] hover:bg-[var(--gold)]/5">
                    <Upload className="h-6 w-6 text-[var(--gold)]" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">Upload Product Images</p>
                      <p className="mt-1 text-xs text-[var(--foreground)]/60">Use the `files` field from the API with JPG or PNG images.</p>
                    </div>
                    <input type="file" accept="image/*" multiple className="hidden" onChange={handleFilesChange} />
                  </label>

                  {existingImages.length > 0 ? (
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-[var(--foreground)]">Existing Images</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {existingImages.map((image) => (
                          <div key={image.id} className="overflow-hidden rounded-[22px] border border-[var(--foreground)]/10 bg-white">
                            <div className="aspect-square bg-[var(--surface)]">
                              <ProductImage src={image.src} alt="Product" className="h-full w-full object-cover" />
                            </div>
                            <div className="flex items-center justify-between px-3 py-3 text-xs">
                              <span className="font-medium text-[var(--foreground)]/60">Image {image.index + 1}</span>
                              <button type="button" onClick={() => setExistingImages((currentValue) => currentValue.filter((item) => item.index !== image.index))} className="font-semibold text-red-600 transition hover:text-red-700">
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {selectedFiles.length > 0 ? (
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-[var(--foreground)]">New Uploads</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {selectedFiles.map((file) => (
                          <div key={`${file.name}-${file.size}-${file.lastModified}`} className="rounded-[22px] border border-[var(--foreground)]/10 bg-white px-4 py-3">
                            <p className="truncate text-sm font-semibold text-[var(--foreground)]">{file.name}</p>
                            <p className="mt-1 text-xs text-[var(--foreground)]/55">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-[var(--foreground)]/10 pt-5 sm:flex-row sm:justify-end">
                <button type="button" onClick={closeEditor} className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)]/10 px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]" disabled={saving}>
                  Cancel
                </button>
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-extrabold text-[#17120a] transition hover:bg-[#b89428] disabled:opacity-60" disabled={saving}>
                  {saving ? "Saving..." : editorMode === "create" ? "Create Product" : "Update Product"}
                </button>
              </div>
            </form>
          )}
        </ModalShell>
      </main>
    </AuthGuard>
  );
}