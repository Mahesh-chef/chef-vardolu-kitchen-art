import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChefHat, Utensils } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Lead Line Cook – Viewline Resort Snowmass",
      description: "Responsible for leading the kitchen team, ensuring high standards in food preparation and service, and adapting quickly to business requirements.",
      impact: "Managed kitchen operations for over a year, consistently delivering quality and efficiency.",
      category: "Leadership"
    },
    {
      title: "Chef De Partie – TEN 11 Coffee Boutique",
      description: "Oversaw kitchen sections, maintained food quality, and contributed to menu development in a fast-paced environment.",
      impact: "Enhanced kitchen workflow and supported a successful launch in Abu Dhabi.",
      category: "Culinary"
    },
    {
      title: "Demi Chef De Partie – Shakespeare and Co.",
      description: "Worked as part of a diverse culinary team, ensuring customer satisfaction and upholding high service standards.",
      impact: "Contributed to a positive dining experience and team success for nearly five years.",
      category: "Teamwork"
    },
    {
      title: "Chef/Line Chef – Radisson Blu Plaza & Sheraton Hotels",
      description: "Gained valuable experience in international hotel kitchens, focusing on skill development and customer service.",
      impact: "Developed strong culinary fundamentals and adaptability through hands-on learning.",
      category: "Professional Growth"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-orange-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800 flex items-center justify-center space-x-3">
            <Utensils className="w-8 h-8 text-orange-500 transform rotate-45" />
            <span>Featured Projects</span>
            <Utensils className="w-8 h-8 text-orange-500 transform -rotate-45" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-full">
                    <ChefHat className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <span className="inline-block bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded-full font-medium mb-3">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="bg-white/70 p-3 rounded-md">
                  <p className="text-sm font-semibold text-orange-600">Impact:</p>
                  <p className="text-gray-600">{project.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectsSection;
