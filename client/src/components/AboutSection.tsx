import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Link } from "wouter";

const AboutSection = () => {
  const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection("participants");
  };

  return (
    <section id="about" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.contentstack.io/v3/assets/blt57caa63e0368f6e8/bltb18fbe3eaefe3b36/63654344607d0e6f636b3d58/hkisd-social.jpg"
              alt="Deep tech innovation lab with researchers"
              className="rounded-xl shadow-md"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold mb-3">
              About the Program
            </h2>
            <div className="section-divider"></div>
            <p className="text-gray-600 my-4">
              The Deep-Tech Lab Business Executives Program is the FIRST program
              of its kind in Hong Kong and is tailored to educate and align
              experienced business leaders and technology founders for roles as
              CEO and other CXO roles in deep tech ventures. The program aims to
              bridge the gap between business acumen and technical expertise,
              fostering collaboration and enhancing the success rate of deep-
              tech startups.
            </p>

            <p className="text-gray-600 my-4">
              This program focuses on the critical aspects of deep tech venture
              leadership, combining academic insight, practical exercises, and
              collaborative activities.
            </p>

            <h3 className="font-heading text-xl font-semibold mt-6 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              We bridge business acumen and tech expertise to incubate leaders
              who can successfully commercialize innovative technologies and
              build sustainable deep-tech ventures. We contribute to the
              deep-tech ecosystem in Hong Kong by creating a talent pool of CXOs
              who will join deep-tech ventures and effectively lead the to
              success through enhanced leadership and alignment.
            </p>

            <h3 className="font-heading text-xl font-semibold mt-6 mb-2">
              Who It's For
            </h3>
            <div className="text-gray-600 space-y-4">
              <div>
                <strong className="block text-lg mb-1">Scientists Track</strong>
                <p>
                  Designed specifically for deep-tech scientist-founders, their
                  science team, and aspiring deep-tech CXOs who possess
                  cutting-edge technologies but seek to strengthen their
                  business capabilities — from product positioning and
                  commercialisation to team leadership and fundraising.
                </p>
              </div>
              <div>
                <strong className="block text-lg mb-1">
                  Business Leaders Track
                </strong>
                <p>
                  Designed specifically for experienced business leaders and
                  entrepreneurs, enterprising family business members who aspire
                  to be the CXOs in deep-tech ventures to gain technology
                  literacy, startup mindset, and CXO-ready skills to lead
                  deep-tech ventures with their founders.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="#participants" onClick={handleLearnMore}>
                <Button
                  variant="link"
                  className="text-primary font-medium hover:underline flex items-center p-0 h-auto"
                >
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
