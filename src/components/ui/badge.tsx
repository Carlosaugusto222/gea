import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-gea-navy text-white hover:bg-gea-navy-light",
        secondary:
          "bg-gea-slate-100 text-gea-navy hover:bg-gea-slate-200",
        destructive:
          "bg-gea-red text-white hover:bg-gea-red-hover",
        yellow:
          "bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]",
        outline:
          "border border-gea-slate-300 text-gea-navy hover:bg-gea-slate-50",
        pill:
          "bg-gea-navy/10 text-gea-navy font-bold uppercase text-[11px] tracking-wider",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
