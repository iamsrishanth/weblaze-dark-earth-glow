
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import SplineViewer from "./components/SplineViewer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Internships from "./pages/Internships";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ 
          type: "tween",
          ease: "easeInOut",
          duration: 0.3
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const AppContent = () => (
  <div className="min-h-screen gradient-bg text-white flex relative">
    <div className="flex-1 flex flex-col relative z-10">
      <Header />
      <main className="flex-1 flex pt-16 sm:pt-20">
        <div className="flex-1 w-full lg:w-[70%] px-4 md:px-6 lg:px-8 py-4 md:py-8 relative z-20">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageWrapper>
        </div>
      </main>
    </div>
    {/* Globe only visible on large screens */}
    <div className="hidden xl:block w-[30%] h-screen fixed right-0 top-0 -z-10">
      <SplineViewer />
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
