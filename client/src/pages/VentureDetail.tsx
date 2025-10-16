import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink, ArrowLeft } from "lucide-react";
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
    <div className="min-h-screen bg-gray-50">
      <div className="py-12 bg-gradient-to-r from-primary to-purple-700">
        <div className="container mx-auto px-4">
          <Link href="/ventures">
            <Button variant="ghost" className="text-white hover:text-white/80 mb-4" data-testid="button-back-to-ventures">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Ventures
            </Button>
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-venture-name">
            {venture.name}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <Card className="mb-6">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-heading text-sm font-semibold text-gray-500 uppercase mb-2">
                    Website
                  </h3>
                  <a
                    href={venture.website.startsWith('http') ? venture.website : `https://${venture.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                    data-testid="link-website"
                  >
                    {venture.website}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-gray-500 uppercase mb-2">
                    HKDTL Cohort
                  </h3>
                  <p className="text-gray-900" data-testid="text-cohort">{venture.cohort}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-heading text-sm font-semibold text-gray-500 uppercase mb-2">
                  University KTO
                </h3>
                <p className="text-gray-900" data-testid="text-university-kto">{venture.universityKTO}</p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                  Venture Value Proposition
                </h3>
                <p className="text-gray-700 leading-relaxed" data-testid="text-value-proposition">
                  {venture.valueProposition}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                  Tech IP
                </h3>
                <p className="text-gray-700 leading-relaxed" data-testid="text-tech-ip">
                  {venture.techIP}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                  Founders' Background
                </h3>
                <p className="text-gray-700 leading-relaxed" data-testid="text-founders-background">
                  {venture.foundersBackground}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                  Seeking Stakeholders
                </h3>
                <div className="space-y-3 mb-4">
                  {stakeholderOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={option.id}
                        checked={venture.seekingStakeholders.includes(option.id)}
                        disabled
                        data-testid={`checkbox-${option.id}`}
                      />
                      <label
                        htmlFor={option.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
                {venture.seekingStakeholders.length > 0 && (
                  <div className="bg-purple-50 border-l-4 border-primary p-4 rounded">
                    <p className="font-medium text-gray-900" data-testid="text-seeking-summary">
                      Seeking: {venture.seekingStakeholders.map(id => 
                        stakeholderOptions.find(opt => opt.id === id)?.label
                      ).filter(Boolean).join(' / ')}
                    </p>
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                  Why Now?
                </h3>
                <p className="text-gray-700 leading-relaxed" data-testid="text-why-now">
                  {venture.whyNow}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/ventures">
              <Button variant="outline" size="lg" data-testid="button-view-all-ventures">
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
