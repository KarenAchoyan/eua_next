"use client"
import Link from "next/link";

const HeaderMenu = ({locale, menuItems}) => {
    return (
        <nav className="w-[80%]">
            <ul className="flex space-x-6 justify-end hidden lg:flex">
                {menuItems.map((menu, index) => (
                    <li key={index} className="relative group menu-item ">
                                <span>
                                     <Link className='cursor-pointer' href={locale + (menu.path ? menu.path : "")}
                                           title={menu.title}> {menu.title}</Link>
                                </span>
                        {menu.subMenu && (
                            <div className='absolute dropdown-parent '>
                                <ul className=" left-0 mt-[48px] w-52 bg-white text-black shadow-lg  dropdown">
                                    {Array.isArray(menu.subMenu)
                                        ? menu.subMenu.map((subItem, subIndex) => (
                                            <li key={subIndex}
                                                className="relative group sub-dropdown-button itemMenus  border-b-[1px] border-t-blue-400  ">
                                                {typeof subItem === "string" ? (
                                                    <Link
                                                        href={subItem.path !== "" ? `${subItem.path}` : "#"}
                                                        className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                                    >
                                                        {subItem.title} 1
                                                    </Link>
                                                ) : (
                                                    <>
                                                        <Link
                                                            href={subItem.path !== "" ? "/"+locale+`/${subItem.path}` : "#"}
                                                            className="block  hover:bg-gray-200 cursor-pointer"
                                                        >
                                                                <span
                                                                    className="flex items-center justify-between w-full  px-5 py-3 cursor-pointer hover:bg-gray-200">
                                                                    {subItem.title}
                                                                </span>
                                                        </Link>

                                                        <ul className="absolute left-full top-0 mt-0 w-48 bg-white text-black shadow-lg  sub-dropdown">
                                                            {subItem?.subMenu?.map((deepItem, deepIndex) => (
                                                                <li key={deepIndex}
                                                                    className='border-b-[1px] border-t-blue-400 '>
                                                                    <Link
                                                                        href={deepItem.path !== "" ? `/${deepItem.path}` : "#"}
                                                                        className="block px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                                    >
                                                                        {deepItem.title}
                                                                    </Link>
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