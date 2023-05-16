import adjustableColumnImage from "./../assets/img/windows+icon-1320183248795058577.png";
import attractiveHoverImage from "./../assets/img/earth.png";
import advancedProjectImage from "./../assets/img/calendar.png";
import differentDemosImage from "./../assets/img/penc.png";

export const Other = () => {
  return (
    <section className="other">
      <div className="wrapper other-wrapper">
        <figure>
          <img src={adjustableColumnImage} alt="" />
          <figcaption>Adjustable column</figcaption>
        </figure>
        <figure>
          <img src={attractiveHoverImage} alt="" />
          <figcaption>Attractive hover</figcaption>
        </figure>
        <figure>
          <img src={advancedProjectImage} alt="" />
          <figcaption>Advanced single project</figcaption>
        </figure>
        <figure>
          <img src={differentDemosImage} alt="" />
          <figcaption>Different Demos</figcaption>
        </figure>
      </div>
    </section>
  );
};
