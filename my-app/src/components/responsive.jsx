import React from "react";
import responsiveImage from "./../assets/img/responsive.png";

export const ResponsiveSection = () => {
  return (
    <section className="best-uiux">
      <div className="wrapper wrapper-best-uiux">
        <div className="best-uiux-about responsive-about">
          <h3>RESPONSIVE</h3>
          <h4>100% Responsive For All Device</h4>
          <div className="best-uiux-about-inner">
            <p>
              Techno HTML5 template is fully responsive for all kinds of
              devices, especially this template
            </p>
          </div>
        </div>
        <div className="best-uiux-img">
          <figure>
            <img src={responsiveImage} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};
