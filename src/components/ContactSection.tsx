import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Linkedin, ChefHat, Utensils } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-orange-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-gray-800 flex items-center justify-center space-x-3">
            <Phone className="w-8 h-8 text-orange-500" />
            <span>Get In Touch</span>
            <Linkedin className="w-8 h-8 text-orange-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-8">
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              I am a young professional with experience in sales, communication, culinary arts, and hotel management. I work well under pressure, adapt quickly to business requirements, and consistently deliver excellent customer service. I am always open to new challenges and opportunities for development. Please do not hesitate to contact me for collaboration, professional opportunities, or culinary projects.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-lg shadow-md">
                <Phone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Reach out for culinary collaborations or inquiries</p>
                <Button
                  asChild
                  className="bg-orange-500 hover:bg-orange-600 w-full"
                >
                  <a href="mailto:mahesh.vardolu789@gmail.com">
                    <Phone className="w-4 h-4 mr-2" />
                    Email Now
                  </a>
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-lg shadow-md">
                <Linkedin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">LinkedIn</h3>
                <p className="text-gray-600 mb-4">Connect for professional opportunities</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-500 text-blue-600 hover:bg-blue-50 w-full"
                >
                  <a
                    href="https://www.linkedin.com/in/maheshwar-vardolu-769b18139/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <ChefHat className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-800">Download Resume</h3>
                <Utensils className="w-8 h-8 text-orange-500" />
              </div>
              <p className="text-gray-600 mb-6">
                Get a detailed overview of my culinary journey, skills, and achievements.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                <a href="https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/70091237/548d5cd4-7963-4c5e-8e30-6a5554cfaa0d/Profile.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume (PDF)
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSection;
