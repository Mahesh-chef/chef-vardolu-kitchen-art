import { useState } from 'react';
import { ChefHat, Utensils, Phone, Linkedin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'education':
        return <EducationSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  // Handler functions for action buttons
  const handleContactClick = () => {
    window.location.href = 'mailto:mahesh.vardolu789@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/maheshwar-vardolu-769b18139/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-red-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-orange-400 rounded-full animate-bounce"></div>
        {/* Animal silhouettes */}
        <div className="absolute top-32 left-1/4 text-6xl opacity-20 animate-float">🐟</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-20 animate-float">🐄</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-20 animate-float">🐔</div>
        <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-float">🦐</div>
      </div>

      <Header />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-orange-400 shadow-2xl bg-gradient-to-br from-orange-200 to-yellow-200">
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-24 h-24 text-orange-600" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce">
              <ChefHat className="w-8 h-8 text-orange-800" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Maheshwar Vardolu
          </h1>
          <p className="text-2xl text-gray-600 mb-2">Professional Chef</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            A young professional with experience in sales, communication, culinary arts, and hotel management. I am able to work under pressure, adapt quickly to business requirements, and deliver excellent customer service. I enjoy new challenges and opportunities for development. Please do not hesitate to contact me for collaboration, professional opportunities, or culinary projects.
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant="default"
              className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
              onClick={handleContactClick}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button
              variant="outline"
              className="border-orange-500 text-orange-600 hover:bg-orange-50 transition-all duration-300"
              onClick={handleLinkedInClick}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-8">
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
            <CardContent className="p-2">
              <div className="flex space-x-2">
                {[
                  { id: 'about', label: 'About', icon: ChefHat },
                  { id: 'education', label: 'Education', icon: Utensils },
                  { id: 'experience', label: 'Experience', icon: Utensils },
                  { id: 'projects', label: 'Projects', icon: Utensils },
                  { id: 'contact', label: 'Contact', icon: Phone }
                ].map(({ id, label, icon: Icon }) => (
                  <Button
                    key={id}
                    variant={activeSection === id ? "default" : "ghost"}
                    onClick={() => setActiveSection(id)}
                    className={`transition-all duration-300 ${
                      activeSection === id 
                        ? 'bg-orange-500 text-white shadow-lg transform scale-105' 
                        : 'hover:bg-orange-100 hover:text-orange-600'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          {renderSection()}
        </div>
      </div>

      {/* Floating Knife Elements */}
      <div className="absolute top-1/4 left-8 text-orange-300 opacity-30 transform rotate-45 animate-pulse">
        <Utensils className="w-12 h-12" />
      </div>
      <div className="absolute top-1/2 right-8 text-red-300 opacity-30 transform -rotate-45 animate-pulse">
        <Utensils className="w-10 h-10" />
      </div>
      <div className="absolute bottom-1/4 left-1/2 text-yellow-400 opacity-30 transform rotate-12 animate-pulse">
        <Utensils className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Index;
