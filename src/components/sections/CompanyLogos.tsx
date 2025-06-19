
import { Building2, Shield } from "lucide-react";

export const CompanyLogos = () => {
  const companies = [
    "perplexity",
    "supercell", 
    "monzo",
    "raycast",
    "retool",
    "mercury"
  ];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl mb-4 mx-auto">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-gray-400 text-sm uppercase tracking-wider flex items-center justify-center">
            <Building2 className="w-4 h-4 mr-2" />
            Trusted by leading companies
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center">
          {companies.map((company, index) => (
            <div
              key={company}
              className="text-center opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-2xl font-bold capitalize tracking-wider">
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
