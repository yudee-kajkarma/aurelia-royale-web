export type AdminOrderStatus = "PENDING" | "CONFIRMED" | "SHIPPED" | "DELIVERED" | "CANCELLED";

export type AdminPaymentStatus = "PENDING" | "PROCESSING" | "PAID" | "REFUNDED" | "FAILED" | string;

export type AdminRefundStatus = "NONE" | "PENDING" | "COMPLETED" | "FAILED" | string;

export type AdminOrderItem = {
  productId: string;
  sku: string;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

export type AdminShippingAddress = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
};

export type AdminOrder = {
  id: string;
  createdAt: string;
  updatedAt: string;
  orderNumber: string;
  items: AdminOrderItem[];
  shippingAddress: AdminShippingAddress;
  paymentMethod: string;
  paymentStatus: AdminPaymentStatus;
  orderStatus: AdminOrderStatus;
  totalAmount: number;
  totalItems: number;
  refundStatus: AdminRefundStatus;
};

export type AdminOrdersPagination = {
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  recordsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type AdminOrderListFilters = {
  page?: number;
  limit?: number;
};

export type AdminOrdersResult = {
  orders: AdminOrder[];
  pagination: AdminOrdersPagination;
};

export type UpdateAdminOrderStatusPayload = {
  status: AdminOrderStatus;
};

export type VerifyAdminOrderDeliveryPayload = {
  otp: string;
};