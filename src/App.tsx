import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/Checkout";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import OrderSuccess from "./pages/OrderSuccess";
import ProductDetails from "./pages/ProductDetails";
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
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
