import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard } from "lucide-react";
import { pricing } from "@/lib/data";
import { CTAButton } from "@/components/cta-button";

export function PricingCard() {
  return (
    <Card className="mx-auto w-full max-w-md border-2 border-accent-orange/20 bg-card shadow-xl">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-sm font-semibold uppercase tracking-wider text-accent-orange">
          {pricing.planName}
        </CardTitle>
        <div className="mt-4 flex items-start justify-center gap-1">
          <span className="mt-2 text-lg font-semibold text-muted-foreground">
            {pricing.currency}
          </span>
          <span className="text-6xl font-bold tracking-tight">
            {pricing.amount}
          </span>
          <span className="mb-1 self-end text-base text-muted-foreground">
            {pricing.period}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {pricing.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-sm">
              <Check className="h-5 w-5 shrink-0 text-accent-orange" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Accepted payment methods
          </p>
          <div className="flex flex-wrap gap-2">
            {pricing.paymentMethods.map((method) => (
              <span
                key={method}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
              >
                <CreditCard className="h-3 w-3" />
                {method}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {pricing.payoutPeriod}
          </p>
        </div>

        <CTAButton className="w-full" />
      </CardContent>
    </Card>
  );
}
