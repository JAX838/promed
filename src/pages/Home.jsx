import Hero from "../components/Hero.jsx";
import About from "./About.jsx";
import ServicesPage from "../pages/ServicesPage.jsx";
import WhoWeAre from "../components/WhoWeAre.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import PartnersSection from "../components/PartnersSection.jsx";
const Home = () => {
  return (
    <section id="home">
      <Hero />
      <About />
      <ServicesPage />
      <WhoWeAre />
      <WhyChooseUs />
      <PartnersSection />
    </section>
  );
};

export default Home;
