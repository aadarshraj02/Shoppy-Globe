import ProductItem from "../components/ProductItem";
import SearchProduct from "../components/SearchProduct";

const ProductList = (): JSX.Element => {
  return (
    <div>
      <SearchProduct />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-3">
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductList;
