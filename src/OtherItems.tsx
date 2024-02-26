import { useNavigate } from "react-router-dom";
import { OtherItemsProps } from "./assets/interfaces";

export default function OtherItems({ products, closeCart }: OtherItemsProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center flex-wrap gap-5">
        {products.map((product) => (
          <div
            className="bg-white w-64 h-64 flex flex-col justify-center items-center border border-black p-5 hover:border-lime-600 hover:border-4"
            key={product.id}
            onClick={() => {
              closeCart();
              navigate(`/store/${product.id}`);
            }}
          >
            <p>{product.title}</p>
            <img className="w-36 h-36" src={product.image} alt="image" />
          </div>
        ))}
      </div>
    </>
  );
}
