import HeroSection from '@/components/HeroSection';
import ValueHighlights from '@/components/ValueHighlights';
import AboutSection from '@/components/AboutSection';
import ParticipantsSection from '@/components/ParticipantsSection';
import PartnersSection from '@/components/PartnersSection';
import FacultySection from '@/components/FacultySection';
import ScheduleSection from '@/components/ScheduleSection';
import ApplicationSection from '@/components/ApplicationSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "C-Suite Leadership Development Program | Deep-Tech Ventures";
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
