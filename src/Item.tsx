import { useParams } from "react-router-dom";
import { ItemProps, Product } from "./assets/interfaces";

export default function Item({ products, addProductToCart }: ItemProps) {
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

      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        name="quantity"
        id="quantity"
        min="1"
        max="100"
        defaultValue="1"
      />
      <button
        onClick={() => {
          const content = document.getElementById(
            "quantity"
          ) as HTMLInputElement;

          addProductToCart(product, content ? parseInt(content.value) : 1);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}
