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
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const { toast } = useToast();

  // Form definition
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      role: "",
      organization: "",
      applicationType: "individual",
      ventureName: "",
      teamMembers: "",
      projectDescription: "",
      hearAbout: "",
    },
  });

  // Watch applicationType to conditionally show venture fields
  const applicationType = form.watch("applicationType");

  // Handle file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);

    if (file) {
      // Check file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setFileError("Please upload a PDF or Word document");
        return;
      }

      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setFileError("File size should be less than 5MB");
        return;
      }

      setResumeFile(file);
    }
  };

  // Form submission
  const onSubmit = async (data: ApplicationFormValues) => {
    if (!resumeFile) {
      setFileError("Please upload your resume/CV");
      return;
    }

    try {
      // Create a form data object to handle the file upload
      const formData = new FormData();

      // Append all form fields
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });

      // Append the file
      formData.append("resume", resumeFile);

      // Send the form data to the server
      // In this example, we'll just simulate the API call
      // const response = await apiRequest('POST', '/api/apply', formData);

      // Show success toast
      toast({
        title: "Application Submitted",
        description:
          "Thank you for your application! We will review your submission and contact you soon.",
      });

      // Reset the form
      form.reset();
      setResumeFile(null);
    } catch (error) {
      toast({
        title: "Submission Error",
        description:
          "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  };

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
          <h2 className="font-heading text-3xl font-bold mb-3">Apply Now</h2>
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
              Application Form
            </h3>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Role</FormLabel>
                      <FormControl>
                        <Input placeholder="CTO, Researcher, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Company or Institution"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="applicationType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Application Type</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="individual"
                              id="individual"
                            />
                            <Label htmlFor="individual">Individual</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="venture" id="venture" />
                            <Label htmlFor="venture">Venture (Team)</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {applicationType === "venture" && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-md">
                    <h4 className="font-medium">Venture Information</h4>

                    <FormField
                      control={form.control}
                      name="ventureName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Venture Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="teamMembers"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Team Members (up to 2 additional)
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Name, Email, Role (one per line)"
                              rows={2}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                <FormField
                  control={form.control}
                  name="projectDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Brief Description of Your Project/Venture
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your deep-tech project or venture"
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-2">
                  <Label htmlFor="resume">Upload Resume/CV</Label>
                  <Input
                    id="resume"
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                  {fileError && (
                    <p className="text-red-500 text-sm mt-1">{fileError}</p>
                  )}
                  {resumeFile && (
                    <p className="text-green-500 text-sm mt-1">
                      File uploaded: {resumeFile.name}
                    </p>
                  )}
                </div>

                <FormField
                  control={form.control}
                  name="hearAbout"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about us?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Please select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ORKTS">ORKTS</SelectItem>
                          <SelectItem value="University">University</SelectItem>
                          <SelectItem value="Colleague">
                            Colleague Referral
                          </SelectItem>
                          <SelectItem value="Social Media">
                            Social Media
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all hover:shadow-lg h-auto"
                >
                  Submit Application
                </Button>
              </form>
            </Form>
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
                className="w-full bg-secondary hover:bg-pink-600 text-white text-center font-semibold py-3 px-6 rounded-md transition-all hover:shadow-lg h-auto"
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
                  <span>Commercialization potential with deep-tech ventures </span>
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
                <p className="font-medium">
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
