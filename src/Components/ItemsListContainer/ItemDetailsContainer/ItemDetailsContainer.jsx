import { useState, useEffect, React } from 'react';
import Spinner from '../../Spinner/Spinner';
import ItemDetail from "../ItemDetail/ItemDetail";
import Message from '../../Message/Message';

const ItemDetailsContainer = ({ itemName, showDetails, hideItemDetails }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [itemToShow, setItemToShow] = useState(null);

  useEffect(() => {
    const getItem = new Promise((result, rejection) => {
      setTimeout(() => {
        if (true) {
          result([
            {
              name: "Ciervo",
              id: 1,
              link: "#",
              price: 499,
              description: "Cuaderno de 80 hojas lisas con motivo de ciervos",
              longDescription: "Cuaderno de 80 hojas lisas con motivo de ciervos, con diferentes ilustraciones. Incluye separadores de regalo.",
              img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-huemul000021-a273ae3fc238d7fe5516508248849387-320-0.jpg",
              stock: 6,
            },
            {
              name: "Búho",
              id: 2,
              link: "#",
              price: 499,
              description: "Cuaderno de 80 hojas lisas con motivo de búhos",
              longDescription: "Cuaderno de 80 hojas lisas con motivo de búhos, con diferentes ilustraciones. Incluye separadores de regalo.",
              img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-lechuza00001-21-0c1ea313923b9d7a1616508225052234-320-0.jpg",
              stock: 3,
            },
            {
              name: "Puma",
              id: 3,
              link: "#",
              price: 499,
              description: "Cuaderno de 80 hojas lisas con motivo de pumas",
              longDescription: "Cuaderno de 80 hojas lisas con motivo de pumas, con diferentes ilustraciones. Incluye separadores de regalo.",
              img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/puma_00003_baja1-2a844699ef1c576bc716359495019742-320-0.jpg",
              stock: 9,
            },
            {
              name: "Berries",
              id: 4,
              link: "#",
              price: 499,
              description: "Cuaderno de 80 hojas lisas con motivo de berries",
              longDescription: "Cuaderno de 80 hojas lisas con motivo de berries, con diferentes ilustraciones. Incluye separadores de regalo.",
              img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-berries000011-c5be1ab5bb06a0d25216508190474429-320-0.jpg",
              stock: 2,
            },
          ]);
        } else {
          rejection("Ha ocurrido un error en la comunicación con el servidor. Por favor, intente nuevamente más tarde.");
        }
      }, 2000);
    });

    getItem
      .then((results) => {
        const itemToShow = results.filter(result => {
          return result.name === itemName;
        });

        setItemToShow(itemToShow[0]);
      })
      .catch((rejection) => {
        setError(rejection);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <div>
      {loading && <Spinner />}
      {error && <Message message={error}/>}
      {itemToShow && <ItemDetail item={itemToShow} showDetails={showDetails} hideItemDetails={hideItemDetails} />}
    </div>
  );
};

export default ItemDetailsContainer;
