import React from 'react';
import News from "@/components/News";
import {NewsProvider} from "@/provider/NewsProvider";


async function getItem() {
    const page = 1;
    const res = await fetch(`https://eua.am/api/news?page=${page}`);
    return res.json()
}


const Page = async () => {
    const res = await getItem();
    const data = await res.data.data;
    const totalPages = await res.data.last_page || 1;
    return (
        <>
            <NewsProvider value={{data, totalPages}}>
                <News/>
            </NewsProvider>
        </>
    );
};

export default Page;