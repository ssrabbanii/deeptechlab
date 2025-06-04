import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Link } from "wouter";

const facultyMembers = [
  {
    name: "Dr. Kevin Au",
    role: "",
    bio: "Director of the CUHK Centre for Entrepreneurship and Centre for Family Business, Prof. Au is a leading expert in entrepreneurship, family business, and international management. He is also an angel investor, board advisor, and policy contributor, bridging academia, government, and startup ecosystems across Asia.",
    image:
      "https://www.bschool.cuhk.edu.hk/wp-content/uploads/AU-Kevin_thumb.jpg",
  },
  {
    name: "Dr. Marta Dowejko",
    role: "",
    bio: "Dr. Dowejko is Assistant Dean (Global Engagement) and Director of Entrepreneurship and Innovation Centre at School of Business, Hong Kong Baptist University, specializing in entrepreneurship education and startup ecosystem development. A former startup co-founder and mentor, she connects academia, investors, and ecosystem players to support innovative and sustainable ventures in Hong Kong and the Greater Bay Area. She is an advocate for the qualitative-first, empathy-driven approach to innovation.",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQEEC0tjs4fK7w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516764841662?e=1753920000&v=beta&t=NniwmU7PcFSd1MSkFmZk1DKDZ1k_sMPj6xYAYdMM4SY",
  },
  {
    name: "Mr. Olivier Cotard",
    role: "",
    bio: "Olivier is a global entrepreneur and strategist with deep operational leadership in tech, manufacturing, and innovation across Asia, Europe, and the US. Founder of 3C Ventures and EU deep-tech evaluator, he mentors startups and leads the ATEC Startup Competition with a focus on scalable innovation.",
    image:
      "https://static.wixstatic.com/media/fc0576_7d51f6680b304fe6aa4fe09fe32cdec7~mv2.jpg/v1/crop/x_0,y_0,w_400,h_320/fill/w_559,h_448,al_c,lg_1,q_80,enc_avif,quality_auto/Olivier%20Cotard.jpg",
  },
  {
    name: "Dr. Sidney Tam",
    role: "",
    bio: "With 40+ years in MNCs and China’s corporate scene, Dr. Tam brings deep expertise in cross-border innovation across biotech, media, Industry 4.0, healthcare, and venture finance. As CEO of Reanda Consulting and co-founder of LifeHealth Group, he has led four companies through IPOs and M&As. A seasoned leader, strategic advisor, and startup mentor, he drives transformation across Asia’s innovation ecosystem.",
    image:
      "https://static.wixstatic.com/media/fc0576_f94a77c69a4d4c5b98dc03a2aebd5398~mv2.jpg/v1/fill/w_378,h_302,al_c,lg_1,q_80,enc_avif,quality_auto/Sidney%20CV%202024%20WBI%20International_edited.jpg",
  },
  {
    name: "Dr. Victoria Jian Wang",
    role: "",
    bio: "With around 30 years in renown global organizations including senior executive leadership roles at IBM, DuPont, and HAVI, Dr. Wang brings deep expertise in transformation, talent strategy, and cross-cultural leadership. Now a professional executive coach and adjunct associate professor in management at CUHK, she mentors C-suite leaders and women executives globally. ",
    image:
      "https://static.wixstatic.com/media/fc0576_3bd63deeb7e14b98aa7ef01df377a56b~mv2.jpg/v1/fill/w_914,h_732,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-06-26%20at%205_40_edited.jpg",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="bg-light rounded-lg overflow-hidden shadow-sm hover-scale"
            >
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-64 object-contain object-center"
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
            Guest speakers will include mentors and other founders of DTL. Our
            faculty roster continues to grow with industry experts and thought
            leaders.
          </p>
          {/* <Link href="#contact" onClick={(e) => handleNavigation(e, "contact")}>
            <Button
              variant="link"
              className="inline-flex items-center text-primary font-medium hover:underline p-0 h-auto"
            >
              Interested in becoming a speaker or mentor?
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
