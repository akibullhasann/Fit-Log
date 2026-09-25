'use client'

import { FitDataContext } from "@/ContextApi/FitDataContext";
import { Iworkout } from "@/Types/types";
import { useContext } from "react";
import { toast } from "react-toastify";

interface IsavedButton {
    fit: Iworkout
}


const SavedButton = ({ fit }: IsavedButton) => {
    const { saved, setSaved } = useContext(FitDataContext);

    const handleAddPlans = () => {
        const alreadyExists = saved.find((w) => w.id === fit.id);

        if(alreadyExists){
            toast.error('Already in your Saved list');
        }

        if (!alreadyExists) {
            setSaved((prev) => [...prev, fit]);
            toast.success('save for later');
        }
    }
    return (
        
            <button
                onClick={() => handleAddPlans()}
                className=" text-white border border-white px-5 py-2 rounded-full font-medium cursor-pointer shadow-gray-800 active:translate-y-0.5
                hover:border-black
                ">
                Save for later
            </button>
        
    );
};

export default SavedButton;