import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showDropdown = useCallback(() => {
    let opposite = true;
    if (isOpen) {
      opposite = false;
    } else {
      opposite = true;
    }
    setIsOpen(opposite);
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("click", () => {
      let target1 = event.target.className;
      if (isOpen && target1 != "dropDown-btn") {
        setIsOpen(false);
      }
    });
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="link-container navbar-links">
          <div id="longDisplay" className="text-links ">
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
              src="/dropdown-btn_gold.png"
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
