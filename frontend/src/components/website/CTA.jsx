import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CTA() {

  return (
    <section className="cta-section" id="contact">

      <div className="container cta-inner">

        <div>

          <span className="cta-label">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's Build Something
            <br />
            <span>Amazing Together.</span>
          </h2>

          <p>
            Tell me what you're working on and let's turn
            your idea into a digital experience that gets results.
          </p>

        </div>

        <div className="cta-buttons">

          <a
            href="mailto:hello@gvtechnologies.com"
            className="primary-button"
          >
            Let's Talk
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

      </div>

    </section>
  );
}