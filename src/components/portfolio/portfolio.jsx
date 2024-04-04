import "./portfolio.css";
import data from "./projects";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container portfolio">
      <h2>MY PROJECTS</h2>
      <div className="container_portfolio">
        {data.map((item) => {
          return (
            <>
              <article className="projectCard" key={item.id}>
                <div className="img">
                  <img src={item?.img} alt={item.title} />
                </div>
                <h5>{item?.title}</h5>
                <div className="buttons">
                  <button className="toGitHub">
                    <a href={item.github} target="_blank">
                      Github
                    </a>
                  </button>
                  <button className="liveView">
                    <a href={item.live} target="_blank">
                      Live Demo{" "}
                    </a>
                  </button>
                </div>
              </article>
            </>
          );
        })}
      </div>

      </div>
      
    </section>
  );
};

export default Portfolio;
