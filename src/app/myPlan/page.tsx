import CaloriesData from '@/components/MyPlanComponents/CaloriesData';
import PlansTab from '@/components/MyPlanComponents/PlansTab';
import React from 'react';

const MyPlan = () => {
    return (
        <div className='bg-gray-950 py-7 w-[90%] mx-auto'>
            <div className='bg-gray-950 container mx-auto'>
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold uppercase tracking-tight text-white">MY PLAN</h1>
                    <p className="text-[#AEB5C0]">Cap of five lifts for today. Finish them, then load more.</p>
                </div>
                <div className='my-6'>
                    <CaloriesData></CaloriesData>
                </div>

                <div className='my-6'>
                    <PlansTab></PlansTab>
                </div>
            </div>
        </div>
    );
};

export default MyPlan;