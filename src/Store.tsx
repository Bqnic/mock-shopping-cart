import { StoreProps } from "./assets/interfaces";
export default function Store({ products }: StoreProps) {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>{product.id}</div>
      ))}
    </div>
  );
}
