// @ts-check
import { useState, useEffect } from "react";
import Spinner from "../../Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import Message from "../../Message/Message";
import { useParams } from "react-router-dom";

const ItemDetailsContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [itemToShow, setItemToShow] = useState(null);
  const { itemID } = useParams();


  useEffect(() => {
    if (itemID) {
      const getItem = new Promise((result, rejection) => {
        setLoading(true);

        setTimeout(() => {
          if (true) {
            result([
              {
                name: "Ciervo",
                id: 1,
                category: "cuadernos",
                description: "Cuaderno de 80 hojas lisas con motivo de ciervos",
                price: 499,
                img: [
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-huemul000021-a273ae3fc238d7fe5516508248849387-640-0.jpg",
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/huemul_00004_baja1-b46b3d0e22b1cd3f4b16359498933721-640-0.jpg",
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/huemul_00005_baja1-de92ed49ea98ab466516359498933547-640-0.jpg",
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-huemul000031-bd37655ca3c91124cd16508248852382-640-0.jpg",
                ],
                stock: 6,
                features: [
                  {
                    name: "Origen",
                    description: "Hecho por Ediciones de la Montaña",
                  },
                  {
                    name: "Material",
                    description: "Papel reciclado, anillado de plástico",
                  },
                  {
                    name: "Detalles",
                    description:
                      "Cuaderno de 80 hojas lisas con motivo de ciervos, con diferentes ilustraciones en separadores cada 20 páginas.",
                  },
                  {
                    name: "Regalo",
                    description: "Separadores con motivos patagónicos",
                  },
                ],
              },
              {
                name: "Búho",
                id: 2,
                category: "cuadernos",
                description: "Cuaderno de 80 hojas lisas con motivo de búhos",
                price: 499,
                img: [
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-lechuza00001-21-0c1ea313923b9d7a1616508225052234-320-0.jpg",
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-y-libreta-lechuza-000021-d14a6b4eb1f04797ce16508229277527-640-0.jpg",
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-y-libreta-lechuza-000011-2f4cf0bf1138416ba716508229277072-640-0.jpg",
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/lechuza_00012_baja1-b34455b853beb827c916359733256326-640-0.jpg",
                ],
                stock: 3,
                features: [
                  {
                    name: "Origen",
                    description: "Hecho por Ediciones de la Montaña",
                  },
                  {
                    name: "Material",
                    description: "Papel reciclado, anillado de plástico",
                  },
                  {
                    name: "Detalles",
                    description:
                      "Cuaderno de 80 hojas lisas con motivo de búhos, con diferentes ilustraciones en separadores cada 20 páginas.",
                  },
                  {
                    name: "Regalo",
                    description: "Separadores con motivos patagónicos",
                  },
                ],
              },
              {
                name: "Puma",
                id: 3,
                category: "cuadernos",
                description: "Cuaderno de 80 hojas lisas con motivo de pumas",
                price: 499,
                img: [
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/libreta-y-cuaderno-puma000011-84c0be4a79beb1780316508233729780-640-0.jpg",
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/libreta-y-cuaderno-puma000021-5570ff146b0b0a88ea16508233728626-640-0.jpg",
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/puma_00003_baja11-2a844699ef1c576bc716359723917403-640-0.jpg",
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/puma_00009_baja11-cb51505d075eede7e216359723915993-640-0.jpg",
                ],
                stock: 9,
                features: [
                  {
                    name: "Origen",
                    description: "Hecho por Ediciones de la Montaña",
                  },
                  {
                    name: "Material",
                    description: "Papel recilado, anillado de plástico",
                  },
                  {
                    name: "Detalles",
                    description:
                      "Cuaderno de 80 hojas lisas con motivo de pumas, con diferentes ilustraciones en separadores cada 20 páginas.",
                  },
                  {
                    name: "Regalo",
                    description: "Separadores con motivos patagónicos",
                  },
                ],
              },
              {
                name: "Berries",
                id: 4,
                category: "cuadernos",
                price: 499,
                description: "Cuaderno de 80 hojas lisas con motivo de berries",
                img: [
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-y-libreta-berries000011-8a682d94c63177ce3e16508195434906-640-0.jpg",
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-berries0000111-c5be1ab5bb06a0d25216508195434515-640-0.jpg",
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-berries0000211-dbf896829b534f5c8a16508195434549-640-0.jpg",
                  "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/773/911/products/cuaderno-berries0000411-5adc3dbfe5b7849d7116508195433712-640-0.jpg",
                ],
                stock: 2,
                features: [
                  {
                    name: "Origen",
                    description: "Hecho por Ediciones de la Montaña",
                  },
                  {
                    name: "Material",
                    description: "Papel recilado, anillado de plástico",
                  },
                  {
                    name: "Detalles",
                    description:
                      "Cuaderno de 80 hojas lisas con motivo de berries, con diferentes ilustraciones en separadores cada 20 páginas.",
                  },
                  {
                    name: "Regalo",
                    description: "Separadores con motivos patagónicos",
                  },
                ],
              },
              {
                name: "Pack de 4 ",
                id: 5,
                category: "stickers",
                price: 200,
                description: "Pack de 4 stickers con motivos de montaña",
                img: [
                  "https://cdn.shopify.com/s/files/1/0070/3984/4410/products/image_5d804e53-135a-4e3f-9ed3-7864a793de00_1296x.jpg?v=1595871782",
                  "https://cdn.shopify.com/s/files/1/0070/3984/4410/products/image_9f3f27b9-0268-4b4f-bccb-8d00d4d60e28_1296x.jpg?v=1595871842",
                  "https://cdn.shopify.com/s/files/1/0070/3984/4410/products/IMG_0031_1296x.jpg?v=1633393654",
                  "https://cdn.shopify.com/s/files/1/0070/3984/4410/products/IMG_0036_1296x.jpg?v=1633388329",
                ],
                stock: 2,
                features: [
                  { name: "Origen", description: "Hecho por Thrown" },
                  {
                    name: "Material",
                    description: "Papel laminado, pegamento",
                  },
                  {
                    name: "Detalles",
                    description:
                      "Cuatro stickers con diferentes ilustraciones.",
                  },
                  {
                    name: "Regalo",
                    description: "Un sticker adicional, aleatorio.",
                  },
                ],
              },
            ]);
          } else {
            rejection(
              "Ha ocurrido un error en la comunicación con el servidor. Por favor, intente nuevamente más tarde."
            );
          }
        }, 2000);
      });

      getItem
        .then((results) => {
          if (itemID) {
            const itemToShow = results.find((result) => {
              return Number(result.id) === Number(itemID);
            });

            setItemToShow(itemToShow);
          }
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
