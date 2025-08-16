// components/ui/Textarea.tsx
import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2",
  {
    variants: {
      variant: {
        default: "border-input focus-visible:ring-ring",
        error: "border-red-500 focus-visible:ring-red-500",
      },
      size: {
        default: "px-3 py-2",
        sm: "px-2 py-1 text-xs",
        lg: "px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  /** Whether textarea is in error state */
  isError?: boolean
  /** Optional label for the textarea */
  label?: string
  /** Optional error message to display */
  errorMessage?: string
  /** Optional test ID for testing tools */
  "data-testid"?: string
}

const Textarea = React.memo(
  React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
      {
        className,
        isError,
        variant,
        size,
        label,
        errorMessage,
        id,
        "data-testid": dataTestId = "textarea",
        ...props
      },
      ref
    ) => {
      try {
        const textareaId = id || React.useId()

        return (
          <div className="flex flex-col gap-1">
            {label && (
              <label
                htmlFor={textareaId}
                className="text-sm font-medium text-gray-200"
              >
                {label}
              </label>
            )}
            <textarea
              id={textareaId}
              ref={ref}
              className={cn(
                textareaVariants({
                  variant: isError ? "error" : variant,
                  size,
                  className,
                })
              )}
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
        console.error("Textarea rendering failed:", error)
        return null
      }
    }
  )
)

Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }
