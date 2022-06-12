import React from "react";
import ItemElement from "./ItemElement/ItemElement";

const ItemsListContainer = () => {
  const items = [
    {
      name: "Ciervo",
      link: "/",
      price: 499,
      description: "Cuaderno con 80 hojas lisas con motivo de ciervos",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-huemul000021-a273ae3fc238d7fe5516508248849387-320-0.jpg",
    },
    {
      name: "Búho",
      link: "/",
      price: 499,
      description: "Cuaderno de 80 hojas lisas con motivo de búhos",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-lechuza00001-21-0c1ea313923b9d7a1616508225052234-320-0.jpg",
    },
    {
      name: "Puma",
      link: "/",
      price: 499,
      description: "Cuaderno con 80 hojas lisas con motivo de pumas",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/puma_00003_baja1-2a844699ef1c576bc716359495019742-320-0.jpg",
    },
    {
      name: "Berries",
      link: "/",
      price: 499,
      description: "Cuaderno con 80 hojas lisas con motivo de berries",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-berries000011-c5be1ab5bb06a0d25216508190474429-320-0.jpg",
    },
  ];

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Cuadernos
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {items.map((item) => (
              <ItemElement item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsListContainer;
