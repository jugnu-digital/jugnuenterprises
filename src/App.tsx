import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CapabilitiesPage from "./pages/CapabilitiesPage";
import ProcessPage from "./pages/ProcessPage";
import WhyUsPage from "./pages/WhyUsPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>Jugnu Enterprises - Reliable Apparel Manufacturing Partner from Ludhiana</title>
          <meta name="description" content="Jugnu Enterprises is a trusted apparel manufacturing company in Ludhiana, Punjab since 2008. Quality garment manufacturing, custom production, bulk orders. MSME Registered." />
          <meta name="keywords" content="apparel manufacturing, garment manufacturing, Ludhiana, Punjab, textile, clothing manufacturer, bulk orders, private label" />
          <meta property="og:title" content="Jugnu Enterprises - Apparel Manufacturing Partner" />
          <meta property="og:description" content="Quality garment manufacturing solutions since 2008. Your trusted partner for apparel production in India." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://jugnuenterprises.com" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/capabilities" element={<CapabilitiesPage />} />
                <Route path="/process" element={<ProcessPage />} />
                <Route path="/why-us" element={<WhyUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
