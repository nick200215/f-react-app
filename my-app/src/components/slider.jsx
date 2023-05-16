import sliderImage1 from "./../assets/img/main.jpg";
import sliderImage2 from "./../assets/img/main.jpg";
import sliderImage3 from "./../assets/img/main.jpg";

export const Slider = () => {
  return (
    <section className="slider">
      <div className="wrapper wrapper-slider">
        <div className="unique-demos-content responsive-slider">
          <figure>
            <a href="./index.html">
              <img src={sliderImage1} alt="" />
            </a>
          </figure>
          <figure>
            <a href="./index.html">
              <img src={sliderImage2} alt="" />
            </a>
          </figure>
          <figure>
            <a href="./index.html">
              <img src={sliderImage3} alt="" />
            </a>
          </figure>
        </div>
      </div>
    </section>
  );
};
