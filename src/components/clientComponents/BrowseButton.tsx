"use client";

const BrowseButton = () => {
    const handleScroll = () => {
        document.getElementById("workout")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <button
            onClick={handleScroll}
            className="border border-lime-400 text-lime-400 px-6 py-3 rounded-lg font-medium hover:bg-lime-400 hover:text-black transition"
        >
            Browse Workouts
        </button>
    );
};

export default BrowseButton;