"use client";

import { useEffect } from "react";
import Link from "next/link";

const Error = ({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#1A1D22] text-white text-center px-6">
            <h1 className="text-3xl font-bold uppercase mb-3">
                Something Went Wrong
            </h1>
            <p className="text-[#AEB5C0] mb-8 max-w-md">
                An unexpected error occurred. Please try again, or go back to the homepage.
            </p>

            <div className="flex gap-3">
                <button
                    onClick={() => reset()}
                    className="bg-[#C2F800] text-black px-6 py-2.5 rounded-full font-medium"
                >
                    Try Again
                </button>

                <Link
                    href="/"
                    className="border border-[#292D35] text-white px-6 py-2.5 rounded-full font-medium"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default Error;