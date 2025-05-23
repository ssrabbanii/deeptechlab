import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Link } from "wouter";

const facultyMembers = [
  {
    name: "Au, Kevin Yuk-fai",
    role: "Facilitator",
    bio: "Director of the CUHK Centre for Entrepreneurship and Centre for Family Business, Prof. Au is a leading expert in entrepreneurship, family business, and international management. He is also an angel investor, board advisor, and policy contributor, bridging academia, government, and startup ecosystems across Asia.",
    image:
      "https://www.bschool.cuhk.edu.hk/wp-content/uploads/AU-Kevin_thumb.jpg",
  },
  {
    name: "Victoria Jian Wang",
    role: "Facilitator",
    bio: "With 30+ years in global leadership roles at IBM, DuPont, and HAVI, Dr. Wang brings deep expertise in transformation, talent strategy, and cross-cultural leadership. Now a professional executive coach and adjunct professor at CUHK, she mentors C-suite leaders and women executives globally.",
    image:
      "https://static.wixstatic.com/media/fc0576_3bd63deeb7e14b98aa7ef01df377a56b~mv2.jpg/v1/fill/w_914,h_732,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-06-26%20at%205_40_edited.jpg",
  },
  {
    name: "Olivier Cotard",
    role: "Facilitator",
    bio: "Olivier Cotard is a global entrepreneur and strategist with deep operational leadership in tech, manufacturing, and innovation across Asia, Europe, and the US. Founder of 3C Ventures and EU deep-tech evaluator, he mentors startups and leads the ATEC Startup Competition with a focus on scalable innovation.",
    image:
      "https://static.wixstatic.com/media/fc0576_7d51f6680b304fe6aa4fe09fe32cdec7~mv2.jpg/v1/crop/x_0,y_0,w_400,h_320/fill/w_559,h_448,al_c,lg_1,q_80,enc_avif,quality_auto/Olivier%20Cotard.jpg",
  },
];

const FacultySection = () => {
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="faculty" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-3">
            Core Faculty Team
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Learn from industry experts, successful entrepreneurs, and leading
            academics who bring real-world experience to the program.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="bg-light rounded-lg overflow-hidden shadow-sm hover-scale"
            >
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="font-heading font-semibold text-lg">
                  {faculty.name}
                </h3>
                <p className="text-primary text-sm font-medium">
                  {faculty.role}
                </p>
                <p className="text-gray-600 text-sm mt-2">{faculty.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Our faculty roster continues to grow with industry experts and
            thought leaders.
          </p>
          <Link href="#contact" onClick={(e) => handleNavigation(e, "contact")}>
            <Button
              variant="link"
              className="inline-flex items-center text-primary font-medium hover:underline p-0 h-auto"
            >
              Interested in becoming a speaker or mentor?
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
