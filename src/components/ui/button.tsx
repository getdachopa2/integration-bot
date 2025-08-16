// components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Literal union types for better type safety
 */
export type ButtonVariant = "default" | "outline" | "ghost";
export type ButtonSize = "sm" | "default" | "lg" | "icon";

/**
 * Tailwind-based class variants using CVA
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "h-8 px-3",
        default: "h-10 px-4",
        lg: "h-12 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Button component props
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Whether to render as a Radix Slot component */
  asChild?: boolean;
  /** Optional additional className */
  className?: string;
  /** Visual style of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
}

/**
 * A reusable, accessible, and styleable button component
 */
const Button = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button";

      try {
        return (
          <Comp
            ref={ref}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
          />
        );
      } catch (error) {
        console.error("Button rendering failed:", error);
        return null;
      }
    }
  )
);

Button.displayName = "Button";

export { Button, buttonVariants };
