import { useEffect } from 'react';
import FacultySection from '@/components/FacultySection';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

// Extended faculty data for dedicated page
const extendedFaculty = [
  {
    name: "Professor Chen Wei",
    role: "Academic Director",
    bio: "Leading researcher in quantum computing with 3 successful spinouts.",
    details: "Dr. Chen has over 15 years of experience in quantum technologies and has published more than 50 papers in leading journals. He successfully commercialized his research through three venture-backed companies.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Dr. Sarah Wong",
    role: "Venture Capital",
    bio: "Partner at Asia Deep Tech Fund with portfolio of 20+ tech ventures.",
    details: "With a background in both engineering and finance, Dr. Wong bridges the gap between technical innovation and commercial viability. She has personally mentored over 30 deep-tech founders.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Michael Zhang",
    role: "CEO, QuantumTech",
    bio: "Serial entrepreneur who raised $40M for deep-tech startups.",
    details: "Michael transitioned from a technical role to CEO and successfully led his company through three funding rounds. He specializes in go-to-market strategies for complex technological products.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Dr. Priya Sharma",
    role: "CTO, BioInnovate",
    bio: "Technical founder who successfully pivoted to CEO role.",
    details: "Dr. Sharma's journey from research scientist to CEO showcases the exact transition our program facilitates. Her biotech company recently received regulatory approval for their flagship product.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Dr. Alex Johnson",
    role: "Industry Advisor",
    bio: "Former CTO of Global Tech Solutions",
    details: "With 20+ years in the technology sector, Dr. Johnson provides strategic insights on scaling deep-tech ventures and navigating regulatory landscapes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Professor Lisa Chen",
    role: "Academic Lead",
    bio: "Expert in AI and machine learning applications",
    details: "Professor Chen combines her academic expertise with practical experience consulting for major tech companies. She specializes in helping researchers identify commercial applications for AI technologies.",
    image: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Thomas Lee",
    role: "Investment Director",
    bio: "Deep-tech investor with $100M AUM",
    details: "Thomas specializes in early-stage investments for hardware and advanced materials startups. He'll teach participants how to craft compelling pitches specifically for deep-tech investors.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Dr. Emma Williams",
    role: "Innovation Lead",
    bio: "Commercialization expert at ORKTS",
    details: "Dr. Williams has guided over 50 academic spinouts through the complex journey from lab to market. She specializes in IP strategy and licensing agreements.",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  }
];

const Faculty = () => {
  useEffect(() => {
    document.title = "Faculty & Speakers | C-Suite Leadership Development";
  }, []);

  return (
    <>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Faculty & Speakers</h1>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            Our program brings together world-class academics, industry experts, successful entrepreneurs, and investors to deliver a comprehensive learning experience.
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extendedFaculty.map((faculty, index) => (
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
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">{faculty.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-primary bg-opacity-5 rounded-lg p-8 text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">Join Our Faculty</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              We're always looking for experienced professionals to join our roster of speakers and mentors. Share your expertise and help shape the next generation of deep-tech leaders.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-blue-700 text-white py-3 px-6 rounded-md font-heading font-semibold transition-all hover:shadow-lg h-auto">
                Apply to Become a Speaker
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculty;
