const projects = [
  {
    title: "Clean Pro Mac",
    category: "WordPress Development",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Interior Studio",
    category: "Business Website",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Healthcare Website",
    category: "WordPress Development",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "SaaS Platform",
    category: "React Development",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Restaurant Website",
    category: "WordPress Development",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80"
  }
];

export default function Portfolio() {

  return (
    <section className="portfolio-section">

      <div className="container">

        <div className="portfolio-heading">

          <div>

            <span>SELECTED WORK</span>

            <h2>
              Projects I'm
              <br />
              <strong>Proud To Build.</strong>
            </h2>

            <p>
              A selection of websites and digital experiences
              created for businesses and brands.
            </p>

          </div>

          <a
            href="/portfolio"
            className="portfolio-button"
          >
            View All Projects →
          </a>

        </div>

        <div className="portfolio-grid">

          {projects.map((project) => (

            <article
              className="portfolio-card"
              key={project.title}
            >

              <div className="portfolio-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="portfolio-overlay">
                  View Project ↗
                </div>

              </div>

              <div className="portfolio-info">

                <div>
                  <small>{project.category}</small>

                  <h3>
                    {project.title}
                  </h3>
                </div>

                <span>↗</span>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}