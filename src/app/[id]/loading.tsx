const Loading = () => {
    return (
        <main className="min-h-screen bg-[#1A1D22] text-white px-6 py-8 animate-pulse">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 container">

                <div className="h-[500px] bg-[#292D35] rounded-xl"></div>

                <div className="space-y-4">
                    <div className="h-10 w-2/3 bg-[#292D35] rounded"></div>
                    <div className="h-4 w-full bg-[#292D35] rounded"></div>
                    <div className="h-4 w-5/6 bg-[#292D35] rounded"></div>
                    <div className="h-64 bg-[#292D35] rounded-xl"></div>
                </div>

            </div>
        </main>
    );
};

export default Loading;