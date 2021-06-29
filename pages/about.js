const Home = () => (
  <div className="page-content">
    <div className="page-title">About </div>
    <div className="content">
      {/* Band info Tile */}
      <div className="tile tile1 bio-tile">
        <div className="img-tile inner-tile" id="band-photo" />
        <div className="text-tile bio-text-tile inner-tile">
          <p className="text-tile-text-emp bio-name">Meet the band</p>
          <p className="text-tile-text-minor bio-text">
            Formed in 2017 by 4 lifetime musicians, Walking Man has been playing
            music for a collective 100 years. United by their love and
            admiration by the soungwriting of James Taylor, they began making
            music together after connecting through mutual friends.
          </p>
          <p className="text-tile-text-minor bio-text">
            Since connecting, they have played such famous local San Diego
            joints as the House of Blues and many other venues.
          </p>
        </div>
      </div>
      {/* first member */}
      <div className="tile tile2 bio-tile">
        <div className="text-tile bio-text-tile inner-tile">
          <p className="text-tile-text-emp bio-name">Tom McTom</p>
          <p className="member-info"> Vocalist, rhythm guitar </p>
          <p className="text-tile-text-minor bio-text">
            Tom was born in Wahoo Michigan and was raised on the sounds of blues
            and rock and roll. He brought his first guitar at age 13 and
            starting writing his own songs shortly therafter.
          </p>
          <p className="text-tile-text-minor bio-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div id="vocalist" className="img-tile inner-til artist-img" />
      </div>
      {/* second member*/}
      <div className="tile tile1 bio-tile">
        <div id="guitarist1" className="img-tile inner-tile artist-img" />
        <div className="text-tile bio-text-tile inner-tile">
          <p className="text-tile-text-emp bio-name">Mike Hayter</p>
          <p className="member-info"> Bass guitar, rhythm guitar </p>

          <p className="text-tile-text-minor bio-text">
            Mike Hayter was born in a 1 bedroom house in Detroit Michigan, and
            relocated to San Diego, California in the early 70's. He grew up in
            Southern California surfing and playing gigs where ever he found
            them. He grew up on the sounds of Jimi Hendrix and Led Zeppelin.
          </p>
          <p className="text-tile-text-minor bio-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {/* third member*/}
      <div className="tile tile2 bio-tile">
        <div className="text-tile inner-tile bio-text-tile">
          <p className="text-tile-text-emp bio-name">Mark Markerson</p>
          <p className="member-info">Lead guitar, keyboards, back-up vocals</p>

          <p className="text-tile-text-minor bio-text">
            Tom was born in Wahoo Michigan and was raised on the sounds of blues
            and rock and roll. He brought his first guitar at age 13 and
            starting writing his own songs shortly therafter.
          </p>
          <p className="text-tile-text-minor bio-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div id="guitarist2" className="img-tile inner-til artist-img" />
      </div>
      {/* fourth member*/}
      <div className="tile tile1 bio-tile">
        <div id="drummer" className="img-tile inner-tile artist-img" />
        <div className="text-tile bio-text-tile inner-tile">
          <p className="text-tile-text-emp bio-name">Dave Daverson</p>
          <p className="member-info"> Percussion, back-up vocals</p>

          <p className="text-tile-text-minor bio-text">
            Mike Hayter was born in a 1 bedroom house in Detroit Michigan, and
            relocated to San Diego, California in the early 70's. He grew up in
            Southern California surfing and playing gigs where ever he found
            them. He grew up on the sounds of Jimi Hendrix and Led Zeppelin.
          </p>
          <p className="text-tile-text-minor bio-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
