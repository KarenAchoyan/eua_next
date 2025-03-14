"use client"
import Image from "next/image";
import HeaderMenu from "./headerMenu";
import Link from "next/link";
import MobileMenu from "@/components/layouts/MobileMenu";
import {MenuOutlined} from "@ant-design/icons";

const App = ({children}) => {

    // const menuItems = [
    //     {
    //         title: "About us",
    //         subMenu: [
    //             {
    //                 title: "Governing Bodies", subMenu: [
    //                     {title: "Board of Trustees", path: "/about/trustees"},
    //                     {title: "Scientific Council", path: "/about/trustees"},
    //                 ]
    //             },
    //             {title:  "Rector", path: "/about/trustees"},
    //             {title:  "Staff", path: "/about/trustees"},
    //             {title:  "Branches", path: "/about/trustees"},
    //             {title:  "Organization", path: "/about/trustees"},
    //             {title:  "Documents", path: "/about/trustees"},
    //             {title:  "Vacancies", path: "/about/trustees"},
    //             {title:  "FAQ", path: "/about/trustees"},
    //             {title:  "University Ranking", path: "/about/trustees"},
    //         ],
    //     },
    //     {title: "Applicant"},
    //     {title: "Education"},
    //     {title: "Science"},
    //     {title: "Students"},
    //     {title: "Career"},
    //     {title: "Internationalization"},
    //     {title: "Media", pathUrl: "/news"},
    //     {title: "Contact us", pathUrl: "/contact"},
    // ];


    const menuItems = [
        {
            title: "About us",
            subMenu: [
                {
                    title: "Governing Bodies", subMenu: [
                        {title: "Board of trustees", path: "/about/trustees"},
                        {title: "Scientific Council", path: "/about/trustees"},
                        {title:  "Rector", path: "/about/trustees"},

                    ]
                },
                {title:  "Staff", subMenu: [
                        {title:'Vice-Rectors', path:"/about/trustees"},
                        {title: 'Departments', path:"/about/trustees"},
                        {title:'Faculties and Chairs', path:"/about/trustees"},
                        {title:'Organization Structure', path:"/about/trustees"},
                    ]},
                {title:  "Branches", path: "/about/trustees"},
                {title:  "Documents", subMenu: [
                        {title: "Charter", path:"/about/trustees"},
                        {title: "Strategy", path:"/about/trustees"},
                        {title: "Reports", path:"/about/trustees"},
                        {title: "Regulations", path:"/about/trustees"},
                        {title: "Useful links ks", path:"/about/trustees"},
                    ]},
                {title: 'Quality',subMenu: [
                        {title: 'Internal QA', path:"/about/trustees"},
                        {title: 'Accreditation', path:"/about/trustees"},
                    ]},
                {title:  "Vacancies", path: "/about/trustees"},
                {title:  "University Ranking", path: "/about/trustees"},
                {title:  "FAQ", path: "/about/trustees"},

            ],
        },
        {title: "Applicant", subMenu: [
                {title:'Required Documents and Exam Samples' ,path:"/about/trustees"},
                {title:'Tuition Fees' ,path:"/about/trustees"},
                {title:'Foreign Applicants' ,path:"/about/trustees"},
                {title:'Preparatory Courses' ,path:"/about/trustees"},
            ]},
        {title: "Education", subMenu: [
                {title:"Bachelor's Degree", path:"/about/trustees"},
                {title:"Masters's Degree", path:"/about/trustees"},
                {title:"Postgraduate Education", subMenu: [
                        {title:'Doctorial Studies', path:"/about/trustees"},
                        {title:'PHD Students', path:"/about/trustees"},
                        {title:'Postgraduated Studies', path:"/about/trustees"},
                    ]},
                {title:"Bachelor's Degree", path:"/about/trustees"},
                {title:"Bachelor's Degree", path:"/about/trustees"},
            ]},
        {title: "Science", subMenu: [
                {title:'Scientific collection', path:"/about/trustees"},
                {title:'Publications', path:"/about/trustees"},
                {title:'Labaratories', path:"/about/trustees"},
            ]},
        {title: "Students", subMenu: [
                {title:'Student Council', path:"/about/trustees"},
                {title:'E-Learning Moodle', path:"/about/trustees"},
                {title:'E-Library', path:"/about/trustees"},
                {title:'Course Schedules, Academic Schedules', path:"/about/trustees"},
                {title:'International Students', path:"/about/trustees"},
                {title:'Financial aid', subMenu: [
                        {title:'By the State', path:"/about/trustees"},
                        {title:'By the Government', path:"/about/trustees"},
                    ]},
            ]},
        {title: "Career", submenu:[
                {title:'Career Development', path:"/about/trustees"},
                {title:'Alumni', subMenu:[
                        {title:'Alumni Union', path:"/about/trustees"},
                        {title:'Alumni Acievments', path:"/about/trustees"},
                    ]},
                {title:'Jobs', path:"/about/trustees"},
            ]},
        {title: "Internationalization", subMenu:[
                {title: 'Our Partners', path:"/about/trustees"},
                {title: 'International and National Programs', subMenu: [
                        {title:'Erasmus + Programs', path:"/about/trustees"},
                        {title:'DAAD Programs', path:"/about/trustees"},
                        {title:'Other Programs', path:"/about/trustees"},
                    ]},
                {title: 'International Membership', path:"/about/trustees"},
            ] },
        // {title: "Media", pathUrl: "/news"},
         {title: "Media", subMenu: [
                 {title:'News', path: '/about/trustees'},
                 {title:'Announcements', path:"/about/trustees"},
                 {title:'Events', path:"/about/trustees"},
             ]},

        {title: "Contact us", pathUrl: "/contact"},
    ];
    return (
        <>
            <header className="text-white bg-[#151784]">
                <div className='w-full '>
                    <div className='w-[90%] mx-auto flex justify-between items-center py-2 '>
                        <div className='w-[80%] hidden lg:flex'>
                            <p>Address: 10 Davit Anhaght str., Yerevan, Armenia</p>
                            <p className='ml-5'>Tel: (010) 240038</p>
                        </div>
                        <div className='w-[20%]'>
                            <ul className='flex justify-normal lg:justify-end '>
                                <li className='flex items-center language-switcher mr-16 cursor-pointer   hover:opacity-90'>
                                    <Image width={20} height={8} src={'/flagArmenia.png'} alt={'Flag'}/>
                                    <span className="ml-2 cursor-pointer">Հայերեն</span>
                                </li>
                                <li className='items-center flex language-switcher mr-16 cursor-pointer   hover:opacity-90'>
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