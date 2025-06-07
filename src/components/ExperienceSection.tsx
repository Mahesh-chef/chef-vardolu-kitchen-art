
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChefHat, Utensils, User } from 'lucide-react';
import AIImageGenerator from './AIImageGenerator';

const ExperienceSection = () => {
  const [experienceImages, setExperienceImages] = useState<{ [key: number]: string }>({});

  const handleImageGenerated = (index: number, imageUrl: string) => {
    setExperienceImages(prev => ({
      ...prev,
      [index]: imageUrl
    }));
  };

  const experiences = [
    {
      position: "Executive Chef",
      restaurant: "The Golden Spoon",
      period: "2022 - Present",
      description: "Leading a team of 15 chefs, creating seasonal menus, and maintaining Michelin star standards",
      achievements: ["Increased revenue by 30%", "Won Best Chef Award 2023", "Implemented sustainable practices"],
      imagePrompt: "Luxury fine dining restaurant kitchen, executive chef leading team, professional kitchen equipment, elegant plating, Michelin star quality"
    },
    {
      position: "Sous Chef",
      restaurant: "Culinary Excellence",
      period: "2020 - 2022",
      description: "Managed kitchen operations, developed signature dishes, and trained junior chefs",
      achievements: ["Reduced food waste by 25%", "Created 20+ signature dishes", "Mentored 10+ junior chefs"],
      imagePrompt: "Busy restaurant kitchen, sous chef coordinating with team, signature dishes being prepared, professional cooking"
    },
    {
      position: "Line Cook",
      restaurant: "Flavor Town",
      period: "2018 - 2020",
      description: "Specialized in grill and sauté stations, maintained high-quality standards during peak hours",
      achievements: ["Perfect food safety record", "Promoted within 6 months", "Mastered multiple stations"],
      imagePrompt: "Line cook at grill station, sautéing vegetables, fast-paced kitchen environment, professional cooking techniques"
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
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-orange-200 to-yellow-200 border-2 border-orange-300">
                        {experienceImages[index] ? (
                          <img 
                            src={experienceImages[index]} 
                            alt={`${exp.position} at ${exp.restaurant}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <User className="w-12 h-12 text-orange-600" />
                          </div>
                        )}
                      </div>
                      
                      {/* AI Image Generator for this experience */}
                      <div className="mt-4">
                        <AIImageGenerator
                          prompt={exp.imagePrompt}
                          onImageGenerated={(imageUrl) => handleImageGenerated(index, imageUrl)}
                          buttonText="Generate Image"
                          size={{ width: 512, height: 512 }}
                        />
                      </div>
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
