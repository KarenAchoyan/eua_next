"use client"
import Image from "next/image";
import HeaderMenu from "./headerMenu";
import Link from "next/link";
import MobileMenu from "@/components/layouts/MobileMenu";
import {MenuOutlined} from "@ant-design/icons";

const App = ({children}) => {

    const menuItems = [
        {
            title: "About us",
            subMenu: [
                {title: "Governing Bodies", subMenu: ["Board of Trustees", "Scientific Council"]},
                "Rector",
                "Staff",
                "Branches",
                "Organization",
                "Documents",
                "Vacancies",
                "FAQ",
                "University Ranking",
            ],
        },
        {title: "Applicant"},
        {title: "Education"},
        {title: "Science"},
        {title: "Students"},
        {title: "Career"},
        {title: "Internationalization"},
        {title: "Media", pathUrl: "/news"},
        {title: "Contact us", pathUrl: "/contact"},
    ];
    return (
        <>
            <header className="text-white bg-[#151784]">
                <div className='w-full '>
                    <div className='w-[90%] mx-auto flex justify-between items-center py-2 '>
                        <div className='w-[80%] hidden md:flex'>
                            <p>Address: 10 Davit Anhaght str., Yerevan, Armenia</p>
                            <p className='ml-5'>Phone: (010) 240038</p>
                        </div>
                        <div className='w-[20%]'>
                            <ul className='flex justify-normal md:justify-end '>
                                <li className='flex items-center language-switcher mr-16'>
                                    <Image width={20} height={8} src={'/enflag.png'} alt={'Flag'}/>
                                    <span className='ml-2'>Հայերեն</span>
                                </li>
                                <li className='items-center flex language-switcher mr-16'>
                                    <Image width={20} height={8} src={'/flagArmenia.png'} alt={'Flag'}/>
                                    <span className='ml-2'>English</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-[90%] mx-auto flex justify-between items-center">
                    <div className='w-[80%] md:w-[20%]'>
                        <Link href={'/'}>
                            <Image width={120} className='object-cover' height={50} alt='logo' src='/logo2.png' priority />
                        </Link>
                    </div>
                    <HeaderMenu menuItems={menuItems}/>

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
                        <h3 className="text-lg font-semibold mb-3">Pages</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Contact us</a></li>
                            <li><a href="#" className="hover:underline">News</a></li>
                            <li><a href="#" className="hover:underline">Career Development</a></li>
                        </ul>
                    </div>

                    {/* Faculties Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Faculties</h3>
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
                        <h3 className="text-lg font-semibold mb-3">Contact us</h3>
                        <p><strong>Address:</strong> 10 Davit Anhaght str., Yerevan, Armenia</p>
                        <p><strong>Phone:</strong> (010) 240038</p>
                        <p><strong>Email:</strong> info@eua.am</p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="bg-blue-950 py-4 text-center text-sm">
                    <p>© 2024 ԵՐԵՎԱՆԻ ՀՌՈՄԻՆԱԿԱՆ ՀԻՄՆԱՐԿ | Բոլոր իրավունքները պաշտպանված են:</p>
                    <p>Կայքը պատրաստվել է <a href="#" className="underline">GeekLab</a>-ի կողմից</p>
                </div>
            </footer>
        </>
    );
};

export default App;