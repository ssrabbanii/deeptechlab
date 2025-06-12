import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { scrollToSection } from "@/lib/utils";

// Application form schema
const applicationSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  role: z.string().min(2, { message: "Role is required" }),
  organization: z.string().min(2, { message: "Organization is required" }),
  applicationType: z.enum(["individual", "venture"]),
  ventureName: z.string().optional(),
  teamMembers: z.string().optional(),
  projectDescription: z
    .string()
    .min(10, { message: "Please provide a brief project description" }),
  hearAbout: z.string().optional(),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

const ApplicationSection = () => {
  const { toast } = useToast();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="apply" className="py-16 bg-primary bg-opacity-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-3 text-white">
            Apply Now
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-white max-w-3xl mx-auto mt-4">
            Ready to transform your technlology expertise into business
            leadership?
          </p>

          <p className="text-white max-w-3xl mx-auto mt-4">
            Ready to take your business leadership and entrepreneurship into the
            deep-tech venture start-up space?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="font-heading text-2xl font-semibold mb-6">
              Choose Your Application Path
            </h3>

            <div className="flex flex-col gap-6">
              <a
                href="https://form.typeform.com/to/ngveMBgA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-primary hover:bg-purple-600 text-primary-foreground font-semibold py-4 px-6 text-lg rounded-md h-auto">
                  Scientists Track
                </Button>
              </a>

              <a
                href="https://form.typeform.com/to/Aln7dy3f"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-primary hover:bg-purple-600 text-primary-foreground font-semibold py-4 px-6 text-lg rounded-md h-auto">
                  Business Leader Track
                </Button>
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="font-heading text-2xl font-semibold mb-4">
                Nominate a Venture
              </h3>
              <p className="text-gray-600 mb-6">
                Are you from a partner institution? Nominate promising deep-tech
                ventures for the program.
              </p>

              <Button
                className="w-full bg-primary hover:bg-secondary text-primary-foreground text-center font-semibold py-3 px-6 rounded-md transition-all hover:shadow-lg h-auto"
                onClick={() => {
                  toast({
                    title: "Coming Soon",
                    description:
                      "The nomination portal will be available soon. Please contact us for more information.",
                  });
                }}
              >
                Nominate Now
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="font-heading text-xl font-semibold mb-4">
                Selection Criteria
              </h3>
              <p className="text-gray-600 mb-4">
                Our selection process prioritizes:
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                  <span>Technology background with deep expertise</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                  <span>
                    Commercialization potential with deep-tech ventures{" "}
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                  <span>Leadership ambition and potential</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-success mt-1 mr-2"></i>
                  <span>Commitment to full program participation</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-primary bg-opacity-10 rounded-md">
                <p className="font-medium text-white">
                  Applications are reviewed on a rolling basis. Early
                  application is encouraged as space is limited.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-gray-600">
                  Questions about the application process?
                </p>
                <Link
                  href="#contact"
                  onClick={(e) => handleNavigation(e, "contact")}
                >
                  <Button
                    variant="link"
                    className="text-primary font-medium hover:underline p-0 h-auto"
                  >
                    Contact our admissions team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
