import Image from 'next/image';
import {useContext} from "react";
import {MainContext} from "@/provider/MainProvider";
import Link from "next/link";
import ItemNews from "@/components/news/ItemNews";


const NewsSection = () => {
    const {news, lang} = useContext(MainContext);
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Latest News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.map((item) => {
                        const title = lang === "hy" ? item.name_hy : item.name_en;
                        const slug = title.toLowerCase().replace(/\s+/g, "-"); // Convert title to slug

                        return (
                            <ItemNews lang={lang} key={item.id} title={title}  type={'news'}  item={item} slug={slug}/>
                        );
                    })}
                </div>
                <div className="mt-8 text-center">
                    <Link href={'/news'}>
                        <button
                            className="px-6 py-2 border border-black text-black rounded-lg hover:bg-gray-200 transition">
                            All News
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
