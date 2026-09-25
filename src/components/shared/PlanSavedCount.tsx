'use client'


import { FitDataContext } from '@/ContextApi/FitDataContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const PlanSavedCount = () => {
    const { addPlans, saved } = useContext(FitDataContext);

    return (
         <>
            <Link href="/myPlan" className="flex items-center gap-2 text-white font-medium">
                Plan
                <span className="bg-[#C2F800] text-black text-sm font-bold px-3 py-0.5 rounded-full min-w-[28px] text-center">
                    {addPlans.length}
                </span>
            </Link>

            <Link href="/myPlan" className="flex items-center gap-2 text-white font-medium">
                Saved
                <span className="border border-white/40 text-white text-sm font-bold px-3 py-0.5 rounded-full min-w-[28px] text-center">
                    {saved.length}
                </span>
            </Link>
        </>
    );
};

export default PlanSavedCount;