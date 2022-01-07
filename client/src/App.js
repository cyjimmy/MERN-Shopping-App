import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import Store from "./pages/Store";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Store />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/product" element={<Products />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
