import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import ProductList from "./pages/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order" element={<OrderSuccess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
