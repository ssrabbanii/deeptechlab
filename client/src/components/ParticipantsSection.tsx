import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import { Link } from 'wouter';

const ParticipantsSection = () => {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="participants" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-3">For Participants</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Gain the essential skills and knowledge to lead your deep-tech venture to commercial success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Who Should Apply */}
          <div className="bg-light rounded-lg p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-4">Who Should Apply</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                <span>PhD scientists working on spinouts</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                <span>Technical CTOs transitioning to CEO roles</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                <span>Deep-tech founders seeking business acumen</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                <span>Research teams commercializing innovations</span>
              </li>
            </ul>
          </div>
          
          {/* Learning Outcomes */}
          <div className="bg-light rounded-lg p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-4">Learning Outcomes</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                <span>Strategic commercialization pathways</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                <span>Effective fundraising techniques</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                <span>Go-to-market strategy development</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                <span>Leadership and team management</span>
              </li>
            </ul>
          </div>
          
          {/* Program Format */}
          <div className="bg-light rounded-lg p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-4">Program Format</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                <span>Hybrid model: in-person and online</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                <span>2 weeks in-person, 2 weeks online</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                <span>Workshops, case studies, group work</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                <span>Networking with investors and mentors</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-primary bg-opacity-5 rounded-xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Program Cost & Funding</h3>
              <p className="text-gray-600 mb-6">
                We keep the program accessible through partner subsidies and flexible pricing for individuals and ventures.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Individual Participant</span>
                  <span className="font-heading font-bold text-xl">$2,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Venture (up to 3 members)</span>
                  <span className="font-heading font-bold text-xl">$3,600</span>
                </div>
                <div className="bg-accent bg-opacity-10 text-dark p-4 rounded-md">
                  <p className="font-medium">ORKTS covers 50% of costs for eligible participants!</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-heading text-xl font-semibold mb-4">Ready to transform your leadership?</h4>
              <p className="text-gray-600 mb-6">Limited slots available for our next cohort. Apply now or reach out with questions.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#apply" onClick={(e) => handleNavigation(e, 'apply')}>
                  <Button className="bg-primary hover:bg-blue-700 text-white py-3 px-6 rounded-md font-heading font-semibold transition-all hover:shadow-lg h-auto">
                    Apply Now
                  </Button>
                </Link>
                <Link href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>
                  <Button variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-white py-3 px-6 rounded-md font-heading font-semibold transition-all h-auto">
                    Contact Us
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

export default ParticipantsSection;
