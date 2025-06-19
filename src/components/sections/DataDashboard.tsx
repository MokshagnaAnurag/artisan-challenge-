
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, BarChart3, TrendingDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DataDashboard = () => {
  const carbonData = [
    { year: 2019, value: 38673, percentage: 100 },
    { year: 2020, value: 32813, percentage: 85 },
    { year: 2021, value: 14111, percentage: 36 },
    { year: 2022, value: 45048, percentage: 116 },
  ];

  const energyData = [
    { year: 2019, value: 157, percentage: 100 },
    { year: 2020, value: 135, percentage: 86 },
    { year: 2021, value: 128, percentage: 81 },
    { year: 2022, value: 123, percentage: 78 },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl mb-6 mx-auto">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4">EMBODIED CARBON EMISSIONS</h2>
          <p className="text-gray-600">Intensity measured by kgCO₂e/m²</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Carbon Footprint */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-gray-600 text-sm">Managed portfolio carbon footprint</CardTitle>
                <TrendingDown className="w-5 h-5 text-red-500" />
              </div>
              <div className="text-3xl font-bold">45,048</div>
              <div className="text-sm text-gray-500">
                <span className="text-green-600">↑ 16%</span> from 2019
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {carbonData.map((item, index) => (
                  <div key={item.year} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.year}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${item.percentage}%`,
                            animationDelay: `${index * 200}ms`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">{item.value.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 hover:scale-105 transition-transform duration-300">
                <Download className="w-4 h-4 mr-2" />
                Download the data
              </Button>
            </CardContent>
          </Card>

          {/* Energy Intensity */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-gray-600 text-sm">Managed portfolio energy intensity</CardTitle>
                <Zap className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-3xl font-bold">123</div>
              <div className="text-sm text-gray-500">
                <span className="text-red-600">↓ 22%</span> from 2019
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {energyData.map((item, index) => (
                  <div key={item.year} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.year}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${item.percentage}%`,
                            animationDelay: `${index * 200}ms`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 hover:scale-105 transition-transform duration-300">
                <Download className="w-4 h-4 mr-2" />
                Download the data
              </Button>
            </CardContent>
          </Card>

          {/* Energy Consumption */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-gray-600 text-sm">Managed portfolio energy consumption</CardTitle>
                <BarChart3 className="w-5 h-5 text-purple-500" />
              </div>
              <div className="text-3xl font-bold">47,790,662</div>
              <div className="text-sm text-gray-500">
                <span className="text-red-600">↓ 27%</span> from 2019
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {carbonData.map((item, index) => (
                  <div key={item.year} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.year}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${100 - item.percentage * 0.3}%`,
                            animationDelay: `${index * 200}ms`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">{(item.value * 1000).toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 hover:scale-105 transition-transform duration-300">
                <Download className="w-4 h-4 mr-2" />
                Download the data
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
