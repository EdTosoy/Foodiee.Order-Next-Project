import { MenuContext } from "ContextApi/openMenu";
import React, { useContext } from "react";

export default function Header() {
  const nav = [
    {
      name: "Home",
      id: "",
    },
    {
      name: "Menu",
      id: "Menu",
    },
    {
      name: "About",
      id: "About",
    },
    {
      name: "Services",
      id: "Services",
    },
    {
      name: "Get App",
      id: "Get-App",
    },
  ];
  const { openMenu, setOpenMenu } = useContext(MenuContext);
  return (
    <header
      className="grid-container py-3 border-b sticky top-0 bg-white z-50 "
      onClick={() => {
        setOpenMenu((prev) => !prev);
        console.log(openMenu);
      }}
    >
      {openMenu && (
        <div className="col-start-1 md:hidden  col-end-4">
          <div className="top-12 border-t border-b shadow-3xl absolute w-full  text-center  p-6 bg-white ">
            {nav.map(({ name, id }) => (
              <a href={`#${id}`} key={name}>
                <nav className="cursor-pointer navigation my-4 hover:text-red-400 ">
                  {name}
                </nav>
              </a>
            ))}
            <button className="py-3 px-8 rounded-full bg-pink text-white transform  hover:shadow-2xl hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      )}
      <main className="col-start-2 col-end-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          <a href="#">
            Foodiee.<span className="text-pink">Order</span>
          </a>
        </h1>
        <div className="text-sm items-center hidden md:flex">
          {nav.map(({ name, id }) => (
            <nav key={id} className="mr-11 hover:text-pink  ">
              <a href={`#${id}`}>{name}</a>
            </nav>
          ))}
          <button className="py-3 px-8 rounded-full bg-pink text-white transform  hover:shadow-2xl hover:scale-105">
            Book Now
          </button>
        </div>
        <div className="grid place-content-start-center cursor-pointer md:hidden">
          <box-icon name="menu"></box-icon>
        </div>
      </main>
    </header>
  );
}
