
import { Card } from "@/components/ui/card";
import { Settings, Palette, Layers } from "lucide-react";

export const BrandKits = () => {
  const brands = [
    { name: "ECorp", color: "bg-emerald-500", selected: false },
    { name: "ICorp", color: "bg-amber-500", selected: false },
    { name: "The Agency", color: "bg-rose-500", selected: true },
  ];

  return (
    <section className="py-24 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-6 mx-auto">
            <Palette className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">Brand Kits</h2>
          <p className="text-gray-500 text-lg flex items-center justify-center">
            <Layers className="w-5 h-5 mr-2" />
            Organize and manage your brand identities
          </p>
        </div>
        
        <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-xl p-8 rounded-3xl">
          <div className="space-y-3">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={`flex items-center justify-between p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer group ${
                  brand.selected 
                    ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white' 
                    : 'bg-gray-50/50 hover:bg-gray-100/50'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center space-x-6">
                  <div className={`w-2 h-2 rounded-full ${brand.selected ? 'bg-white' : 'bg-gray-300'} transition-colors duration-300`}></div>
                  <div className={`w-10 h-10 ${brand.color} rounded-2xl transition-transform duration-300 group-hover:scale-110 shadow-lg`}></div>
                  <span className="font-medium text-lg">{brand.name}</span>
                </div>
                <Settings className={`w-5 h-5 ${brand.selected ? 'text-gray-300' : 'text-gray-400'} group-hover:text-gray-600 transition-colors duration-300`} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
