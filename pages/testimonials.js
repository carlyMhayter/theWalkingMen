import Carousel from "../components/Carousel";

const Home = () => (
  <div className="page-content">
    <div className="page-title">Testimonials</div>
    <div className="content">
      <div className="tile">
        <Carousel>
          <div className="testimonial-container">
            <div className="testimonial-person" id="person1"></div>
            <div className="text-tile-text-emp">
              "We love Walking Man! They always sound great. So talented."
              <p className="text-tile-text-minor">
                - Rebecca Whiteman at House of Blues
              </p>
            </div>
          </div>
          <div className="testimonial-container">
            <div className="text-tile-text-emp">
              "I hired Walking Man for a corporate event in 2019, and they were
              a massive success setting the mood for our event. They sound just
              like James Taylor...plus they're just nice guys. Thanks Walking
              Man!"
              <p className="text-tile-text-minor"> - David Davidson </p>
            </div>
          </div>
          <div className="testimonial-container">
            <div className="text-tile-text-emp">
              "Walking Man has been a reliable act at my vineyard: every time
              they play we get requests from customers of when they will be
              back!"
              <p className="text-tile-text-minor">
                - Ron E. at Escondido Winery
              </p>
            </div>
          </div>
          <div className="testimonial-container">
            <div className="text-tile-text-emp">
              "My favorite thing about Walking Man, behind the music, is the
              reliability. They were a pleasure to work with, and made the
              unknowns of hiring professional musicians for our event easy.
              Thank you guys!"
              <p className="text-tile-text-minor">- Slyvia at Il Processeco</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  </div>
);
export default Home;
