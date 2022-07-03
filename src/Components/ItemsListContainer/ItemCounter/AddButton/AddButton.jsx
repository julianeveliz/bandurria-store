import React from "react";

const AddButton = ({ quantity, onAdd }) => {

  return (
    <div className="flex justify-center">
      <button
        type="submit"
        onClick={() => onAdd(quantity)}
        className="mt-2 w-3/6 bg-custgreen border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-custbrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custpink"
      >
        Agregar
      </button>
    </div>
  );
};

export default AddButton;
