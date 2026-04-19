import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Mail, Shield, LogOut, Sprout, Tractor, Store } from "lucide-react";

const Profile = () => {
  const { user, role, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="space-y-5 animate-fade-in">
      <h1 className="text-2xl font-bold text-foreground">Profile</h1>

      <Card className="p-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-soft">
            {user?.email?.[0].toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-semibold text-foreground truncate">{user?.email?.split("@")[0]}</h2>
            <Badge variant="outline" className="mt-1 gap-1">
              {role === "farmer" ? <Tractor className="w-3 h-3" /> : <Store className="w-3 h-3" />}
              {role === "farmer" ? "Farmer" : "Buyer (HoReCa)"}
            </Badge>
          </div>
        </div>
      </Card>

      <Card className="divide-y divide-border">
        <Row icon={Mail} label="Email" value={user?.email ?? ""} />
        <Row icon={Shield} label="Account secured" value="Email & password" />
        <Row icon={Sprout} label="Member since" value={new Date(user?.created_at ?? Date.now()).toLocaleDateString()} />
      </Card>

      <Button
        variant="outline"
        className="w-full h-12"
        onClick={async () => { await signOut(); navigate("/auth", { replace: true }); }}
      >
        <LogOut className="w-4 h-4" /> Sign out
      </Button>
    </div>
  );
};

const Row = ({ icon: Icon, label, value }: any) => (
  <div className="p-4 flex items-center gap-3">
    <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
      <Icon className="w-4 h-4 text-muted-foreground" />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-medium text-foreground truncate">{value}</p>
    </div>
  </div>
);

export default Profile;
