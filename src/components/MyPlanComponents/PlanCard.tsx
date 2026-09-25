'use client'


import { FitDataContext } from '@/ContextApi/FitDataContext';
import { Iworkout } from '@/Types/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { CiClock2, CiStar } from 'react-icons/ci';
import { IoMdCheckmark } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { LuFlame } from 'react-icons/lu';





interface IplanCard {
    fit: Iworkout,
    tab: 'plan' | 'saved';
}

const PlanCard = ({ fit, tab }: IplanCard) => {

    const { addPlans, setAddPlans, setSaved } = useContext(FitDataContext);

    const markAsDone = () => {
        setAddPlans((prev) => prev.filter((w) => w.id !== fit.id));
    }

    const handleRemove = () => {
        if (tab === 'plan') {
            setAddPlans((prev) => prev.filter((w) => w.id !== fit.id));
        } else {
            setSaved((prev) => prev.filter((w) => w.id !== fit.id));
        }
    }
    return (
        <div className="w-full flex flex-col sm:items-center gap-4 rounded-2xl border border-[#292D35] bg-[#1A1D22] p-4 text-white sm:flex-row">

            
                {/* image */}
                <div className="relative w-full h-32  sm:h-24 sm:w-24 flex-shrink-0 rounded-xl overflow-hidden">
                    <Image
                        src={fit.image}
                        alt={fit.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                    />
                </div>


                <div className="flex-1">
                    <h2 className="text-lg uppercase font-bold tracking-tight">
                        {fit.name}
                    </h2>
                    <p className="text-sm text-[#AEB5C0]">{fit.equipment}</p>

                    <div className="flex gap-5 mt-2 text-sm">
                        <div className="flex items-center gap-1">
                            <CiClock2 className="text-[#C2F800]" />
                            <span>{fit.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <LuFlame className="text-[#C2F800]" />
                            <span>{fit.caloriesBurned} kcal</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CiStar className="text-[#C2F800]" />
                            <span>{fit.rating}</span>
                        </div>
                    </div>
                </div>
            

            {/* Button */}
            <div className="flex items-center gap-3">
                <Link
                    href={`/${fit.id}`}
                    className="px-4 py-2 rounded-full outline outline-white bg-gray-900 text-xs sm:text-sm hover:outline-none active:translate-y-0.5"
                >
                    View Details
                </Link>


                {tab === 'plan' && (
                    <button
                        onClick={markAsDone}
                        className="flex items-center gap-1 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#C2F800] text-black cursor-pointer"
                    >
                        <IoMdCheckmark />
                        Mark as Done
                    </button>
                )}


                <button onClick={handleRemove} className="text-xl text-[#AEB5C0] cursor-pointer">
                    <IoClose />
                </button>
            </div>
        </div>
    );
};

export default PlanCard;