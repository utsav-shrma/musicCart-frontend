import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductListPage from "./pages/productListPage/ProductListPage";
import ProductPage from "./pages/productPage/ProductPage";
import { Context } from "./context";
import CartPage from "./pages/cartPage/CartPage";
import CheckOutPage from "./pages/checkoutPage/CheckOutPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<ProductListPage></ProductListPage>}></Route>
      <Route path="/:id" element={<ProductPage></ProductPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route path="/checkout" element={<CheckOutPage></CheckOutPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
