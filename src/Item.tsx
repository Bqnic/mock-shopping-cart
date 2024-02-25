import { useParams } from "react-router-dom";
import { ItemProps, Product } from "./assets/interfaces";

export default function Item({ products, addProductToCart }: ItemProps) {
  const { productID } = useParams();

  const product: Product | undefined = productID
    ? products.find((product) => product.id === parseInt(productID))
    : undefined;

  const options = [];
  for (let i = 1; i <= 100; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center p-6 gap-32">
        <div className="gap-2 flex flex-col flex-wrap w-96">
          <p className="underline">{product?.category}</p>
          <p className="text-2xl">{product?.title}</p>
          <img
            className="w-96 h-96 border border-black"
            src={product?.image}
            alt="image"
          />

          <div className="flex gap-3">
            <label className="text-xl" htmlFor="quantity">
              Quantity:
            </label>
            <select
              className="bg-transparent text-xl cursor-pointer"
              name="quantity"
              id="quantity"
            >
              {options}
            </select>
          </div>
          <button
            className="border border-black p-1 rounded-full w-44 self-center mt-4 disabled:opacity-45 disabled:pointer-events-none hover:w-48 hover:bg-lime-200 transition-all duration-500"
            id="add-to-cart"
            onClick={() => {
              const content = document.getElementById(
                "quantity"
              ) as HTMLSelectElement;

              addProductToCart(product, content ? parseInt(content.value) : 1);

              document.getElementById("notify")?.classList.add("active");
              document
                .getElementById("add-to-cart")
                ?.setAttribute("disabled", "true");

              setTimeout(() => {
                document.getElementById("notify")?.classList.remove("active");
                document
                  .getElementById("add-to-cart")
                  ?.removeAttribute("disabled");
              }, 1500);
            }}
          >
            Add To Cart
          </button>
        </div>

        <div className="w-96 gap-5 flex flex-col">
          <p>{product?.description}</p>
          <p className="text-4xl underline underline-offset-8">
            {product?.price}$
          </p>
          <p className="text-2xl">
            {product?.rating.rate}/5 over {product?.rating.count} user reviews
          </p>
        </div>
      </div>
      <div className="tn-box bg-sky-300" id="notify">
        <p>Added to cart successfully!</p>
        <div className="tn-progress"></div>
      </div>
    </>
  );
}
