import React from "react";
import Button from "../Button/Button";

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
            <span className="text-3x1 text-custgreen mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                />
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
              </svg>
            </span>
            Bandurria
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
            <Button>Iniciar sesión</Button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
