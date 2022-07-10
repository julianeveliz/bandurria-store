import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import ItemsList from "./ItemList/ItemsList";
import Message from "../Message/Message";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemsListContainer = ({ isLanding }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState(null);
  const { categoryID } = useParams();

  useEffect(() => {
    const itemsSearch = new Promise((results, rejection) => {
      setLoading(true);
      const dataBase = getFirestore();
      let itemsCollection = [];
      let items = [];

      if (categoryID) {
        itemsCollection = query(collection(dataBase, 'items'), where('category', '==', categoryID));
      } else {
        itemsCollection = collection(dataBase, "items");
      }

      getDocs(itemsCollection).then((snapshot) => {
        if (snapshot.size === 0) {
          rejection(
            "Ha ocurrido un error en la comunicación con el servidor. Por favor, intente nuevamente más tarde."
          );
        }

        items = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        results(items);
      });
    });

    itemsSearch
      .then((results) => {
        setItems(results);
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
      {loading && <Spinner />}
      {error && <Message message={error} />}
      {items && <ItemsList items={items} isLanding={isLanding} />}
    </div>
  );
};

export default ItemsListContainer;
