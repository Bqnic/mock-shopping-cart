import { useEffect, useState } from "react";
import getProducts from "./assets/ProductsAPI";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import { Product, ProductWithQuantity } from "./assets/interfaces";
import Cart from "./Cart";
import Item from "./Item";
import About from "./About";

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

  function openCart() {
    document.getElementById("cart")?.classList.add("opened");
  }

  function closeCart() {
    document.getElementById("cart")?.classList.remove("opened");
  }

  return (
    <>
      <nav className="flex gap-10 justify-center align-middle text-xl p-3 transition-all duration-500">
        <Link
          onClick={() => closeCart()}
          to="/"
          className="hover:text-2xl transition-all duration-500"
        >
          Home
        </Link>
        <Link
          onClick={() => closeCart()}
          to="/store"
          className="hover:text-2xl transition-all duration-500"
        >
          Store
        </Link>
        <Link
          onClick={() => closeCart()}
          to="/about"
          className="hover:text-2xl transition-all duration-500"
        >
          About
        </Link>
      </nav>

      <img
        className="w-14 h-14 absolute right-0 top-0 cursor-pointer"
        src="../cart.png"
        alt="cart"
        onClick={() => openCart()}
      />

      <div className="flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="store"
            element={<Store products={products} closeCart={closeCart} />}
          ></Route>
          <Route
            path="/store/:productID"
            element={
              <Item
                products={products}
                addProductToCart={addProductToCart}
                closeCart={closeCart}
              />
            }
          ></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </div>

      <Cart
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
        closeCart={closeCart}
      />
    </>
  );
}

export default App;
