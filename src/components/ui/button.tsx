import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-gea-navy text-white hover:bg-gea-navy-light focus-visible:ring-gea-navy shadow-sm hover:shadow",
        primaryRed:
          "bg-gea-red text-white hover:bg-gea-red-hover focus-visible:ring-gea-red shadow-md hover:shadow-lg hover:shadow-gea-red/25",
        secondaryYellow:
          "bg-gea-yellow text-gea-navy hover:bg-gea-yellow-hover focus-visible:ring-gea-yellow font-bold shadow-sm",
        outlineNavy:
          "border-2 border-gea-navy text-gea-navy bg-transparent hover:bg-gea-navy hover:text-white focus-visible:ring-gea-navy",
        outlineWhite:
          "border-2 border-white text-white bg-transparent hover:bg-white hover:text-gea-navy focus-visible:ring-white",
        ghost:
          "text-gea-navy hover:bg-gea-slate-100 hover:text-gea-navy",
        link:
          "text-gea-navy underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-12 sm:h-14 rounded-xl px-7 text-base font-bold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
