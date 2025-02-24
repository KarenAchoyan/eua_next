import React, {useState} from 'react';
import Link from 'next/link';
import "../../app/globals.css";
import {DownOutlined, MenuOutlined, UpOutlined} from "@ant-design/icons";

const MobileMenu = ({menuItems}) => {
    const [openMenus, setOpenMenus] = useState({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (index) => {
        setOpenMenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <>
            <div className='show lg:hidden text-[30px]' onClick={()=>{
                setIsMenuOpen(true);
                setOpenMenus({})

            }}>
                <MenuOutlined/>
            </div>
            <div
                className={`mobileMenu w-[40%] sm:w-[70%] fixed top-0 right-0 h-full z-10 bg-white p-6 z-50" ${isMenuOpen === false ? 'hiddenMenu' : 'showMenu'}`}>
                <button
                    className="absolute top-4 left-4 text-2xl"
                    onClick={() => setIsMenuOpen(false)}
                >
                    ✕
                </button>
                <ul className="space-y-4 mt-[50px]">
                    {menuItems.map((menu, index) => (
                        <li key={index} className="relative">
                            <div className="flex justify-between items-center">
                                <Link href={menu.pathUrl || "#"} className="text-lg font-semibold">
                                    {menu.title}
                                </Link>
                                {menu.subMenu && (
                                    <button onClick={() => toggleMenu(index)} className="text-lg">
                                        {openMenus[index] ? <UpOutlined/> : <DownOutlined/>}
                                    </button>
                                )}
                            </div>
                            {menu.subMenu && openMenus[index] && (
                                <ul className="ml-4 mt-2 space-y-2 border-l-2 pl-3">
                                    {menu.subMenu.map((subItem, subIndex) => (
                                        <li key={subIndex} className="relative">
                                            {typeof subItem === "string" ? (
                                                <a href="#" className="block hover:text-blue-500">
                                                    {subItem}
                                                </a>
                                            ) : (
                                                <>
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-medium">{subItem.title}</span>
                                                        {subItem.subMenu && (
                                                            <button
                                                                onClick={() =>
                                                                    toggleMenu(`${index}-${subIndex}`)
                                                                }
                                                                className="text-sm"
                                                            >
                                                                {openMenus[`${index}-${subIndex}`] ? <UpOutlined/> :
                                                                    <DownOutlined/>}
                                                            </button>
                                                        )}
                                                    </div>
                                                    {subItem.subMenu &&
                                                        openMenus[`${index}-${subIndex}`] && (
                                                            <ul className="ml-4 mt-2 space-y-2 border-l-2 pl-3">
                                                                {subItem.subMenu.map((deepItem, deepIndex) => (
                                                                    <li key={deepIndex}>
                                                                        <a
                                                                            href="#"
                                                                            className="block hover:text-blue-500"
                                                                        >
                                                                            {deepItem}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>

    );
};

export default MobileMenu;
