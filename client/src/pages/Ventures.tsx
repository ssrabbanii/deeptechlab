import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Venture } from "@shared/schema";

const Ventures = () => {
  useEffect(() => {
    document.title = "Our Ventures | C-Suite Leadership Development Program";
  }, []);

  const { data: ventures, isLoading } = useQuery<Venture[]>({
    queryKey: ["/api/ventures"],
  });

  const sortedVentures = ventures
    ? [...ventures].sort((a, b) => a.name.localeCompare(b.name))
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 bg-gradient-to-r from-primary to-purple-700">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Our Ventures
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Explore the innovative deep-tech ventures from our program alumni, building the future of technology and innovation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="h-48">
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : sortedVentures.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No ventures available at the moment. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedVentures.map((venture) => (
              <Link
                key={venture.id}
                href={`/ventures/${venture.slug}`}
                data-testid={`card-venture-${venture.slug}`}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-primary">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3" data-testid={`text-venture-name-${venture.slug}`}>
                      {venture.name}
                    </h3>
                    <p className="text-gray-600 line-clamp-2" data-testid={`text-value-proposition-${venture.slug}`}>
                      {venture.valueProposition}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Ventures;
