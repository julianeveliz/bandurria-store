import { React, useContext } from "react";
import { DataContext } from "../../CartContext/CartContext";

const ClearButton = () => {
  const { clearCart } = useContext(DataContext);

  return (
    <button
      className="bg-custgreen text-sm text-white py-2 px-6 rounded md:ml-8 hover:bg-custgreen-400 duration:500 uppercase"
      onClick={() => clearCart()}
    >
      Vaciar carrito
    </button>
  );
};

export default ClearButton;
