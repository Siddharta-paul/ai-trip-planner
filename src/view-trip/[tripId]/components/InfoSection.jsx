import { Button } from '@/components/ui/button'
import { FaShareAlt } from "react-icons/fa";

import React from 'react'

function InfoSection({ trip }) {
    return (
        <div>
            <img src='/placeholder.png' className='h-[340px] w-full object-cover rounded-xl' />
            <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>
                        {trip?.userSelection?.location?.label}
                        <div className='flex gap-5 p-5'>
                            <h2 className='text-gray-500 p-1 px-3 bg-gray-200 rounded-full text-xs md:text-md '>📅 {trip?.userSelection?.noOfDays} Days</h2>
                            <h2 className='text-gray-500 p-1 px-3 bg-gray-200 rounded-full text-xs md:text-md '>💰 {trip?.userSelection?.budget} Budget</h2>
                            <h2 className='text-gray-500 p-1 px-3 bg-gray-200 rounded-full text-xs md:text-md '>🥂 No of Travellers: {trip?.userSelection?.traveller}</h2>
                            
                        </div>
                    </h2>
                </div>
                <Button><FaShareAlt /></Button>
            </div>

        </div>
    )
}

export default InfoSection
