import { Link } from "wouter";

const ValueHighlights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-3">
            Why Choose Our Program
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Our intensive program equips deep-tech leaders with essential skills
            to transform technology expertise into commercial success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mastery of Critical Skills */}
          <div className="bg-light rounded-lg p-6 hover-scale shadow-sm">
            <div className="bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-brain text-primary text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              Mastery of Critical Skills
            </h3>
            <p className="text-gray-600">
              Disciplined Entrepreneurship and commercialization skills to
              transform science-discovery or technology innovations into
              market-ready products.
            </p>
          </div>

          {/* Enterprise Leadership Capabilities */}
          <div className="bg-light rounded-lg p-6 hover-scale shadow-sm">
            <div className="bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-users text-primary text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              Enterprise Leadership Capabilities
            </h3>
            <p className="text-gray-600">
              Practice cross-functional leadership skills to manage diverse
              teams and navigate uncertainties of deep tech ventures.
            </p>
          </div>

          {/* Ecosystem Thinking */}
          <div className="bg-light rounded-lg p-6 hover-scale shadow-sm">
            <div className="bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-network-wired text-primary text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              Ecosystem Thinking
            </h3>
            <p className="text-gray-600">
              Understand the landscape and uniqueness of deep-tech ventures and
              the key stakeholders involved.
            </p>
          </div>

          {/* Fundraising Confidence */}
          <div className="bg-light rounded-lg p-6 hover-scale shadow-sm">
            <div className="bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-hand-holding-usd text-primary text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              Fundraising Confidence
            </h3>
            <p className="text-gray-600">
              Master investor communications and fundraising strategies specific
              to deep-tech ventures.
            </p>
          </div>

          {/* Real-world CXO Mentorship */}
          <div className="bg-light rounded-lg p-6 hover-scale shadow-sm">
            <div className="bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-user-tie text-primary text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              Real-world CXO Mentorship
            </h3>
            <p className="text-gray-600">
              Learn directly from successful executives who have navigated the
              deep-tech journey.
            </p>
          </div>

          {/* Networking and Job-Matching Opportunities */}
          <div className="bg-light rounded-lg p-6 hover-scale shadow-sm">
            <div className="bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-handshake text-primary text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              Networking & Job Matching
            </h3>
            <p className="text-gray-600">
              Meet and engage with industry experts and entrepreneurs as well as
              high-potential deep-tech ventures as employers.
            </p>
          </div>

          {/* Hybrid Delivery Model */}
          <div className="bg-light rounded-lg p-6 hover-scale shadow-sm">
            <div className="bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-laptop-house text-primary text-2xl"></i>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              Hybrid Delivery Model
            </h3>
            <p className="text-gray-600">
              Flexible learning combining intensive in-person workshops with
              online collaboration.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-80">
          <span className="text-gray-400 text-sm uppercase font-semibold">
            In collaboration with
          </span>
          <span className="font-heading font-bold text-xl text-gray-700">
            CUHK ORKTS
          </span>
          <span className="font-heading font-bold text-xl text-gray-700">
            CUHK CfE
          </span>
          <span className="font-heading font-bold text-xl text-gray-700">
            HKUMed
          </span>
          <span className="font-heading font-bold text-xl text-gray-700">
            EdUHK KTSO
          </span>
          <span className="font-heading font-bold text-xl text-gray-700">
            HKBU EIC
          </span>
        </div>
      </div>
    </section>
  );
};

export default ValueHighlights;
