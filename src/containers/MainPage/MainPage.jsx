import AboutSection from "@/components/sections/AboutSection/AboutSection";
import AiSection from "@/components/sections/AiSection/AiSection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
import HomeSection from "@/components/sections/HomeSection/HomeSection";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import SliderSection from "@/components/sections/SliderSection/SliderSection";

const MainPage = () => {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <AiSection />
      {/* <SliderSection /> */}

      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default MainPage;
