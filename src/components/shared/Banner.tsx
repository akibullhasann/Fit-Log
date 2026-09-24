import React from 'react';
import Image from 'next/image';
import BannerPng from '@/assets/banner.png'
import { Oswald } from "next/font/google";
import { Inter } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const Banner = () => {
    return (
        <section className=' text-white'>
            <div className='px-11 py-13 sm:px-9 sm:py-15  container mx-auto flex flex-col gap-15 sm:gap-1 bg-[#15171D] my-9 sm:flex-row justify-center items-center rounded-2xl'>
                <div className='space-y-6 '>
                    <p className='text-[#C2F800]'>WORKOUT LIBRARY</p>
                    <h1 className={` ${oswald.className} text-5xl sm:text-5xl uppercase leading-16`}>Train with intent. Log every set.</h1>
                    <p className={`${inter.className} tracking-widest`}>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                    <button className='bg-[#C2F800] text-black px-4 py-2 rounded-lg' >Browse Workouts</button>
                </div>
                <div>
                    <Image src={BannerPng} alt='banner image' width={800}></Image>
                </div>
            </div>
        </section>
    );
};

export default Banner;