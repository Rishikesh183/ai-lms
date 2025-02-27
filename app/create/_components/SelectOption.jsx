import React, { useState } from 'react'
import Image from 'next/image'
function SelectOption() {
    const Options = [
        {
            name: 'Exam',
            icon: '/exam_1.png'
        },
        {
            name: 'Job Interview',
            icon: '/job.png'
        },
        {
            name: 'coding',
            icon: '/code.png'
        },
        {
            name: 'practice',
            icon: '/practice.png'
        },
        {
            name: 'other',
            icon: '/knowledge.png'
        },
    ]
    const [selectedOption,setSelectedOption] = useState('');
    return (
        <div>
            <h2 className='font-bold mb-2 text-center text-lg'>Select the Type of materials you want</h2>
            {/* {console.log(Options)} */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {Options.map((option, index) => (
                    <div key={index} className={`p-4 flex flex-col items-center justify-center border rounded-xl gap-5 hover:bg-green-500 cursor-pointer ${option?.name==selectedOption&&'bg-green-500'}`} onClick={()=>setSelectedOption(option.name)}>
                        <Image src={option.icon} alt={option.name} height={50} width={50} />
                        <h2 className='text-sm'>{option.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectOption
