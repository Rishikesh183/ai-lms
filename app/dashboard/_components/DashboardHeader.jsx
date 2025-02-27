import React from 'react'
import { UserButton } from '@clerk/nextjs'
const DashboardHeader = () => {
  return (
    <div className='shadow-md flex justify-end p-5'>
      <UserButton/>
    </div>
  )
}

export default DashboardHeader
