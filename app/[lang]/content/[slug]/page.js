import React from 'react';
import Content from "@/components/content/content";

async function getContent(slug, lang) {
    try {
        const res = await fetch(`https://eua.am/api/content/${slug}?lang=${lang}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return {success: false, message: `Error ${res.status}: News not found`};
        }

        const data = await res.json();
        return {success: true, data};
    } catch (error) {
        return {success: false, message: "Failed to fetch news"};
    }
}


const Page = async ({params}) => {
    const {slug} = params;
    const result = await getContent(slug, params.lang);
    return (
        <div>
            <Content result={result.data} lang={params.lang}/>
        </div>
    );
};

export default Page;