import ProductItem from "../components/ProductItem";
import SearchProduct from "../components/SearchProduct";

const ProductList = (): JSX.Element => {
  return (
    <div>
      <SearchProduct />
      <ProductItem />
    </div>
  );
};

export default ProductList;
