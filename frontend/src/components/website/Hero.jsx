import { useEffect, useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Globe,
  Search
} from "lucide-react";

const slides = [
  {
    label: "BUILD. RANK. GROW.",
    title: (
      <>
        Digital Solutions
        <br />
        That <span>Drive Growth.</span>
      </>
    ),
    description:
      "Professional websites, digital marketing and development solutions designed to help your business grow online."
  },

  {
    label: "POWERFUL WEBSITES. REAL RESULTS.",
    title: (
      <>
        Websites That
        <br />
        <span>Work For Your Business.</span>
      </>
    ),
    description:
      "Modern, fast and conversion-focused websites designed to turn visitors into customers."
  },

  {
    label: "YOUR DIGITAL PARTNER.",
    title: (
      <>
        Everything Your
        <br />
        Business Needs To <span>Grow.</span>
      </>
    ),
    description:
      "From WordPress and SEO to social media, advertising, hosting and full-stack development."
  }
];

export default function Hero() {

  const [active, setActive] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setActive((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);

  }, []);

  const slide = slides[active];

  const previousSlide = () => {
    setActive(
      (active - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setActive((active + 1) % slides.length);
  };

  return (
    <section className="hero-section">

      <div className="hero-grid-background"></div>

      <button
        className="hero-navigation hero-prev"
        onClick={previousSlide}
      >
        <ChevronLeft size={20} />
      </button>

      <div className="container hero-container">

        <div className="hero-content">

          <div className="hero-label">
            <span></span>
            {slide.label}
          </div>

          <h1>
            {slide.title}
          </h1>

          <p>
            {slide.description}
          </p>

          <div className="hero-actions">

            <a
              href="#services"
              className="primary-button"
            >
              Explore Services
              <ArrowRight size={18} />
            </a>

            <a
              href="/portfolio"
              className="secondary-button"
            >
              View My Work
              <ArrowUpRight size={18} />
            </a>

          </div>

          <div className="hero-statistics">

            <div>
              <strong>30+</strong>
              <small>Projects</small>
            </div>

            <div>
              <strong>10+</strong>
              <small>Clients</small>
            </div>

            <div>
              <strong>5+</strong>
              <small>Years Experience</small>
            </div>

            <div>
              <strong>100%</strong>
              <small>Commitment</small>
            </div>

          </div>

        </div>

        <div className="hero-art">

          <div className="hero-light light-one"></div>
          <div className="hero-light light-two"></div>

          <div className="floating-shape shape-one">
            <Globe />
          </div>

          <div className="floating-shape shape-two">
            <Search />
          </div>

          <div className="floating-shape shape-three">
            <Code2 />
          </div>

          <div className="laptop-device">

            <div className="browser-window">

              <div className="browser-header">
                <i></i>
                <i></i>
                <i></i>

                <span>gvtechnologies</span>
              </div>

              <div className="browser-content">

                <small>GV TECHNOLOGIES</small>

                <h3>
                  Smart Digital
                  <br />
                  <span>Solutions.</span>
                </h3>

                <p>
                  Build. Rank. Grow.
                </p>

                <button>
                  Get Started
                </button>

                <div className="browser-cards">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

              </div>

            </div>

          </div>

          <div className="mobile-device">

            <div className="mobile-notch"></div>

            <div className="mobile-content">

              <small>GV</small>

              <h4>
                Grow
                <br />
                <span>Smarter.</span>
              </h4>

              <div className="mobile-button"></div>

              <div className="mobile-line"></div>

              <div className="mobile-line short"></div>

            </div>

          </div>

        </div>

      </div>

      <button
        className="hero-navigation hero-next"
        onClick={nextSlide}
      >
        <ChevronRight size={20} />
      </button>

      <div className="hero-dots">

        {slides.map((_, index) => (

          <button
            key={index}
            onClick={() => setActive(index)}
            className={index === active ? "active" : ""}
          />

        ))}

      </div>

    </section>
  );
}