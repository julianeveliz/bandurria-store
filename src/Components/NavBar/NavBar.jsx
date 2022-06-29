import React from "react";
import Button from "./Button/Button";
import CartWidget from "./CartWidget/CartWidget";
import BandurriaLogo from "./images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  let links = [
    {
      name: "Inicio",
      route: "/",
    },
    {
      name: "Cuadernos",
      route: "/category/cuadernos",
    },
    {
      name: "Stickers",
      route: "/category/stickers",
    },
    {
      name: "Nosotros",
      route: "/about",
    },
    {
      name: "¿Dónde comprar?",
      route: "/whereto",
    },
  ];

  return (
    <>
      <div className="w-full shadow-md sticky top-0 left-0 z-30">
        <div className="bg-slate-100 md:flex items-center justify-between py-4 md=px-10 px-7">
          <Link to="/">
            <div className="font-bold text-2x1 cursor-pointer flex items-center text-black uppercase">
              <img src={BandurriaLogo} alt="" className="max-w-2/4 m-1" />
              <span className="font-emilea capitalize">Bandurria</span>
            </div>
          </Link>
          <ul className="md:flex md:items-center">
            {links.map((link) => (
              <li key={link.name} className="md:ml-8 text-sm">
                <Link to={link.route}>
                  <p className="text-black hover:underline duration-500 uppercase">
                    {link.name}
                  </p>
                </Link>
              </li>
            ))}
            <Link to={'/login'}>
              <Button message="Iniciar sesión" />
            </Link>
          </ul>
          <Link to={'/cart'}>
            <CartWidget />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
