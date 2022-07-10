// @ts-check
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../../Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import Message from "../../Message/Message";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailsContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [itemToShow, setItemToShow] = useState(null);
  const { itemID } = useParams();

  useEffect(() => {
    if (itemID) {
      const getItem = new Promise((result, rejection) => {
        setLoading(true);
        const dataBase = getFirestore();
        const elementDB = doc(dataBase, 'items', itemID);

        getDoc(elementDB).then((snapshot) => {
          if (snapshot.exists()) {
            result({
              id: snapshot.id,
              ...snapshot.data()
            });
          } else {
            rejection('Ha ocurrido un error en la comunicación con el servidor. Por favor, intente nuevamente más tarde.');
          }
        });
      });

      getItem
        .then((result) => {
          setItemToShow(result);
        })
        .catch((rejection) => {
          setError(rejection);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [itemID]);

  return (
    <div>
      {loading && <Spinner />}
      {error && <Message message={error} />}
      {itemToShow && <ItemDetail item={itemToShow} />}
    </div>
  );
};

export default ItemDetailsContainer;
