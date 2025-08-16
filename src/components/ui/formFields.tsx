// components/ui/FormField.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Label } from "./label"
import { cn } from "@/lib/utils"

const formFieldVariants = cva("mb-4", {
  variants: {
    spacing: {
      default: "mb-4",
      compact: "mb-2",
      loose: "mb-6",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
})

interface FormFieldProps extends VariantProps<typeof formFieldVariants> {
  /** Field label text */
  label: string
  /** Form field content */
  children: React.ReactElement<{ id?: string; isError?: boolean; 'aria-describedby'?: string }>
  /** Error message */
  error?: string
  /** Whether the field is required */
  required?: boolean
  /** Optional description text */
  description?: string
  /** Test id for testing */
  "data-testid"?: string
  /** Optional className for custom styling */
  className?: string
}

export const FormField = React.memo(({
  label,
  children,
  error,
  required,
  spacing,
  description,
  "data-testid": dataTestId = "form-field",
  className
}: FormFieldProps) => {
  try {
    const id = React.useId()
    
    return (
      <div 
        className={cn(formFieldVariants({ spacing }), className)}
        data-testid={dataTestId}
      >
        <Label 
          htmlFor={id}
          required={required}
          isError={!!error}
        >
          {label}
        </Label>
        
        {description && (
          <p className="text-sm text-gray-500 mt-1 mb-2">
            {description}
          </p>
        )}

        <div className="mt-1">
          {React.isValidElement(children) 
            ? React.cloneElement(children, { 
                id,
                "aria-describedby": error ? `${id}-error` : undefined,
                isError: !!error
              })
            : children
          }
        </div>

        {error && (
          <p 
            id={`${id}-error`}
            className="text-xs text-red-500 mt-1"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  } catch (error) {
    console.error("FormField rendering failed:", error)
    return null
  }
})

FormField.displayName = "FormField"

export { formFieldVariants }
