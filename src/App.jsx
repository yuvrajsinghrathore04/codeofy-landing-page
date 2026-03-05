import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import PricingSection from "./sections/PricingSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CommunitySection from "./sections/CommunitySection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer"

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;