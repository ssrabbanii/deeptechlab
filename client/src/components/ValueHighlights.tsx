import { Link } from 'wouter';

const ValueHighlights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-3">Why Choose Our Program</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Our intensive program equips deep-tech leaders with essential skills to transform technical expertise into commercial success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Commercialization Skills */}
          <div className="bg-light rounded-lg p-6 hover-scale shadow-sm">
            <div className="bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-chart-line text-primary text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Commercialization Skills</h3>
            <p className="text-gray-600">Transform technical innovations into market-ready products with strategic business insight.</p>
          </div>
          
          {/* Fundraising Confidence */}
          <div className="bg-light rounded-lg p-6 hover-scale shadow-sm">
            <div className="bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-hand-holding-usd text-primary text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Fundraising Confidence</h3>
            <p className="text-gray-600">Master investor communications and funding strategies specific to deep-tech ventures.</p>
          </div>
          
          {/* Real-world CXO Mentorship */}
          <div className="bg-light rounded-lg p-6 hover-scale shadow-sm">
            <div className="bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-users-cog text-primary text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Real-world CXO Mentorship</h3>
            <p className="text-gray-600">Learn directly from successful executives who have navigated the deep-tech journey.</p>
          </div>
          
          {/* Hybrid Delivery Model */}
          <div className="bg-light rounded-lg p-6 hover-scale shadow-sm">
            <div className="bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-laptop-house text-primary text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Hybrid Delivery Model</h3>
            <p className="text-gray-600">Flexible learning combining intensive in-person workshops with online collaboration.</p>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
          <span className="text-gray-400 text-sm uppercase font-semibold">In collaboration with</span>
          <span className="font-heading font-bold text-xl text-gray-700">ORKTS</span>
          <span className="font-heading font-bold text-xl text-gray-700">CfE</span>
          <span className="font-heading font-bold text-xl text-gray-700">Deep-Tech Lab</span>
          <span className="font-heading font-bold text-xl text-gray-700">HKU</span>
        </div>
      </div>
    </section>
  );
};

export default ValueHighlights;
