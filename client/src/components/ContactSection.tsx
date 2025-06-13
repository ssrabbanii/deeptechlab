import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { useToast } from "@/hooks/use-toast";

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z
    .string()
    .min(10, { message: "Message should be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// const ContactSection = () => {
//   const { toast } = useToast();

//   // Form definition
//   const form = useForm<ContactFormValues>({
//     resolver: zodResolver(contactSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     },
//   });

//   // Form submission
//   const onSubmit = async (data: ContactFormValues) => {
//     try {
//       // In a real application, this would send data to the server
//       // const response = await apiRequest('POST', '/api/contact', data);

//       // Show success toast
//       toast({
//         title: "Message Sent",
//         description:
//           "Thank you for your message! We will get back to you as soon as possible.",
//       });

//       // Reset the form
//       form.reset();
//     } catch (error) {
//       toast({
//         title: "Submission Error",
//         description:
//           "There was an error sending your message. Please try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <section id="contact" className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           <div>
//             <h2 className="font-heading text-3xl font-bold mb-3">Contact Us</h2>
//             <div className="section-divider"></div>
//             <p className="text-gray-600 my-4">
//               Have questions about the program? Our team is here to help. Reach
//               out using the form or contact us directly.
//             </p>

//             <div className="mt-8 space-y-6">
//               <div className="flex items-start">
//                 <div className="bg-primary bg-opacity-10 w-12 h-12 flex items-center justify-center rounded-full shrink-0 mr-4">
//                   <i className="fas fa-envelope text-primary text-xl"></i>
//                 </div>
//                 <div>
//                   <h3 className="font-heading font-semibold text-lg">
//                     Email Us
//                   </h3>
//                   <p className="text-gray-600">
//                     Program Inquiries:{" "}
//                     <a
//                       href="mailto:info@dtl-hk.com"
//                       className="text-primary hover:underline"
//                     >
//                       2025cohort@hkdeeptechlab.io
//                     </a>
//                   </p>
//                 </div>
//               </div>

//               {/* <div className="flex items-start">
//                 <div className="bg-primary bg-opacity-10 w-12 h-12 flex items-center justify-center rounded-full shrink-0 mr-4">
//                   <i className="fas fa-map-marker-alt text-primary text-xl"></i>
//                 </div>
//                 <div>
//                   <h3 className="font-heading font-semibold text-lg">Location</h3>
//                   <p className="text-gray-600">Center for Entrepreneurship<br />Hong Kong Science Park<br />Shatin, Hong Kong</p>
//                 </div>
//               </div> */}

//               {/* <div className="flex items-start">
//                 <div className="bg-primary bg-opacity-10 w-12 h-12 flex items-center justify-center rounded-full shrink-0 mr-4">
//                   <i className="fas fa-user text-primary text-xl"></i>
//                 </div>
//                 <div>
//                   <h3 className="font-heading font-semibold text-lg">Program Contacts</h3>
//                   <p className="text-gray-600">Dr. Kevin Au - Program Director</p>
//                   <p className="text-gray-600">Victoria Wang - Admissions Coordinator</p>
//                 </div>
//               </div> */}
//             </div>

//             {/* <div className="mt-8">
//               <h3 className="font-heading font-semibold text-lg mb-4">
//                 Connect With Us
//               </h3>
//               <div className="flex space-x-4">
//                 <a
//                   href="https://www.linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#0077B5] text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
//                   aria-label="LinkedIn"
//                 >
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a
//                   href="https://www.twitter.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#1DA1F2] text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
//                   aria-label="Twitter"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a
//                   href="https://www.facebook.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#4267B2] text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
//                   aria-label="Facebook"
//                 >
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a
//                   href="https://www.instagram.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#E1306C] text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
//                   aria-label="Instagram"
//                 >
//                   <i className="fab fa-instagram"></i>
//                 </a>
//               </div>
//             </div> */}
//           </div>

//           <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
//             <h3 className="font-heading text-2xl font-semibold mb-6">
//               Send Us a Message
//             </h3>

//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="space-y-6"
//               >
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Full Name</FormLabel>
//                       <FormControl>
//                         <Input placeholder="John Doe" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Email Address</FormLabel>
//                       <FormControl>
//                         <Input
//                           type="email"
//                           placeholder="you@example.com"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="subject"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Subject</FormLabel>
//                       <Select
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                       >
//                         <FormControl>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Please select" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           <SelectItem value="Application Question">
//                             Application Question
//                           </SelectItem>
//                           <SelectItem value="Program Details">
//                             Program Details
//                           </SelectItem>
//                           <SelectItem value="Partnership Inquiry">
//                             Partnership Inquiry
//                           </SelectItem>
//                           <SelectItem value="Speaking Opportunity">
//                             Speaking Opportunity
//                           </SelectItem>
//                           <SelectItem value="Other">Other</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="message"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Message</FormLabel>
//                       <FormControl>
//                         <Textarea
//                           placeholder="How can we help you?"
//                           rows={4}
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <Button
//                   type="submit"
//                   className="w-full bg-primary hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition-all hover:shadow-lg h-auto"
//                 >
//                   Send Message
//                 </Button>
//               </form>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
const ContactSection = () => {
  const { toast } = useToast();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-3">Contact Us</h2>
            <div className="section-divider"></div>
            <p className="text-gray-600 my-4">
              Have questions about the program? Our team is here to help. Reach
              out to us via email and we’ll get back to you shortly.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 w-12 h-12 flex items-center justify-center rounded-full shrink-0 mr-4">
                  <i className="fas fa-envelope text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">
                    Email Us
                  </h3>
                  <p className="text-gray-600">
                    Program Inquiries:{" "}
                    <a
                      href="mailto:admin@hkdeeptechlab.io"
                      className="text-primary hover:underline"
                    >
                      admin@hkdeeptechlab.io
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Placeholder for second column or illustration */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 text-center flex items-center justify-center">
            <p className="text-gray-600">
              We're excited to connect with you. Email us anytime!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
