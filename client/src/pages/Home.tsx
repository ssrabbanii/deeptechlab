import HeroSection from "@/components/HeroSection";
import ValueHighlights from "@/components/ValueHighlights";
import AboutSection from "@/components/AboutSection";
import ParticipantsSection from "@/components/ParticipantsSection";
import PartnersSection from "@/components/PartnersSection";
import FacultySection from "@/components/FacultySection";
import ScheduleSection from "@/components/ScheduleSection";
import ApplicationSection from "@/components/ApplicationSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";
import { scrollToSection } from "@/lib/utils";

const Home = () => {
  useEffect(() => {
    document.title =
      "C-Suite Leadership Development Program | Deep-Tech Ventures";

    // Handle hash navigation when page loads
    const hash = window.location.hash.slice(1); // Remove the #
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <ValueHighlights />
      <AboutSection />
      <ParticipantsSection />
      <PartnersSection />
      <FacultySection />
      <ScheduleSection />
      <ApplicationSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default Home;
