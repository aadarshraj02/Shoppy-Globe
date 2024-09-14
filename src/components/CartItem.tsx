import { FaTrash } from "react-icons/fa";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

const CartItem = ({
  id,
  name,
  price,
  qty,
  image,
  onIncrement,
  onDecrement,
  onRemove,
}: CartItemProps): JSX.Element => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center border-b py-2 sm:px-4 justify-between">
      <div className="flex gap-4 items-center">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 sm:h-20 sm:w-20 object-cover"
        />{" "}
        <div>
          <h3 className="text-sm sm:text-lg font-semibold">{name}</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Price: ${price.toFixed(2)}
          </p>
          <p className="text-gray-600 text-xs sm:text-sm">Quantity: {qty}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 ml-3 sm:ml-0">
        <button
          onClick={onDecrement}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          -
        </button>
        <button
          onClick={onIncrement}
          className="bg-green-500 text-white px-2 py-1 rounded"
        >
          +
        </button>
        <button onClick={onRemove} className="text-red-500">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
