"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// Removed redundant import for StepTwoProps

// Removed duplicate declaration of FormData

export default function StepTwo({ onBack, onSubmit }: StepTwoProps) {
  const [form, setForm] = useState<FormData>({
    pmmId: "",
    pmmProductId: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    onSubmit(form)
  }

  return (
    <div className="min-h-screen w-screen bg-black text-white p-8">
      <h2 className="text-2xl font-bold mb-4">Step 2: Merchant Info</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">PMM ID</label>
          <Input
            name="pmmId"
            value={form.pmmId}
            onChange={handleChange}
            placeholder="Enter PMM ID"
            className="h-14 text-white bg-black border-[#434343] placeholder:text-[#CBCBCB] rounded-xl"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">PMM Product ID</label>
          <Input
            name="pmmProductId"
            value={form.pmmProductId}
            onChange={handleChange}
            placeholder="Enter PMM Product ID"
            className="h-14 text-white bg-black border-[#434343] placeholder:text-[#CBCBCB] rounded-xl"
          />
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <Button onClick={onBack} variant="outline" className="h-10 px-6 rounded-xl">
          Back
        </Button>
        <Button onClick={handleSubmit} className="bg-[#671C9F] text-black h-10 px-6 font-bold rounded-xl hover:scale-105 transition-transform">
          Submit
        </Button>
      </div>
    </div>
  )
}

export interface StepTwoProps {
  onBack: () => void;
  onSubmit: (data: Partial<FormData>) => Promise<void>;
}

export interface FormData {
  pmmId: string;
  pmmProductId: string;
}