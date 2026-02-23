import type { HowItWorksStep as StepType } from "@/lib/data";

interface HowItWorksStepProps {
  step: StepType;
  isLast?: boolean;
}

export function HowItWorksStep({ step, isLast = false }: HowItWorksStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {!isLast && (
        <div className="absolute left-[calc(50%+2rem)] top-7 hidden h-0.5 w-[calc(100%-4rem)] bg-gradient-to-r from-accent-orange/40 to-accent-orange/10 md:block" />
      )}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-orange to-accent-orange-dark text-xl font-bold text-white shadow-lg shadow-accent-orange/25">
        {step.step}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">
        {step.description}
      </p>
    </div>
  );
}
