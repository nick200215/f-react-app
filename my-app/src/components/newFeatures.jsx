import htmlImage from "./../assets/img/html.png";
import cssImage from "./../assets/img/css.png";
import jqueryImage from "./../assets/img/jquery.png";
import translationImage from "./../assets/img/translation.png";

export const NewFeatures = () => {
  return (
    <section className="support-team new-features">
      <div className="wrapper support-team-wrapper">
        <div className="support-team-title">
          <h4>Support Team</h4>
          <h2>
            Our Dedicated Support Team
            <br />
            For Help You All Time
          </h2>
        </div>

        <div className="new-features-content">
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
            <figcaption>jquery</figcaption>
          </figure>
          <figure>
            <img src={translationImage} alt="" />
            <figcaption>Translation</figcaption>
          </figure>
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
            <figcaption>jquery</figcaption>
          </figure>
          <figure>
            <img src={translationImage} alt="" />
            <figcaption>Translation</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
