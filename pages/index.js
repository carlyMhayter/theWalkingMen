import Link from "next/link";
import { useRouter } from "next/router";
import Button from "components/Button";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <div className="master-container">
        <div className="cover">
          <img className="cover-logo" src="/white-logo-brownAccent.png" />
        </div>
        <div className="content">
          <div className="tile tile1">
            <div className="img-tile inner-tile" id="guitar" />
            <div className="text-tile inner-tile">
              <p className="text-tile-text-emp">
                The premier James Taylor tribute band in Southern California.
              </p>
              <p className="text-tile-text-minor">Take a listen!</p>
              <Button onClick={() => router.push("/listen")}>- Listen -</Button>
            </div>
          </div>
          <div className="tile tile2">
            <div className="text-tile inner-tile">
              <p className="text-tile-text-emp">
                Professional music by professional musicians. Cali grown.
              </p>
              <p className="text-tile-text-minor">
                Learn more about the group of lifetime musicians behind Walking
                Men:
              </p>
              <Button onClick={() => router.push("/about")}>- About - </Button>
            </div>
            <div id="cali" className="img-tile inner-tile" />
          </div>
          <div className="tile tile1">
            <div id="gig" className="img-tile inner-tile" />
            <div className="text-tile inner-tile">
              <p className="text-tile-text-emp">
                Perfect for your event, both business and personal.
              </p>
              <p className="text-tile-text-minor">
                Hear what satisfied clients have to say about Walking Man
              </p>
              <Button onClick={() => router.push("/testimonials")}>
                - Testimonials -
              </Button>
            </div>
          </div>
          <div className="tile tile2">
            <div className="text-tile inner-tile">
              <p className="text-tile-text-emp">
                Contact for more details, quotes, and availabilty!
              </p>
              <Button onClick={() => router.push("/contact")}>
                - Contact -
              </Button>
            </div>
            <div id="guitar-closeup" className="img-tile inner-tile" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
