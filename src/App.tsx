import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/app/ProtectedRoute";
import Index from "./pages/Index";
import CropPlanning from "./pages/CropPlanning";
import Auth from "./pages/Auth";
import SelectRole from "./pages/SelectRole";
import AppHome from "./pages/app/AppHome";
import ProfilePage from "./pages/app/ProfilePage";
import Placeholder from "./pages/app/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/crop-planning" element={<CropPlanning />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/select-role" element={<SelectRole />} />
                <Route path="/app" element={<ProtectedRoute><AppHome /></ProtectedRoute>} />
                <Route path="/app/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                <Route path="/app/my-crops" element={<ProtectedRoute><Placeholder title="My Crops" message="Add Crop, inspections and payouts come in the next phase." /></ProtectedRoute>} />
                <Route path="/app/orders" element={<ProtectedRoute><Placeholder title="Orders" message="Your orders & 20% advance tracking will appear here." /></ProtectedRoute>} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </TooltipProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
