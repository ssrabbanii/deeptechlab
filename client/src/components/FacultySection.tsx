import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Link } from "wouter";

const facultyMembers = [
  {
    name: "Prof. Kevin Au",
    role: "",
    bio: "Director of the CUHK Centre for Entrepreneurship and Centre for Family Business, Prof. Au is a leading expert in entrepreneurship, family business, and international management. He is also an angel investor, board advisor, and policy contributor, bridging academia, government, and startup ecosystems across Asia.",
    image:
      "https://www.bschool.cuhk.edu.hk/wp-content/uploads/AU-Kevin_thumb.jpg",
  },

  {
    name: "Mr. Olivier Cotard",
    role: "",
    bio: "Olivier is a global entrepreneur and strategist with deep operational leadership in tech, manufacturing, and innovation across Asia, Europe, and the US. Founder of 3C Ventures and EU deep-tech evaluator, he mentors startups and leads the ATEC Startup Competition with a focus on scalable innovation.",
    image:
      "https://static.wixstatic.com/media/fc0576_7d51f6680b304fe6aa4fe09fe32cdec7~mv2.jpg/v1/crop/x_0,y_0,w_400,h_320/fill/w_559,h_448,al_c,lg_1,q_80,enc_avif,quality_auto/Olivier%20Cotard.jpg",
  },
  {
    name: "Dr. Marta Dowejko",
    role: "",
    bio: "Dr. Dowejko is Assistant Dean (Global Engagement) and Director of Entrepreneurship and Innovation Centre at School of Business, Hong Kong Baptist University, specializing in entrepreneurship education and startup ecosystem development. A former startup co-founder and mentor, she connects academia, investors, and ecosystem players to support innovative and sustainable ventures in Hong Kong and the Greater Bay Area. She is an advocate for the qualitative-first, empathy-driven approach to innovation.",
    image: "/attached_assets/marta.png",
  },
  {
    name: "Mr. Keenan Kwok",
    role: "",
    bio: "Keenan Kwok is the Group CEO of GetLinks, Asia’s leading curated tech hiring marketplace operating across Hong Kong, Singapore, Thailand, Vietnam, and Indonesia. A serial entrepreneur and angel investor, he also serves as Co-founder of Aera VC, Founder of AsiaStartups, and advisor to multiple tech and manufacturing companies. With a career spanning investment banking at Deutsche Bank to scaling startups and venture funds, he is a recognized force in building Asia’s digital and innovation ecosystem.",
    image: "/attached_assets/Keenan.jpg",
  },
  {
    name: "Prof. Victoria Jian Wang",
    role: "",
    bio: "With around 30 years in renown global organizations including senior executive leadership roles at IBM, DuPont, and HAVI, Prof. Wang brings deep expertise in transformation, talent strategy, and cross-cultural leadership. Now a professional executive coach and adjunct associate professor in management at CUHK, she mentors C-suite leaders and women executives globally. ",
    image:
      "https://static.wixstatic.com/media/fc0576_3bd63deeb7e14b98aa7ef01df377a56b~mv2.jpg/v1/fill/w_914,h_732,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-06-26%20at%205_40_edited.jpg",
  },
];

const guestSpeakers = [
  {
    name: "Mr. Emmanuel Hui",
    role: "CEO, Pebble Accelerator",
    bio: "Emmanuel Hui is the Principal of Pentepebble – an early-stage healthcare and life sciences fund with a GBA mandate. For his portfolio, he serves as a Board member of Tonisity China, EggLogics, and Angene Biotechnology. Pentepebble is a spin-off from Sagamore, a China-only fund of funds, and is also backed by HN Group (Macau). Prior to investing, Emmanuel co-founded Moogene Medi (KRX:322970), a gene therapy platform company. He also serves on the HKSTP Biomedical Techno ...[Truncated]",
    image: "/attached_assets/EmmanuelHui.jpg",
  },
  {
    name: "Dr. Sidney Tam",
    role: "CEO, Synexo",
    bio: "With 40+ years in MNCs and China’s corporate scene, Dr. Tam brings deep expertise in cross-border innovation across biotech, media, Industry 4.0, healthcare, and venture finance. As CEO of Reanda Consulting and co-founder of LifeHealth Group, he has led four companies through IPOs and M&As. A seasoned leader, strategic advisor, and startup mentor, he drives transformation across Asia’s innovation ecosystem.",
    image:
      "https://static.wixstatic.com/media/fc0576_f94a77c69a4d4c5b98dc03a2aebd5398~mv2.jpg/v1/fill/w_378,h_302,al_c,lg_1,q_80,enc_avif,quality_auto/Sidney%20CV%202024%20WBI%20International_edited.jpg",
  },
  {
    name: "Mr. Mike Mastroyiannis",
    role: "Founder and Managing Partner, TenX2",
    bio: "Mike has 22 years of intrapreneurial experience with technology corporates (Philips Electronics, OSRAM/Siemens), where he founded start-ups and held CEO roles in Silicon Valley and Hong Kong. He also has 16 years of entrepreneurial experience scaling four global start-ups across Consumer Electronics, Telcos, IoT Lighting, and more. His competencies include CEO/COO roles, strategy, innovation, SaaS, IoT, and authoring 'Xponential Growth'. A mentor with the Founder Institu ...[Truncated]",
    image: "/attached_assets/MikeMastroyiannis.jpg",
  },
  {
    name: "Mr. Charudatta Datar",
    role: "CEO & Co-founder, Astra Optics Limited",
    bio: "Charu is the CEO and Co-founder of Astra Optics Limited. With 15 years of global experience across technology, sales, and management, he brings interdisciplinary expertise to deep-tech commercialization. He played a pivotal role in transforming Professor Chen's early-stage research on holography-based nano 3D printing into a market-ready product, achieving real equipment sales across multiple markets including the U.S., India, and Hong Kong.",
    image: "/attached_assets/Charu.png",
  },
  {
    name: "Mr. Edmund Chan",
    role: "Co-founder, Meat The Next",
    bio: "Edmund Chan is the co-founder of Meat the Next, a Super Food Technology Impact Venture creating TIGA MILK to combat climate change through dietary transformation. A CUHK Executive MBA graduate with 15 years in the food industry, he has received over 25 awards for entrepreneurship and ESG, including Hong Kong's 10 Outstanding Young Entrepreneurs and SDG Hub Climate Action Recognition Scheme. Passionate about youth empowerment, he regularly shares his experience in STEM an ...[Truncated]",
    image: "/attached_assets/EdmundChan.jpg",
  },
  {
    name: "Ms. Alice Reimer",
    role: "Co-founder of The51",
    bio: "Alice Reimer is a trailblazer in Alberta's tech startup ecosystem. She has served as CEO of Evoco, Chaordix, and Fillip, and as Site Lead of Creative Destruction Lab Rockies. A champion for women in startups, she co-founded The51 to elevate women-founded companies. Named one of Canada's Top Female Entrepreneurs and Alberta's 50 Most Influential People, she has led Startup Calgary and A100, and mentors through the Venture Mentorship Service of Alberta.",
    image: "/attached_assets/AliceReimer.png",
  },
  {
    name: "Mr. Danny Chen",
    role: "Co-founder, New Atlas Capital | COO, Illuminatio Medical Technology",
    bio: "Danny Chen is a seasoned financial professional with expertise in fundraising, investor relations, and equity research. He co-founded New Atlas Capital, a Hong Kong-based investment bank, after leading equity research at GCS-CIMB and developing credit rating methodologies at Pengyuan. He has managed SPAC listings, debt restructuring, and fundraising for listed companies. Danny holds an MBA from CUHK and a BA in Economics & Finance from HKU.",
    image: "/attached_assets/Danny-Chen.jpeg",
  },
  {
    name: "Mr. Herman Chan",
    role: "Managing Director, LeafIoT Technology Limited",
    bio: "Herman Chan leads LeafIoT Technology, pioneering AIoT-based tree risk assessment. He developed the world's first tree heartbeat detector and is driving urban forestry innovation globally. With a focus on sustainability, Chan connects EU carbon projects to international clients and is recognized at platforms such as GITEX Asia and ZurichHongKong Climate Month for his leadership in sustainable innovation.",
    image: "/attached_assets/Herman-Chan.jpg",
  },
  {
    name: "Dr. Carolyn Zhao",
    role: "Founder of LinkLab Innovation & Partner, TenX2",
    bio: "Dr. Carolyn Zhao is the Founder of LinkLab Innovation and Partner at TenX2. She specializes in high-tech scouting, innovation strategy, and scaling startups. With 15+ years of experience, she's led corporate innovation for Fortune 500s across the US and Asia, and worked across sectors including telecom, healthcare, AIoT, and mobility. Her global network spans academia, tech parks, and cross-industry MNCs.",
    image: "/attached_assets/Carolyn.jpg",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

        {/* Guest Speakers Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">
              Guest Speakers/Facilitator - Summer 2025
            </h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Industry leaders, successful entrepreneurs, and innovation experts
              who will share their insights and experience throughout the
              program.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {guestSpeakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-light rounded-lg overflow-hidden shadow-sm hover-scale"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-contain object-center"
                />
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-lg">
                    {speaker.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {speaker.role}
                  </p>
                  <p className="text-gray-600 text-sm">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Our faculty roster continues to grow with industry experts and
            thought leaders joining the program throughout the year.
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
