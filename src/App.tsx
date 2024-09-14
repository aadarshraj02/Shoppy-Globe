import Header from "./components/Header";
import CartPage from "./pages/CartPage";
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
