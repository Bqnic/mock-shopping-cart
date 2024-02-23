import { CartProps } from "./assets/interfaces";

export default function Cart({ productsInCart }: CartProps) {
  let totalPrice: number = 0;
  for (let i = 0; i < productsInCart.length; i++) {
    totalPrice += productsInCart[i].product.price * productsInCart[i].quantity;
  }

  return (
    <div>
      {productsInCart.map((productInCart) => (
        <div>
          <p>{productInCart.product.title}</p>
          <img src={productInCart.product.image} alt="image" />
          <p>{productInCart.product.price}</p>
          <p>{productInCart.quantity}</p>
          <p>
            Calculated price with quantity:{" "}
            {(productInCart.product.price * productInCart.quantity).toFixed(2)}
          </p>
        </div>
      ))}
      <p>Total price: {totalPrice.toFixed(2)}</p>
    </div>
  );
}
