'use client';

import { Iworkout } from '@/Types/types';
import { useState, createContext, ReactNode } from 'react';
import React from 'react';

interface IfitDataContext{
    addPlans: Iworkout[];
    setAddPlans: React.Dispatch<React.SetStateAction<Iworkout[]>>
    saved: Iworkout[];
    setSaved: React.Dispatch<React.SetStateAction<Iworkout[]>>
}

export const FitDataContext = createContext<IfitDataContext>({
    addPlans:[],
    setAddPlans: ()=>{},
    saved:[],
    setSaved: ()=>{}

})

const FitDataProvider = ({children}:{children:ReactNode}) => {
    const [addPlans, setAddPlans] = useState<Iworkout[]>([]);
    const [saved, setSaved] = useState<Iworkout[]>([]);

    const sharedData = {
        addPlans,
        setAddPlans,
        saved,
        setSaved
    }

    return <FitDataContext.Provider value={sharedData}>
        {children}
    </FitDataContext.Provider>
};

export default FitDataProvider;