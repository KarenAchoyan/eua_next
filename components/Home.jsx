"use client"

import Banner from "./banner/banner";
import Discover from "./discover/discover";
import EventsGallery from "./galleryEvent/galleryevent";
import NewsSection from "@/components/news/HomeNews";


const Home =   () => {

    return (
        <>
            <Banner/>
            <Discover/>
            <NewsSection/>
            <EventsGallery/>
        </>
    )
}

export default Home;