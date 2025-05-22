import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import { Link } from 'wouter';

const facultyMembers = [
  {
    name: "Professor Chen Wei",
    role: "Academic Director",
    bio: "Leading researcher in quantum computing with 3 successful spinouts.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Dr. Sarah Wong",
    role: "Venture Capital",
    bio: "Partner at Asia Deep Tech Fund with portfolio of 20+ tech ventures.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Michael Zhang",
    role: "CEO, QuantumTech",
    bio: "Serial entrepreneur who raised $40M for deep-tech startups.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Dr. Priya Sharma",
    role: "CTO, BioInnovate",
    bio: "Technical founder who successfully pivoted to CEO role.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  }
];

const FacultySection = () => {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="faculty" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-3">Faculty & Speakers</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Learn from industry experts, successful entrepreneurs, and leading academics who bring real-world experience to the program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="bg-light rounded-lg overflow-hidden shadow-sm hover-scale">
              <img 
                src={faculty.image} 
                alt={faculty.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="font-heading font-semibold text-lg">{faculty.name}</h3>
                <p className="text-primary text-sm font-medium">{faculty.role}</p>
                <p className="text-gray-600 text-sm mt-2">{faculty.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Our faculty roster continues to grow with industry experts and thought leaders.</p>
          <Link href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>
            <Button variant="link" className="inline-flex items-center text-primary font-medium hover:underline p-0 h-auto">
              Interested in becoming a speaker or mentor?
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
