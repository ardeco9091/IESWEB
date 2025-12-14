import { Switch, Route, useLocation } from "wouter";import { queryClient } from "./lib/queryClient";
import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";


const ScrollToTop = () => {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Sube al inicio en cada cambio de ruta
  }, [location]);
  return null;
};

function Router() {
  return (
    <>
    <ScrollToTop /> 
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/acerca" component={About} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
