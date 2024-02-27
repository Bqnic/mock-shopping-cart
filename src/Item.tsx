import { useParams } from "react-router-dom";
import { ItemProps, Product } from "./assets/interfaces";
import OtherItems from "./OtherItems";

export default function Item({
  products,
  addProductToCart,
  closeCart,
}: ItemProps) {
  const { productID } = useParams();

  const product: Product | undefined = productID
    ? products.find((product) => product.id === parseInt(productID))
    : undefined;

  const sameCategoryProducts: Product[] = products.filter((element) => {
    if (element !== product) return element.category === product?.category;
  });

  const options = [];
  for (let i = 1; i <= 100; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="flex flex-col xs:mt-20 xs:mb-20 md:m-20">
      <div className="flex items-center justify-center md:flex-row xs:flex-col xs:gap-2 md:p-6 lg:gap-32">
        <div className="gap-2 flex flex-col flex-wrap w-96 xs:justify-center xs:items-center">
          <p className="underline">{product?.category}</p>
          <p className="md:text-2xl xs:text-md xs:text-center">
            {product?.title}
          </p>
          <img
            className="lg:w-96 lg:h-96 md:w-60 md:h-60 xs:w-52 xs:h-52 border border-black"
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

              const didAdd: boolean = addProductToCart(
                product,
                content ? parseInt(content.value) : 1
              );

              if (didAdd) {
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
              }
            }}
          >
            Add To Cart
          </button>
        </div>

        <div className="w-96 gap-5 flex flex-col xs:justify-center xs:items-center">
          <p className="xs:w-52 md:w-fit xs:text-xs xs:text-center md:text-base">
            {product?.description}
          </p>
          <p className="md:text-4xl xs:text-2xl underline underline-offset-8">
            {product?.price}$
          </p>
          <p className="md:text-2xl">
            {product?.rating.rate}/5 over {product?.rating.count} user reviews
          </p>
        </div>
      </div>
      <div className="tn-box bg-sky-300" id="notify">
        <p>Added to cart successfully!</p>
        <div className="tn-progress"></div>
      </div>

      <div className="flex flex-col justify-center p-5 mt-8">
        <p className="text-2xl mb-5 text-center underline">
          Other items from the same category
        </p>
        <OtherItems products={sameCategoryProducts} closeCart={closeCart} />
      </div>
    </div>
  );
}
