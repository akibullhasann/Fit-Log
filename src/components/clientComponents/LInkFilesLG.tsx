"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";





const LinkFilesLG = () => {
     const pathname = usePathname();
     
     
    return (
        <div className=' 
        flex flex-col absolute bg-gray-900 p-6 top-9 left-0 gap-2
        sm:flex-row sm:gap-8 justify-self-center sm:static sm:bg-transparent sm:p-0'>
            <Link href="/"
            className={`rounded-lg px-4 py-2 ${
                pathname === "/" ? "text-[#C2F800]" : "bg-transparent"
            }`}
            >Workouts</Link>

            <Link href="/myPlan"
            className={`rounded-lg px-4 py-2 ${
            pathname === "/myPlan" ? "text-[#C2F800]" : "bg-transparent"
            }`}
            >My Plan</Link>
        </div>
    );
};

export default LinkFilesLG;