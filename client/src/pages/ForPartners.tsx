import { useEffect } from 'react';
import PartnersSection from '@/components/PartnersSection';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const ForPartners = () => {
  useEffect(() => {
    document.title = "For Partners | C-Suite Leadership Development";
  }, []);

  return (
    <>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">For Partners</h1>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            Collaborate with us to strengthen Hong Kong's deep-tech ecosystem and develop the next generation of business leaders.
          </p>
        </div>
      </div>
      
      <PartnersSection />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">Our Partner Institutions</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              We collaborate with leading academic institutions, innovation hubs, and industry partners to deliver a world-class program.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-2xl text-primary">ORKTS</span>
              </div>
              <p className="font-medium">Office of Research & Knowledge Transfer Services</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-2xl text-primary">CfE</span>
              </div>
              <p className="font-medium">Centre for Entrepreneurship</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-2xl text-primary">DTL</span>
              </div>
              <p className="font-medium">Deep-Tech Lab</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-2xl text-primary">HKU</span>
              </div>
              <p className="font-medium">The University of Hong Kong</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-pink-600 text-white py-3 px-6 rounded-md font-heading font-semibold transition-all hover:shadow-lg h-auto">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForPartners;
