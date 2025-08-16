// components/ui/Label.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "text-gray-200",
        error: "text-red-500",
      },
      size: {
        default: "text-sm",
        sm: "text-xs",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  /** Optional required state (adds asterisk) */
  required?: boolean
  /** Whether the label is in error state */
  isError?: boolean
  /** Optional test ID for testing tools */
  "data-testid"?: string
}

/**
 * Accessible label component for form inputs.
 */
const Label = React.memo(
  React.forwardRef<HTMLLabelElement, LabelProps>(
    (
      {
        className,
        children,
        required,
        isError,
        variant,
        size,
        "data-testid": dataTestId = "label",
        ...props
      },
      ref
    ) => {
      try {
        return (
          <label
            ref={ref}
            data-testid={dataTestId}
            className={cn(
              labelVariants({
                variant: isError ? "error" : variant,
                size,
                className,
              })
            )}
            {...props}
          >
            {children}
            {required && (
              <span
                className="text-red-500 ml-1"
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
        )
      } catch (error) {
        console.error("Label rendering failed:", error)
        return null
      }
    }
  )
)

Label.displayName = "Label"

export { Label, labelVariants }
