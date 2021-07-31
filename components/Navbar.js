import Link from "next/link";

const NavBar = () => (
  <nav className="navbar">
    <div className="navlink img-link">
      <Link href="/">
        <a>
          <img className="logo-image" src="./image_reduced_color2.png"></img>
        </a>
      </Link>
    </div>
    <div className="left-links navbar-links">
      <div className="navlink">
        <Link href="/about">
          <a> About </a>
        </Link>
      </div>
      <div className="navlink">
        <Link href="/listen">
          <a> Video </a>
        </Link>
      </div>
      {/* <div className="navlink">
        <Link href="/">
          <a> Song List </a>
        </Link>
      </div> */}
    </div>
    <div className="right-links navbar-links">
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
  </nav>
);

export default NavBar;
