import {MainProvider} from "@/provider/MainProvider";
import Home from "@/components/Home";

async function getGalleries() {
    const res = await fetch('https://eua.am/api/galleries')
    return res.json()
}

async function getSlides() {
    const res = await fetch('https://eua.am/api/slides')
    return res.json()
}

async function getNews() {
    const res = await fetch('https://eua.am/api/lastNewsForHome')
    return res.json()
}

async function getEvents() {
    const res = await fetch('https://eua.am/api/lastEventsForHome')
    return res.json()
}

export default async function Page({params}) {
    const res1 = await getGalleries();
    const res2 = await getSlides();
    const res3 = await getNews();
    const res4 = await getEvents();

    const galleries = res1.data.galleries;
    const slides = res2.data.sliders;
    const news = res3.data.news;
    const events = res4.data.events;
    return (
        <div>
            <MainProvider value={{galleries, slides, news, events, lang:params.lang}}>
                <Home/>
            </MainProvider>
        </div>
    );
}
