import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink, ArrowLeft, Building2, Globe, Users, Lightbulb, Zap, Target } from "lucide-react";
import type { Venture } from "@shared/schema";

const VentureDetail = () => {
  const [match, params] = useRoute("/ventures/:slug");
  const slug = params?.slug;

  const { data: venture, isLoading } = useQuery<Venture>({
    queryKey: [`/api/ventures/${slug}`],
    enabled: !!slug,
  });

  useEffect(() => {
    if (venture) {
      document.title = `${venture.name} | Our Ventures`;
    }
  }, [venture]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading venture details...</p>
        </div>
      </div>
    );
  }

  if (!venture) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Venture Not Found</h2>
          <Link href="/ventures">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Ventures
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const stakeholderOptions = [
    { id: "investors", label: "Investors" },
    { id: "customers", label: "Customers" },
    { id: "distribution", label: "Distribution Partners" },
    { id: "tech", label: "Tech Partners" },
    { id: "hiring", label: "Hiring" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="relative py-16 bg-gradient-to-r from-purple-600 via-primary to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/ventures">
            <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white mb-6 backdrop-blur-sm" data-testid="button-back-to-ventures">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Ventures
            </Button>
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4" data-testid="text-venture-name">
            {venture.name}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-gray-500 uppercase">
                    Website
                  </h3>
                </div>
                <a
                  href={venture.website.startsWith('http') ? venture.website : `https://${venture.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center group-hover:underline"
                  data-testid="link-website"
                >
                  {venture.website}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Building2 className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-gray-500 uppercase">
                    HKDTL Cohort
                  </h3>
                </div>
                <p className="text-gray-900 font-medium" data-testid="text-cohort">{venture.cohort}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 border-0 shadow-xl">
            <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Building2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-gray-500 uppercase">
                  University KTO
                </h3>
              </div>
              <p className="text-gray-900 font-medium text-lg" data-testid="text-university-kto">{venture.universityKTO}</p>
            </CardContent>
          </Card>

          <Card className="mb-8 border-0 shadow-xl">
            <div className="h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900">
                  Venture Value Proposition
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg" data-testid="text-value-proposition">
                {venture.valueProposition}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 border-0 shadow-xl">
            <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900">
                  Tech IP
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg" data-testid="text-tech-ip">
                {venture.techIP}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 border-0 shadow-xl">
            <div className="h-1 bg-gradient-to-r from-rose-500 to-pink-500"></div>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-rose-100 rounded-lg">
                  <Users className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900">
                  Founders' Background
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg" data-testid="text-founders-background">
                {venture.foundersBackground}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8 border-0 shadow-xl">
            <div className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-100 rounded-lg">
                  <Target className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900">
                  Seeking Stakeholders
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {stakeholderOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <Checkbox
                      id={option.id}
                      checked={venture.seekingStakeholders.includes(option.id)}
                      disabled
                      data-testid={`checkbox-${option.id}`}
                    />
                    <label
                      htmlFor={option.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              {venture.seekingStakeholders.length > 0 && (
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-primary p-6 rounded-lg">
                  <p className="font-semibold text-gray-900 text-lg" data-testid="text-seeking-summary">
                    Seeking: {venture.seekingStakeholders.map(id => 
                      stakeholderOptions.find(opt => opt.id === id)?.label
                    ).filter(Boolean).join(' / ')}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mb-8 border-0 shadow-xl">
            <div className="h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900">
                  Why Now?
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg" data-testid="text-why-now">
                {venture.whyNow}
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/ventures">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all" data-testid="button-view-all-ventures">
                View All Ventures
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentureDetail;
