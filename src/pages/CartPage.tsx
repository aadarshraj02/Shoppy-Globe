import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { FaShoppingCart } from "react-icons/fa";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
  selectTotalPrice,
  selectTotalItems,
} from "../redux/slices/CartSlice";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const CartPage = (): JSX.Element => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const totalPrice = useSelector(selectTotalPrice);
  const totalItems = useSelector(selectTotalItems);

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
        <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2 text-zinc-500">
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
          <div className="flex flex-col gap-2">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                qty={item.qty}
                image={item.image}
                onIncrement={() => handleIncrement(item.id)}
                onDecrement={() => handleDecrement(item.id)}
                onRemove={() => handleRemove(item.id)}
              />
            ))}
          </div>
        )}
        <div className="mt-4 p-4 border-t border-gray-300">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Total Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-center">
            <Link to="/checkout">
              <button className="bg-[#1995AD] hover:bg-[#356570] transition-all duration-300 ease-linear text-white px-6 py-3 rounded">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
