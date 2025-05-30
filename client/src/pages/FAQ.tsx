import { useEffect } from 'react';
import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const FAQ = () => {
  useEffect(() => {
    document.title = "Frequently Asked Questions | C-Suite Leadership Development";
  }, []);

  return (
    <>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            Find answers to common questions about our program, eligibility requirements, and application process.
          </p>
        </div>
      </div>
      
      <FAQSection />
      
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're here to help you with any additional questions you might have about the program, application process, or eligibility criteria.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-purple-700 text-white py-3 px-6 rounded-md font-heading font-semibold transition-all hover:shadow-lg h-auto">
                Contact Our Team
              </Button>
            </Link>
            <Link href="/apply">
              <Button variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-white py-3 px-6 rounded-md font-heading font-semibold transition-all h-auto">
                Apply to the Program
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm max-w-2xl mx-auto">
            <h3 className="font-heading text-xl font-semibold mb-4">Fast-Track Answers</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-semibold mb-2">Email Us</h4>
                <p className="text-gray-600">
                  <a href="mailto:info@dtl-hk.com" className="text-primary hover:underline">info@dtl-hk.com</a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Admissions Support</h4>
                <p className="text-gray-600">
                  <a href="mailto:admissions@dtl-hk.com" className="text-primary hover:underline">admissions@dtl-hk.com</a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-gray-600">+852 2123 4567</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Office Hours</h4>
                <p className="text-gray-600">Mon-Fri, 9AM-5PM HKT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
