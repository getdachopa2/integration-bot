"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import type { StepTwoProps } from "./wizard"

export default function StepTwo({ onBack, onSubmit }: StepTwoProps) {
  const [form, setForm] = useState({
    pmmId: "",
    pmmProductId: "",
    posAuthTemplateUuid: "",
    channelAuthTemplateUuid: "",
    mainTemplateUuid: "",
    installmentTemplateUuid: "",
    ipAddress: "",
    callbackUrl: "",
    channelName: "",
    applicationName: "",
    cardSaveEnabled: false,
    virtualPfmerchantList: [{
      bankCode: "",
      mainMerchantNo: 0,
      terminalNo: "",
      merchantNo: ""
    }]
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleMerchantChange = (field: keyof typeof form.virtualPfmerchantList[0], value: string | number) => {
    const updatedMerchant = { ...form.virtualPfmerchantList[0], [field]: value }
    setForm((prev) => ({ ...prev, virtualPfmerchantList: [updatedMerchant] }))
  }

  const handleSubmit = () => {
    onSubmit(form)
  }

  return (
    <main className="min-h-screen w-screen text-white font-['Manrope','Noto Sans',sans-serif']">
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between px-6 sm:px-10 py-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-4 w-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight">Merchant Configuration</h2>
          </div>
        </header>

        {/* Form */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-[960px] px-4 mx-auto">
            {/* Step Header */}
            <div className="space-y-3">
              <p className="text-base font-medium">Step 2 of 4</p>
              <div className="h-2 rounded bg-[#434343] w-full">
                <div className="h-full bg-[#671C9F] rounded" style={{ width: '50%' }} />
              </div>
            </div>

            {/* Headline */}
        <div className="mt-8 px-4 sm:px-0">
          <h1 className="text-2xl font-bold tracking-tight mb-2">Add application credentials</h1>
          <p className="text-sm text-white/80">
            You'll need to provide your application's credentials. These are available in the 'Application Credentials' section of your developer portal.
          </p>
        </div>


            {/* Fields */}
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
  {/* Merchant Fields */}
  <InputField label="PMM ID" name="pmmId" value={form.pmmId} onChange={(val) => handleChange({ target: { name: "pmmId", value: val } } as any)} />
  <InputField label="PMM Product ID" name="pmmProductId" value={form.pmmProductId} onChange={(val) => handleChange({ target: { name: "pmmProductId", value: val } } as any)} />
  <InputField label="Channel Name" name="channelName" value={form.channelName} onChange={(val) => handleChange({ target: { name: "channelName", value: val } } as any)} />
  <InputField label="Application Name" name="applicationName" value={form.applicationName} onChange={(val) => handleChange({ target: { name: "applicationName", value: val } } as any)} />
  <InputField label="Bank Code" name="bankCode" value={form.virtualPfmerchantList?.[0]?.bankCode ?? ""} onChange={(val) => handleMerchantChange("bankCode", val)} />
  <InputField label="Main Merchant No" name="mainMerchantNo" type="number" value={form.virtualPfmerchantList?.[0]?.mainMerchantNo ?? 0} onChange={(val) => handleMerchantChange("mainMerchantNo", val)} />
  <InputField label="Terminal No" name="terminalNo" value={form.virtualPfmerchantList?.[0]?.terminalNo ?? ""} onChange={(val) => handleMerchantChange("terminalNo", val)} />
  <InputField label="Merchant No" name="merchantNo" value={form.virtualPfmerchantList?.[0]?.merchantNo ?? ""} onChange={(val) => handleMerchantChange("merchantNo", val)} />

  {/* Template Fields */}
  <InputField label="POS Auth Template UUID" name="posAuthTemplateUuid" value={form.posAuthTemplateUuid} onChange={(val) => handleChange({ target: { name: "posAuthTemplateUuid", value: val } } as any)} />
  <InputField label="Channel Auth Template UUID" name="channelAuthTemplateUuid" value={form.channelAuthTemplateUuid} onChange={(val) => handleChange({ target: { name: "channelAuthTemplateUuid", value: val } } as any)} />
  <InputField label="Main Template UUID" name="mainTemplateUuid" value={form.mainTemplateUuid} onChange={(val) => handleChange({ target: { name: "mainTemplateUuid", value: val } } as any)} />
  <InputField label="Installment Template UUID" name="installmentTemplateUuid" value={form.installmentTemplateUuid} onChange={(val) => handleChange({ target: { name: "installmentTemplateUuid", value: val } } as any)} />

  {/* Other Fields */}
  <InputField label="IP Address" name="ipAddress" value={form.ipAddress} onChange={(val) => handleChange({ target: { name: "ipAddress", value: val } } as any)} />
  <InputField label="Callback URL" name="callbackUrl" value={form.callbackUrl} onChange={(val) => handleChange({ target: { name: "callbackUrl", value: val } } as any)} />

  {/* Checkbox (takes full width on small screens) */}
  <div className="col-span-full flex items-center gap-2 mt-2">
    <input
      type="checkbox"
      name="cardSaveEnabled"
      checked={form.cardSaveEnabled}
      onChange={handleChange}
      className="h-5 w-5 accent-white"
    />
    <label htmlFor="cardSaveEnabled" className="text-sm">Card Save Enabled</label>
  </div>
</div>


            {/* Buttons */}
            <div className="flex justify-between mt-10">
              <Button onClick={onBack} className="bg-[#222] text-white h-10 px-6 font-bold rounded-xl hover:bg-[#333] transition">Back</Button>
              <Button onClick={handleSubmit} className="bg-[#671C9F] text-black h-10 px-6 font-bold rounded-xl hover:scale-105 transition-transform">Submit</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

// Reusable Input Field
function InputField({ label, name, value, onChange, type = "text" }: {
  label: string,
  name: string,
  value: string | number,
  onChange: (value: string | number) => void,
  type?: string
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <Input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(type === "number" ? Number(e.target.value) : e.target.value)}
        className="bg-black text-white h-10 px-6 font-bold rounded-xl hover:scale-105 transition-transform"
      />
    </div>
  )
}