import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "wouter";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import CertificatesAll from "@/pages/CertificatesAll";
import ProjectsAll from "@/pages/ProjectsAll";
import NotFound from "@/pages/not-found";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <div className="w-full min-h-screen bg-background font-sans text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useVisitorTracking();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loader key="loader" />
      ) : (
        <Switch key="content">
          <Route path="/" component={HomePage} />
          <Route path="/certificates" component={CertificatesAll} />
          <Route path="/projects/all" component={ProjectsAll} />
          <Route component={NotFound} />
        </Switch>
      )}
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppContent />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
