"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface FormData {
  applicationName: string
  applicationPassword: string
  secureCode: string
  transactionId: string
  transactionDateTime: string
}

interface StepOneProps {
  onNext: (data: FormData) => void
}

export default function StepOne({ onNext }: StepOneProps) {
  const [form, setForm] = useState<FormData>({
    applicationName: "",
    applicationPassword: "",
    secureCode: "",
    transactionId: "",
    transactionDateTime: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    onNext(form)
  }

 return (
  <div className="min-h-screen w-screen text-white font-['Manrope','Noto Sans',sans-serif']">
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 sm:px-10 py-4">
        <div className="flex items-center gap-3 sm:gap-4 text-purpl">
          <div className="h-4 w-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight">Paycell Integration</h2>
        </div>
      </header>

    {/* Form Section */}
    <section className="w-full flex justify-center">
      <div className="w-full max-w-[960px]">
        {/* Progress */}
        <div className="space-y-3 px-4 sm:px-0">
          <p className="text-base font-medium">Step 1 of 4</p>
          <div className="h-2 rounded bg-[#434343] w-full">
            <div className="h-full bg-[#671C9F] rounded" style={{ width: '25%' }} />
          </div>
        </div>

        {/* Headline */}
        <div className="mt-8 px-4 sm:px-0">
          <h1 className="text-2xl font-bold tracking-tight mb-2">Add application credentials</h1>
          <p className="text-sm text-white/80">
            You'll need to provide your application's credentials. These are available in the 'Application Credentials' section of your developer portal.
          </p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 px-4 sm:px-0">
          <div>
            <label className="block text-sm font-medium mb-2">Application Name</label>
            <Input
              name="applicationName"
              placeholder="Enter application name"
              value={form.applicationName}
              onChange={handleChange}
              className="h-14 text-white bg-black border-[#434343] placeholder:text-[#CBCBCB] rounded-xl"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Application Password</label>
            <Input
              name="applicationPassword"
              placeholder="Enter application password"
              value={form.applicationPassword}
              onChange={handleChange}
              className="h-14 text-white bg-black border-[#434343] placeholder:text-[#CBCBCB] rounded-xl"
            />
          </div>
        </div>

        {/* Secure Code */}
        <div className="mt-12 px-4 sm:px-0">
          <h2 className="text-xl font-bold mb-4">Secure Code</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Secure Code</label>
              <Input
                name="secureCode"
                placeholder="Enter secure code"
                value={form.secureCode}
                onChange={handleChange}
                className="h-14 text-white bg-black border-[#434343] placeholder:text-[#CBCBCB] rounded-xl"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Transaction ID</label>
              <Input
                name="transactionId"
                placeholder="Enter transaction ID"
                value={form.transactionId}
                onChange={handleChange}
                className="h-14 text-white bg-black border-[#434343] placeholder:text-[#CBCBCB] rounded-xl"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Transaction Date & Time</label>
              <Input
                name="transactionDateTime"
                placeholder="Enter transaction datetime"
                value={form.transactionDateTime}
                onChange={handleChange}
                className="h-14 text-white bg-black border-[#434343] placeholder:text-[#CBCBCB] rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end mt-10 px-4 sm:px-0">
          <Button
            onClick={handleNext}
            className="bg-[#671C9F] text-black h-10 px-6 font-bold rounded-xl hover:scale-105 transition-transform"
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  </div>
</div>
  )
}
