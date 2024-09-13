import { FaShoppingCart } from "react-icons/fa";
const ProductItem = (): JSX.Element => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all duration-200 ease-linear cursor-pointer">
      <img
        src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
        alt=""
        className="h-56 w-full  bg-[#A1D6E2] mb-3 rounded-lg"
      />
      <h3 className="text-xl font-bold">Title</h3>
      <p className="text-gray-600">price:</p>
      <p className="text-xs text-gray-500">Rating:</p>
      <button className="bg-[#1995AD] hover:bg-[#356570] transition-all duration-300 ease-linear text-white px-4 py-2 mt-2 rounded flex items-center gap-1">
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
