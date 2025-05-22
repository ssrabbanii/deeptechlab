import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import { Link } from 'wouter';

const AboutSection = () => {
  const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('participants');
  };

  return (
    <section id="about" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581093450021-a7a360e9a6b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Deep tech innovation lab with researchers" 
              className="rounded-xl shadow-md"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold mb-3">About the Program</h2>
            <div className="section-divider"></div>
            <p className="text-gray-600 my-4">
              The C-Suite Leadership Development Program addresses the critical gap between technical brilliance and business acumen in Hong Kong's deep-tech ecosystem.
            </p>
            
            <h3 className="font-heading text-xl font-semibold mt-6 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              We bridge business acumen and tech expertise to create leaders who can successfully commercialize innovative technologies and build sustainable deep-tech ventures.
            </p>
            
            <h3 className="font-heading text-xl font-semibold mt-6 mb-2">Who It's For</h3>
            <p className="text-gray-600">
              Designed specifically for tech founders, scientists, and aspiring deep-tech CXOs who possess technical expertise but seek business leadership skills.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mt-8 border-l-4 border-secondary">
              <p className="font-heading font-medium text-lg">
                "Delivered by academics, investors, and deep-tech entrepreneurs who understand the unique challenges of commercializing frontier technologies."
              </p>
            </div>
            
            <div className="mt-8">
              <Link href="#participants" onClick={handleLearnMore}>
                <Button variant="link" className="text-primary font-medium hover:underline flex items-center p-0 h-auto">
                  Learn about program benefits
                  <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
