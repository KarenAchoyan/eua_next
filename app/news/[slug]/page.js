import React from "react";

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
    if (!result.success) {
        return <h1 className="text-center text-2xl font-bold mt-10">{result.message}</h1>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">
                {lang === "hy" ? data?.name_hy : data?.name_en}
            </h1>
        </div>
    );
};

export default Single;
