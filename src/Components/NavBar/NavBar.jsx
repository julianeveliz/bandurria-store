import React from "react";
import Button from "./Button/Button";
import CartWidget from "./CartWidget/CartWidget";
import BandurriaLogo from "./images/logo.png";

const NavBar = () => {
  let links = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Tienda",
      link: "/",
    },
    {
      name: "Nosotros",
      link: "/",
    },
    {
      name: "¿Dónde comprar?",
      link: "/",
    },
  ];

  return (
    <>
      <div className="w-full shadow-md fixed top-0 left-0">
        <div className="bg-slate-100 md:flex items-center justify-between py-4 md=px-10 px-7">
          <div className="font-bold text-2x1 cursor-pointer flex items-center text-black uppercase">
            <img src={BandurriaLogo} alt="" className="max-w-2/4 m-1" />
            <span className="font-emilea capitalize">Bandurria</span>
          </div>
          <ul className="md:flex md:items-center">
            {links.map((link) => (
              <li key={link.name} className="md:ml-8 text-sm">
                <a
                  href={link.link}
                  className="text-black hover:underline duration-500 uppercase"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Button message="Iniciar sesión" />
          </ul>
          <CartWidget />
        </div>
      </div>
    </>
  );
};

export default NavBar;
