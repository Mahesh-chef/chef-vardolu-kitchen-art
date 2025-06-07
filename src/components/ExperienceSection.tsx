
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChefHat, Utensils } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      position: "Executive Chef",
      restaurant: "The Golden Spoon",
      period: "2022 - Present",
      description: "Leading a team of 15 chefs, creating seasonal menus, and maintaining Michelin star standards",
      achievements: ["Increased revenue by 30%", "Won Best Chef Award 2023", "Implemented sustainable practices"]
    },
    {
      position: "Sous Chef",
      restaurant: "Culinary Excellence",
      period: "2020 - 2022",
      description: "Managed kitchen operations, developed signature dishes, and trained junior chefs",
      achievements: ["Reduced food waste by 25%", "Created 20+ signature dishes", "Mentored 10+ junior chefs"]
    },
    {
      position: "Line Cook",
      restaurant: "Flavor Town",
      period: "2018 - 2020",
      description: "Specialized in grill and sauté stations, maintained high-quality standards during peak hours",
      achievements: ["Perfect food safety record", "Promoted within 6 months", "Mastered multiple stations"]
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-orange-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800 flex items-center justify-center space-x-3">
            <ChefHat className="w-8 h-8 text-orange-500" />
            <span>Professional Experience</span>
            <ChefHat className="w-8 h-8 text-orange-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-orange-400 to-red-500 p-3 rounded-full">
                      <Utensils className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.position}</h3>
                      <p className="text-orange-600 font-medium text-lg mb-2">{exp.restaurant}</p>
                      <p className="text-gray-500 font-medium mb-3">{exp.period}</p>
                      <p className="text-gray-700 mb-4">{exp.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {index < experiences.length - 1 && (
                  <div className="flex justify-center my-4">
                    <Utensils className="w-6 h-6 text-orange-300 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceSection;
