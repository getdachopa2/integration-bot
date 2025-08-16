import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2",
  {
    variants: {
      variant: {
        default: "border-input focus-visible:ring-ring",
        error: "border-red-500 focus-visible:ring-red-500",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-8 px-2 py-1 text-xs",
        lg: "h-12 px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type InputVariant = "default" | "error"
export type InputSize = "default" | "sm" | "lg"

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /** Whether input is in error state */
  isError?: boolean
  /** Optional label for the input */
  label?: string
  /** Optional error message to display */
  errorMessage?: string
  /** Input size */
  size?: InputSize
  /** Optional test ID for testing tools */
  "data-testid"?: string
}

/**
 * Input component with variant, size, label, and error state support.
 */
const Input = React.memo(
  React.forwardRef<HTMLInputElement, InputProps>(
    (
      {
        className,
        type = "text",
        isError,
        label,
        errorMessage,
        id,
        size,
        "aria-label": ariaLabel,
        "data-testid": dataTestId = "input",
        ...props
      },
      ref
    ) => {
      try {
        const inputId = id || React.useId()

        return (
          <div className="flex flex-col gap-1">
            {label && (
              <label
                htmlFor={inputId}
                className="text-sm font-medium text-gray-200"
              >
                {label}
              </label>
            )}
            <input
              id={inputId}
              type={type}
              className={cn(
                inputVariants({
                  variant: isError ? "error" : "default",
                  size,
                  className,
                })
              )}
              ref={ref}
              aria-label={label || ariaLabel}
              aria-invalid={isError}
              data-testid={dataTestId}
              {...props}
            />
            {isError && errorMessage && (
              <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
            )}
          </div>
        )
      } catch (error) {
        console.error("Input rendering failed:", error)
        return null
      }
    }
  )
)

Input.displayName = "Input"

export { Input, inputVariants }
