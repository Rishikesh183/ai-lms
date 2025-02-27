"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Shield, UserCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'
const SideBar = () => {
    const MenuList = [
        {
            name: 'Dashboard',
            icon: LayoutDashboard,
            path: '/dashboard'
        },
        {
            name: 'Upgrade',
            icon: Shield,
            path: '/dashboard/upgrade'
        },
        {
            name: 'Profie',
            icon: UserCircle,
            path: '/dashboard/profile'
        },

    ]
    const path = usePathname()
    return (
        <div className='h-screen shadow p-5 gap-3 flex flex-col '>
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.svg'} width={44} height={44} alt='logo' />
                <h2 className='font-bold text-2xl'>Easy Study</h2>
            </div>
            <div className='mt-10'>
                <Button className='w-full'>+ Add New</Button>
            </div>
            {MenuList.map((menu, index) => (
                <div key={index} className={`flex gap-5 p-3 mt-2 items-center hover:bg-slate-300 rounded-lg cursor-pointer ${path == menu.path && 'bg-slate-200'}`}>
                    <menu.icon />
                    <h2>{menu.name}</h2>
                </div>
            ))}

            <div className=' gap-2 flex flex-col justify-center border p-3 bg-blue-100 rounded-lg absolute bottom-10 w-[85%]' >
                <h2>Available Credits 5</h2>
                <Progress value={33} />
                <h2>Left Credits 3</h2>
                <Link href={'/dashboard/upgrade'} className='text-primary text-xs m-3'>Upgrade to use more</Link>
            </div>
        </div>
    )
}

export default SideBar
