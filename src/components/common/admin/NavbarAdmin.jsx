import React, { useState } from 'react';
import { IoMdArrowDropright, IoMdClose } from 'react-icons/io';
import LOGO from "../../../assets/LOGO.png";
import LOGOnew from "../../../assets/LOGOnew.png";
import { LISTMENU } from '../../../utils/Contants';
import { Link } from 'react-router-dom';

function NavbarAdmin(props) {
    const [show, setShow] = useState(null);
    const [showNav, setShowNav] = useState(false);
    return (
        <div className={`bg-gradient-to-b from-[#080d24] via-[#0b1736] to-[#102d63]
    min-h-screen text-white lg:h-screen px-2 duration-700 z-50
    ease-in-out transition-all pb-2 flex flex-col
    ${!showNav ? "lg:w-24" : "lg:w-48"}`}
        >
            {/* LOGO */}
            <div className='flex justify-center items-center h-30 gap-4  relative shrink-0'>
                <Link to={"/"} className="h-10 flex items-center">
                    <img
                        src={showNav ? LOGO : LOGOnew}
                        alt="Skyfly Logo"
                        className={`h-20 w-auto object-contain transition-all duration-300 ease-in-out ${showNav ? '' : 'p-1.5'}`}
                    />
                </Link>
                <div
                    onClick={() => setShowNav(!showNav)}
                    className={`absolute top-1/2 -translate-y-1/2 z-50 lg:-right-2 right-0 lg:translate-x-1/2
                    p-1 bg-gray-800 border border-gray-700 rounded-full
                    cursor-pointer transition-all duration-300
                    ${showNav ? 'rotate-180' : ''}`}
                >
                    <IoMdClose className="text-white text-lg" />
                </div>
            </div>
            <div
                className={`flex-1 flex flex-col gap-2
        max-lg:overflow-hidden
        transition-all duration-500 ease-in-out
        ${showNav
                        ? "opacity-100 "
                        : "max-lg:max-h-0 max-lg:opacity-0"
                    }`}
            >
                {
                    LISTMENU.map((item, index) => (
                        <div key={index} className='relative'>
                            {/* Menu Cha */}
                            {
                                item.subMenu ? (<div onClick={() => setShow(show === index ? null : index)} className='flex items-center gap-2 p-3 rounded-md relative cursor-pointer sdNavBar'   >
                                    {item.icon}
                                    {showNav && <p >
                                        {item.title}
                                    </p>}

                                    {/* Thêm hiệu ứng xoay cho icon mũi tên khi mở menu con */}
                                    <IoMdArrowDropright className={`absolute right-0.5 transition-transform duration-300 ${show === index ? 'rotate-90' : ''}`} />
                                </div>) : (<Link to={item.path} className='text-amber-50 flex items-center gap-2 p-3 rounded-md sdNavBar'>
                                    {item.icon}
                                    {
                                        showNav && <p >
                                            {item.title}
                                        </p>
                                    }

                                </Link>)
                            }
                            {
                                show == index &&
                                <ul className={`flex flex-col gap-2 ml-2 mt-2
                        ${showNav ? "" : "absolute -right-2 top-0 translate-x-full"}`}
                                >
                                    {
                                        item.subMenu.map((p, subIdx) => (
                                            <Link
                                                key={subIdx}
                                                to={p.path}
                                                className='sd ef rounded-md p-2 block sdNavBar'
                                            >
                                                {p.name}
                                            </Link>
                                        ))
                                    }
                                </ul>
                            }

                        </div>
                    ))
                }

            </div >
        </div>

    );
}

export default NavbarAdmin;