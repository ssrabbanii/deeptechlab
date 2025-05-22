import { useEffect } from 'react';
import ParticipantsSection from '@/components/ParticipantsSection';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const ForParticipants = () => {
  useEffect(() => {
    document.title = "For Participants | C-Suite Leadership Development";
  }, []);

  return (
    <>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">For Participants</h1>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            Discover how our program can help you gain the business acumen needed to successfully lead deep-tech ventures.
          </p>
        </div>
      </div>
      
      <ParticipantsSection />
      
      <div className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-600 mb-4">
                Our alumni have gone on to achieve remarkable success in their deep-tech ventures. Join our community of technical leaders who have transformed into effective business executives.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary mt-6">
                <p className="italic text-gray-600 mb-3">
                  "The program gave me the confidence and knowledge to transition from a technical role to CEO. Within six months of completing the program, we secured our Series A funding."
                </p>
                <p className="font-medium">— Dr. James Chen, CEO of QuantumSense</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-heading text-xl font-semibold mb-4">Program Outcomes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-trophy text-yellow-500 mt-1 mr-3"></i>
                  <span>80% of participants secure funding within 12 months</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-trophy text-yellow-500 mt-1 mr-3"></i>
                  <span>92% report improved investor pitching confidence</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-trophy text-yellow-500 mt-1 mr-3"></i>
                  <span>75% successfully transition to CEO/CXO roles</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-trophy text-yellow-500 mt-1 mr-3"></i>
                  <span>100% would recommend the program to peers</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link href="/apply">
                  <Button className="bg-primary hover:bg-blue-700 text-white py-3 px-6 rounded-md font-heading font-semibold transition-all hover:shadow-lg w-full h-auto">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForParticipants;
