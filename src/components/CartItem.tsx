// src/components/CartItem.tsx

import React from "react";
import { FaTrash } from "react-icons/fa";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  qty: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

const CartItem = ({
  id,
  name,
  price,
  qty,
  onIncrement,
  onDecrement,
  onRemove,
}: CartItemProps): JSX.Element => {
  return (
    <div className="flex items-center border-b py-4">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">Price: ${price.toFixed(2)}</p>
        <p className="text-gray-600">Quantity: {qty}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onDecrement}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          -
        </button>
        <button
          onClick={onIncrement}
          className="bg-blue-500 text-white px-2 py-1 rounded"
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
