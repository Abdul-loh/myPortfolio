import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles }  from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-[#050816]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-15 h-15 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            AA &nbsp;
            <span className="sm:block hidden"> | AutoDevx </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li
            className={` ${
              active === "About" ? "text-white" : "text-[#aaa6c3]"
            } hover:text-white text-[18px] font-medium cursor-pointer}`}
            onClick={() => setActive("About")}
          >
            <a href="#about">About</a>
          </li>

          <li
            className={` ${
              active === "Work" ? "text-white" : "text-[#aaa6c3]"
            } hover:text-white text-[18px] font-medium cursor-pointer}`}
            onClick={() => setActive("Work")}
          >
            <a href="#work">Work</a>
          </li>

          <li
            className={` ${
              active === "Contact" ? "text-white" : "text-[#aaa6c3]"
            } hover:text-white text-[18px] font-medium cursor-pointer}`}
            onClick={() => setActive("Contact")}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>

{/* MOBILE */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer "
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0  mx-4 my-2 min-w-[140px]  min-h-[140px] rounded-xl flex justify-center items-center transition-all duration-500 ease-in-out ` }
          >
            <ul className="list-none flex flex-col gap-4">
              
           
                <li
                className={` ${
                  active === "About" ? "text-white" : "text-[#aaa6c3]"
                }  font-poppins hover:text-white text-[18px] font-medium cursor-pointer}`}
                onClick={() => {setToggle(!toggle); setActive("about");}}
              >
                <a href="#about">About</a>
              </li>

              <li
                className={` ${
                  active === "Work" ? "text-white" : "text-[#aaa6c3]"
                } font-poppins hover:text-white text-[18px] font-medium cursor-pointer}`}
                onClick={() => {setToggle(!toggle); setActive("Work");}}
              >
                <a href="#work">Work</a>
              </li>

              <li
                className={` ${
                  active === "Contact" ? "text-white" : "text-[#aaa6c3]"
                }  font-poppins hover:text-white text-[18px] font-medium cursor-pointer}`}
                onClick={() => {setToggle(!toggle); setActive("contact");}}
              >
                <a href="#contact">Contact</a>
              </li>
              
           
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
