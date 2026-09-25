
"use client";




import { FitDataContext } from '@/ContextApi/FitDataContext';
import { Iworkout } from '@/Types/types';
import React, { useContext } from 'react';



const CaloriesData = () => {

    const { addPlans } = useContext(FitDataContext);

    const totalMinutes = addPlans.reduce(
        (total: number, addPlan: Iworkout) => total + addPlan.duration,
        0
    );

    const totalCalories = addPlans.reduce(
        (total: number, addPlan: Iworkout) => total + addPlan.caloriesBurned,
        0
    );

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 border border-[#292D35] rounded-4xl bg-[#1A1D22] overflow-hidden'>
                <div className='border-r border-[#292D35] px-6 py-5'>
                    <p className='text-[#AEB5C0] mb-2'>Exercises</p>
                    <span className='text-4xl font-bold text-[#C2F800]'>{addPlans.length}</span>
                </div>
                <div className='border-r border-[#292D35] px-6 py-5'>
                    <p className='text-[#AEB5C0] mb-2'>Minutes</p>
                    <div className='text-4xl font-bold text-white'>{totalMinutes}</div>
                </div>
                <div className='px-6 py-5'>
                    <p className='text-[#AEB5C0] mb-2'>Calories</p>
                    <div className='text-4xl font-bold text-white'>{totalCalories}</div>
                </div>
            </div>
        </div>
    );
};

export default CaloriesData;