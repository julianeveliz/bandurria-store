import React from "react";
import { useState, useContext } from "react";
import Spinner from "../Spinner/Spinner";
import {DataContext} from "../CartContext/CartContext";

const Finish = () => {
  const [loading, setLoading] = useState(true);
  const {lastOrderID} = useContext(DataContext);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  if (loading) return <Spinner />;

  return (
    <div>
      <div className="py-12 bg-white mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-custgreen font-semibold tracking-wide uppercase">
              {lastOrderID && 'Compra realizada'}
              {!lastOrderID && 'Ha ocurrido un error'}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {lastOrderID && `Su número de Orden es #${lastOrderID}`}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {lastOrderID && 'El detalle de la misma fue enviado a su correo electrónico'}
              {!lastOrderID && 'Inténtelo nuevamente más tarde'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
