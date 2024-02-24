import { CartProps } from "./assets/interfaces";

export default function Cart({ productsInCart }: CartProps) {
  let totalPrice: number = 0;
  for (let i = 0; i < productsInCart.length; i++) {
    totalPrice += productsInCart[i].product.price * productsInCart[i].quantity;
  }

  return (
    <div className="flex flex-col flex-wrap m-10 gap-5">
      {productsInCart.map((productInCart) => (
        <div className="flex flex-col justify-center">
          <p>{productInCart.product.title}</p>
          <img
            className="w-36 h-36"
            src={productInCart.product.image}
            alt="image"
          />
          <p>Price: {productInCart.product.price}$</p>
          <p>Quantity: {productInCart.quantity}</p>
          <p>
            Total price:{" "}
            {(productInCart.product.price * productInCart.quantity).toFixed(2)}$
          </p>
        </div>
      ))}
      <p>Cart: {totalPrice.toFixed(2)}$</p>
    </div>
  );
}
