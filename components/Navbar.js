import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState();

  const showDropdown = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    console.log("fart");
    document.addEventListener("click", () => {
      if (isOpen) {
        setIsOpen(false);
      }
    });
  }, [isOpen, setIsOpen]);
  return (
    <>
      <nav className="navbar">
        <div className="link-container navbar-links">
          <div className="navlink img-link">
            <Link href="/">
              <a>
                <img
                  className="logo-image"
                  src="./image_reduced_color2.png"
                ></img>
              </a>
            </Link>
          </div>
          <div className="dropdown">
            <img
              className="dropDown-btn"
              src="/dropdown-btn.png"
              onClick={showDropdown}
            />
            {isOpen && (
              <div id="myDropdown" className="text-links dropdown-content">
                <div className="navlink">
                  <Link href="/">
                    <a> Home </a>
                  </Link>
                </div>
                <div className="navlink">
                  <Link href="/about">
                    <a> About </a>
                  </Link>
                </div>
                <div className="navlink">
                  <Link href="/video">
                    <a> Video </a>
                  </Link>
                </div>
                <div className="navlink ">
                  <Link href="/songlist">
                    <a> Song List </a>
                  </Link>
                </div>
                <div className="navlink">
                  <Link href="/testimonials">
                    <a> Testimonials </a>
                  </Link>
                </div>
                <div className="navlink">
                  <Link href="/contact">
                    <a> Contact </a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
