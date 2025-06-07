
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChefHat, Utensils } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-orange-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800 flex items-center justify-center space-x-3">
            <ChefHat className="w-8 h-8 text-orange-500" />
            <span>About Me</span>
            <Utensils className="w-8 h-8 text-orange-500" />
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Welcome to my culinary world! I'm Maheshwar Vardolu, a passionate chef with over a decade of experience 
            in creating extraordinary dining experiences. My journey in the culinary arts began with a simple love 
            for food and has evolved into a sophisticated understanding of flavors, techniques, and presentation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 className="font-bold text-orange-700 mb-2">Specialty</h3>
              <p className="text-gray-600">Modern fusion cuisine with traditional techniques</p>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 className="font-bold text-red-700 mb-2">Philosophy</h3>
              <p className="text-gray-600">Fresh ingredients, bold flavors, artistic presentation</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 className="font-bold text-yellow-700 mb-2">Experience</h3>
              <p className="text-gray-600">10+ years in fine dining and culinary innovation</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutSection;
