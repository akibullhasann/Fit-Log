import React from 'react';
import Card from './Card';
import { Iworkout } from '@/Types/types';
import { oswald } from '../shared/Banner';

const getFitData = async () => {
    try {
        const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error, "Error Fetching Data");
        return [];
    }
}

const CardSection = async () => {
    const fitData = await getFitData();

    return (
        <section className='mb-8'>
            <div className='text-white container mx-auto w-[90%] space-y-5'>
                <div className='space-y-3'>
                    <h1 className={`text-3xl tracking-tight ${oswald.className}`}>THE LIBRARY</h1>
                    <p>Twelve lifts covering every major muscle group.</p>
                </div>
                <div id='workout' className=' grid grid-cols-1 items-center justify-items-center
                md:grid-cols-3 gap-6
                '>
                    {fitData.map((fit: Iworkout, ind: number) => {
                        return <Card key={ind} fit={fit}></Card>
                    })}
                </div>
            </div>
        </section>
    );
};

export default CardSection;