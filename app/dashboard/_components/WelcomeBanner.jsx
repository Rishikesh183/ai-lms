"use client"
import React from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
const WelcomeBanner = () => {
    const { user } = useUser();
    return (
        <div className='p-5 bg-blue-600 w-full text-white rounded-lg flex items-center gap-6'>
            <Image src={'/laptop.png'} alt='laptop.png' height={100} width={100} />
            <div>
                <h1 className='font-bold text-2xl'>welcome {user?.fullName}</h1>
                <p className='font-semibold text-xl'>Hey {user?.firstName} its time to learn</p>
            </div>
        </div>
    )
}

export default WelcomeBanner
