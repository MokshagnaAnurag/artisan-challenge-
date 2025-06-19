
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, FolderOpen } from "lucide-react";

export const ProjectShowcase = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <FolderOpen className="w-6 h-6 text-red-500 mr-2" />
                <span className="text-red-500 font-bold text-lg tracking-wider">02</span>
              </div>
              <h2 className="text-5xl font-bold mt-4 mb-6">
                GRAND HOTEL
                <br />
                OSLO 150 YEARS
              </h2>
              <div className="flex space-x-4 mb-6">
                <span className="px-3 py-1 bg-red-500 text-white text-xs rounded-full">INTERNATIONAL</span>
                <span className="px-3 py-1 bg-red-500 text-white text-xs rounded-full">NORWAY</span>
                <span className="px-3 py-1 bg-red-500 text-white text-xs rounded-full">BRAND ACTIVATION</span>
              </div>
              <Button 
                variant="outline" 
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                READ MORE
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative group">
            <Card className="overflow-hidden h-96 bg-gradient-to-br from-red-500 to-orange-500 relative cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-sm opacity-80 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Oslo, Norway
                </div>
                <div className="text-2xl font-bold flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  150 Years Celebration
                </div>
              </div>
              
              {/* Animated overlay elements */}
              <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"></div>
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
            </Card>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 text-center">
          <Button variant="outline" className="hover:scale-105 transition-transform duration-300">
            <FolderOpen className="w-4 h-4 mr-2" />
            VIEW ALL CASES
          </Button>
        </div>
      </div>
    </section>
  );
};
