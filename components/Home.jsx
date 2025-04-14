"use client"

import Banner from "./banner/banner";
import Discover from "./discover/discover";
import EventsGallery from "./galleryEvent/galleryevent";
import NewsSection from "@/components/news/HomeNews";


const Home =   ({dict}) => {

    return (
        <>
            <Banner dict={dict}/>
            <Discover dict={dict}/>
            <NewsSection dict={dict}/>
            <EventsGallery dict={dict}/>
        </>
    )
}

export default Home;