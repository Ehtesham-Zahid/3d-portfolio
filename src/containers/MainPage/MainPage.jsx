import Service from "@/components/common/Service/Service";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import AiSection from "@/components/sections/AiSection/AiSection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
import HomeSection from "@/components/sections/HomeSection/HomeSection";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import SliderSection from "@/components/sections/SliderSection/SliderSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection/TestimonialsSection";

const MainPage = () => {
  return (
    <div className="bg-black">
      <HomeSection />
      <Service
        title="Strategic Planning"
        desc="Strategic planning is the cornerstone of long-term success for any
          organization. By aligning business objectives with market
          opportunities and internal capabilities, strategic planning enables
          companies to chart a clear path toward their desired future state."
        imageClass="slider1"
      />
      <AboutSection />
      <TestimonialsSection />
      <Service
        title="Financial Management"
        desc="Strategic planning is the cornerstone of long-term success for any
          organization. By aligning business objectives with market
          opportunities and internal capabilities, strategic planning enables
          companies to chart a clear path toward their desired future state."
        imageClass="slider2"
      />
      <AiSection />
      <Service
        title="Market Research and Analysis"
        desc="Strategic planning is the cornerstone of long-term success for any
          organization. By aligning business objectives with market
          opportunities and internal capabilities, strategic planning enables
          companies to chart a clear path toward their desired future state."
        imageClass="slider3"
      />
      <ContactSection />
    </div>
  );
};

export default MainPage;
