import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">Mis habilidades</p>
        <h2 className="skills--section--heading">Tecnologías</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img id="productImage" src={item.src} alt="Product Chain"/>
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <ul className="skills--section--description">
                {item.description.map((tech, techIndex) => (
                  <div className="container--skills" key={techIndex}>{tech}</div>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}