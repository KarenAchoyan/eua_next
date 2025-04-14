import React from 'react';
import Link from "next/link";
import Subdropdown from "@/components/layouts/subdropdown";

const Dropdown = ({menu,lang}) => {
    return (
        <>
            <div className='absolute dropdown-parent '>
                <ul className=" left-0 mt-[48px] w-52 bg-white text-black shadow-lg  dropdown">
                    {Array.isArray(menu.subs)
                        ? menu.subs.map((subItem, subIndex) => {
                            const title = lang === "hy" ? subItem.name_hy : subItem.name_en;
                            let menuName = title.toLowerCase().replace(/\s+/g, "-")

                            return(
                                (
                                    <li key={subIndex}
                                        className="relative group sub-dropdown-button itemMenus  border-b-[1px] border-t-blue-400  ">
                                        <>
                                            <Link
                                                href={subItem.subs.length>0 ?  "#"  : subItem.special_url!==null ? subItem.special_url : "/content/"+menuName}
                                                className="block  hover:bg-gray-200 cursor-pointer"
                                            >
                                                                <span
                                                                    className="flex items-center justify-between w-full  px-5 py-3 cursor-pointer hover:bg-gray-200">
                                                                    {title}
                                                                </span>
                                            </Link>
                                            <Subdropdown subItem={subItem}/>
                                        </>
                                    </li>
                                )
                            )
                        })
                        : null}
                </ul>
            </div>
        </>
    );
};

export default Dropdown;