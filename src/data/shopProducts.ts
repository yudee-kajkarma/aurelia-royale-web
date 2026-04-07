export type ShopProduct = {
  id: string;
  name: string;
  price: string;
  category: string;
  imageUrl: string;
  galleryImages: string[];
  description: string;
  reviews: number;
  inStock: boolean;
};

export const shopProducts: ShopProduct[] = [
  {
    id: "bracelet-1",
    name: "Emerald Bracelet",
    price: "$755",
    category: "Bracelet",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet1.png",
    galleryImages: [
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet1.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet3.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet4.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet1.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet3.png",
    ],
    description:
      "Lorem Ipsum Dolor Sit Amet, Conse Elit, Sedid That Was Eiusmod Aboret Dolore Magna Aliqua Conseel Usndi Daimond The Laois Sitamet Sedid Sedid Eiusm.",
    reviews: 3,
    inStock: true,
  },
  {
    id: "bracelet-2",
    name: "Ruby Halo Band",
    price: "$955",
    category: "Bracelet",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet3.png",
    galleryImages: [
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet3.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet1.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet4.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet3.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet1.png",
    ],
    description:
      "Lorem Ipsum Dolor Sit Amet, Conse Elit, Sedid That Was Eiusmod Aboret Dolore Magna Aliqua Conseel Usndi Daimond The Laois Sitamet Sedid Sedid Eiusm.",
    reviews: 3,
    inStock: true,
  },
  {
    id: "bracelet-3",
    name: "Silver Cluster",
    price: "$555",
    category: "Bracelet",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet3.png",
    galleryImages: [
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet3.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet1.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet4.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet3.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet1.png",
    ],
    description:
      "Lorem Ipsum Dolor Sit Amet, Conse Elit, Sedid That Was Eiusmod Aboret Dolore Magna Aliqua Conseel Usndi Daimond The Laois Sitamet Sedid Sedid Eiusm.",
    reviews: 3,
    inStock: true,
  },
  {
    id: "bracelet-4",
    name: "Monogram Chain",
    price: "$355",
    category: "Bracelet",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet4.png",
    galleryImages: [
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet4.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet1.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet3.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet4.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet1.png",
    ],
    description:
      "Lorem Ipsum Dolor Sit Amet, Conse Elit, Sedid That Was Eiusmod Aboret Dolore Magna Aliqua Conseel Usndi Daimond The Laois Sitamet Sedid Sedid Eiusm.",
    reviews: 3,
    inStock: true,
  },
  {
    id: "ear-1",
    name: "Crimson Drops",
    price: "$745",
    category: "Ear Rings",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings1.png",
    galleryImages: [
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings1.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings2.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings3.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings4.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings1.png",
    ],
    description:
      "Lorem Ipsum Dolor Sit Amet, Conse Elit, Sedid That Was Eiusmod Aboret Dolore Magna Aliqua Conseel Usndi Daimond The Laois Sitamet Sedid Sedid Eiusm.",
    reviews: 3,
    inStock: true,
  },
  {
    id: "ear-2",
    name: "Sapphire Teardrop",
    price: "$745",
    category: "Ear Rings",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings2.png",
    galleryImages: [
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings2.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings1.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings3.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings4.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings2.png",
    ],
    description:
      "Lorem Ipsum Dolor Sit Amet, Conse Elit, Sedid That Was Eiusmod Aboret Dolore Magna Aliqua Conseel Usndi Daimond The Laois Sitamet Sedid Sedid Eiusm.",
    reviews: 3,
    inStock: true,
  },
  {
    id: "ear-3",
    name: "Pearl Twins",
    price: "$745",
    category: "Ear Rings",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings3.png",
    galleryImages: [
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings3.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings1.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings2.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings4.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings3.png",
    ],
    description:
      "Lorem Ipsum Dolor Sit Amet, Conse Elit, Sedid That Was Eiusmod Aboret Dolore Magna Aliqua Conseel Usndi Daimond The Laois Sitamet Sedid Sedid Eiusm.",
    reviews: 3,
    inStock: true,
  },
  {
    id: "ear-4",
    name: "Blue Swan Pearl",
    price: "$745",
    category: "Ear Rings",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings4.png",
    galleryImages: [
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings4.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings1.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings2.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings3.png",
      "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings4.png",
    ],
    description:
      "Lorem Ipsum Dolor Sit Amet, Conse Elit, Sedid That Was Eiusmod Aboret Dolore Magna Aliqua Conseel Usndi Daimond The Laois Sitamet Sedid Sedid Eiusm.",
    reviews: 3,
    inStock: true,
  },
];

export function getShopProductById(id: string) {
  return shopProducts.find((product) => product.id === id);
}