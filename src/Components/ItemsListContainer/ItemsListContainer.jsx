import React, { useState, useEffect } from "react";
import ItemsList from "./ItemList/ItemsList";
import ItemsMessage from "./ItemsMessage/ItemsMessage";

const ItemsListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState(null);

  useEffect(() => {
    const itemsSearch = new Promise((result, rejection) => {
      setTimeout(() => {
        if (true) {
          result([
            {
              name: "Ciervo",
              link: "/",
              price: 499,
              description: "Cuaderno con 80 hojas lisas con motivo de ciervos",
              img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-huemul000021-a273ae3fc238d7fe5516508248849387-320-0.jpg",
              stock: 6
            },
            {
              name: "Búho",
              link: "/",
              price: 499,
              description: "Cuaderno de 80 hojas lisas con motivo de búhos",
              img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-lechuza00001-21-0c1ea313923b9d7a1616508225052234-320-0.jpg",
              stock: 3
            },
            {
              name: "Puma",
              link: "/",
              price: 499,
              description: "Cuaderno con 80 hojas lisas con motivo de pumas",
              img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/puma_00003_baja1-2a844699ef1c576bc716359495019742-320-0.jpg",
              stock: 9
            },
            {
              name: "Berries",
              link: "/",
              price: 499,
              description: "Cuaderno con 80 hojas lisas con motivo de berries",
              img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-berries000011-c5be1ab5bb06a0d25216508190474429-320-0.jpg",
              stock: 2
            },
          ]);
        } else {
          rejection("Ha ocurrido un error en la comunicación con el servidor. Por favor, intente nuevamente más tarde.");
        }
      }, 2000);
    });

    itemsSearch
      .then((result) => {
        setItems(result);
      })
      .catch((rejection) => {
        setError(rejection);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <ItemsMessage message={'Cargando...'}/>}
      {error && <ItemsMessage message={error}/>}
      {items && <ItemsList items={items} />}
    </div>
  );
};

export default ItemsListContainer;
