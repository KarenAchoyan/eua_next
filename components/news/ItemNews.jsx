import React from 'react';
import Image from "next/image";
import Link from "next/link";

const ItemNews = ({item, slug, title, lang, type}) => {
    return (
        <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
                <Image
                    src={"https://eua.am/" + item.avatar}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            <div className="p-4">
                <h3 className="text-[14px] lg:text-lg font-semibold">
                    {title.length > 60 ? title.substring(0, 60) + "..." : title}
                </h3>
                {type === 'news' ?
                    <Link href={`/news/${slug}?lang=${lang}`} passHref>
                        <button
                            className="mt-4 bg-[#151784] text-white text-[14px] lg:text-lg px-4 py-2 rounded hover:opacity-90">
                            Read More
                        </button>
                    </Link>
                    : type === 'news' ?
                        <Link href={`/events/${slug}?lang=${lang}`} passHref>
                            <button
                                className="mt-4 bg-[#151784] text-white text-[14px] lg:text-lg px-4 py-2 rounded hover:opacity-90">
                                Read More
                            </button>
                        </Link>
                        :
                        <Link href={`/announcements/${slug}?lang=${lang}`} passHref>
                            <button
                                className="mt-4 bg-[#151784] text-white text-[14px] lg:text-lg px-4 py-2 rounded hover:opacity-90">
                                Read More
                            </button>
                        </Link>
                }


            </div>
        </div>
    );
};

export default ItemNews;