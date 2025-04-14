"use client"
import Image from "next/image";
import HeaderMenu from "./headerMenu";
import Link from "next/link";
import MobileMenu from "@/components/layouts/MobileMenu";
import {menuItems} from "@/utils/utils";
import { useRouter } from "next/navigation";
import {useContext} from "react";
import {AppContext} from "@/provider/AppProvider";


const App = ({children, lang,}) => {
    const router = useRouter();
    const {data, dict} = useContext(AppContext)

    const changeLanguage = (l) => {
        router.push(`/${l}`); // Redirect to the selected language URL
    };
    return (
        <>
            <header className="text-white bg-[#151784]">
                <div className='w-full '>
                    <div className='w-[90%] mx-auto flex justify-between items-center py-2 '>
                        <div className='w-[80%] hidden lg:flex'>
                            <p>{dict.address}: 10 Davit Anhaght str., Yerevan, Armenia</p>
                            <p className='ml-5'>{dict.phone}: (010) 240038</p>
                        </div>
                        <div className='w-full lg:w-[20%]'>
                            <ul className='flex justify-end'>
                                <li className='flex items-center   language-switcher mr-16 cursor-pointer   hover:opacity-90'  onClick={()=>changeLanguage('hy')}>
                                    <Image width={20} height={8} src={'/flagArmenia.png'} alt={'Flag'}/>
                                    <span className="ml-2 cursor-pointert">Հայերեն</span>
                                </li>
                                <li className='items-center flex language-switcher mr-16 cursor-pointer   hover:opacity-90' onClick={()=>changeLanguage('en')}>
                                    <Image width={20} height={8} src={'/enflag.png'} alt={'Flag'}/>
                                    <span className='ml-2'>English</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-[90%] mx-auto flex justify-between items-center">
                    <div className='w-[80%] md:w-[20%]'>
                        <Link href={'/'}>
                            <Image width={120} className='object-cover' height={50} alt='logo' src='/logo2.png'
                                   priority/>
                        </Link>
                    </div>

                    <HeaderMenu menuItems={data} lang={lang}/>

                    <div>
                        <MobileMenu menuItems={menuItems}/>
                    </div>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer className="bg-blue-900 text-white">
                <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">{dict.pages}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:underline">{dict.home}</Link></li>
                            <li><Link href="/contact" className="hover:underline">{dict.contact_us}</Link></li>
                            <li><Link href="/news" className="hover:underline">{dict.news}</Link></li>
                            {/*<li><Link href="/" className="hover:underline">{dict.career_development}</Link></li>*/}
                        </ul>
                    </div>

                    {/* Faculties Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">{dict.faculties}</h3>
                        <ul className="space-y-2">
                            <li>Management (BA)</li>
                            <li>Management (MA)</li>
                            <li>Marketing</li>
                            <li>Marketing</li>
                            <li>Financial Technologies and Banking (BA)</li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">{dict.contact_us}</h3>
                        <p><strong>{dict.address}:</strong> 10 Davit Anhaght str., Yerevan, Armenia</p>
                        <p><strong>{dict.phone}:</strong> (010) 240038</p>
                        <p><strong>{dict.email}:</strong> info@eua.am</p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="bg-blue-950 py-4 text-center text-sm">
                    <p>© {dict.foundation} | {dict.rights_reserved}:</p>
                    <p>{dict.website_by}</p>
                </div>
            </footer>
        </>
    );
};

export default App;