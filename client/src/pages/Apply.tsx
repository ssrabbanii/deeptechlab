import { useEffect } from 'react';
import ApplicationSection from '@/components/ApplicationSection';

const Apply = () => {
  useEffect(() => {
    document.title = "Apply Now | C-Suite Leadership Development";
  }, []);

  return (
    <>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Apply to the Program</h1>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            Ready to transform your technical expertise into business leadership? Complete the application form below to join our next cohort.
          </p>
        </div>
      </div>
      
      <ApplicationSection />
    </>
  );
};

export default Apply;
