import React, { useState } from "react";
import { models } from "../data/models";
import ModelCard from "../components/ModelCard";
import Sidebar from "../components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
<<<<<<< HEAD
import Navbar from "../components/Navbar"; 
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Github, Star, GitFork, Zap, Heart, Code, Users, Rocket, Brain, Globe, 
ChevronRight, ArrowRight, ExternalLink, Trophy, Target, Sparkles, Book, MessageCircle } from "lucide-react"; 

=======
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sun, Moon } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Github, 
  Star, 
  GitFork, 
  Zap, 
  Heart, 
  Code, 
  Users, 
  Rocket, 
  Brain, 
  Globe, 
  Menu,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Trophy,
  Target,
  Sparkles,
  Book,
  MessageCircle
} from "lucide-react";

export default function Home({ showModels, setShowModels, darkMode, setDarkMode, onExploreModels }) {
  const [scrolled, setScrolled] = useState(false);
>>>>>>> a28133d (Updated navbar and theme consistency changes)

export default function Home({ showModels, setShowModels, darkMode, setDarkMode }) {

<<<<<<< HEAD
  const handleExploreModels = () => setShowModels(true);
=======
  const handleExploreModels = () => {
    if (onExploreModels) {
      onExploreModels();
    } else {
      setShowModels(true);
    }
  };
>>>>>>> a28133d (Updated navbar and theme consistency changes)

  // If showModels is true - Show models list
  if (showModels) {
    return (
      <div className={darkMode ? "dark bg-background text-foreground min-h-screen" : "bg-background text-foreground min-h-screen"}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <Button 
              variant="ghost" 
              onClick={() => setShowModels(false)}
              className="flex items-center gap-2"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              Back to Home
            </Button>
            <Separator orientation="vertical" className="mx-4 h-6" />
            <h1 className="text-lg font-semibold">AI Model Hub</h1>
<<<<<<< HEAD
=======
            <div className="ml-auto">
              <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="dark:text-white"
               >
              {darkMode ? (
              <Sun className="h-5 w-5" />
              ) : (
              <Moon className="h-5 w-5" />
              )}
              </Button>
            </div>
>>>>>>> a28133d (Updated navbar and theme consistency changes)
          </div>
        </header>

        <div className="flex">
          <Sidebar isOpen={true} onClose={() => {}} />
          <main className="flex-1 p-6">
            <div className="container">
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight mb-2">Available Models</h2>
                <p className="text-muted-foreground">Explore our collection of machine learning models</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {models.map((model) => (
                  <ModelCard key={model.id} model={model} />
                ))}
              </div>
              
              {models.length === 0 && (
                <Card className="text-center py-12">
                  <CardContent className="pt-6">
                    <Brain className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <CardTitle className="mb-2">No models yet</CardTitle>
                    <CardDescription>Be the first to contribute a model!</CardDescription>
                  </CardContent>
                </Card>
              )}
            </div>
          </main>
        </div>
      </div>
    );
  }

  
  return (
    <div className={darkMode ? "dark" : ""}>
<<<<<<< HEAD
      {/* ✅ Use Navbar component here */}
      <Navbar 
        onExploreModels={handleExploreModels} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
=======
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Navigation Header */}
    <header
       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
        ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b'
        : 'bg-transparent'
      }`}
      >
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex items-center space-x-3">
          <div className="bg-black dark:bg-white text-white dark:text-black font-bold w-9 h-9 flex items-center justify-center rounded-xl">
            H
          </div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Hack<span className="text-gray-600 dark:text-gray-300">Mentees</span>
          </h1>
        </div>

      {/* Navigation Menu */}
      <NavigationMenu className="hidden lg:flex items-center space-x-6">
        <NavigationMenuList className="flex space-x-6">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/"
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/about"
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#contribute"
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Contribute
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
 
      {/* Right-side actions */}
      <div className="flex items-center space-x-4">
        <Button
          onClick={handleExploreModels}
          size="lg"
          className="bg-black dark:bg-white text-white dark:text-black font-medium px-4 py-2 rounded-md hover:opacity-80 transition"
        >
          Explore Models
        </Button>

        {/* Theme Toggle */}
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
        >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
        </button>         

      
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <Link to="/" className="text-lg font-medium">Home</Link>
              <Link to="/about" className="text-lg font-medium">About</Link>
              <a href="#contribute" className="text-lg font-medium">Contribute</a>
              <Button onClick={handleExploreModels} className="w-full mt-4">
                Explore Models
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </div>
  </header>


>>>>>>> a28133d (Updated navbar and theme consistency changes)
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 md:pt-20 lg:pt-16">

          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 tracking-tight dark:text-white">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                HackMentees
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-muted-foreground dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A <span className="font-semibold text-primary">beginner-friendly</span> hub for 
              <span className="font-semibold text-primary"> machine learning</span> models and 
              <span className="font-semibold text-primary"> frontend</span> contributions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                onClick={() => setShowModels(true)}
                size="lg" 
                className="group text-lg hover:scale-105 transition-all duration-300 flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Explore Models
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group text-lg hover:scale-105 transition-all duration-300 flex items-center"
                asChild
              >
                <a href="#features" className="flex items-center dark:text-white">
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors dark:border-gray-700 dark:bg-gray-800">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground dark:text-gray-300 font-medium">Contributors</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors dark:border-gray-700 dark:bg-gray-800">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground dark:text-gray-300 font-medium">ML Models</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors dark:border-gray-700 dark:bg-gray-800">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground dark:text-gray-300 font-medium">Open Source</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contribute" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]" />
          <div className="container mx-auto text-center relative">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                Ready to Start Contributing?
                <Sparkles className="inline-block w-8 h-8 ml-2" />
              </h2>
              <p className="text-xl sm:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Join our community of developers and make your mark in the world of open source. 
                Whether you're a seasoned developer or just starting out, we have opportunities for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <a href="https://github.com/georgioupanayiotis/HackMentees" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <a href="https://github.com/georgioupanayiotis/HackMentees/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="flex items-center text-black dark:text-white">
                    <Zap className="w-5 h-5 mr-2 text-black dark:text-white" />
                    Start Contributing
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t">
          <div className="container mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-lg">H</span>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  HackMentees
                </div>
              </div>
              <p className="text-muted-foreground mb-8 text-lg">Built with ❤️ for the open-source community</p>
              
              <div className="flex justify-center items-center space-x-6 mb-8">
                <Button variant="default" size="sm" className="hover:bg-muted/50" asChild>
                  <a href="https://github.com/georgioupanayiotis/HackMentees" className="flex items-center">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="default" size="sm" className="hover:bg-muted/50 flex items-center">
                  <Book className="w-4 h-4 mr-2" />
                  Documentation
                </Button>
                <Button variant="default" size="sm" className="hover:bg-muted/50 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Community
                </Button>
                <Button variant="default" size="sm" className="hover:bg-muted/50 flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Blog
                </Button>
              </div>
              
              <Separator className="mb-8" />
              <p className="text-muted-foreground text-sm">
                &copy; 2025 HackMentees. Open source project for Hacktoberfest contributors.
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}