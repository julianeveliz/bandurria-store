import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";

const ItemElement = ({ item }) => {
  return (
    <div>
      <div key={item.name} className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none group-hover:opacity-75">
        <img
          src={item.img}
          alt={item.description}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={item.link}>
              <span aria-hidden="true" className="absolute inset-0" />
              {item.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${item.price}</p>
      </div>
    </div>
    <ItemCounter stock={item.stock} initial="1" />
    </div>
  );
};

export default ItemElement;
