import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Home, Package, ShoppingBag, User, LogOut, Sprout, Languages } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { role, signOut } = useAuth();
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const farmerNav = [
    { to: "/app", label: "Home", icon: Home, end: true },
    { to: "/app/my-crops", label: "My Crops", icon: Package },
    { to: "/app/profile", label: "Profile", icon: User },
  ];
  const buyerNav = [
    { to: "/app", label: "Home", icon: Home, end: true },
    { to: "/app/orders", label: "Orders", icon: ShoppingBag },
    { to: "/app/profile", label: "Profile", icon: User },
  ];
  const nav = role === "farmer" ? farmerNav : buyerNav;

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur border-b border-border">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-soft">
              <Sprout className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-sm text-foreground">Kisaan Bazaar</span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "ur" : "en")}
              className="h-9 px-2 gap-1.5"
            >
              <Languages className="w-4 h-4" />
              <span className="text-xs">{language === "en" ? "اردو" : "EN"}</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSignOut} className="h-9 w-9" aria-label="Sign out">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-4 pb-24">
        {children}
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur border-t border-border">
        <div className="max-w-2xl mx-auto grid grid-cols-3">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = item.end ? location.pathname === item.to : location.pathname.startsWith(item.to);
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 py-2.5 px-2 transition-colors min-h-[60px]",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <div className={cn("p-1.5 rounded-lg transition-all", active && "bg-primary/10")}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
