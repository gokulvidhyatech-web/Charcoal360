import Header from "../../components/website/Header";
import Footer from "../../components/website/Footer";
import Portfolio from "../../components/website/Portfolio";

export default function PortfolioPage() {

  return (
    <>
      <Header />

      <main>

        <section className="inner-banner">

          <div className="container">

            <span className="eyebrow">
              MY WORK
            </span>

            <h1>
              Projects That
              <br />
              <span>Speak For Themselves.</span>
            </h1>

          </div>

        </section>

        <Portfolio />

      </main>

      <Footer />
    </>
  );
}