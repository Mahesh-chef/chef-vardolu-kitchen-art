
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Linkedin, ChefHat, Knife } from 'lucide-react';

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
              Ready to create something extraordinary together? Whether you're looking for a private chef, 
              culinary consultation, or cooking classes, I'd love to hear from you.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-lg shadow-md">
                <Phone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Ready to discuss your culinary needs</p>
                <Button className="bg-orange-500 hover:bg-orange-600 w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-lg shadow-md">
                <Linkedin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">LinkedIn</h3>
                <p className="text-gray-600 mb-4">Connect for professional opportunities</p>
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 w-full">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <ChefHat className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-800">Download Resume</h3>
                <Knife className="w-8 h-8 text-orange-500" />
              </div>
              <p className="text-gray-600 mb-6">
                Get a detailed overview of my culinary journey, skills, and achievements
              </p>
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Download Resume (PDF)
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSection;
