import { FaShoppingCart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

interface ProductItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

const ProductItem = ({
  id,
  name,
  price,
  image,
  rating,
}: ProductItemProps): JSX.Element => {
  const shortedTitle = (title: string) => {
    if (title.length > 20) {
      return title.substring(0, 20) + "...";
    }
    return title;
  };

  const dispatch = useDispatch();

  const handleAddToCart = (
    id: number,
    name: string,
    price: number,
    image: string
  ) => {
    dispatch(addToCart({ id, name, price, qty: 1, image }));
  };

  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all duration-200 ease-linear cursor-pointer">
      <img
        src={image}
        alt={name}
        className="h-56 w-full  bg-[#A1D6E2] mb-3 rounded-lg"
      />
      <h3 className="text-xl font-bold">{shortedTitle(name)}</h3>
      <p className="text-gray-600">
        <span className="text-black">Price: $</span>
        {price}
      </p>
      <p className="text-xs text-gray-500 flex items-center gap-1">
        {" "}
        <span className="text-black">Rating:</span>{" "}
        <IoIosStar className="text-yellow-500" /> {rating}
      </p>
      <button
        onClick={() => handleAddToCart(id, name, price, image)}
        className="bg-[#1995AD] hover:bg-[#356570] transition-all duration-300 ease-linear text-white px-4 py-2 mt-2 rounded flex items-center gap-1"
      >
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
