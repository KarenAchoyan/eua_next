import React from 'react';
import Image from "next/image";

const LoadingComponent = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full fixed top-0 left-0 bg-white">
           <video src='/loader.mp4' autoPlay={true}></video>
        </div>
    );
};

export default LoadingComponent;