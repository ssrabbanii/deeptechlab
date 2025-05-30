import { useState } from "react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Link } from "wouter";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Who is eligible to apply?",
    answer: `
    For Technology Track: The program is designed for technical founders, scientists, engineers, and post-docs/researchers involved in deep-tech ventures. Applicants should have technical expertise and be in (or aspiring to) leadership roles such as CEO, CTO, or other C-suite positions. Both early-stage startups and spinouts from research institutions are welcome.

    For Business C-Suite Leader Track: Experienced business leaders, business/MBA/EMBA graduates with start-up career ambition, and second-generation family talent aspiring to become CXOs in deep tech ventures.
    `,
  },
  {
    question: "How do I get nominated through ORKTS/KTO/Partner Institution?",
    answer: `
    If you're affiliated with a partner institution or ORKTS/KTO in a university, reach out to your knowledge transfer office or institution. They can nominate promising ventures for priority consideration.

    Nominated participants may also be eligible for subsidy on program fees. You can also apply to us directly. For more details, feel free to contact us.
    `,
  },
  {
    question: "What's included in the program cost?",
    answer: `
    The program fee covers all workshops, learning materials, networking events, and mentorship sessions. It also includes refreshments during in-person days. For ventures applying as a team, the $3,600 fee covers participation for all team members (up to 3 members). Accommodation and travel expenses are not included.
    `,
  },
  {
    question: "Can I still attend if I'm overseas during the online weeks?",
    answer: `
    Yes, the online sessions in Weeks 2 and 3 are designed to be accessible from anywhere with a reliable internet connection. All sessions will be scheduled in Hong Kong time (GMT+8), but recordings will be available for participants in different time zones. However, attendance at the in-person sessions in Weeks 1 and 4 is mandatory. If you join as a venture, at least one of the members must join. Then you can get the best out of the program.
    `,
  },
  {
    question: "What are the expected time commitments?",
    answer: `
    The in-person weeks (1 and 4) require full-day participation (9:30am–5pm) on the specified dates. The online weeks (2 and 3) involve approximately 8–10 hours per week, including 2–3 hours of live sessions and the rest for assignments and group work. Participants should expect to dedicate at least 50 hours in total over the full program duration.
    `,
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-3">
            Frequently Asked Questions
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Find answers to common questions about the program, eligibility, and
            application process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 px-1 flex justify-between items-center font-heading font-semibold text-lg"
                aria-expanded={openIndex === index}
              >
                {item.question}
                <i
                  className={`fas fa-chevron-down text-primary transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                ></i>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-1 pb-4 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Don't see your question answered here?
          </p>
          <Link href="#contact" onClick={(e) => handleNavigation(e, "contact")}>
            <Button className="inline-flex items-center bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-md font-heading font-semibold transition-all hover:shadow-lg h-auto">
              Contact Us
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
