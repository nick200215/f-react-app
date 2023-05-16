import htmlImage from "../assets/img/html.png";
import cssImage from "../assets/img/css.png";
import jqueryImage from "../assets/img/jquery.png";
import rspImage from "../assets/img/rsp.png";

export const ProgrammingLanguages = () => {
  return (
    <section className="programming-languages">
      <div className="wrapper languages-wrapper">
        <figure>
          <img src={htmlImage} alt="" />
          <figcaption>HTML</figcaption>
        </figure>
        <figure>
          <img src={cssImage} alt="" />
          <figcaption>CSS</figcaption>
        </figure>
        <figure>
          <img src={jqueryImage} alt="" />
          <figcaption>jQuery</figcaption>
        </figure>
        <figure>
          <img src={rspImage} alt="" />
          <figcaption>Fully Responsive</figcaption>
        </figure>
      </div>
    </section>
  );
};
