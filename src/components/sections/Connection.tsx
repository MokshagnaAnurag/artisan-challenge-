
import { Users, Heart, Share2, Globe } from "lucide-react";

export const Connection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 mx-auto">
            <Users className="w-8 h-8 text-white" />
          </div>
          <span className="text-sm uppercase tracking-wider text-blue-300 font-medium flex items-center justify-center">
            <Heart className="w-4 h-4 mr-2" />
            Connection
          </span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
          Share quality time.{" "}
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            And space.
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto flex items-center justify-center">
          <Share2 className="w-5 h-5 mr-2" />
          Connect with others in meaningful ways, sharing experiences that matter most.
        </p>
        
        {/* Animated elements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { icon: Users, delay: 0 },
            { icon: Heart, delay: 500 },
            { icon: Share2, delay: 1000 },
            { icon: Globe, delay: 1500 }
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4"
              style={{
                animationDelay: `${item.delay}ms`,
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto opacity-60 animate-pulse flex items-center justify-center">
                <item.icon className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
