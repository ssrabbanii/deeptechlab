import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';
import { GraduationCap, Building2, Users, ArrowRight } from 'lucide-react';

const Register = () => {
  useEffect(() => {
    document.title = "Register & Apply | C-Suite Leadership Development";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-purple-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join the Next Generation of Deep-Tech Leaders
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Transform your expertise into leadership excellence with our comprehensive C-Suite development program
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <p className="text-lg">
                Choose your application path below and take the first step toward becoming a leader in deep-tech ventures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Paths */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Choose Your Application Path
            </h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Select the path that best matches your background and career aspirations. Each track is specifically designed to meet the unique needs of different professional profiles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Venture Track */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative group">
              <CardHeader className="text-center pb-4">
                <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-20 transition-all">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl font-bold text-primary">
                  Apply as Venture
                </CardTitle>
                <CardDescription className="text-gray-600">
                  For startup teams and ventures (up to 3 members)
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4 mb-6">
                  <div className="text-center">
                    <span className="font-heading text-3xl font-bold text-primary">$3,600</span>
                    <p className="text-sm text-gray-600">for team of up to 3 members</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Ideal for:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Deep-tech startups with founding teams
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Research teams commercializing innovations
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        University spinouts with multiple founders
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Early-stage ventures seeking leadership alignment
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Link href="/apply">
                  <Button className="w-full bg-primary hover:bg-purple-700 text-white py-3 px-6 rounded-md font-heading font-semibold transition-all hover:shadow-lg h-auto group">
                    Apply as Venture
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Professor/Academic Track */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative group">
              <CardHeader className="text-center pb-4">
                <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-20 transition-all">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-2xl font-bold text-secondary">
                  Apply as Professor
                </CardTitle>
                <CardDescription className="text-gray-600">
                  For researchers, professors, and academic professionals
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4 mb-6">
                  <div className="text-center">
                    <span className="font-heading text-3xl font-bold text-secondary">$2,000</span>
                    <p className="text-sm text-gray-600">per individual participant</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Ideal for:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        University professors with commercialization potential
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Research scientists exploring entrepreneurship
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Post-docs transitioning to industry leadership
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Academic professionals seeking business acumen
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Link href="/apply">
                  <Button className="w-full bg-secondary hover:bg-pink-600 text-white py-3 px-6 rounded-md font-heading font-semibold transition-all hover:shadow-lg h-auto group">
                    Apply as Professor
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* C-Suite Executive Track */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative group md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <div className="bg-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-20 transition-all">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-2xl font-bold text-accent">
                  Apply as C-Suite Executive
                </CardTitle>
                <CardDescription className="text-gray-600">
                  For experienced business leaders entering deep-tech
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4 mb-6">
                  <div className="text-center">
                    <span className="font-heading text-3xl font-bold text-accent">$2,000</span>
                    <p className="text-sm text-gray-600">per individual participant</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Ideal for:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Experienced business leaders seeking tech challenges
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        MBA/EMBA graduates with startup ambitions
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Second-generation family business leaders
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Corporate executives transitioning to deep-tech
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Link href="/apply">
                  <Button className="w-full bg-accent hover:bg-yellow-500 text-black py-3 px-6 rounded-md font-heading font-semibold transition-all hover:shadow-lg h-auto group">
                    Apply as Executive
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">
              What You'll Gain
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Learn from successful entrepreneurs, VCs, and industry leaders</p>
            </div>

            <div className="text-center">
              <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Peer Network</h3>
              <p className="text-gray-600">Connect with like-minded professionals and potential collaborators</p>
            </div>

            <div className="text-center">
              <div className="bg-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Real-World Application</h3>
              <p className="text-gray-600">Apply learnings directly to your ventures and projects</p>
            </div>

            <div className="text-center">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Career Acceleration</h3>
              <p className="text-gray-600">Fast-track your transition to leadership roles</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of deep-tech leaders and take the next step in your professional journey. Limited spots available for our upcoming cohort.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply">
              <Button className="bg-primary hover:bg-purple-700 text-white py-3 px-8 rounded-md font-heading font-semibold transition-all hover:shadow-lg h-auto">
                Start Your Application
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-white py-3 px-8 rounded-md font-heading font-semibold transition-all h-auto">
                Have Questions?
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;