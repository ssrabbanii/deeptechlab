import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import { Link } from 'wouter';
import weAreHiringImage from '@assets/we are hiring.png';

const HeroSection = () => {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="home" className="bg-gradient-to-r from-primary to-purple-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-4">
              <img 
                src={weAreHiringImage} 
                alt="We're Hiring" 
                className="w-32 h-auto mb-2 animate-pulse"
              />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-4">
              Empowering Deep-Tech Founders to Lead from Day One.
            </h1>
            <p className="text-xl mb-8 opacity-90">
              First-of-its-kind program in Hong Kong bridging tech and business leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#apply" onClick={(e) => handleNavigation(e, 'apply')}>
                <Button className="bg-accent hover:bg-amber-500 text-dark px-6 py-6 rounded-md font-heading font-semibold text-base transition-all hover:shadow-lg h-auto">
                  Apply Now
                </Button>
              </Link>
              <Link href="#partners" onClick={(e) => handleNavigation(e, 'partners')}>
                <Button variant="outline" className="bg-white bg-opacity-20 hover:bg-opacity-30 border border-white px-6 py-6 rounded-md font-heading font-semibold text-base transition-all text-white h-auto">
                  Nominate a Venture
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Tech leadership workshop with diverse professionals" 
              className="rounded-xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
