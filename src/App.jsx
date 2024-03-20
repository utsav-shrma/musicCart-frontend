import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductListPage from "./pages/productListPage/ProductListPage";
import ProductPage from "./pages/productPage/ProductPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<ProductListPage></ProductListPage>}></Route>
      <Route path="/product" element={<ProductPage></ProductPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
