import ProductItem from "../components/ProductItem";
import SearchProduct from "../components/SearchProduct";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductList = (): JSX.Element => {
  const { products, loading } = useFetchProducts();

  const handleAddToCart = (id: number) => {
    console.log(`Product ${id} added to cart`);
  };

  if (loading) {
    return <p className="text-center mt-6">Loading products...</p>;
  }

  return (
    <div>
      <SearchProduct />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-3">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.title}
            price={`$${product.price}`}
            image={product.thumbnail}
            rating={product.rating}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
