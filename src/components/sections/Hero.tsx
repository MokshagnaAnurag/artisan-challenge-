
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap, Target } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full text-sm font-medium text-gray-600 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
            Crafting Digital Excellence
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-light mb-8 animate-fade-in tracking-tight">
          <span className="inline-block hover:scale-105 transition-transform duration-500 text-gray-900">Create</span>{" "}
          <span className="inline-block hover:scale-105 transition-transform duration-500 delay-100 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium">
            Beautiful
          </span>{" "}
          <br />
          <span className="inline-block hover:scale-105 transition-transform duration-500 delay-200 text-gray-900">
            Experiences
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-500 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
          Where pixel-perfect design meets cutting-edge technology in perfect harmony
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-500">
          <Button className="bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl px-8 py-4 text-lg font-medium rounded-full border-0">
            <Zap className="w-5 h-5 mr-2" />
            Get Started
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-medium rounded-full">
            <Target className="w-5 h-5 mr-2" />
            Learn More
          </Button>
        </div>
      </div>

      {/* Minimalist scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent"></div>
        <ArrowDown className="w-4 h-4 text-gray-400 mx-auto -mt-2" />
      </div>
    </section>
  );
};
