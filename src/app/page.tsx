'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const router = useRouter()

  const handleStart = () => {
    router.push('/integration/form')
  }

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-xl space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Welcome to Paycell Integration Wizard
        </h1>
        <p className="text-gray-400 text-lg">
          Start your onboarding process by securely adding your application credentials and merchant information step by step.
        </p>
        <Button
          onClick={handleStart}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-xl"
        >
          Start Integration
        </Button>
      </div>
    </main>
  )
}
