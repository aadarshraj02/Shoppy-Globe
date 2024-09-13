import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (err:any) {
       return err.message
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, loading };
};

export default useFetchProducts;
