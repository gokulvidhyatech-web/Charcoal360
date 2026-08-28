import Header from "../../components/website/Header";
import Footer from "../../components/website/Footer";

export default function About() {

  return (
    <>
      <Header />

      <main className="inner-page">

        <div className="container">

          <span className="eyebrow">
            ABOUT GV TECHNOLOGIES
          </span>

          <h1>
            Building Digital Experiences
            <br />
            That <span>Move Businesses Forward.</span>
          </h1>

          <p>
            I help businesses create professional websites,
            improve their online visibility and build reliable
            digital solutions.
          </p>

        </div>

      </main>

      <Footer />
    </>
  );
}