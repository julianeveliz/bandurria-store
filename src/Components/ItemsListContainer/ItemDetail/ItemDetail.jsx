// @ts-check
import { useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import BuyButton from "./BuyButton/BuyButton";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (count) => {
    alert(`Se agregaron ${count} ${item.name} al carrito`);
    setItemCount(count);
    console.log(itemCount);
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{item.name}</h2>
          <p className="mt-4 text-gray-500">
            ${item.price}
          </p>

          <ItemCounter stock={item.stock} initial={"1"} onAdd={onAdd}/>
          <Link to={'/cart'}>
            <BuyButton />
          </Link>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {item.features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={item.img[0]}
            alt={item.description}
            className="bg-gray-100 rounded-lg"
          />
          <img
            src={item.img[1]}
            alt={item.description}
            className="bg-gray-100 rounded-lg"
          />
          <img
            src={item.img[2]}
            alt={item.description}
            className="bg-gray-100 rounded-lg"
          />
          <img
            src={item.img[3]}
            alt={item.description}
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
