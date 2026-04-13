export type WishlistItem = {
  productId: string;
  title: string;
  price: number;
  thumbnail: string;
  addedAt: string;
};

export type Wishlist = {
  id: string;
  createdAt: string;
  updatedAt: string;
  items: WishlistItem[];
  isActive: boolean;
};

export type WishlistResponse = {
  success: boolean;
  code: string;
  message: string;
  data: Wishlist;
};

export type WishlistStatsResponse = {
  success: boolean;
  code: string;
  message: string;
  data: {
    totalValue: number;
  };
};
