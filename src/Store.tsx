import { useState, useEffect } from "react";
import { Product, StoreProps } from "./assets/interfaces";
import { useNavigate } from "react-router-dom";

export default function Store({ products, closeCart }: StoreProps) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("all items");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Check if products are available
    if (products.length > 0) {
      setFilteredProducts(products);
    }
  }, [products]);

  function filterProducts(newCategory: string) {
    if (newCategory !== "all items") {
      const newFilter: Product[] = products.filter((product) => {
        return product.category === newCategory;
      });

      setFilteredProducts(newFilter);
    } else {
      setFilteredProducts(products);
    }
    setFilter(newCategory);
  }

  return (
    <div className="flex flex-col justify-center md:m-20 xs:mt-20 xs:mb-20 xs:max-w-xs md:max-w-5xl">
      <div className="xs:flex xs:justify-center xs:items-center xs:text-xl md:block md:text-5xl border-b-4 border-black">
        Store
      </div>
      <div className="xs:text-xs md:text-base md:flex md:justify-between my-8">
        <p className="xs:text-transparent md:text-black md:text-3xl">
          {filter}
        </p>
        <div className="flex gap-6">
          <button
            onClick={() => filterProducts("all items")}
            className="button-style"
          >
            all
          </button>
          <button
            onClick={() => filterProducts("men's clothing")}
            className="button-style"
          >
            men's clothing
          </button>
          <button
            onClick={() => filterProducts("women's clothing")}
            className="button-style"
          >
            women's clothing
          </button>
          <button
            onClick={() => filterProducts("electronics")}
            className="button-style"
          >
            electronics
          </button>
          <button
            onClick={() => filterProducts("jewelery")}
            className="button-style"
          >
            jewlery
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-5">
        {filteredProducts.map((product) => (
          <div
            className="flex flex-col justify-center items-center border border-black p-5 hover:border-lime-600 hover:border-4 bg-white md:w-64 md:h-64 xs:w-40 xs:h-40"
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
    </div>
  );
}
