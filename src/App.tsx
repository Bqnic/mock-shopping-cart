import { useEffect, useState } from "react";
import getProducts from "./assets/ProductsAPI";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import { Product, ProductWithQuantity } from "./assets/interfaces";
import Cart from "./Cart";
import Item from "./Item";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsInCart, setProductsInCart] = useState<ProductWithQuantity[]>(
    []
  );

  useEffect(() => {
    async function fetchData() {
      const data: Product[] = await getProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  function addProductToCart(product: Product, quantity: number) {
    let productArray = [...productsInCart];
    let existingProductIndex: number = checkIfProductIsAlreadyInCart(
      productArray,
      product
    );

    if (existingProductIndex >= 0) {
      if (productArray[existingProductIndex].quantity === 100) {
        alert("There is already the entire stock in your cart.");
        return false;
      } else {
        if (productArray[existingProductIndex].quantity + quantity > 100)
          productArray[existingProductIndex].quantity = 100;
        else productArray[existingProductIndex].quantity += quantity;
      }
    } else productArray.push({ product: product, quantity: quantity });

    setProductsInCart(productArray);
    return true;
  }

  function checkIfProductIsAlreadyInCart(
    productArray: ProductWithQuantity[],
    product: Product
  ) {
    for (let i = 0; i < productArray.length; i++) {
      if (productArray[i].product === product) {
        return i;
      }
    }
    return -1;
  }

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
        <Link to="/cart" className="hover:text-2xl transition-all duration-500">
          Cart
        </Link>
      </nav>

      <div className="flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="store" element={<Store products={products} />}></Route>
          <Route
            path="/store/:productID"
            element={
              <Item products={products} addProductToCart={addProductToCart} />
            }
          ></Route>
          <Route
            path="cart"
            element={<Cart productsInCart={productsInCart} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
