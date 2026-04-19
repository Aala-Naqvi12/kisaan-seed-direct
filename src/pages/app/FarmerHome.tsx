import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, TrendingUp, Clock, CheckCircle2, Plus, Sparkles, MapPin, Calendar } from "lucide-react";

const mockCrops = [
  { id: 1, name: "Tomatoes", grade: "A", qty: "500 kg", status: "Priced", price: "Rs. 85/kg", date: "Harvest: 12 Apr", region: "Swat" },
  { id: 2, name: "Onions", grade: "B+", qty: "1,200 kg", status: "Pending Inspection", price: null, date: "Harvest: 18 Apr", region: "Swat" },
  { id: 3, name: "Potatoes", grade: "A", qty: "800 kg", status: "Sold", price: "Rs. 60/kg", date: "Harvest: 02 Apr", region: "Swat" },
];

const statusConfig: Record<string, { color: string; icon: any }> = {
  "Pending Inspection": { color: "bg-secondary/15 text-secondary border-secondary/30", icon: Clock },
  "Priced": { color: "bg-primary/15 text-primary border-primary/30", icon: TrendingUp },
  "Sold": { color: "bg-muted text-muted-foreground border-border", icon: CheckCircle2 },
};

const FarmerHome = () => {
  const { user } = useAuth();
  return (
    <div className="space-y-5 animate-fade-in">
      {/* Greeting */}
      <div>
        <p className="text-sm text-muted-foreground">Assalam-o-Alaikum 👋</p>
        <h1 className="text-2xl font-bold text-foreground truncate">{user?.email?.split("@")[0]}</h1>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary-glow/5 border-primary/20">
          <div className="flex items-center gap-2 mb-1">
            <Package className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">Active Listings</span>
          </div>
          <div className="text-2xl font-bold text-foreground">3</div>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-secondary/10 to-accent/5 border-secondary/20">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <span className="text-xs text-muted-foreground">This Month</span>
          </div>
          <div className="text-2xl font-bold text-foreground">Rs. 48,000</div>
        </Card>
      </div>

      {/* Add crop CTA */}
      <Card className="p-5 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground border-0 shadow-soft hover-lift cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <Plus className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">List a new crop</h3>
            <p className="text-sm opacity-90">Get inspected & priced in 24h</p>
          </div>
        </div>
      </Card>

      {/* My crops */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-foreground">Recent crops</h2>
          <Button variant="ghost" size="sm" className="text-xs">View all</Button>
        </div>
        <div className="space-y-2.5">
          {mockCrops.map((c) => {
            const cfg = statusConfig[c.status];
            const Icon = cfg.icon;
            return (
              <Card key={c.id} className="p-4 hover-lift cursor-pointer">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{c.name}</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{c.region}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{c.date}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="shrink-0">Grade {c.grade}</Badge>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <span className="text-sm text-muted-foreground">{c.qty}</span>
                  <div className="flex items-center gap-2">
                    {c.price && <span className="text-sm font-semibold text-primary">{c.price}</span>}
                    <Badge className={`${cfg.color} border gap-1 font-normal`} variant="outline">
                      <Icon className="w-3 h-3" />
                      {c.status}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <Card className="p-4 bg-muted/40 border-dashed">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-primary shrink-0" />
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">Demo mode:</span> Crop listings, inspections, and payouts will go live in the next phase.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default FarmerHome;
