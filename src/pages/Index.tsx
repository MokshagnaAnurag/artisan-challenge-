
import { Hero } from "@/components/sections/Hero";
import { BrandKits } from "@/components/sections/BrandKits";
import { DataDashboard } from "@/components/sections/DataDashboard";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Connection } from "@/components/sections/Connection";
import { CompanyLogos } from "@/components/sections/CompanyLogos";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { CursorBackground } from "@/components/ui/CursorBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative">
      <CursorBackground />
      <div className="relative z-10">
        <Hero />
        <BrandKits />
        <DataDashboard />
        <ProductShowcase />
        <Connection />
        <CompanyLogos />
        <ProjectShowcase />
      </div>
    </div>
  );
};

export default Index;
