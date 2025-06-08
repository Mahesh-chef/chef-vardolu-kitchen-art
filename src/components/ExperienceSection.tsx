import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChefHat, Utensils, User } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      position: "Lead Line Cook",
      restaurant: "Viewline Resort Snowmass, Autograph Collection",
      period: "June 2023 – Present (1 year 4 months)",
      description: "Lead Line Cook responsible for leading kitchen operations, maintaining high standards in food preparation and service, and adapting quickly to business requirements.",
      achievements: [
        "Managed kitchen operations for over a year with consistent quality and efficiency",
        "Adapted quickly to changing business needs",
        "Maintained excellent customer service and teamwork"
      ]
    },
    {
      position: "Chef De Partie",
      restaurant: "TEN 11 Coffee Boutique",
      period: "May 2022 – September 2023 (1 year 5 months)",
      description: "Oversaw kitchen sections, maintained food quality, and contributed to menu development in a fast-paced Abu Dhabi environment.",
      achievements: [
        "Enhanced kitchen workflow and supported a successful launch",
        "Maintained high standards of food quality and safety",
        "Contributed to menu innovation and team training"
      ]
    },
    {
      position: "Demi Chef De Partie",
      restaurant: "Shakespeare and Co.",
      period: "June 2017 – February 2022 (4 years 9 months)",
      description: "Worked as part of a diverse culinary team, ensuring customer satisfaction and upholding high service standards in Abu Dhabi.",
      achievements: [
        "Contributed to a positive dining experience and team success",
        "Maintained consistent food quality and service",
        "Supported training and mentorship of new staff"
      ]
    },
    {
      position: "Chef / Line Chef (Internship)",
      restaurant: "Radisson Blu Plaza Hyderabad / Sheraton Hotels & Resorts",
      period: "June 2016 – December 2016 (7 months)",
      description: "Gained valuable experience in international hotel kitchens, focusing on skill development and customer service.",
      achievements: [
        "Developed strong culinary fundamentals and adaptability",
        "Learned from hands-on experience in high-volume kitchens",
        "Demonstrated commitment and eagerness to learn"
      ]
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
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-orange-200 to-yellow-200 border-2 border-orange-300 flex items-center justify-center">
                        <User className="w-8 h-8 text-orange-600" />
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
