
import { ChefHat, Knife } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b-4 border-orange-400 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 p-3 rounded-full shadow-lg">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Chef Maheshwar</h1>
              <p className="text-orange-600 font-medium">Culinary Artist</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Knife className="w-6 h-6 text-orange-500 transform rotate-45" />
            <span className="text-gray-600 font-medium">Professional Portfolio</span>
            <Knife className="w-6 h-6 text-orange-500 transform -rotate-45" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
