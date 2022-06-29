import React from "react";
import ItemElement from "../ItemElement/ItemElement";
import ItemDetailsContainer from "../ItemDetailsContainer/ItemDetailsContainer";

const ItemsList = ({ items, isLanding }) => {
  const title = isLanding ? 'Productos' : items[0].category;;
  
  return (
    <div className="select-none">
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 capitalize">
          {title}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item) => (
            <ItemElement item={item} key={item.id}/>
          ))}
        </div>
      </div>
      <ItemDetailsContainer/>
    </div>
  </div>
  );
};

export default ItemsList;
