import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Link } from "wouter";

const ParticipantsSection = () => {
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="participants" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-3">
            For Participants
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Gain the essential skills and knowledge to lead your deep-tech venture to commercial success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Who Should Apply */}
          <div className="bg-light rounded-lg p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-4">
              Who Should Apply
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold text-primary mb-2">Ventures Track</h4>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Scientists working on spinouts</li>
                <li>Post-docs and Technical CTOs transitioning into CEO/COO roles</li>
                <li>Deep-tech founders seeking to strengthen their business acumen</li>
                <li>Research teams aiming to commercialize their innovations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">CXOs Track</h4>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Experienced business leaders/entrepreneurs looking for new challenges</li>
                <li>Business graduates with start-up career ambition</li>
                <li>Second-generation family talent aspiring to become CXOs in deep tech ventures</li>
              </ul>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="bg-light rounded-lg p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-4">
              Learning Outcomes
            </h3>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Understanding of Deep-Tech Ecosystems</li>
              <li>Strategic Commercialization Pathways</li>
              <li>Effective Fundraising and Growth Strategies</li>
              <li>Go-to-market Strategy Development</li>
              <li>Leadership and Team Management</li>
              <li>Start off Mindset Shift towards Deep-tech Ventures</li>
            </ul>
          </div>

          {/* Program Format */}
          <div className="bg-light rounded-lg p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-4">
              Program Format
            </h3>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Hybrid model: in-person and online</li>
              <li>2 weeks in-person, 2 weeks online</li>
              <li>Interactive Workshops, Case Studies, Group Exercises, Simulations, Reflections, and Mixed Group Activities</li>
              <li>Networking with Successful Deep-Tech CXOs, Investors, Industry Experts and Mentors</li>
            </ul>
          </div>

          {/* Program Cost & Funding */}
          <div className="bg-light rounded-lg p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-4">
              Program Cost & Funding
            </h3>
            <p className="text-gray-600 mb-4">
              We keep the program accessible through partner subsidies and flexible pricing for individuals and ventures.
            </p>
            <ul className="text-gray-700 mb-4">
              <li className="flex justify-between py-2 border-b border-gray-200">
                <span>Individual Participant</span>
                <span className="font-heading font-bold text-xl">$2,000</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-200">
                <span>Venture (up to 3 members)</span>
                <span className="font-heading font-bold text-xl">$3,600</span>
              </li>
            </ul>
            <div className="bg-accent bg-opacity-10 text-dark p-4 rounded-md">
              <p className="font-medium">
                A partner institution may cover a part of the costs for eligible participants. For more details, please contact us.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h4 className="font-heading text-2xl font-semibold mb-4">
            Ready to transform your leadership?
          </h4>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Limited slots available for our upcoming cohort. Apply now or contact us to learn more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#apply" onClick={(e) => handleNavigation(e, "apply")}> 
              <Button className="bg-primary hover:bg-purple-700 text-white py-3 px-6 rounded-md font-heading font-semibold transition-all hover:shadow-lg h-auto">
                Apply Now
              </Button>
            </Link>
            <Link href="#contact" onClick={(e) => handleNavigation(e, "contact")}> 
              <Button variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-white py-3 px-6 rounded-md font-heading font-semibold transition-all h-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ParticipantsSection;
