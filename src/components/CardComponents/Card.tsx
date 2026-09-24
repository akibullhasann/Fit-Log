import { Iworkout } from '@/Types/types';
import React from 'react';
import Image from 'next/image';
import { CiClock2, CiStar } from 'react-icons/ci';
import { LuFlame } from 'react-icons/lu';


interface Icard {
    fit: Iworkout
}


const Card = ({ fit }: Icard) => {


    return (
        <div className="w-full max-w-[540px] overflow-hidden rounded-3xl border border-[#292D35] bg-[#1A1D22] space-y-4">
            <div className="relative h-48 w-auto
            sm:h-48 sm:w-full">
                <Image src={fit.image} alt='cardImage' fill className='object-cover' sizes="(max-width: 768px) 100vw, 540px" ></Image>
            </div>

            {/* Content */}

            <div className=' space-y-3 px-6'>
                {/* Muscle Groups */}
                <div className='flex gap-3 mb-5'>
                    {fit.muscleGroups.map((muscle) => (
                        <span key={muscle} 
                        className='bg-[#C2F800] px-4 py-1 rounded-full text-black font-medium text-[12px]'>
                            {muscle}
                        </span>
                    ))}
                </div>
                {/* title */}

                <h2 className='text-xl uppercase font-bold tracking-tight'>{fit.name}</h2>
                {/* Equipment */}
                <p className="mb-6 text-sm text-[#AEB5C0] ">
                    {fit.equipment}
                </p>

                <div className='flex gap-7'>
                    <div className='flex items-center gap-1'>
                        <CiClock2 className='text-[#C2F800] font-bold' />
                        <span>{fit.duration}</span>
                    </div>
                    
                    <div className='flex items-center gap-1'>
                        <LuFlame className='text-[#C2F800] font-bold'/>
                        <span>{fit.caloriesBurned} kcal</span>
                    </div>

                    <div className='flex items-center gap-1'>
                        <CiStar className='text-[#C2F800] font-bold'/>
                        <span>{fit.rating}</span>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;