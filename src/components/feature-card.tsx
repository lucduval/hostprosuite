import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import type { Feature } from "@/lib/data";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div className="transition-transform duration-300 hover:-translate-y-1.5">
      <Card className="h-full overflow-hidden border-border/50 bg-card transition-shadow duration-300 hover:shadow-xl">
        <div className="h-1 bg-gradient-to-r from-navy via-accent-orange to-navy" />
        <CardHeader>
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-orange/10">
            <Icon className="h-6 w-6 text-accent-orange" />
          </div>
          <CardTitle className="text-lg">{feature.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {feature.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-orange" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
