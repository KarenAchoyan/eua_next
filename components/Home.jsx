"use client"

import Banner from "./banner/banner";
import Discover from "./discover/discover";
import EventsGallery from "./galleryEvent/galleryevent";
import NewsSection from "@/components/news/HomeNews";


const Home =   () => {
    return (
        <div>
            <Banner/>
            <Discover/>
            <NewsSection/>
            <EventsGallery/>
        </div>
    )
}

export default Home;