import { AppLayout } from "@/components/app/AppLayout";
import { Card } from "@/components/ui/card";
import { Package } from "lucide-react";

const Placeholder = ({ title, message }: { title: string; message: string }) => (
  <AppLayout>
    <div className="space-y-5 animate-fade-in">
      <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      <Card className="p-8 text-center bg-muted/30 border-dashed">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mb-4">
          <Package className="w-6 h-6 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">{message}</p>
      </Card>
    </div>
  </AppLayout>
);

export default Placeholder;
