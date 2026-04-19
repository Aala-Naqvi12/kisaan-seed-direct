import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Sparkles, Star, Truck } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const mockProducts = [
  { id: 1, name: "Tomatoes", grade: "A", price: 85, unit: "kg", region: "Swat", harvest: "12 Apr", emoji: "🍅" },
  { id: 2, name: "Onions", grade: "A", price: 55, unit: "kg", region: "Multan", harvest: "10 Apr", emoji: "🧅" },
  { id: 3, name: "Potatoes", grade: "B+", price: 48, unit: "kg", region: "Okara", harvest: "08 Apr", emoji: "🥔" },
  { id: 4, name: "Green Chillies", grade: "A", price: 120, unit: "kg", region: "Sindh", harvest: "14 Apr", emoji: "🌶️" },
  { id: 5, name: "Spinach", grade: "A", price: 40, unit: "kg", region: "Punjab", harvest: "15 Apr", emoji: "🥬" },
  { id: 6, name: "Carrots", grade: "B+", price: 65, unit: "kg", region: "Quetta", harvest: "11 Apr", emoji: "🥕" },
];

const BuyerHome = () => {
  const { user } = useAuth();
  return (
    <div className="space-y-5 animate-fade-in">
      {/* Greeting */}
      <div>
        <p className="text-sm text-muted-foreground">Welcome back 👋</p>
        <h1 className="text-2xl font-bold text-foreground truncate">{user?.email?.split("@")[0]}</h1>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search vegetables, fruits..." className="pl-10 h-12 bg-card" />
      </div>

      {/* Trust strip */}
      <div className="grid grid-cols-3 gap-2 text-center">
        {[
          { icon: Star, label: "Graded\nQuality" },
          { icon: Truck, label: "Direct from\nFarm" },
          { icon: Sparkles, label: "Transparent\nPricing" },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <Card key={i} className="p-2.5 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10">
              <Icon className="w-4 h-4 mx-auto mb-1 text-primary" />
              <p className="text-[10px] text-muted-foreground whitespace-pre-line leading-tight">{item.label}</p>
            </Card>
          );
        })}
      </div>

      {/* Catalog */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-foreground">Available now</h2>
          <span className="text-xs text-muted-foreground">{mockProducts.length} items</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {mockProducts.map((p) => (
            <Card key={p.id} className="overflow-hidden hover-lift cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/5 flex items-center justify-center text-5xl">
                {p.emoji}
              </div>
              <div className="p-3">
                <div className="flex items-start justify-between gap-1 mb-1">
                  <h3 className="font-semibold text-sm text-foreground truncate">{p.name}</h3>
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0 shrink-0">{p.grade}</Badge>
                </div>
                <p className="text-[11px] text-muted-foreground truncate">{p.region} · Harvest {p.harvest}</p>
                <div className="flex items-center justify-between mt-2.5">
                  <div>
                    <span className="text-base font-bold text-primary">Rs. {p.price}</span>
                    <span className="text-[10px] text-muted-foreground">/{p.unit}</span>
                  </div>
                  <Button size="icon" className="h-8 w-8 bg-gradient-to-br from-primary to-primary-glow shadow-soft">
                    <ShoppingCart className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card className="p-4 bg-muted/40 border-dashed">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-primary shrink-0" />
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">Demo mode:</span> Checkout, 20% advance payment, and order tracking will be wired up next.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default BuyerHome;
