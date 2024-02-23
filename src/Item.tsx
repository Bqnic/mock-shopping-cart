import { useParams } from "react-router-dom";
import { Product, StoreProps } from "./assets/interfaces";

export default function Item({ products }: StoreProps) {
  const { productID } = useParams();

  const product: Product | undefined = productID
    ? products.find((product) => product.id === parseInt(productID))
    : undefined;

  return (
    <div>
      <p>{product?.category}</p>
      <p>{product?.title}</p>
      <img src={product?.image} alt="image" />
      <p>{product?.description}</p>
      <p>{product?.price}$</p>
      <p>
        {product?.rating.rate}/5 over {product?.rating.count} user reviews
      </p>
    </div>
  );
}
