import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { FaShoppingCart } from "react-icons/fa";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
} from "../redux/slices/CartSlice";
import { Link } from "react-router-dom";

const CartPage = (): JSX.Element => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const handleIncrement = (id: number) => {
    dispatch(incrementQty(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQty(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          Your Cart <FaShoppingCart />
        </h1>
        {cartItems.length === 0 ? (
          <>
            <p className="text-red-500 text-2xl text-center mt-10">
              Your cart is empty.
            </p>
            <div className="flex items-center justify-center h-[40vh]">
              <Link to="/">
                <button className="bg-[#1995AD] hover:bg-[#356570] transition-all duration-300 ease-linear text-white px-4 py-2 mt-2 rounded flex items-center gap-1">
                  Browse Products to add
                </button>{" "}
              </Link>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default CartPage;
