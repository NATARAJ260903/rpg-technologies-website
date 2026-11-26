
import Hero from "../sections/Hero";
import TrustStrip from "../sections/TrustStrip";
import SolutionNavigation from "../sections/SolutionNavigation";
import SolarShowcase from "../sections/SolarShowcase";
import HomeProductCategories from "../sections/HomeProductCategories";
import HomeEVShowcase from "../sections/HomeEVShowcase";
import WhyRPG from "../sections/WhyRPG";
import GreenBenefits from "../sections/GreenBenefits";
import ContactCTA from "../sections/ContactCTA";

function Home() {
  return (
    <main className="rpg-home">
      <Hero />
      <TrustStrip />
      <SolutionNavigation />
      <SolarShowcase />
      <HomeProductCategories />
      <HomeEVShowcase />
      <WhyRPG />
      <GreenBenefits />
      <ContactCTA />
    </main>
  );
}

export default Home;
