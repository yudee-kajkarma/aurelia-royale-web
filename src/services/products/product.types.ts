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
