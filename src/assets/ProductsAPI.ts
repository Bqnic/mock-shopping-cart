import { Product } from "./interfaces";

export default async function getProducts() {
  const response: Response = await fetch(`https://fakestoreapi.com/products`);
  const data: Product[] = await response.json();

  return data;
}
