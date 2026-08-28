const testimonials = [
  {
    name: "Karthik R.",
    role: "Business Owner",
    text: "GV Technologies delivered a professional website that exceeded our expectations. Very responsive and easy to work with."
  },
  {
    name: "Priya S.",
    role: "Marketing Head",
    text: "Great work on SEO and digital marketing. Our website visibility and leads have improved significantly."
  },
  {
    name: "Arun M.",
    role: "CEO",
    text: "Very reliable and quick to understand requirements. The project was delivered professionally and on time."
  }
];

export default function Testimonials() {

  return (
    <section className="testimonial-section">

      <div className="container">

        <div className="section-title">

          <span>TESTIMONIALS</span>

          <h2>
            What Clients
            <br />
            <strong>Say About Me.</strong>
          </h2>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item) => (

            <article
              className="testimonial-card"
              key={item.name}
            >

              <div className="stars">
                ★★★★★
              </div>

              <p>
                "{item.text}"
              </p>

              <div className="testimonial-person">

                <div className="person-avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}