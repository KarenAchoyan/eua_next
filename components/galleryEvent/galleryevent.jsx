"use client";

import {useContext, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {MainContext} from "@/provider/MainProvider";
import {Image} from "antd";

export default function EventsGallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const {galleries, events} = useContext(MainContext);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default for mobile
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (_, next) => setActiveIndex(next),
        responsive: [
            {
                breakpoint: 768, // Tablets
                settings: {slidesToShow: 2},
            },
            {
                breakpoint: 1024, // Desktops
                settings: {slidesToShow: 3},
            },
        ],
    };

    return (
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-10">
            <h2 className="text-3xl font-semibold text-center">Events</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 ">
                <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-4">GALLERY</h3>
                    <Slider {...settings}>
                        {galleries.map((image, index) => (
                            <div key={index} className="px-2 flex justify-center">
                                <Image
                                    width="100%"
                                    height={200}
                                    src={`https://eua.am/${image.image}`}
                                    alt="Gallery image"
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-4">EVENTS</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {events.map((event, index) => {
                            const date = new Date(event.created_at);
                            const day = date.getDate(); // Extracts the day (1-31)
                            const month = date.toLocaleString("en-US", { month: "long" }); // Extracts short month (Jan, Feb, ...)
                            const fullDate = date.toISOString().split("T")[0]; // Converts to YYYY-MM-DD format

                            return (
                                // <div key={index} className="flex items-center space-x-4">
                                //     <div
                                //         className="w-[90px] sm:w-[100px] md:w-[120px] h-[80px] bg-blue-900 text-white text-center flex flex-col justify-center rounded-md">
                                //         <p className="text-2xl font-bold">{day}</p>
                                //         <p className="text-xs">{month}</p>
                                //     </div>
                                //     <div>
                                //         <p className="font-medium text-sm md:text-base">{event.name_en}</p>
                                //         <p className="text-gray-500 text-xs md:text-sm">{fullDate}</p>
                                //     </div>
                                // </div>

                                <div key={index} className="flex items-center space-x-4 w-[100%]">
                                    <div className="w-[90px] sm:w-[100px] md:w-[120px] h-[80px] bg-blue-900 text-white text-center flex flex-col justify-center rounded-md">
                                        <p className="text-2xl font-bold">{day}</p>
                                        <p className="text-xs">{month}</p>
                                    </div>
                                    <div className=' w-[200px]'>
                                        <p className="font-medium lg:text-[13px] "> {event.name_en.length > 50 ? event.name_en.substring(0, 50) + "..." : event.name_en}</p>
                                        <p className="text-gray-500 text-xs lg:text-[11px]">{fullDate}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
