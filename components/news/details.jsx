import Image from 'next/image';
import ItemNews from "@/components/news/ItemNews";
import Link from "next/link";

const Details = ({lang, data, interestingNews, lastNews}) => {
    return (
        <>
            <div className="w-[90%] lg:container mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-5 flex">
                <div className="w-full lg:w-2/3  p-4">
                    <Image
                        src={"https://eua.am/" + data.avatar}
                        alt="Event Image"
                        width={800}
                        height={400}
                        className="rounded-lg"
                    />
                    <div className="mt-4">
                        <span className="text-gray-500 text-sm">25/02/2025</span>
                        <h2 className="text-xl font-semibold mt-2">Տարածաշրջանային գիտաժողով</h2>
                        <p className="text-gray-600 mt-2">
                            «Տարածաշրջանային փորձառությունները 30 տարի անց. հայ դիվանագիտության վերլուծություն»
                        </p>
                        <p className="text-gray-600 mt-2">
                            Խորհրդաժողովը կանդրադառնա դիվանագիտական զարգացման, միջազգային համագործակցության և
                            տարածաշրջանային անվտանգության թեմաներին:
                        </p>
                        <p className="text-gray-600 mt-2">
                            📍 Վայրը: Հայաստանի Եվրոպական Համալսարան
                        </p>
                        <p className="text-gray-600 mt-2">
                            🕚 Ժամը: 11:00, Մարտի 5
                        </p>
                    </div>
                </div>
                <div className="w-1/3 bg-gray-100 p-4 rounded-lg hidden lg:block">
                    <h3 className="text-lg font-bold mb-3">Վերջին նորությունները</h3>
                    <ul className="space-y-2">
                        {lastNews.map((item, i) => {
                            const lang = 'hy'; // for example
                            const title = lang === "hy" ? item.name_hy : item.name_en;
                            const slug = title.toLowerCase().replace(/\s+/g, "-"); // Convert title to slug

                            return (
                                <li className="border-b pb-2" key={i}>
                                    <Link href={`/news/${slug}`}
                                          className="text-[rgb(32 66 139)] hover:underline">{item.name_en}</Link>
                                </li>
                            )

                        })}
                    </ul>
                </div>
            </div>
            <div className="w-[90%] lg:container  mx-auto mt-[50px] bg-white rounded-lg shadow-lg overflow-hidden p-5 flex">
                <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    {interestingNews.map((item) => {
                        const lang = 'hy'; // for example
                        const title = lang === "hy" ? item.name_hy : item.name_en;
                        const slug = title.toLowerCase().replace(/\s+/g, "-"); // Convert title to slug

                        return (
                            <ItemNews key={item.id} slug={slug} title={title} item={item} lang={lang}/>
                        )
                    })}
                </div>
            </div>

        </>
    );
};

export default Details;