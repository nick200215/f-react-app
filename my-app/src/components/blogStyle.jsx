import blogImage from "./../assets/img/b3.jpg";

export const BlogStyle = () => {
  return (
    <section className="blog-style">
      <div className="wrapper blog-style-wrapper">
        <div className="blog-style-title">
          <h1>DIFFERENT BLOGGING STYLE!</h1>
        </div>

        <div className="unique-demos-content responsive-slider">
          <figure>
            <a href="./index.html">
              <img src={blogImage} alt="" />
            </a>
          </figure>
          <figure>
            <a href="./index.html">
              <img src={blogImage} alt="" />
            </a>
          </figure>
          <figure>
            <a href="./index.html">
              <img src={blogImage} alt="" />
            </a>
          </figure>
        </div>
      </div>
    </section>
  );
};
