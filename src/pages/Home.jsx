import Hero from "../components/Hero.jsx";
import About from "./About.jsx";
import ServicesPage from "../pages/ServicesPage.jsx";
import WhoWeAre from "../components/WhoWeAre.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
const Home = () => {
  return (
    <section id="home">
      <Hero />
      <About />
      <ServicesPage />
      <WhoWeAre />
      <WhyChooseUs />
    </section>
  );
};

export default Home;
