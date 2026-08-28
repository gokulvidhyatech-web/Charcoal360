import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer className="site-footer">

      <div className="container footer-grid">

        <div className="footer-about">

          <Link to="/">
            <img
              src="/src/assets/Logo-Photo.png"
              alt="GV Technologies"
            />
          </Link>

          <p>
            Helping businesses grow online through
            powerful websites, marketing and technology solutions.
          </p>

          <div className="social-links">
            <span>f</span>
            <span>in</span>
            <span>ig</span>
            <span>x</span>
          </div>

        </div>

        <div>

          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>

        </div>

        <div>

          <h4>Services</h4>

          <a href="/services">WordPress Development</a>
          <a href="/services">SEO Optimization</a>
          <a href="/services">Social Media Marketing</a>
          <a href="/services">Google & Social Ads</a>
          <a href="/services">Domain & Server Setup</a>
          <a href="/services">Full Stack Development</a>

        </div>

        <div>

          <h4>Contact</h4>

          <p className="footer-contact">
            Tirumullaivoyal,
            <br />
            Chennai, India
            <br /><br />
            +91 12345 67890
            <br /><br />
            hello@gvtechnologies.com
          </p>

        </div>

      </div>

      <div className="footer-bottom container">

        <span>
          © 2026 GV Technologies. All Rights Reserved.
        </span>

        <span>
          Privacy Policy &nbsp; | &nbsp; Terms & Conditions
        </span>

      </div>

    </footer>
  );
}