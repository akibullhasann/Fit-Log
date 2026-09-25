'use client'

import { FitDataContext } from "@/ContextApi/FitDataContext";
import { Iworkout } from "@/Types/types";
import { useContext } from "react";

interface IaddPlansButton {
    fit: Iworkout
}


const AddPlansButton = ({ fit }: IaddPlansButton) => {
    const { addPlans, setAddPlans } = useContext(FitDataContext);

    const handleAddPlans = () => {
        const alreadyExists = addPlans.find((w) => w.id === fit.id);

        if (!alreadyExists) {
            setAddPlans((prev) => [...prev, fit]);
        }
    }
    return (
        <div>
            <button
                onClick={() => handleAddPlans()}
                className="bg-lime-400 text-black px-5 py-2 rounded-full font-medium cursor-pointer">
                Add to today's plan
            </button>
        </div>
    );
};

export default AddPlansButton;