import React from 'react';
import News from "@/components/News";
import {NewsProvider} from "@/provider/NewsProvider";


async function getItem() {
    const page = 1;
    const res = await fetch(`https://eua.am/api/news?page=${page}`);
    return res.json()
}


const Page = async ({params}) => {
    const res = await getItem();
    const data = await res.data.news;
    const totalPages = await res.data.total_pages || 1;
    return (
        <>
            <NewsProvider value={{data, totalPages, lang:params.lang ? params.lang : 'hy'}}>
                <News type='news'/>
            </NewsProvider>
        </>
    );
};

export default Page;