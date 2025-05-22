import { useEffect } from 'react';
import ContactSection from '@/components/ContactSection';
import { Link } from 'wouter';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | C-Suite Leadership Development";
  }, []);

  return (
    <>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            Have questions or need more information about our program? Our team is here to help. Reach out using the form below or contact us directly.
          </p>
        </div>
      </div>
      
      <ContactSection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Visit Our Office</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.727895430529!2d114.17402181538984!3d22.420628385253006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8e7b0520c17%3A0x2592f21ab9349eb7!2sHong%20Kong%20Science%20Park!5e0!3m2!1sen!2sus!4v1652431448278!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading font-semibold text-lg">Address</h3>
                  <p className="text-gray-600">
                    Center for Entrepreneurship<br />
                    Hong Kong Science Park<br />
                    Shatin, New Territories<br />
                    Hong Kong SAR
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">Getting Here</h3>
                  <p className="text-gray-600">
                    The Science Park is easily accessible by public transportation. Take the East Rail Line to University Station, then transfer to bus route 272K to Science Park.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Program Information</h2>
              <div className="space-y-6">
                <div className="bg-light p-6 rounded-lg">
                  <h3 className="font-heading text-xl font-semibold mb-3">Next Information Session</h3>
                  <p className="text-gray-600 mb-4">
                    Join us for a virtual information session to learn more about the program and ask questions directly to our team.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <i className="fas fa-calendar-alt text-primary mt-1 mr-3"></i>
                      <span>May 15, 2023 | 7:00 PM - 8:30 PM (HKT)</span>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-video text-primary mt-1 mr-3"></i>
                      <span>Zoom Webinar</span>
                    </div>
                  </div>
                  <Link href="/register-info-session">
                    <button className="mt-4 bg-primary hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-all">
                      Register Now
                    </button>
                  </Link>
                </div>
                
                <div className="bg-light p-6 rounded-lg">
                  <h3 className="font-heading text-xl font-semibold mb-3">Key Contacts</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Program Director</p>
                      <p className="text-gray-600">Dr. Kevin Au</p>
                      <p className="text-primary">
                        <a href="mailto:kevin.au@dtl-hk.com">kevin.au@dtl-hk.com</a>
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Admissions</p>
                      <p className="text-gray-600">Victoria Wang</p>
                      <p className="text-primary">
                        <a href="mailto:admissions@dtl-hk.com">admissions@dtl-hk.com</a>
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Partnerships</p>
                      <p className="text-gray-600">Michael Lin</p>
                      <p className="text-primary">
                        <a href="mailto:partnerships@dtl-hk.com">partnerships@dtl-hk.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
