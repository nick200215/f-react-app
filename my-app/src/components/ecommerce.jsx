import faceImage from "./../assets/img/face.png";

export const EcommerceReadySection = () => {
  return (
    <section class="ecommerce-ready">
      <div class="wrapper ecommerce-ready-wrapper">
        <div class="support-team-title">
          <h4>ECOMMERCE READY</h4>
          <h1>
            2,000+ Happy customers <br />
            Customers Opinions
          </h1>
        </div>

        <div class="custumers">
          <div class="single-custumer">
            <figure>
              <img src={faceImage} alt="" />
              <figcaption>Chris Fulton2</figcaption>
            </figure>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              nulla quasi nam cumque fuga? Dolor neque fugit harum delectus
              rerum incidunt aliquam impedit quaerat, saepe ipsum itaque tempora
              obcaecati. Quae.
            </p>
          </div>
          <div class="single-custumer">
            <figure>
              <img src={faceImage} alt="" />
              <figcaption>Chris Fulton2</figcaption>
            </figure>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              nulla quasi nam cumque fuga? Dolor neque fugit harum delectus
              rerum incidunt aliquam impedit quaerat, saepe ipsum itaque tempora
              obcaecati. Quae.
            </p>
          </div>
          <div class="single-custumer">
            <figure>
              <img src={faceImage} alt="" />
              <figcaption>Chris Fulton2</figcaption>
            </figure>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              nulla quasi nam cumque fuga? Dolor neque fugit harum delectus
              rerum incidunt aliquam impedit quaerat, saepe ipsum itaque tempora
              obcaecati. Quae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
