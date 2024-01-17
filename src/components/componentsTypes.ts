export interface ProductType {
  _id: string;
  title: string;
  description: string | null;
  stock: number;
  price: number;
  discount: number;
  colors: [string];
  sold: number | null;
  thumbnail: string;
  images: [string] | null;
  type: string;
  productUserId: string;
  specs: ProductSpecsObjectType;
  rating: ProductRatingType;
}

export interface ProductSpecsObjectType {
  frameSize: [string] | null;
  wheelSize: [number] | null;
  class: string | null;
  nos: string | null;
  cr: string | null;
}

export interface ProductRatingType {
  rate: number | null;
  count: number | null;
}

export interface OrderItemType {
  _id: string;
  title: string;
  thumbnail: string;
  color: string;
  quantity: number;
  price: number;
}

export interface CartOrderItemType {
  _id: string;
  productId: {
    specs: {
      frameSize: [string];
      wheelSize: [number];
      class: string;
      nos: string;
      cr: string;
    };
  };
  purchasedUserId: string;
  currentPrice: number;
  quantity: number;
  color: string;
  frameSize: string;
  wheelSize: string;
}
