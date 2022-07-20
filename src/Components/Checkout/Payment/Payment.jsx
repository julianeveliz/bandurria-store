import React from "react";
import { useState, useContext } from "react";
import Spinner from "../../Spinner/Spinner";
import { Link } from "react-router-dom";
import { DataContext } from "../../CartContext/CartContext";

const Payment = () => {
  const [loading, setLoading] = useState(true);
  const { paymentInformation, setPaymentInformation } = useContext(DataContext);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) return <Spinner />;

  const handleChange = (e) => {
    const val = e.target.value ? e.target.value : null;
    
    setPaymentInformation({
      ...paymentInformation,
      [e.target.id]: val,
    });
  };

  const areFieldsCompleted = () => {
    if (paymentInformation) {
      const shipInfoLength = Object.keys(paymentInformation).length;

      if (shipInfoLength === 0 || shipInfoLength !== 5) {
        return false;
      }

      let areAllCompleted = true;
      Object.values(paymentInformation).forEach(value => {
        if (value === undefined || value === null || value === "") {
          areAllCompleted = false;
        }
      });

      return areAllCompleted;
    }

    return false;
  };

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
                            id="cardName"
                            onChange={handleChange}
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
                            id="cardType"
                            name="card-type"
                            onChange={handleChange}
                            defaultValue={null}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-custbrown focus:border-custbrown sm:text-sm"
                          >
                            <option value={''}></option>
                            <option>Crédito</option>
                            <option>Débito</option>
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-4 break-after-all">
                          <label
                            htmlFor="card-number"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Número de la tarjeta
                          </label>
                          <input
                            type="text"
                            name="card-number"
                            onChange={handleChange}
                            id="cardNumber"
                            className="mt-1 focus:ring-custbrown focus:border-custbrown block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
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
                            onChange={handleChange}
                            id="cardExpire"
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
                            id="cvcCard"
                            onChange={handleChange}
                            className="mt-1 focus:ring-custbrown focus:border-custbrown block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    {areFieldsCompleted() && 
                      <Link to={"/checkout/confirm"}>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-custgreen hover:bg-custbrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custbrown"
                          >
                            Continuar
                          </button>
                        </div>
                      </Link>
                    }
                    {!areFieldsCompleted() && 
                      <p className="block text-sm font-medium text-right p-2 text-custbrown">
                        Complete todos los campos para continuar
                      </p>
                    }
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
