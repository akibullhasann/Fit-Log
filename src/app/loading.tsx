const Loading = () => {
    return (
        <div className="container mx-auto w-[90%] py-10 space-y-6 animate-pulse">

            {/* Title skeleton */}
            <div className="space-y-2">
                <div className="h-8 w-40 bg-[#292D35] rounded-lg"></div>
                <div className="h-4 w-72 bg-[#292D35] rounded-lg"></div>
            </div>

            {/* Calories box skeleton */}
            <div className="grid grid-cols-3 border border-[#292D35] rounded-2xl bg-[#1A1D22] overflow-hidden">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-6 border-r border-[#292D35] last:border-r-0">
                        <div className="h-4 w-16 bg-[#292D35] rounded mb-3"></div>
                        <div className="h-8 w-10 bg-[#292D35] rounded"></div>
                    </div>
                ))}
            </div>

            {/* Card skeletons */}
            {[1, 2, 3].map((i) => (
                <div key={i} className="w-full flex gap-4 rounded-2xl border border-[#292D35] bg-[#1A1D22] p-4">
                    <div className="h-24 w-24 bg-[#292D35] rounded-xl flex-shrink-0"></div>
                    <div className="flex-1 space-y-3">
                        <div className="h-5 w-32 bg-[#292D35] rounded"></div>
                        <div className="h-4 w-20 bg-[#292D35] rounded"></div>
                        <div className="h-4 w-48 bg-[#292D35] rounded"></div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Loading;