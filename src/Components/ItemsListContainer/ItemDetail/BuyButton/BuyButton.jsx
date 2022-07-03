import React from "react";

const BuyButton = () => {
  return (
    <div className="flex justify-center">
      <button className="mt-2 w-3/6 bg-custgreen border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-custbrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custpink">
        Comprar ahora
      </button>
    </div>
  );
};

export default BuyButton;
