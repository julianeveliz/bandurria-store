import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { DataContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CartContainer = () => {
  const { showCart, setShowCart, cart, removeItem, total, setCartTotal, quantity, setQuantity } =
    useContext(DataContext);

  const calculateCartTotal = () => {
    let total = 0;

    cart.forEach((item) => {
      total += item.price;
    });

    setCartTotal(total);
  };

  const isCartEmpty = () => {
    return cart.length === 0;
  };

  const updateQuantity = () => {
    let totalQuantity = 0;

    for (let item of cart) {
      totalQuantity += item.quantity;
    }

    setQuantity(totalQuantity);
  }

  useEffect(() => {
    calculateCartTotal();
    updateQuantity();
  });

  return (
    <Transition.Root show={showCart} as={Fragment}>
      <Dialog as="div" className="sticky top-0 z-50" onClose={setShowCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {" "}
                          Carrito{" "}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center select-none">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setShowCart(false)}
                          >
                            <span className="sr-only">Cerrar</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {isCartEmpty() ? <span className="text-gray-500">Agrega productos para continuar</span> : ''}
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
                                      <p className="ml-4">
                                        ${product.basePrice}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Cantidad: {product.quantity}
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-custbrown hover:text-custgreen"
                                        onClick={() => removeItem(product.id)}
                                      >
                                        Eliminar
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>${total}</p>
                      </div>
                      {
                        quantity > 0 ?
                        <Link to="/checkout/shipping">
                        <div
                          className="mt-6"
                          onClick={() => setShowCart(false)}
                        >
                          <span className="flex items-center justify-center rounded-md border border-transparent bg-custgreen px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-custbrown">
                            Finalizar compra
                          </span>
                        </div>
                      </Link> : ''
                      }
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          { quantity > 0 ? `o ` : ''}
                          <button
                            type="button"
                            className="font-medium text-custbrown hover:text-custgreen"
                            onClick={() => setShowCart(false)}
                          >
                            { quantity > 0 ? 'Continuar comprando' : 'Volver'}
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CartContainer;
