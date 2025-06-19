
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Plus } from "lucide-react";

export const ProductShowcase = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl mb-6 mx-auto">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product 1 */}
          <Card className="relative overflow-hidden group cursor-pointer h-96 bg-gradient-to-br from-orange-100 to-red-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-orange-600 flex items-center">
              <Star className="w-3 h-3 mr-1" />
              NEW
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">Premium Collection</h3>
              <p className="text-gray-200 mb-4">Discover our latest beauty essentials</p>
              <Button className="bg-white text-black hover:bg-gray-100 transition-all duration-300">
                <Plus className="w-4 h-4 mr-2" />
                ADD TO BAG
              </Button>
            </div>
          </Card>

          {/* Product 2 */}
          <Card className="relative overflow-hidden group cursor-pointer h-96 bg-gradient-to-br from-yellow-100 to-orange-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-yellow-600 flex items-center">
              <Star className="w-3 h-3 mr-1" />
              NEW
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">Essential Kit</h3>
              <p className="text-gray-200 mb-4">Everything you need in one package</p>
              <Button className="bg-white text-black hover:bg-gray-100 transition-all duration-300">
                <Plus className="w-4 h-4 mr-2" />
                ADD TO BAG
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
