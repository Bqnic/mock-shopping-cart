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
  closeCart: Function;
}

export interface CartProps {
  productsInCart: ProductWithQuantity[];
  setProductsInCart: Function;
  closeCart: Function;
}

export interface OtherItemsProps {
  products: Product[];
  closeCart: Function;
}

export interface HomeProps {
  featured: Product[];
  closeCart: Function;
}

export interface NavigationProps {
  closeCart: Function;
}
