"use client"
import React from 'react'
import SelectOption from './_components/SelectOption'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
const Create = () => {
    const [step, setstep] = useState(0)
  return (
    <div className='flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20'>
      <h1 className='font-bold text-4xl text-blue-600'>Start Generating your study material</h1>
      <p className='text-gray-500 font-semibold text-xl'>fill in the details to get your AI generated study materials</p>

      <div className='mt-10'>
            {step==0 ? <SelectOption/>:null }
      </div>

      <div className='mt-32 flex justify-between w-full'>
        {step!=0 ? <Button variant='outline'>Previous</Button>:"-"}
        {step==0? <Button>Next</Button> : <Button>Generate</Button>}
      </div>
    </div>
  )
}

export default Create
