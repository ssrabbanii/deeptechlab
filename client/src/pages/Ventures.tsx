import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Sparkles, TrendingUp, Rocket } from "lucide-react";
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

  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-green-500 to-emerald-500",
    "from-indigo-500 to-purple-500",
    "from-rose-500 to-pink-500",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="relative py-20 bg-gradient-to-r from-purple-600 via-primary to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="h-12 w-12 text-white" />
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
              Our Ventures
            </h1>
          </div>
          <p className="text-xl text-white/95 max-w-3xl leading-relaxed">
            Discover the innovative deep-tech ventures from our program alumni, 
            <span className="font-semibold"> building the future of technology and innovation</span>.
          </p>
          <div className="flex gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-medium">Innovation Leaders</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingUp className="h-5 w-5 text-green-300" />
              <span className="text-white font-medium">Growing Fast</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="h-64 overflow-hidden">
                <CardContent className="p-6">
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : sortedVentures.length === 0 ? (
          <div className="text-center py-20">
            <Rocket className="h-20 w-20 text-gray-300 mx-auto mb-6" />
            <p className="text-gray-500 text-xl font-medium">
              No ventures available at the moment. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedVentures.map((venture, index) => (
              <Link
                key={venture.id}
                href={`/ventures/${venture.slug}`}
                data-testid={`card-venture-${venture.slug}`}
              >
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border-0">
                  <div className={`h-2 bg-gradient-to-r ${gradients[index % gradients.length]}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-heading text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors" data-testid={`text-venture-name-${venture.slug}`}>
                        {venture.name}
                      </h3>
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${gradients[index % gradients.length]} bg-opacity-10`}>
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <p className="text-gray-600 line-clamp-3 leading-relaxed mb-4" data-testid={`text-value-proposition-${venture.slug}`}>
                      {venture.valueProposition}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Learn more</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
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
