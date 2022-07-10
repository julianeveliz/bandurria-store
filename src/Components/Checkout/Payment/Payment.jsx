import React from "react";
import { useState } from "react";
import Spinner from "../../Spinner/Spinner";
import { Link } from "react-router-dom";

const Payment = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) return <Spinner />;

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py">
              <div className="border-t border-gray-200" />
            </div>
          </div>
          <div className="mt-10 sm:mt-2">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Método de pago
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Ingresa los detalles del método de pago que utilizarás
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="card-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nombre y apellido de la tarjeta
                          </label>
                          <input
                            type="text"
                            name="card-name"
                            id="card-name"
                            autoComplete="given-name"
                            className="mt-1 focus:ring-custbrown focus:border-custbrown block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="card-type"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tipo de tarjeta
                          </label>
                          <select
                            id="card-type"
                            name="card-type"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-custbrown focus:border-custbrown sm:text-sm"
                          >
                            <option>Crédito</option>
                            <option>Débito</option>
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="card-expire"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Fecha de vencimiento
                          </label>
                          <input
                            type="date"
                            name="card-expire"
                            id="card-expire"
                            className="mt-1 focus:ring-custbrown focus:border-custbrown block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="cvc-card"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Código de seguridad
                          </label>
                          <input
                            type="text"
                            name="cvc-card"
                            id="cvc-card"
                            className="mt-1 focus:ring-custbrown focus:border-custbrown block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    <Link to={'/checkout/confirm'}>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-custgreen hover:bg-custbrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custbrown"
                        >
                          Continuar
                        </button>
                      </div>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
