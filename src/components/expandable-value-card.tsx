import { Check } from "lucide-react";
import { ExpandableCard } from "@/components/expandable-card";
import type { ValueProp } from "@/lib/data";

interface ExpandableValueCardProps {
  prop: ValueProp;
  index: number;
}

export function ExpandableValueCard({ prop, index }: ExpandableValueCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-orange/10">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-navy via-accent-orange to-navy opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent-orange/5 transition-transform duration-500 group-hover:scale-150" />
      <div className="relative p-6 sm:p-8">
        <ExpandableCard
          header={
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="text-lg font-bold text-navy">{prop.title}</h3>
            </div>
          }
        >
          <div className="pt-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {prop.description}
            </p>
            <ul className="mt-5 space-y-2.5">
              {prop.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2.5 text-sm font-medium"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-orange/15">
                    <Check className="h-3 w-3 text-accent-orange" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </ExpandableCard>
      </div>
    </div>
  );
}
