export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface ProductWithQuantity {
  product: Product;
  quantity: number;
}

export interface StoreProps {
  products: Product[];
  closeCart: Function;
}

export interface ItemProps {
  products: Product[];
  addProductToCart: Function;
}

export interface CartProps {
  productsInCart: ProductWithQuantity[];
  closeCart: Function;
}
