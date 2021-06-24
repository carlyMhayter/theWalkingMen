const Home = () => (
  <>
    <div className="master-container">
      <nav className="navbar navbar">
        <ul className="navbar-links">
          <li className="navlink">
            <a href> About </a>
          </li>
          <li className="navlink">
            <a href> Listen </a>
          </li>
          <li className="navlink">
            <a href> Testimonials </a>
          </li>
          <li className="navlink">
            <a href> Video </a>
          </li>
          <li className="navlink">
            <a href> Contact </a>
          </li>
        </ul>
      </nav>
      <div className="cover">
        <img className="cover-logo" src="/Layer 7.png" />
      </div>
      <div className="content">
        <div className="tile tile1">
          <div className="img-tile inner-tile" id="guitar" />
          <div className="text-tile inner-tile">
            <p className="text-tile-text-emp">
              The premier James Taylor tribute band in Southern California.
            </p>
            <p className="text-tile-text-minor">
              The Walking Men rock any event with thier impeccable and soulful
              cover of Taylor classics. The music speaks for itself: take a
              listen!
            </p>
          </div>
        </div>
        <div className="tile tile2">
          <div className="text-tile inner-tile">
            <p className="text-tile-text-emp">
              Professional music for any event.
            </p>
            <p className="text-tile-text-minor">
              Learn more about the group of lifetime musicians behind Walking
              Men:
            </p>
          </div>
          <div id="party" className="img-tile inner-tile" />
        </div>
        <div className="tile tile1">
          <div id="wedding" className="img-tile inner-tile" />
          <div className="text-tile inner-tile">
            <p className="text-tile-text-emp">
              Perfect for weddings and parties, for both business and personal
              events.
            </p>
            <p className="text-tile-text-minor">
              Hear what satisfied clients have to say about Walking Man
            </p>
          </div>
        </div>
        <div className="tile tile2">
          <div className="text-tile inner-tile">
            <p className="text-tile-text-emp">
              Contact for more details, quotes, and availabilty!
            </p>
          </div>
          <div id="vineyard" className="img-tile inner-tile" />
        </div>
      </div>
      <div className="footer">Footer</div>
    </div>
  </>
);
export default Home;
