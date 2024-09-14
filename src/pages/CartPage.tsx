import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
} from "../redux/slices/CartSlice";

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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
      {cartItems.length === 0 ? <p>Your cart is empty.</p> : <div></div>}
    </div>
  );
};

export default CartPage;
