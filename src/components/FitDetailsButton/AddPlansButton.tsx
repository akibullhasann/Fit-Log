'use client'

import { FitDataContext } from "@/ContextApi/FitDataContext";
import { Iworkout } from "@/Types/types";
import { useContext } from "react";
import { toast } from "react-toastify";

interface IaddPlansButton {
    fit: Iworkout
}


const AddPlansButton = ({ fit }: IaddPlansButton) => {
    const { addPlans, setAddPlans } = useContext(FitDataContext);

    const handleAddPlans = () => {
        const alreadyExists = addPlans.find((w) => w.id === fit.id);
        if (alreadyExists) {
            toast.warning("Already added to today's plan");
            return;
        }

        if (!alreadyExists) {
            setAddPlans((prev) => [...prev, fit]);
            toast.success("Added to today's plan")
        }
    }
    return (
        <div>
            <button
                onClick={() => handleAddPlans()}
                className="bg-lime-400 text-black px-5 py-2 rounded-full font-medium cursor-pointer
                hover:bg-lime-500 active:translate-y-0.5
                ">
                Add to today's plan
            </button>
        </div>
    );
};

export default AddPlansButton;