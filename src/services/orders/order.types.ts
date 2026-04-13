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

export type CheckoutSession = {
  id: string;
  url: string;
};

export type CreateOrderResponse = {
  success: boolean;
  code: string;
  message: string;
  data: Order;
  checkoutSession?: CheckoutSession;
};

export type PendingOrderStatus = {
  orderId: string;
  orderNumber: string;
  paymentMethod: PaymentMethod;
};