import {
  Globe,
  Search,
  Share2,
  Megaphone,
  Server,
  Code2,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "WordPress Development",
    description:
      "Professional, responsive and conversion-focused WordPress websites."
  },
  {
    number: "02",
    icon: Search,
    title: "SEO Optimization",
    description:
      "Technical and on-page SEO strategies to improve rankings and visibility."
  },
  {
    number: "03",
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build your brand and engage your audience across social platforms."
  },
  {
    number: "04",
    icon: Megaphone,
    title: "Google & Social Ads",
    description:
      "Performance-focused advertising campaigns built around measurable results."
  },
  {
    number: "05",
    icon: Server,
    title: "Domain & Server Setup",
    description:
      "Domain, hosting, DNS, SSL, email and deployment setup."
  },
  {
    number: "06",
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Modern applications using React, JavaScript and Node.js."
  }
];

export default function Services() {

  return (
    <section
      className="services-section"
      id="services"
    >

      <div className="container">

        <div className="section-title">

          <span>WHAT I DO</span>

          <h2>
            Digital Services Built
            <br />
            For <strong>Business Growth.</strong>
          </h2>

          <p>
            From your first domain to a complete digital presence,
            I provide the technology and marketing solutions your
            business needs.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.number}
              >

                <div className="service-number">
                  {service.number}
                </div>

                <div className="service-icon">
                  <Icon size={23} />
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <a href="/services">
                  Explore Service
                  <ArrowUpRight size={15} />
                </a>

              </article>
            );

          })}

        </div>

      </div>

    </section>
  );
}