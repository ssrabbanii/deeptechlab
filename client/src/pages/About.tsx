import { useEffect } from 'react';
import AboutSection from '@/components/AboutSection';
import ValueHighlights from '@/components/ValueHighlights';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const About = () => {
  useEffect(() => {
    document.title = "About the Program | C-Suite Leadership Development";
  }, []);

  return (
    <>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">About the Program</h1>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            Learn about our mission to empower deep-tech founders with the business acumen needed to lead successful ventures.
          </p>
        </div>
      </div>
      
      <AboutSection />
      <ValueHighlights />
      
      <div className="py-16 bg-primary bg-opacity-5 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Apply now to join our next cohort of deep-tech leaders and transform your technical expertise into business leadership.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply">
              <Button className="bg-primary hover:bg-purple-700 text-white py-3 px-6 rounded-md font-heading font-semibold transition-all hover:shadow-lg h-auto">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-white py-3 px-6 rounded-md font-heading font-semibold transition-all h-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
