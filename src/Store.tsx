import { StoreProps } from "./assets/interfaces";
import { useNavigate } from "react-router-dom";

export default function Store({ products }: StoreProps) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center flex-wrap m-10 gap-5">
      {products.map((product) => (
        <div
          className="bg-white w-64 h-64 flex flex-col justify-center items-center border border-black p-5"
          key={product.id}
          onClick={() => {
            navigate(`/store/${product.id}`);
          }}
        >
          <p>{product.title}</p>
          <img className="w-36 h-36" src={product.image} alt="image" />
        </div>
      ))}
    </div>
  );
}
