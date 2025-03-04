"use client"
import Link from "next/link";

const HeaderMenu = ({menuItems}) => {
    return (
        <nav className="w-[80%]">
            <ul className="flex space-x-6 justify-end hidden lg:flex">
                {menuItems.map((menu, index) => (
                    <li key={index} className="relative group menu-item">
                                <span>
                                     <Link href={menu.pathUrl ? menu.pathUrl : ""}
                                           title={menu.title}> {menu.title}</Link>
                                </span>
                        {menu.subMenu && (
                            <div className='absolute dropdown-parent'>
                                <ul className=" left-0 mt-2 w-52 bg-white text-black shadow-lg rounded-lg  dropdown">
                                    {Array.isArray(menu.subMenu)
                                        ? menu.subMenu.map((subItem, subIndex) => (
                                            <li key={subIndex} className="relative group  sub-dropdown-button">
                                                {typeof subItem === "string" ? (
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-200"
                                                    >
                                                        {subItem.title}
                                                    </a>
                                                ) : (
                                                    <>
                                                                <span
                                                                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200">
                                                                    {subItem.title}
                                                                </span>
                                                        <ul className="absolute left-full top-0 mt-0 w-48 bg-white text-black shadow-lg rounded-lg sub-dropdown">
                                                            {subItem?.subMenu?.map((deepItem, deepIndex) => (
                                                                <li key={deepIndex}>
                                                                    <a
                                                                        href="#"
                                                                        className="block px-4 py-2 hover:bg-gray-200"
                                                                    >
                                                                        {deepItem.title}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </>
                                                )}
                                            </li>
                                        ))
                                        : null}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HeaderMenu;