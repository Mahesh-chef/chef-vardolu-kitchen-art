
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Culinary Arts Diploma",
      institution: "International Culinary Institute",
      year: "2018-2020",
      description: "Specialized in French cuisine and pastry arts"
    },
    {
      degree: "Advanced Food Safety Certification",
      institution: "Food Safety Authority",
      year: "2020",
      description: "HACCP and food safety management systems"
    },
    {
      degree: "Wine Sommelier Certification",
      institution: "Wine & Spirit Education Trust",
      year: "2021",
      description: "Wine pairing and beverage management"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-orange-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800 flex items-center justify-center space-x-3">
            <Utensils className="w-8 h-8 text-orange-500" />
            <span>Education & Certifications</span>
            <Utensils className="w-8 h-8 text-orange-500 transform rotate-180" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-400 p-2 rounded-full">
                    <Utensils className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                    <p className="text-orange-600 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducationSection;
