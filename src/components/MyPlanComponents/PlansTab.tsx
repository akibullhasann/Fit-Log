'use client';
import { FitDataContext } from '@/ContextApi/FitDataContext';
import Link from 'next/link';
import { useContext, useState } from 'react';
import PlanCard from './PlanCard';




const PlansTab = () => {
    const { addPlans, saved } = useContext(FitDataContext);

    const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');

    const list = activeTab === 'plan' ? addPlans : saved;
    return (
        <div>
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