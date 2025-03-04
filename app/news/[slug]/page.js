import React from "react";
import Details from "@/components/news/details";

async function getSingleNews(slug, lang) {
    try {
        const res = await fetch(`https://eua.am/api/news/${slug}?lang=${lang}`, {
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

const Single = async ({params, searchParams}) => {
    const {slug} = params;
    const lang = searchParams?.lang || "hy";

    const result = await getSingleNews(slug, lang);
    const data = result.data.data;
    const interestingNews = result.data.interestingNews;
    const lastNews = result.data.lastNews;
    if (!result.success) {
        return <h1 className="text-center text-2xl font-bold mt-10">{result.message}</h1>;
    }

    return (
        <div className="mx-auto p-6">
          <Details lang={lang} data={data} interestingNews={interestingNews} lastNews={lastNews} />
        </div>
    );
};

export default Single;
