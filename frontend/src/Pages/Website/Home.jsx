import Header from "../../components/website/Header";
import Hero from "../../components/website/Hero";
import Services from "../../components/website/Services";
import Portfolio from "../../components/website/Portfolio";
import Process from "../../components/website/Process";
import Testimonials from "../../components/website/Testimonials";
import Clients from "../../components/website/Clients";
import CTA from "../../components/website/CTA";
import Footer from "../../components/website/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Clients />
        <CTA />
      </main>

      <Footer />
    </>
  );
}