import { StoreProps } from "./assets/interfaces";
export default function Store({ products }: StoreProps) {
  return (
    <div className="flex justify-center flex-wrap m-10 gap-5">
      {products.map((product, index) => (
        <div
          className="bg-white w-64 h-64 flex flex-col justify-center items-center border border-black p-5"
          key={index}
        >
          <p>{product.title}</p>
          <img className="w-36 h-36" src={product.image} alt="image" />
        </div>
      ))}
    </div>
  );
}
