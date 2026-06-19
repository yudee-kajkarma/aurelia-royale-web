export type ProductListItem = {
  id: string;
  slug: string;
  title: string;
  vendor: string;
  rating: number;
  reviews_count: number;
  tags: string[];
  availability: boolean;
  available: boolean;
  sku: string;
  price: number;
  stock: number;
  thumbnail: string;
};

export type ProductImage = {
  _id: string;
  src: string;
  position: number;
};

export type ProductDetail = ProductListItem & {
  createdAt: string;
  updatedAt: string;
  description: string;
  is_featured: boolean;
  category: string;
  stoneType: string;
  color: string;
  shape: string;
  carat: number;
  origin: string;
  treatment: string;
  // Optional jewellery attributes — populated by the backend when available.
  // Rendered on the details page only when present (see shop-details page).
  typeOfGold?: string;
  goldWeight?: string;
  certificate: string;
  measurement: string;
  details: string;
  videoUrls: string[];
  certificateUrls: string[];
  diamondPcs: number;
  images: ProductImage[];
};

export type ProductsPagination = {
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  recordsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type ProductsFilters = {
  applied: string[];
};

export type ProductFilterOptions = {
  categories: string[];
  stoneTypes: string[];
  colors: string[];
  shapes: string[];
  origins: string[];
  treatments: string[];
  certificates: string[];
  measurements: string[];
  vendors: string[];
  tags: string[];
  priceRange: {
    min: number;
    max: number;
  };
  ratingRange: {
    min: number;
    max: number;
  };
  caratRange: {
    min: number;
    max: number;
  };
};

export type GetProductsParams = {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  stoneType?: string;
  color?: string;
  shape?: string;
  origin?: string;
  treatment?: string;
  certificate?: string;
  measurement?: string;
  vendor?: string;
  tags?: string[] | string;
  metal?: string[] | string;
  priceMin?: number | string;
  priceMax?: number | string;
  carat?: number | string;
  availability?: boolean | string;
};

type ApiEnvelope<T> = {
  success: boolean;
  code: string;
  message: string;
  data: T;
};

export type ProductsListResponse = ApiEnvelope<ProductListItem[]> & {
  pagination: ProductsPagination;
  filters: ProductsFilters;
};

export type ProductsApiResult = {
  products: ProductListItem[];
  pagination: ProductsPagination;
  appliedFilters: string[];
};

export type AllFiltersResponse = ApiEnvelope<ProductFilterOptions>;

export type ProductDetailResponse = ApiEnvelope<ProductDetail> & {
  recommendedProducts: ProductListItem[];
};

export type ProductCardModel = {
  id: string;
  slug: string;
  title: string;
  category: string;
  price: string;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  available: boolean;
};
