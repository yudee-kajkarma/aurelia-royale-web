export type CartItem = {
  productId: string;
  sku: string;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
  addedAt: string;
};

export type Cart = {
  id: string;
  createdAt: string;
  updatedAt: string;
  items: CartItem[];
  isActive: boolean;
};

export type CartResponse = {
  success: boolean;
  code: string;
  message: string;
  data: Cart;
};
