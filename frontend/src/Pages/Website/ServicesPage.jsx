import Header from "../../components/website/Header";
import Footer from "../../components/website/Footer";
import Services from "../../components/website/Services";

export default function ServicesPage() {

  return (
    <>
      <Header />

      <main>

        <section className="inner-banner">

          <div className="container">

            <span className="eyebrow">
              SERVICES
            </span>

            <h1>
              Digital Services
              <br />
              That <span>Drive Growth.</span>
            </h1>

          </div>

        </section>

        <Services />

      </main>

      <Footer />
    </>
  );
}