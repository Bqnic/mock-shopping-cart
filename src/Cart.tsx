import { CartProps, ProductWithQuantity } from "./assets/interfaces";

export default function Cart({
  productsInCart,
  setProductsInCart,
  closeCart,
}: CartProps) {
  let totalPrice: number = 0;
  for (let i = 0; i < productsInCart.length; i++) {
    totalPrice += productsInCart[i].product.price * productsInCart[i].quantity;
  }

  function removeProductFromCart(toRemoveIndex: number) {
    const newProducts: ProductWithQuantity[] = [...productsInCart];
    newProducts.splice(toRemoveIndex, 1);
    setProductsInCart(newProducts);
  }

  return (
    <div id="cart">
      <button
        onClick={() => closeCart()}
        className="absolute top-0 left-0 w-10 h-10 text-5xl"
      >
        x
      </button>
      {productsInCart.length > 0 ? (
        <>
          <div className="m-10 mt-16 p-12 h-3/4 overflow-auto flex flex-col border border-black bg-white">
            {productsInCart.map((productInCart, index) => (
              <div
                key={productInCart.product.id}
                className="flex flex-col gap-5 p-10 border-b border-black"
              >
                <div className="flex justify-center items-center gap-12">
                  <img
                    className="w-36 h-36"
                    src={productInCart.product.image}
                    alt="image"
                  />
                  <p className="w-32">{productInCart.product.title}</p>
                </div>
                <div>
                  <p>Price: {productInCart.product.price}$</p>
                  <p>Quantity: {productInCart.quantity}</p>
                  <p>
                    Total price:{" "}
                    {(
                      productInCart.product.price * productInCart.quantity
                    ).toFixed(2)}
                    $
                  </p>
                </div>
                <button
                  onClick={() => removeProductFromCart(index)}
                  className="border border-black p-1 rounded-md self-center hover:bg-red-300 transition-all duration-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <p className="text-4xl">Cart: {totalPrice.toFixed(2)}$</p>
          <button className="border border-black p-1 rounded-full w-44 self-center mt-4 disabled:opacity-45 disabled:pointer-events-none hover:w-48 hover:bg-green-300 transition-all duration-500">
            Checkout
          </button>
        </>
      ) : (
        <div className="h-full w-full flex justify-center items-center text-4xl">
          Nothing here yet.
        </div>
      )}
    </div>
  );
}
