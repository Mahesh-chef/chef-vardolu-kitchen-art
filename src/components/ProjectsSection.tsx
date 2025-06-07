
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChefHat, Knife } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sustainable Farm-to-Table Initiative",
      description: "Developed partnerships with local farms to create a 100% sustainable menu, reducing carbon footprint by 40%",
      impact: "Served 10,000+ eco-conscious meals",
      category: "Sustainability"
    },
    {
      title: "Molecular Gastronomy Workshop Series",
      description: "Created and conducted monthly workshops teaching modern cooking techniques to culinary students",
      impact: "Trained 200+ aspiring chefs",
      category: "Education"
    },
    {
      title: "Fusion Cuisine Menu Development",
      description: "Designed innovative Asian-European fusion menu that became the restaurant's signature offering",
      impact: "Increased customer satisfaction by 35%",
      category: "Innovation"
    },
    {
      title: "Charity Cooking Events",
      description: "Organized quarterly cooking events to raise funds for local food banks and community kitchens",
      impact: "Raised $50,000+ for charity",
      category: "Community"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-orange-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800 flex items-center justify-center space-x-3">
            <Knife className="w-8 h-8 text-orange-500 transform rotate-45" />
            <span>Featured Projects</span>
            <Knife className="w-8 h-8 text-orange-500 transform -rotate-45" />
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
