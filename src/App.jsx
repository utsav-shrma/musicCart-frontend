import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductListPage from "./pages/productListPage/ProductListPage";
import ProductPage from "./pages/productPage/ProductPage";
import { Context } from "./context";
import CartPage from "./pages/cartPage/CartPage";
import CheckOutPage from "./pages/checkoutPage/CheckOutPage";
import SuccessPage from "./pages/successPage/SuccessPage";
import InvoiceListPage from "./pages/InvoiceListPage/InvoiceListPage";
import InvoicePage from "./pages/invoicePage/InvoicePage";
import NotFound from "./pages/notFound/NotFound";

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
        <Route path="/success" element={<SuccessPage></SuccessPage>}></Route>
        <Route path="/invoice" element={<InvoiceListPage></InvoiceListPage>}></Route>
        <Route path="/invoiceid" element={<InvoicePage></InvoicePage>}></Route>
        <Route path="/404" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
