import { Button } from "@/components/ui/button";
import syllabusFile from "@assets/Course Syllabus Overview Scientists Track and Business Leaders Track June 2025_1749623282882.pdf";

const ScheduleSection = () => {
  // Download syllabus handler
  const handleDownloadSyllabus = () => {
    const link = document.createElement('a');
    link.href = syllabusFile;
    link.download = 'Course-Syllabus-Deep-Tech-Leadership-Program.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="schedule" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-3">
              Program Schedule
            </h2>
            <div className="section-divider"></div>
            <p className="text-gray-600 my-4">
              Our program is designed to maximize learning while accommodating
              the busy schedules of working professionals.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="h-full w-0.5 bg-primary bg-opacity-30 mx-auto mt-2"></div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                  <h3 className="font-heading font-semibold text-lg">
                    Week 1: In-Person Kickoff
                  </h3>
                  <p className="text-primary mb-2 font-medium">
                    Ventures Track Class: July 5, 2025
                  </p>
                  <p className="text-primary mb-2 font-medium">
                    CXOs Track Class: August 2, 2025
                  </p>
                  <p className="text-gray-600">
                    Intensive workshops covering business fundamentals,
                    leadership principles, and market analysis.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="h-full w-0.5 bg-primary bg-opacity-30 mx-auto mt-2"></div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                  <h3 className="font-heading font-semibold text-lg">
                    Week 2: Online Sessions
                  </h3>
                  <p className="text-primary mb-2 font-medium">
                    Ventures Track Class: July 12, 2025
                  </p>
                  <p className="text-primary mb-2 font-medium">
                    CXOs Track Class: August 9, 2025
                  </p>
                  <p className="text-gray-600">
                    Virtual learning modules on fundraising strategies, pitch
                    development, and financial projections.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="h-full w-0.5 bg-primary bg-opacity-30 mx-auto mt-2"></div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                  <h3 className="font-heading font-semibold text-lg">
                    Week 3: Online Sessions
                  </h3>
                  <p className="text-primary mb-2 font-medium">
                    Ventures Track Class: July 19, 2025
                  </p>
                  <p className="text-primary mb-2 font-medium">
                    CXOs Track Class: August 16, 2025
                  </p>
                  <p className="text-gray-600">
                    Virtual sessions on go-to-market strategy, team building,
                    and operational excellence.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                  <h3 className="font-heading font-semibold text-lg">
                    Week 4: In-Person Finale (for both Ventures and CXOs tracks)
                  </h3>

                  <p className="text-primary mb-2 font-medium">
                    August 23, 2025{" "}
                  </p>
                  <p className="text-gray-600">
                    Final presentations, investor networking event,
                    “speed-dating" with deep-tech ventures, and graduation
                    ceremony.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
              alt="Tech entrepreneur presenting at business workshop"
              className="rounded-xl shadow-md mb-8"
            />

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-heading text-xl font-semibold mb-4">
                Program Format
              </h3>
              <p className="text-gray-600 mb-6">
                Our hybrid delivery model combines the best of in-person
                hands-on activities and networking with flexible online
                learning.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 w-10 h-10 flex items-center justify-center rounded-full shrink-0 mr-4">
                    <i className="fas fa-users text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold">
                      In-Person Workshops
                    </h4>
                    <p className="text-gray-600">
                      Weeks 1 & 4 feature hands-on activities and networking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 w-10 h-10 flex items-center justify-center rounded-full shrink-0 mr-4">
                    <i className="fas fa-laptop text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold">
                      Online Sessions
                    </h4>
                    <p className="text-gray-600">
                      Weeks 2 & 3 offer flexible virtual learning and group
                      work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="outline"
                  className="inline-flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-medium transition-all h-auto"
                  onClick={handleDownloadSyllabus}
                >
                  <i className="fas fa-download mr-2"></i>
                  Download Full Syllabus (PDF)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
