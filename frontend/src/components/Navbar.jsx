import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { 
  Menu,
  ChevronRight,
  ArrowRight,
  Rocket
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
const Navbar = ({ onExploreModels, darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b dark:bg-gray-900/95 dark:border-gray-700' 
        : 'bg-transparent dark:bg-transparent'
    } ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-sm sm:text-lg">H</span>
            </div>
            <div className={`text-lg sm:text-xl lg:text-2xl font-bold ${darkMode ? 'text-white' : 'bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'}`}>
              <span className="hidden sm:inline">HackMentees</span>
              <span className="sm:hidden">HM</span>
            </div>
          </div>

          {/* Desktop/Tablet Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={`font-medium text-sm px-4 py-2 hover:text-primary transition-colors cursor-pointer ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  onClick={() => scrollToSection('home')}
                  aria-label="Navigate to Home section"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={`font-medium text-sm px-4 py-2 hover:text-primary transition-colors cursor-pointer ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  onClick={() => scrollToSection('features')}
                  aria-label="Navigate to Features section"
                >
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={`font-medium text-sm px-4 py-2 hover:text-primary transition-colors cursor-pointer ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  onClick={() => scrollToSection('about')}
                  aria-label="Navigate to About section"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={`font-medium text-sm px-4 py-2 hover:text-primary transition-colors cursor-pointer ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  onClick={() => scrollToSection('contribute')}
                  aria-label="Navigate to Contribute section"
                >
                  Contribute
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Desktop Explore Models Button */}
            <Button 
              onClick={onExploreModels} 
              size="sm" 
              className="hidden md:flex group hover:scale-105 transition-all duration-300"
              aria-label="Explore machine learning models"
            >
              <Rocket className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              <span className="hidden lg:inline">Explore Models</span>
              <span className="lg:hidden">Explore</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Mobile Explore Models Button */}
            <Button 
              onClick={onExploreModels} 
              size="sm" 
              className="md:hidden group hover:scale-105 transition-all duration-300"
              aria-label="Explore machine learning models"
            >
              <Rocket className="w-4 h-4" />
            </Button>
            
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] transition-transform duration-300">
                {/* a11y: Provide DialogTitle/Description for screen readers */}
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>Primary navigation links for HackMentees.</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-6">
                  
                  {/* Mobile Navigation Links */}
                  <div className="space-y-4">
                    <button 
                      onClick={() => scrollToSection('home')}
                      className={`text-lg font-medium text-left hover:text-primary transition-colors py-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                      aria-label="Navigate to Home section"
                    >
                      Home
                    </button>
                    <button 
                      onClick={() => scrollToSection('features')}
                      className={`text-lg font-medium text-left hover:text-primary transition-colors py-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                      aria-label="Navigate to Features section"
                    >
                      Features
                    </button>
                    <button 
                      onClick={() => scrollToSection('about')}
                      className={`text-lg font-medium text-left hover:text-primary transition-colors py-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                      aria-label="Navigate to About section"
                    >
                      About
                    </button>
                    <button 
                      onClick={() => scrollToSection('contribute')}
                      className={`text-lg font-medium text-left hover:text-primary transition-colors py-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                      aria-label="Navigate to Contribute section"
                    >
                      Contribute
                    </button>
                  </div>
                  
                  {/* Mobile Explore Models Button */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button 
                      onClick={onExploreModels} 
                      className="w-full group hover:scale-105 transition-all duration-300"
                      size="lg"
                    >
                      <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Explore Models
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile quick links bar (visible under navbar on small screens) */}
        <div className="md:hidden sticky top-16 z-40 py-2 overflow-x-auto border-t border-gray-200 dark:border-gray-700 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex gap-3 px-3">
            <button onClick={() => scrollToSection('home')} className={`px-3 py-1 rounded-full text-sm border ${darkMode ? 'text-white border-gray-600' : 'text-gray-800 border-gray-300'} hover:border-primary transition-colors`}>Home</button>
            <button onClick={() => scrollToSection('features')} className={`px-3 py-1 rounded-full text-sm border ${darkMode ? 'text-white border-gray-600' : 'text-gray-800 border-gray-300'} hover:border-primary transition-colors`}>Features</button>
            <button onClick={() => scrollToSection('about')} className={`px-3 py-1 rounded-full text-sm border ${darkMode ? 'text-white border-gray-600' : 'text-gray-800 border-gray-300'} hover:border-primary transition-colors`}>About</button>
            <button onClick={() => scrollToSection('contribute')} className={`px-3 py-1 rounded-full text-sm border ${darkMode ? 'text-white border-gray-600' : 'text-gray-800 border-gray-300'} hover:border-primary transition-colors`}>Contribute</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
