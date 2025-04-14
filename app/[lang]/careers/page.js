import React from 'react';
import News from "@/components/News";
import {NewsProvider} from "@/provider/NewsProvider";
import {getDictionary} from "@/utils/utils";


async function getItem() {
    const page = 1;
    const res = await fetch(`https://eua.am/api/careers?page=${page}`);
    return res.json()
}


const Page = async ({params}) => {
    const res = await getItem();
    const data = await res.data.news;
    const dict = await getDictionary(params.lang);
    const totalPages = await res.data.total_pages || 1;
    return (
        <>
            <NewsProvider value={{data, totalPages, lang:params.lang ? params.lang : 'hy', dict}}>
                <News type='careers' dict={dict} title={dict.careers}/>
            </NewsProvider>
        </>
    );
};

export default Page;