import React from "react";
import { useState, useContext } from "react";
import Spinner from "../../Spinner/Spinner";
import { DataContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Confirm = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const {
    cart,
    clearCart,
    total,
    setMessage,
    setCart,
    shippingInformation,
    paymentInformation,
    setOrderInformation,
    setOrderID,
    setPaymentInformation,
    setShippingInformation,
    setLastOrderID,
  } = useContext(DataContext);

  const finishProcess = () => {
    confirmOrder();
  };

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) return <Spinner />;

  const confirmOrder = () => {
    const order = {
      delivery: {
        address: shippingInformation.streetAddress,
        city: shippingInformation.city,
        country: shippingInformation.country,
        email: shippingInformation.emailAddress,
        name:
          shippingInformation.firstName + " " + shippingInformation.lastName,
        postal: shippingInformation.postalCode,
        region: shippingInformation.region,
      },
      items: cart.map((item) => {
        return {
          id: item.id,
          price: item.basePrice,
          title: item.name,
        };
      }),
      total,
      payment: {
        card: paymentInformation.cardNumber,
        name: paymentInformation.cardName,
      },
      date: new Date(),
    };
    
    setOrderInformation(order);

    const orderID = new Promise((result, rejection) => {
      setLoading(true);
      const dataBase = getFirestore();
      const ordersCollection = collection(dataBase, "orders");

      try {
        addDoc(ordersCollection, order).then(({ id }) => {
          result(id);
          setOrderID(id);
        });
      } catch (error) {
        setLastOrderID(null);
        rejection(
          "Ha ocurrido un error en la comunicación con el servidor. Por favor, intente nuevamente más tarde."
        );
      }
    });

    orderID
      .then((result) => {
        setOrderID(result);
        setLastOrderID(result);
        setMessage(
          `La compra se realizó exitosamente`
        );
        setCart([]);
      })
      .catch((rejection) => {
        setError(rejection);
      })
      .finally(() => {
        setLoading(false);
        setOrderInformation(null);
        setOrderID(null);
        setPaymentInformation(null);
        setShippingInformation(null);
      });
  };

  return (
    <>
      <div className="bg-white w-4/12 mx-auto">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="md:col-span-1 mt-3">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Resumen de los productos seleccionados
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Revisa que todo esté bien
              </p>
            </div>
          </div>

          <div className="mt-3">
            <div className="flow-root">
              <ul className="-my-6 divide-y divide-gray-200">
                {cart.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.img[0]}
                        alt={product.description}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <span> {product.name} </span>
                          </h3>
                          <p className="ml-4">${product.basePrice}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">
                          Cantidad: {product.quantity}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total</p>
            <p>${total}</p>
          </div>

          <div className="px-4 py-3 text-right ">
            <Link to={"/"}>
              <button
                type="submit"
                className="inline-flex justify-center mr-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-custgreen hover:bg-custbrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custbrown"
                onClick={() => clearCart()}
              >
                Cancelar
              </button>
            </Link>
            <Link to={"/checkout/summary"}>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-custgreen hover:bg-custbrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custbrown"
                onClick={() => finishProcess()}
              >
                Confirmar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
