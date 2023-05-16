import compImage from "./../assets/img/comp.jpg";

export const BestUIUX = () => {
  return (
    <section className="best-uiux">
      <div className="wrapper wrapper-best-uiux">
        <div className="best-uiux-about">
          <h2>No Compromising With Quality</h2>

          <div className="best-uiux-about-inner">
            <h3>Effective UX Design</h3>
            <p>
              All Demos are made with clear, concise, useful, minimal and modern
              design pattern
            </p>
          </div>
          <div className="best-uiux-about-inner">
            <h3>Effective UX Design</h3>
            <p>
              All Demos are made with clear, concise, useful, minimal and modern
              design pattern
            </p>
          </div>
        </div>
        <figure>
          <img src={compImage} alt="" />
        </figure>
      </div>
    </section>
  );
};
