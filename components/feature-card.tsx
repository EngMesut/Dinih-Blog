import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Network, FileText } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: "portfolio" | "network" | "resume";
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  const Icon = {
    portfolio: Briefcase,
    network: Network,
    resume: FileText,
  }[icon];

  return (
    <Card className="bg-white/5 border-white/10 shadow-md">
      <CardContent className="p-6">
        <div className="mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted mb-4">{description}</p>
        <Button
          variant="outline"
          className="w-full border-white/10 hover:bg-white/5 text-foreground"
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
