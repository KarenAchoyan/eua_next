import React from "react";

const DiscoverMore = () => {

    return (
        <div className="text-center py-10 w-[90%] md:w-[70%] mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Discover more</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:justify-center lg:grid-cols-3 gap-6 ">
                <div className="bg-blue-800 text-white h-[200px] flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform">
                    <p className="font-semibold">Faculties</p>
                </div>
                <div className="bg-indigo-900 text-white h-[200px] flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform">
                    <p className="font-semibold">Admission regulations</p>
                </div>
                <div className="bg-blue-800 text-white h-[200px] flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform">
                    <p className="font-semibold">Foreign Applicants</p>
                </div>
            </div>
        </div>
    );
};

export default DiscoverMore;
