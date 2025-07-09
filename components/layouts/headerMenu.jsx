"use client"
import Link from "next/link";
import Dropdown from "@/components/layouts/dropdown";
function slugify(text) {
    return text
        .toString()
        .trim()
        .replace(/\s+/g, '-') // Replace all whitespace with dashes
        .replace(/[^\w\u0531-\u058F-]+/g, '') // Remove all non-word chars except Armenian letters and dashes
        .toLowerCase();
}
const HeaderMenu = ({lang, menuItems}) => {
    return (
        <nav className="w-[80%]">
            <ul className="flex space-x-6 justify-end hidden lg:flex">
                {menuItems.map((menu, index) => {
                    const title = lang === "hy" ? menu.name_hy : menu.name_en;
                    console.log(menu);
                    return (
                        <li key={index} className="relative group menu-item ">
                            <span>
                                <Link className='cursor-pointer' href={menu.special_status===1 ? menu.special_url : menu.has_page == 1 ? '/'+lang+'/content/'+slugify(menu.name_hy) : "#"}
                                           title={title}>
                                    {title}
                                </Link>
                            </span>
                            {menu.subs && (
                                <Dropdown menu={menu} lang={lang}/>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default HeaderMenu;