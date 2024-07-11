import React, { useState } from "react";
import "./navbar.css";
import { SiShopify } from "react-icons/si";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active , setActive] = useState('navBar')

  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  const removeNavbar = () => {
    setActive('navBar')
  } 

  return (
    <section className="navBarSection">
      <header className="header flex">

        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <SiShopify className="icon" />
              Fashion
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                CATALOGUE
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                FASHION
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                FAVOURITE
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                LIFESTYLE
              </a>
            </li>

            <button className="btn">
              <a href="#">SIGN UP</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <IoIosCloseCircleOutline className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
