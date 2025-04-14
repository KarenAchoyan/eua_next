import React from 'react';
import Link from "next/link";

const Subdropdown = ({subItem}) => {
    return (
        <>
            <ul className="absolute left-full top-0 mt-0 w-48 bg-white text-black shadow-lg  sub-dropdown">
                {subItem?.subs?.map((deepItem, deepIndex) => {
                    let menuName = deepItem.name_en.toLowerCase().replace(/\s+/g, "-")
                    return(
                        <li key={deepIndex}
                            className='border-b-[1px] border-t-blue-400 '>
                            <Link
                                href={deepItem.special_url!==null ? deepItem.special_url : "/content/"+menuName}
                                className="block px-4 py-2 cursor-pointer hover:bg-gray-200"
                            >
                                {deepItem.name_en}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default Subdropdown;