import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { Sprout, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const emailSchema = z.string().trim().email({ message: "Invalid email" }).max(255);
const passwordSchema = z.string().min(6, { message: "Min 6 characters" }).max(100);

const Auth = () => {
  const navigate = useNavigate();
  const { user, role, loading } = useAuth();
  const { t, language, setLanguage } = useLanguage();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      navigate(role ? "/app" : "/select-role", { replace: true });
    }
  }, [user, role, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ev = emailSchema.safeParse(email);
    const pv = passwordSchema.safeParse(password);
    if (!ev.success || !pv.success) {
      toast({ title: "Invalid input", description: ev.success ? pv.error.issues[0].message : ev.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/select-role` },
        });
        if (error) throw error;
        toast({ title: t({ ur: "خوش آمدید!", en: "Welcome!", pa: "جی آیاں نوں!", sd: "ڀلي ڪري آيا!", ps: "ښه راغلاست!", bal: "وش آتکگئے!", shina: "سلام!" }), description: "Choose your role to continue" });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-4 py-8">
      <div className="flex justify-between items-center max-w-md mx-auto w-full mb-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-soft">
            <Sprout className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground">Kisaan Bazaar</span>
        </Link>
        <button
          onClick={() => setLanguage(language === "en" ? "ur" : "en")}
          className="text-xs px-3 py-1.5 rounded-full border border-border bg-card hover:bg-muted transition-colors"
        >
          {language === "en" ? "اردو" : "English"}
        </button>
      </div>

      <Card className="w-full max-w-md mx-auto p-6 sm:p-8 shadow-elevated">
        <h1 className="text-2xl font-bold mb-1 text-foreground">
          {mode === "login"
            ? t({ ur: "لاگ ان کریں", en: "Welcome back", pa: "ولاپس آؤ", sd: "ڀلي ڪري", ps: "بیرته ښه راغلاست", bal: "وش آتکگئے", shina: "سلام" })
            : t({ ur: "اکاؤنٹ بنائیں", en: "Create account", pa: "اکاؤنٹ بناؤ", sd: "اڪائونٽ ٺاهيو", ps: "حساب جوړ کړئ", bal: "اکاؤنٹ جوڑ", shina: "اکاؤنٹ بنا" })}
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          {mode === "login" ? "Sign in to your Kisaan Bazaar account" : "Join thousands of farmers and buyers"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" inputMode="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-12" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"} value={password} onChange={(e) => setPassword(e.target.value)} required className="h-12" />
          </div>
          <Button type="submit" disabled={submitting} className="w-full h-12 text-base bg-gradient-to-r from-primary to-primary-glow shadow-soft">
            {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
            {mode === "login" ? "Sign in" : "Create account"}
          </Button>
        </form>

        <button
          type="button"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="w-full mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {mode === "login" ? "New here? Create an account" : "Already have an account? Sign in"}
        </button>
      </Card>
    </div>
  );
};

export default Auth;
