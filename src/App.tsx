import { useEffect, useState } from "react";
import getProducts from "./assets/ProductsAPI";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import { Product, ProductWithQuantity } from "./assets/interfaces";
import Cart from "./Cart";
import Item from "./Item";
import Footer from "./Footer";
import Navigation from "./Navigation";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsInCart, setProductsInCart] = useState<ProductWithQuantity[]>(
    []
  );
  const [featured, setFeatured] = useState<Product[]>([]);

  function selectRandomFeaturedProducts(prods: Product[]) {
    const featuredProducts: Product[] = [];
    let randomNumber: number = Math.floor(Math.random() * 14);
    for (let i = 0; i < 4; i++) {
      featuredProducts.push(prods[randomNumber + i]);
    }

    setFeatured(featuredProducts);
  }

  useEffect(() => {
    async function fetchData() {
      const data: Product[] = await getProducts();
      setProducts(data);
      selectRandomFeaturedProducts(data);
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
      <Navigation closeCart={closeCart} />

      <img
        className="md:w-12 md:h-12 xs:w-10 xs:h-10 fixed right-0 top-0 cursor-pointer"
        src="../cart.png"
        alt="cart"
        onClick={() => openCart()}
      />

      <div className="flex flex-col justify-center items-center">
        <div className="max-w-7xl">
          <div className="flex justify-center items-center">
            <Routes>
              <Route
                path="/"
                element={<Home featured={featured} closeCart={closeCart} />}
              ></Route>
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
            </Routes>
          </div>

          <Cart
            productsInCart={productsInCart}
            setProductsInCart={setProductsInCart}
            closeCart={closeCart}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
