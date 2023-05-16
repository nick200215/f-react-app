import supportTeamImage from "./../assets/img/anowar.jpg";

export const SupportTeam = () => {
  return (
    <section className="support-team">
      <div className="wrapper support-team-wrapper">
        <div className="support-team-title">
          <h4>CORE FEATURES</h4>
          <h2>
            Our Dedicated Support Team <br />
            For Help You All Time
          </h2>
        </div>
        <div className="support-team-img">
          <figure>
            <img src={supportTeamImage} alt="" />
          </figure>
          <figure>
            <img src={supportTeamImage} alt="" />
          </figure>
          <figure>
            <img src={supportTeamImage} alt="" />
          </figure>
          <figure>
            <img src={supportTeamImage} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};
