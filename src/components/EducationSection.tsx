import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Hotel Management",
      institution: "Osmania University, Hyderabad",
      year: "June 2014 – April 2017",
      description: "Comprehensive study in hotel, motel, and restaurant management, including practical and theoretical aspects of hospitality."
    },
    {
      degree: "Hotel Management Studies",
      institution: "WESTIN College of Hotel Management",
      year: "2014 – 2017",
      description: "Specialized coursework and hands-on training in culinary arts, food production, and hospitality services."
    },
    {
      degree: "High School – Hotel Management Focus",
      institution: "Vikas High School",
      year: "June 2011 – April 2012",
      description: "Completed secondary education with a focus on hotel management fundamentals."
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
