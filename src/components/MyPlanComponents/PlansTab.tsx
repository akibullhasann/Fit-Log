'use client';
import { FitDataContext } from '@/ContextApi/FitDataContext';
import Link from 'next/link';
import { useContext, useState } from 'react';
import PlanCard from './PlanCard';
import { Iworkout } from '@/Types/types';




const PlansTab = () => {

    const [sortBy, setSortBy] = useState<"duration"|"calories"|"rating">("duration");

    const sortFitData = (fit:Iworkout[]) =>{
        const sortedFitData = [...fit];

        if (sortBy==="duration"){
            sortedFitData.sort((a,b)=>b.duration - a.duration);
        }else if(sortBy==="calories"){
            sortedFitData.sort((a,b)=>b.caloriesBurned - a.caloriesBurned);
        }else{
            sortedFitData.sort((a,b)=> b.rating - a.rating);
        }
        return sortedFitData;
    }



  

    const { addPlans, saved } = useContext(FitDataContext);

    const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');
    const doSortAddPlanData = sortFitData(addPlans);
      const doSortSavedData = sortFitData(saved);

    const list = activeTab === 'plan' ? doSortAddPlanData : doSortSavedData;

      
    return (
        <div>
            <div className='flex justify-between items-center mb-5'>
                <div className='my-6'>
                    <button
                        onClick={() => setActiveTab('plan')}
                        className={`px-6 py-2 border rounded-full font-medium ${activeTab === 'plan' ? 'border-[#C2F800] text-[#C2F800]' : 'border-transparent text-[#AEB5C0]'}`}
                    >Today's Plan</button>

                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`px-6 py-2 border rounded-full font-medium ${activeTab === 'saved' ? 'border-[#C2F800] text-[#C2F800]' : 'border-transparent text-[#AEB5C0]'}`}
                    >Saved</button>
                </div>
                {/* sort by */}
                <div className='text-white flex flex-col gap-3'>
                    <h1 className='text-lg'>Sort By</h1>
                    <select 
                    value={sortBy}
                    onChange={(e)=>setSortBy(e.target.value as "duration"|"calories"|"rating")}
                     
                    className="bg-[#1A1D22] text-white border border-[#292D35] rounded-lg px-4 py-2">
                        <option disabled={true}>Sort By</option>
                        <option value={"duration"}>Duration</option>
                        <option value={"calories"}>Calories</option>
                        <option value={"rating"}>Rating</option>
                    </select>
                </div>
            </div>

            {/* List of PlanCard */}

            <div className='space-y-4'>
                {list.length === 0 ? (
                    <div className="text-center py-16 rounded-2xl border border-[#292D35] bg-[#1A1D22] space-y-6">
                        <h2 className="text-xl uppercase font-bold tracking-tight text-white">
                            Nothing Here Yet
                        </h2>
                        <p className="text-[#AEB5C0] mt-2">
                            {activeTab === 'plan'
                                ? 'Browse the library and add a lift to get today moving.'
                                : 'Save a workout to find it here later.'}
                        </p>
                        <Link
                            href="/"
                            className="inline-block mt-6 px-6 py-2.5 rounded-full bg-[#C2F800] text-black font-medium"
                        >
                            Go to workouts
                        </Link>
                    </div>
                ) : (
                    list.map((fit) => (
                        <PlanCard key={fit.id} fit={fit} tab={activeTab} />
                    ))
                )}
            </div>
        </div>
    );
};

export default PlansTab;