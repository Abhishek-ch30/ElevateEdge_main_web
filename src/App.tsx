import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import GetInTouch from "./pages/GetInTouch";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WebDesign from "./pages/WebDesign";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import GraphicDesign from "./pages/GraphicDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import SEO from "./pages/SEO";
import BusinessAnalytics from "./pages/BusinessAnalytics";
import MoreServices from "./pages/MoreServices";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-dark-blue-purple">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/get-in-touch" element={<GetInTouch />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/explore/web-development" element={<WebDevelopment />} />
            <Route path="/explore/web-design" element={<WebDesign />} />
            <Route path="/explore/app-development" element={<AppDevelopment />} />
            <Route path="/explore/graphic-design" element={<GraphicDesign />} />
            <Route path="/explore/digital-marketing" element={<DigitalMarketing/>} />
            <Route path="/explore/seo-optimization" element={<SEO/>} />
            <Route path="/explore/business-analytics" element={<BusinessAnalytics/>} />
            <Route path="/explore/more-services" element={<MoreServices/>} />
            {/* Explore More Routes */}

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
