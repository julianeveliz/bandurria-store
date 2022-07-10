import React, { useState, useContext } from "react";
import AddButton from "./AddButton/AddButton";
import { DataContext } from "../../CartContext/CartContext";

const ItemCounter = ({ stock, initial, onAdd }) => {
  const { setMessage } = useContext(DataContext);
  const initialQuantity = Number(initial);
  let [quantity, setQuantity] = useState(initialQuantity);

  const subtraction = () => {
    if (quantity - 1 === 0) {
      setMessage('El stock no puede ser menor a 0');
    } else {
      setQuantity((quantity) => quantity - 1);
    }
  };

  const addition = () => {
    if (quantity + 1 > stock) {
      setMessage(`El stock disponible es ${stock}, has alcanzado el máximo`);
    } else {
      setQuantity((quantity) => quantity + 1);
    }
  };

  return (
    <div className="flex-row justify-items-center content-center select-none">
      <div className="flex justify-center">
        <div className="flex justify-center mt-3 shadow p-2 w-3/6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={subtraction}
          >
            <path
              fillRule="evenodd"
              d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span
            type="text"
            name="quantity"
            id="quantity"
            className="pr-4 pl-4 pt-0 pb-0 sm:text-sm border-none"
            placeholder="1"
          >
            {quantity}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={addition}
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-1">Disponibles: {stock}</p>
      <AddButton quantity={quantity} onAdd={onAdd} />
    </div>
  );
};

export default ItemCounter;
