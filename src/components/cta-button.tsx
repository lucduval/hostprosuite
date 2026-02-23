import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  className?: string;
  size?: "default" | "lg";
  children?: React.ReactNode;
}

export function CTAButton({
  className,
  size = "lg",
  children = "Sign Up",
}: CTAButtonProps) {
  return (
    <Button
      asChild
      size={size}
      className={cn(
        "bg-accent-orange text-white font-semibold shadow-lg hover:bg-accent-orange-dark hover:shadow-xl transition-all duration-200",
        size === "lg" && "px-8 py-6 text-base",
        className
      )}
    >
      <Link href={siteConfig.signUpUrl}>{children}</Link>
    </Button>
  );
}
