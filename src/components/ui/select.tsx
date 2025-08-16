// components/ui/Select.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const selectVariants = cva(
  "w-full rounded-md border bg-background text-sm focus-visible:outline-none focus-visible:ring-2",
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

export interface SelectProps 
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
  options: { label: string; value: string }[]
  label?: string
  isError?: boolean
  errorMessage?: string
  "data-testid"?: string
}

const Select = React.memo(
  React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ 
      options, 
      label, 
      isError, 
      errorMessage,
      className, 
      size,
      id,
      "data-testid": dataTestId = "select",
      ...props 
    }, ref) => {
      try {
        const selectId = id || React.useId()

        return (
          <div className="flex flex-col gap-1">
            {label && (
              <label 
                htmlFor={selectId}
                className="text-sm font-medium text-gray-200"
              >
                {label}
              </label>
            )}
            <select
              id={selectId}
              ref={ref}
              className={cn(
                selectVariants({ 
                  variant: isError ? "error" : "default",
                  size,
                  className 
                })
              )}
              aria-invalid={isError}
              aria-label={label}
              data-testid={dataTestId}
              {...props}
            >
              {options.map((opt) => (
                <option 
                  key={opt.value} 
                  value={opt.value}
                  className="bg-background text-white"
                >
                  {opt.label}
                </option>
              ))}
            </select>
            {isError && errorMessage && (
              <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
            )}
          </div>
        )
      } catch (error) {
        console.error("Select rendering failed:", error)
        return null
      }
    }
  )
)

Select.displayName = "Select"

export { Select, selectVariants }
