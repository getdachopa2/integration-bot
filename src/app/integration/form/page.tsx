// integration/form/page.tsx
"use client"

import { useState } from "react"
import StepOne from "@/components/wizard/stepOne"
import StepTwo from "@/components/wizard/stepTwo"
import type { FormData } from "@/components/wizard/wizard"


export default function IntegrationFormPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<any>({})

  const handleNext = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }))
    setStep(2)
  }

  const handleSubmit = async (data: Partial<FormData>): Promise<void> => {
    const fullForm = { ...formData, ...data }
    console.log("Final form:", fullForm)
  }

  return (
    <main>
      {step === 1 && <StepOne onNext={handleNext} />}
      {step === 2 && <StepTwo onSubmit={handleSubmit} onBack={() => setStep(1)} />}
    </main>
  )
}
