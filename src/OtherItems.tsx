import { useNavigate } from "react-router-dom";
import { OtherItemsProps } from "./assets/interfaces";

export default function OtherItems({ products, closeCart }: OtherItemsProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center flex-wrap gap-5">
        {products.map((product) => (
          <div
            className="flex flex-col justify-center items-center border border-black p-5 hover:border-sky-600 hover:border-4 bg-white md:w-64 md:h-64 xs:w-40 xs:h-40"
            key={product.id}
            onClick={() => {
              closeCart();
              navigate(`/store/${product.id}`);
            }}
          >
            <p className="xs:text-xs md:text-base">{product.title}</p>
            <img
              className="xs:w-14 xs:h-14 md:w-36 md:h-36"
              src={product.image}
              alt="image"
            />
          </div>
        ))}
      </div>
    </>
  );
}
