"use client"
import Link from "next/link";
import Dropdown from "@/components/layouts/dropdown";

const HeaderMenu = ({lang, menuItems}) => {
    return (
        <nav className="w-[80%]">
            <ul className="flex space-x-6 justify-end hidden lg:flex">
                {menuItems.map((menu, index) => {
                    const title = lang === "hy" ? menu.name_hy : menu.name_en;

                    return(
                        <li key={index} className="relative group menu-item ">
                                <span>
                                     <Link className='cursor-pointer' href={(menu.special_status===1 ? menu.special_url : "#")}
                                           title={title}> {title}</Link>
                                </span>
                        {menu.subs && (
                           <Dropdown menu={menu} lang={lang}/>
                        )}
                    </li>
                    )})}
            </ul>
        </nav>
    );
};

export default HeaderMenu;