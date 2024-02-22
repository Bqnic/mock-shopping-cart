import { useEffect, useState } from "react";
import getProducts from "./assets/ProductsAPI";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import { Product } from "./assets/interfaces";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data: Product[] = await getProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <nav className="flex gap-10 justify-center align-middle text-xl p-3 transition-all duration-500">
        <Link to="/" className="hover:text-2xl transition-all duration-500">
          Home
        </Link>
        <Link
          to="/store"
          className="hover:text-2xl transition-all duration-500"
        >
          Store
        </Link>
        <a className="hover:text-2xl transition-all duration-500" href="">
          About
        </a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="store" element={<Store products={products} />}></Route>
      </Routes>
    </>
  );
}

export default App;
