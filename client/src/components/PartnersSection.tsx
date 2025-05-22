import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import { Link } from 'wouter';

const PartnersSection = () => {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="partners" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-3">For Partners</h2>
            <div className="section-divider"></div>
            <p className="text-gray-600 my-4">
              Our institutional partners play a crucial role in developing Hong Kong's deep-tech ecosystem by supporting future tech leaders.
            </p>
            
            <h3 className="font-heading text-xl font-semibold mt-6 mb-2">Why Support This Program</h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-10 w-10 h-10 flex items-center justify-center rounded-full shrink-0 mr-4">
                  <i className="fas fa-rocket text-secondary"></i>
                </div>
                <div>
                  <h4 className="font-heading font-semibold">Upskilling Founders</h4>
                  <p className="text-gray-600">Create more successful spinoffs and tech ventures from your institution.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-10 w-10 h-10 flex items-center justify-center rounded-full shrink-0 mr-4">
                  <i className="fas fa-users text-secondary"></i>
                </div>
                <div>
                  <h4 className="font-heading font-semibold">Filling Leadership Gaps</h4>
                  <p className="text-gray-600">Address the talent shortage in tech-business leadership positions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-10 w-10 h-10 flex items-center justify-center rounded-full shrink-0 mr-4">
                  <i className="fas fa-chart-bar text-secondary"></i>
                </div>
                <div>
                  <h4 className="font-heading font-semibold">Building Commercialization Pipeline</h4>
                  <p className="text-gray-600">Strengthen your innovation ecosystem with market-ready ventures.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>
                <Button className="bg-secondary hover:bg-pink-600 text-white py-3 px-6 rounded-md font-heading font-semibold transition-all hover:shadow-lg inline-flex items-center h-auto">
                  Partner With Us
                  <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Business workshop with technology professionals" 
              className="rounded-xl shadow-md mb-6"
            />
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-heading text-xl font-semibold mb-4">Ways to Collaborate</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                  <span>Nominate promising ventures from your institution</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                  <span>Provide sponsorship to support participant funding</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                  <span>Contribute speakers and industry experts</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                  <span>Host workshops or networking events</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <Link href="#apply" onClick={(e) => handleNavigation(e, 'apply')}>
                  <Button variant="link" className="text-secondary font-medium hover:underline flex items-center p-0 h-auto">
                    Nominate a Venture
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
