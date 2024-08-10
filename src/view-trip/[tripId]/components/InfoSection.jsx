import { Button } from '@/components/ui/button';
import { FaShareAlt } from 'react-icons/fa';
import React from 'react';

function InfoSection({ trip }) {
    // Function to safely get data from the trip object
    const getData = (path, defaultValue = 'Not Available') => {
        return path.split('.').reduce((acc, part) => acc && acc[part], trip) || defaultValue;
    };

    return (
        <div className='p-5 md:p-10'>
            <img 
                src='/placeholder.png' 
                alt='Trip Image' 
                className='h-[340px] w-full object-cover rounded-xl mb-5'
            />
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
                <div className='flex flex-col gap-3 mb-5 md:mb-0'>
                    <h2 className='font-bold text-xl md:text-2xl'>
                        {getData('userSelection.location.label')}
                    </h2>
                    <div className='flex flex-wrap gap-3'>
                        <span className='text-gray-500 p-2 px-4 bg-gray-200 rounded-full text-xs md:text-sm'>
                            📅 {getData('userSelection.noOfDays', 'N/A')} Days
                        </span>
                        <span className='text-gray-500 p-2 px-4 bg-gray-200 rounded-full text-xs md:text-sm'>
                            💰 {getData('userSelection.budget', 'N/A')} Budget
                        </span>
                        <span className='text-gray-500 p-2 px-4 bg-gray-200 rounded-full text-xs md:text-sm'>
                            🥂 No of Travellers: {getData('userSelection.traveller', 'N/A')}
                        </span>
                    </div>
                </div>
                <Button className='flex items-center'>
                    <FaShareAlt className='mr-2' /> Share
                </Button>
            </div>
        </div>
    );
}

export default InfoSection;
