import { useEffect } from 'react';
import ScheduleSection from '@/components/ScheduleSection';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const Schedule = () => {
  useEffect(() => {
    document.title = "Program Schedule | C-Suite Leadership Development";
  }, []);

  // Download syllabus handler - always force download
  const handleDownloadSyllabus = async () => {
    try {
      const response = await fetch('/api/syllabus');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'HK-DeepTech-Lab-Syllabus-2025.pdf';
        link.style.display = 'none';
        
        // Force download on all devices including mobile
        document.body.appendChild(link);
        link.click();
        
        // Clean up immediately
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }, 100);
      } else {
        console.error('Failed to download syllabus');
      }
    } catch (error) {
      console.error('Error downloading syllabus:', error);
    }
  };

  return (
    <>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Program Schedule</h1>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            Our carefully structured program combines intensive in-person workshops with flexible online learning to accommodate busy professionals.
          </p>
        </div>
      </div>
      
      <ScheduleSection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-heading text-2xl font-bold mb-4">Detailed Curriculum</h2>
              <div className="space-y-6">
                <div className="bg-light p-6 rounded-lg">
                  <h3 className="font-heading text-xl font-semibold mb-2">Module 1: Leadership Foundations</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Transitioning from technical expert to business leader</li>
                    <li>Understanding leadership styles and their applications</li>
                    <li>Building and managing high-performance teams</li>
                    <li>Decision-making frameworks for technical executives</li>
                  </ul>
                </div>
                
                <div className="bg-light p-6 rounded-lg">
                  <h3 className="font-heading text-xl font-semibold mb-2">Module 2: Deep-Tech Commercialization</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Market validation for complex technologies</li>
                    <li>IP strategy and protection</li>
                    <li>Technology roadmapping and product development</li>
                    <li>Pricing strategies for deep-tech products</li>
                  </ul>
                </div>
                
                <div className="bg-light p-6 rounded-lg">
                  <h3 className="font-heading text-xl font-semibold mb-2">Module 3: Fundraising Mastery</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Understanding the deep-tech investment landscape</li>
                    <li>Crafting compelling pitches for technical ventures</li>
                    <li>Financial planning and valuation</li>
                    <li>Term sheet negotiation and deal structures</li>
                  </ul>
                </div>
                
                <div className="bg-light p-6 rounded-lg">
                  <h3 className="font-heading text-xl font-semibold mb-2">Module 4: Scaling and Growth</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Go-to-market strategies for deep-tech ventures</li>
                    <li>Building strategic partnerships and channel relationships</li>
                    <li>Operational excellence and financial management</li>
                    <li>Navigating regulatory challenges in tech industries</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="bg-primary bg-opacity-5 p-6 rounded-lg sticky top-24">
                <h3 className="font-heading text-xl font-semibold mb-4">Key Program Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Total Duration:</span>
                    <span>4 Weeks</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Format:</span>
                    <span>Hybrid</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">In-Person Days:</span>
                    <span>10 Days</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Online Sessions:</span>
                    <span>12 Sessions</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Next Cohort Starts:</span>
                    <span>July 5, 2023</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Application Deadline:</span>
                    <span>June 10, 2023</span>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <Button 
                    variant="outline"
                    className="w-full inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-medium transition-all h-auto"
                    onClick={handleDownloadSyllabus}
                  >
                    <i className="fas fa-download mr-2"></i>
                    Download Syllabus
                  </Button>
                  
                  <Link href="/apply">
                    <Button className="w-full bg-primary hover:bg-purple-700 text-white py-3 px-6 rounded-md font-heading font-semibold transition-all hover:shadow-lg h-auto">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
