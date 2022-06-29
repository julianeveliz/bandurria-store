import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import ItemsList from "./ItemList/ItemsList";
import Message from "../Message/Message";
import { useParams } from "react-router-dom";

const ItemsListContainer = ({ isLanding }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState(null);
  const { categoryID } = useParams();

  useEffect(() => {
    const itemsSearch = new Promise((results, rejection) => {
      setLoading(true);

      setTimeout(() => {
        if (true) {
          results([
            {
              name: "Ciervo",
              id: 1,
              category: "cuadernos",
              price: 499,
              description: "Cuaderno de 80 hojas lisas con motivo de ciervos",
              img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-huemul000021-a273ae3fc238d7fe5516508248849387-320-0.jpg",
              stock: 6,
            },
            {
              name: "Búho",
              id: 2,
              category: "cuadernos",
              price: 499,
              description: "Cuaderno de 80 hojas lisas con motivo de búhos",
              img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-lechuza00001-21-0c1ea313923b9d7a1616508225052234-320-0.jpg",
              stock: 3,
            },
            {
              name: "Puma",
              id: 3,
              category: "cuadernos",
              price: 499,
              description: "Cuaderno de 80 hojas lisas con motivo de pumas",
              img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/puma_00003_baja1-2a844699ef1c576bc716359495019742-320-0.jpg",
              stock: 9,
            },
            {
              name: "Berries",
              id: 4,
              category: "cuadernos",
              price: 499,
              description: "Cuaderno de 80 hojas lisas con motivo de berries",
              img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-berries000011-c5be1ab5bb06a0d25216508190474429-320-0.jpg",
              stock: 2,
            },
            {
              name: "Pack de 4",
              id: 5,
              category: "stickers",
              price: 200,
              description: "Pack de 4 stickers con motivos de montaña",
              img: "https://cdn.shopify.com/s/files/1/0070/3984/4410/products/IMG_0036_1296x.jpg?v=1633388329",
              stock: 2,
            },
          ]);
        } else {
          rejection("Ha ocurrido un error en la comunicación con el servidor. Por favor, intente nuevamente más tarde.");
        }
      }, 2000);
    });

    itemsSearch
      .then((results) => {
        if (categoryID) {
          const filteredResults = results.filter((result) => {
            return result.category === categoryID;
          });

          setItems(filteredResults);
        } else {
          setItems(results);
        }
      })
      .catch((rejection) => {
        setError(rejection);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryID]);

  return (
    <div>
      {loading && <Spinner/>}
      {error && <Message message={error}/>}
      {items && <ItemsList items={items} isLanding={isLanding}/>}
    </div>
  );
};

export default ItemsListContainer;
