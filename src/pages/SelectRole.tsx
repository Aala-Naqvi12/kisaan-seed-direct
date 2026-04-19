import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sprout, Tractor, Store, Loader2, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

type AppRole = "farmer" | "buyer";

const SelectRole = () => {
  const navigate = useNavigate();
  const { user, role, loading, refreshRole } = useAuth();
  const [selected, setSelected] = useState<AppRole | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate("/auth", { replace: true });
    if (!loading && role) navigate("/app", { replace: true });
  }, [user, role, loading, navigate]);

  const handleConfirm = async () => {
    if (!selected || !user) return;
    setSubmitting(true);
    const { error } = await supabase
      .from("user_roles")
      .insert({ user_id: user.id, role: selected });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
      setSubmitting(false);
      return;
    }
    await refreshRole();
    navigate("/app", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-4 py-8 flex flex-col">
      <div className="max-w-md mx-auto w-full">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-soft">
            <Sprout className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground">Kisaan Bazaar</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Who are you?</h1>
        <p className="text-muted-foreground mb-6">Choose your role to get started. You can't change this later.</p>

        <div className="space-y-3">
          <RoleCard
            active={selected === "farmer"}
            onClick={() => setSelected("farmer")}
            icon={<Tractor className="w-7 h-7" />}
            title="I am a Farmer"
            subtitle="List crops, get inspected, sell at the best price"
            color="from-primary to-primary-glow"
          />
          <RoleCard
            active={selected === "buyer"}
            onClick={() => setSelected("buyer")}
            icon={<Store className="w-7 h-7" />}
            title="I am a Buyer (HoReCa)"
            subtitle="Browse graded crops and order with confidence"
            color="from-secondary to-accent"
          />
        </div>

        <Button
          onClick={handleConfirm}
          disabled={!selected || submitting}
          className="w-full mt-6 h-12 text-base bg-gradient-to-r from-primary to-primary-glow shadow-soft"
        >
          {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Continue <ArrowRight className="w-4 h-4" /></>}
        </Button>
      </div>
    </div>
  );
};

const RoleCard = ({ active, onClick, icon, title, subtitle, color }: any) => (
  <Card
    onClick={onClick}
    className={`p-4 cursor-pointer transition-all hover-lift ${active ? "ring-2 ring-primary shadow-elevated" : "hover:border-primary/40"}`}
  >
    <div className="flex items-center gap-4">
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-primary-foreground shrink-0 shadow-soft`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  </Card>
);

export default SelectRole;
