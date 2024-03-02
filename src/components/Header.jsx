import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const NavLinks = [
    {
      label: "HOME",
      route: "/",
    },
    {
      label: "ABOUT",
      route: "/",
    },
    {
      label: "TODAY'S SPECIAL",
      route: "/",
    },
    {
      label: "MENU",
      route: "/",
    },
    {
      label: "RESERVATION",
      route: "/",
    },
    {
      label: "SEATS",
      route: "/seatsbooking",
    },
    {
      label: "TEAM",
      route: "/",
    },
    {
      label: "GALLERY",
      route: "/",
    },
    {
      label: "CONTACT",
      route: "/",
    },
    {
      label: "BLOG",
      route: "/",
    },
  ];
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap px-5 py-[1.5rem] flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:!mb-0 cursor-pointer">
          <img src={Logo} alt="PLATO^" />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {NavLinks.map((link, index) => {
            return (
              <Link
                to={link.route}
                key={index}
                className="mr-5 hover:text-white list-none text-sm cursor-pointer">
                {link.label}
              </Link>
            );
          })}
        </nav>
        {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button> */}
      </div>
    </header>
  );
};

export default Header;
