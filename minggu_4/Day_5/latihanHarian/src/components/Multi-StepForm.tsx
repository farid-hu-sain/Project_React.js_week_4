import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  position: string
  bio: string
  website: string
}

const steps = [
  { id: 1, title: 'Personal Info' },
  { id: 2, title: 'Professional Info' },
  { id: 3, title: 'Additional Info' }
]

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm<FormData>()

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep)
    const isValid = await trigger(fields as any)
    if (isValid) setCurrentStep(prev => Math.min(prev + 1, steps.length))
  }

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 1: return ['firstName', 'lastName', 'email']
      case 2: return ['company', 'position']
      case 3: return ['bio', 'website']
      default: return []
    }
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('🌤️ Final submission:', data)
  }

  const progress = (currentStep / steps.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-100 to-sky-300 flex items-center justify-center p-6">
      <div className="relative bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl shadow-2xl p-8 max-w-xl w-full overflow-hidden">
        
        {/* Gradient sky overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-blue-50 to-transparent pointer-events-none" />

        {/* Subtle cloud effect */}
        <div className="absolute top-[-50px] left-[-60px] w-64 h-64 bg-white/40 blur-3xl rounded-full opacity-70 animate-pulse" />
        <div className="absolute bottom-[-60px] right-[-40px] w-72 h-72 bg-blue-200/30 blur-3xl rounded-full opacity-60 animate-pulse" />

        {/* Progress bar */}
        <div className="mb-8 relative z-10">
          <Progress
            value={progress}
            className="w-full h-3 bg-blue-100 rounded-full"
          />
          <div className="flex justify-between mt-3 text-xs font-semibold text-blue-600">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`${currentStep >= step.id ? 'text-blue-700' : 'text-blue-300'}`}
              >
                {step.title}
              </div>
            ))}
          </div>
        </div>

        {/* Form steps with motion transitions */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-blue-700">Personal Information</h2>
                <Input
                  {...register('firstName', { required: 'First name is required' })}
                  placeholder="First Name"
                  className="bg-white/90 border-blue-200 focus:border-blue-400 text-gray-800 placeholder:text-gray-400"
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
                )}

                <Input
                  {...register('lastName', { required: 'Last name is required' })}
                  placeholder="Last Name"
                  className="bg-white/90 border-blue-200 focus:border-blue-400 text-gray-800 placeholder:text-gray-400"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
                )}

                <Input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email format'
                    }
                  })}
                  type="email"
                  placeholder="Email"
                  className="bg-white/90 border-blue-200 focus:border-blue-400 text-gray-800 placeholder:text-gray-400"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                )}
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-blue-700">Professional Information</h2>
                <Input
                  {...register('company', { required: 'Company is required' })}
                  placeholder="Company"
                  className="bg-white/90 border-blue-200 focus:border-blue-400 text-gray-800 placeholder:text-gray-400"
                />
                {errors.company && (
                  <p className="text-sm text-red-500 mt-1">{errors.company.message}</p>
                )}

                <Input
                  {...register('position', { required: 'Position is required' })}
                  placeholder="Position"
                  className="bg-white/90 border-blue-200 focus:border-blue-400 text-gray-800 placeholder:text-gray-400"
                />
                {errors.position && (
                  <p className="text-sm text-red-500 mt-1">{errors.position.message}</p>
                )}
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-blue-700">Additional Information</h2>
                <textarea
                  {...register('bio', { required: 'Bio is required' })}
                  placeholder="Tell us about yourself"
                  className="w-full px-3 py-2 border border-blue-200 rounded-lg bg-white/90 text-gray-800 placeholder:text-gray-400 min-h-[100px] focus:border-blue-400"
                />
                {errors.bio && (
                  <p className="text-sm text-red-500 mt-1">{errors.bio.message}</p>
                )}

                <Input
                  {...register('website')}
                  placeholder="Website (optional)"
                  className="bg-white/90 border-blue-200 focus:border-blue-400 text-gray-800 placeholder:text-gray-400"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="border-blue-200 text-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
            >
              Previous
            </Button>

            {currentStep < steps.length ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 hover:bg-sky-400 text-white font-semibold shadow-md shadow-blue-300/50 transition-all duration-300"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-white font-bold shadow-lg shadow-sky-400/40 transition-all duration-300"
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
