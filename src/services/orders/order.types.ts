export type PaymentMethod = "ONLINE" | "COD";

export type CreateOrderPayload = {
  paymentMethod: PaymentMethod;
  successUrl?: string;
  cancelUrl?: string;
  addressId?: string;
};

export type OrderItem = {
  productId: string;
  sku: string;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
  variantId?: string;
  variantName?: string;
};

export type ShippingAddress = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
};

export type Order = {
  id: string;
  createdAt: string;
  updatedAt: string;
  orderNumber: string;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  paymentStatus: string;
  orderStatus: string;
  totalAmount: number;
  totalItems: number;
  refundStatus: string;
};

export type OrdersPagination = {
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  recordsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type CheckoutSession = {
  id: string;
  url: string;
};

export type RegenerateOrderPaymentPayload = {
  successUrl: string;
  cancelUrl: string;
};

export type CreateOrderResponse = {
  success: boolean;
  code: string;
  message: string;
  data: Order;
  checkoutSession?: CheckoutSession;
};

export type GetOrdersResponse = {
  success: boolean;
  code: string;
  message: string;
  data: Order[];
  pagination: OrdersPagination;
};

export type GetOrderByIdResponse = {
  success: boolean;
  code: string;
  message: string;
  data: Order;
};

export type RegenerateOrderPaymentResponse = {
  success: boolean;
  code: string;
  message: string;
  data: CheckoutSession;
};

export type CancelOrderResponse = {
  success: boolean;
  code: string;
  message: string;
  data: Order;
};

export type PaymentHistoryItem = {
  orderId: string;
  orderNumber: string;
  sessionId: string;
  transactionId?: string;
  amount: number;
  paymentStatus: string;
  orderStatus: string;
  paymentMethod: PaymentMethod;
  createdAt: string;
  updatedAt: string;
};

export type GetPaymentHistoryResponse = {
  success: boolean;
  data: PaymentHistoryItem[];
  pagination: OrdersPagination;
  message: string;
};

export type PendingOrderStatus = {
  orderId: string;
  orderNumber: string;
  paymentMethod: PaymentMethod;
};