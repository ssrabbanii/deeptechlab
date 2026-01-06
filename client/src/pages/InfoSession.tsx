import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet';

const InfoSession = () => {
  useEffect(() => {
    document.title = "Deep-Tech Lab Accelerator Info Session | 14 January 2026";
  }, []);

  const handleJoinMeeting = () => {
    window.open('https://meet.google.com/pii-wgme-aqx', '_blank');
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Join the Deep-Tech Lab Accelerator Info Session on 14 January 2026 (Zoom). Learn how a small cohort of ventures gets government and university access, co-builds with family offices and corporate venture capital, and co-launches proof of concept projects."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-purple-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6">
              Join the Deep-Tech Lab Accelerator Info Session
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              A small-cohort venture-building accelerator designed to turn deep tech into real adoption—through government and university pathways, strategic capital co-builds, and proof of concept launches.
            </p>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-3 inline-block text-left">
              <p className="text-lg font-semibold">Join the Deep-Tech Lab Accelerator Info Session</p>
              <p className="text-base opacity-90">Wednesday, January 14 · 3:00 – 4:00pm</p>
              <p className="text-base opacity-90">Time zone: Asia/Hong_Kong</p>
              <p className="text-base opacity-90">Google Meet: https://meet.google.com/pii-wgme-aqx</p>
            </div>
            <p className="text-lg mb-8 opacity-90">Maximum 6 ventures per cohort · Limited seats</p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Button
                onClick={handleJoinMeeting}
                className="bg-accent hover:bg-amber-500 text-dark px-8 py-6 rounded-md font-heading font-semibold text-base transition-all hover:shadow-lg h-auto"
              >
                Join via Google Meet
              </Button>
              <Link href="/">
                <Button
                  variant="outline"
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 border border-white px-8 py-6 rounded-md font-heading font-semibold text-base transition-all text-white h-auto"
                >
                  Explore Deep-Tech Lab
                </Button>
              </Link>
            </div>
            <p className="text-sm opacity-75">No application required to attend the Info Session.</p>
          </div>
        </div>
      </section>

      {/* Why this session */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center">
              Why this session
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Deep tech doesn't fail because the science is weak. It fails because access is slow.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              This session is a fast, clear walkthrough of how Deep-Tech Lab helps ventures move from deep tech to deep access—so the right partners can validate, co-build, and deploy.
            </p>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
              What you'll learn in 45 minutes
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary text-2xl mr-4">•</span>
                <span className="text-lg text-gray-700">What the Deep-Tech Lab Accelerator is, and how it works end-to-end</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-2xl mr-4">•</span>
                <span className="text-lg text-gray-700">How we support government and university access</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-2xl mr-4">•</span>
                <span className="text-lg text-gray-700">How co-building works with family offices and corporate venture capital</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-2xl mr-4">•</span>
                <span className="text-lg text-gray-700">What "minimum one proof of concept co-launched" looks like in practice</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-2xl mr-4">•</span>
                <span className="text-lg text-gray-700">How partnerships across Southeast Asia and the United Arab Emirates support go-to-market</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-2xl mr-4">•</span>
                <span className="text-lg text-gray-700">Who the cohort is built for, and what we look for when selecting ventures</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What makes the Accelerator different */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
              What makes the Accelerator different
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-primary">
                  Deep access, not generic mentorship
                </h3>
                <p className="text-gray-700">
                  We focus on unlocking the institutions and decision-makers that can move a venture from pilot to real deployment.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-primary">
                  Co-build with strategic capital
                </h3>
                <p className="text-gray-700">
                  We bring aligned partners into the build process—not just at the end—so validation and execution happen faster.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-primary">
                  Proof of concept as a deliverable
                </h3>
                <p className="text-gray-700">
                  The program is designed to support at least one proof of concept co-launch where there is clear fit and a defined pathway.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-primary">
                  Regional partnership pathways
                </h3>
                <p className="text-gray-700">
                  Hong Kong anchored, with partnerships across Southeast Asia and the United Arab Emirates to support expansion and deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who should attend */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
              Who should attend
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              This Info Session is for:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-primary text-xl mr-3">•</span>
                <span className="text-lg text-gray-700">Founders building deep technology and preparing for real-world deployment</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-xl mr-3">•</span>
                <span className="text-lg text-gray-700">Research-led teams ready to commercialize</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-xl mr-3">•</span>
                <span className="text-lg text-gray-700">Operators exploring venture-building roles in deep tech</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-xl mr-3">•</span>
                <span className="text-lg text-gray-700">Corporate innovation teams looking for co-build opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-xl mr-3">•</span>
                <span className="text-lg text-gray-700">Investors seeking earlier visibility into deep-tech execution</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
              Not sure if you qualify? Attend the session anyway—we'll explain fit, selection, and next steps clearly.
            </p>
          </div>
        </div>
      </section>

      {/* About Deep-Tech Lab */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center">
              About Deep-Tech Lab
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Deep-Tech Lab is a venture-building platform focused on co-building Hong Kong's next deep-tech unicorns by bringing together strong technical foundations, experienced operators, strategic capital, and the institutional pathways needed for adoption.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-heading text-xl font-semibold mb-3 text-primary">
                  Do I need to apply before attending?
                </h3>
                <p className="text-gray-700">
                  No. The Info Session is designed to help you decide whether you should apply.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-heading text-xl font-semibold mb-3 text-primary">
                  How many ventures are selected?
                </h3>
                <p className="text-gray-700">
                  A maximum of 6 ventures per cohort.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-heading text-xl font-semibold mb-3 text-primary">
                  What stage do you accept?
                </h3>
                <p className="text-gray-700">
                  Teams with a strong technical foundation and a credible path to a proof of concept. We'll share details in the session.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-heading text-xl font-semibold mb-3 text-primary">
                  What happens after the Info Session?
                </h3>
                <p className="text-gray-700">
                  If there's a fit, you'll get the next-step pathway (application and follow-up conversation).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              See if the Accelerator is a fit.
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join the Info Session on 14 January 2026 to understand the program, the cohort fit, and the pathways to proof of concept and deployment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={handleJoinMeeting}
                className="bg-accent hover:bg-amber-500 text-dark px-8 py-6 rounded-md font-heading font-semibold text-base transition-all hover:shadow-lg h-auto"
              >
                Join via Google Meet
              </Button>
              <Link href="/">
                <Button
                  className="bg-black text-white border-2 border-black hover:bg-gray-800 hover:text-white px-8 py-6 rounded-md font-heading font-semibold text-base transition-all h-auto"
                >
                  Explore Deep-Tech Lab
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSession;

