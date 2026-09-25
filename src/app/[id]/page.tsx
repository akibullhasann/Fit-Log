import { Iworkout } from "@/Types/types";
import Image from "next/image";

interface IpageProps {
    params: Promise<{
        id:string;
    }>
}

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






const SingleDataPage = async ({params}:IpageProps) => {

    const {id} = await params;
    const fitData = await getFitData();
    const fit:Iworkout = fitData.find((fit:Iworkout)=> fit.id === Number(id));

    return (
        <main className="min-h-screen bg-[#0d0f12] text-white px-6 py-8">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 container">

                {/* IMAGE */}
                <div className="relative h-[500px] lg:h-auto">
                    <Image
                        src={fit.image}
                        alt={fit.name}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>

                {/* CONTENT */}
                <div>

                    {/* TITLE */}
                    <h1 className="text-4xl font-bold uppercase mb-3">
                        {fit.name}
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="text-gray-300 leading-relaxed mb-4">
                        {fit.description}
                    </p>

                    {/* MUSCLE GROUPS */}
                    <div className="flex gap-2 mb-5">
                        {fit.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-medium"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* DETAILS TABLE */}
                    <div className="border border-gray-800 rounded-xl overflow-hidden mb-7 bg-[#1E2330]">

                        <div className="grid grid-cols-2 border-b border-gray-800">
                            <p className="p-4 text-sm font-semibold">
                                EQUIPMENT
                            </p>
                            <p className="p-4 text-gray-200">
                                {fit.equipment}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 border-b border-gray-800">
                            <p className="p-4 text-sm font-semibold">
                                DIFFICULTY
                            </p>
                            <p className="p-4">
                                {fit.difficulty}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 border-b border-gray-800">
                            <p className="p-4 text-sm font-semibold">
                                SETS
                            </p>
                            <p className="p-4">
                                {fit.sets}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 border-b border-gray-800">
                            <p className="p-4 text-sm font-semibold">
                                REPS
                            </p>
                            <p className="p-4">
                                {fit.reps}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 border-b border-gray-800">
                            <p className="p-4 text-sm font-semibold">
                                DURATION
                            </p>
                            <p className="p-4">
                                {fit.duration} min
                            </p>
                        </div>

                        <div className="grid grid-cols-2 border-b border-gray-800">
                            <p className="p-4 text-sm font-semibold">
                                CALORIES
                            </p>
                            <p className="p-4">
                                {fit.caloriesBurned} kcal
                            </p>
                        </div>

                        <div className="grid grid-cols-2">
                            <p className="p-4 text-sm font-semibold">
                                RATING
                            </p>
                            <p className="p-4">
                                {fit.rating}
                            </p>
                        </div>

                    </div>

                    {/* INSTRUCTIONS */}
                    <h2 className="text-2xl font-bold uppercase mb-4">
                        Instructions
                    </h2>

                    <ol className="space-y-4 text-gray-200">
                        {fit.instructions.map((instruction, index) => (
                            <li key={index}>
                                <span className="font-semibold mr-2">
                                    {index + 1}.
                                </span>

                                {instruction}
                            </li>
                        ))}
                    </ol>

                    {/* BUTTONS */}
                    <div className="flex gap-3 mt-7">

                        <button className="bg-lime-400 text-black px-5 py-2 rounded-full font-medium">
                             Add to today's plan
                        </button>

                        <button className="border border-gray-500 px-5 py-2 rounded-full">
                            Save for later
                        </button>

                    </div>

                </div>
            </div>
        </main>
    );
};

export default SingleDataPage;