import React, { useEffect, useState } from 'react';
import LOGO from "../../../assets/LOGO.png";
import LOGOnew from "../../../assets/LOGOnew.png";
import { IoMdArrowDropright, IoMdClose, IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import { LISTHOME } from '../../../utils/Contants';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import DialogLogin from './DialogLogin';
import DialogSignUp from './DialogSignUp';
import { AuthContext } from '../../../contexts/AuthProvider';

function NavBar(props) {
    const [show, setShow] = useState(null);
    const [showNav, setShowNav] = useState(false);
    const [openLogin, setOpenLogin] = React.useState(false);
    const [openRegister, setOpenRegister] = React.useState(false);
    const { isLogin, logout } = React.useContext(AuthContext);

    const handleClickOpenLogin = () => {
        setOpenLogin(true);
    };

    const handleCloseLogin = () => {
        setOpenLogin(false);
    };
    const handleClickOpenRegister = () => {
        setOpenRegister(true);
    };
    const handleCloseRegister = () => {
        setOpenRegister(false);
    };

    return <div
        className={`bg-gradient-to-b from-[#080d24] via-[#0b1736] to-[#102d63]
    min-h-screen text-white lg:h-screen px-2 duration-700 z-50
    ease-in-out transition-all pb-2 flex flex-col
    ${!showNav ? "lg:w-24" : "lg:w-48"}`}
    >
        {/* LOGO */}
        <div className='flex justify-center items-center h-30 gap-4  relative shrink-0'>
            <Link to={"/"} className="h-10 flex items-center">
                <img
                    src={showNav ? LOGO  : LOGOnew}
                    alt="Skyfly Logo"
                    className= {`h-20 w-auto object-contain transition-all duration-300 ease-in-out ${showNav ? '' : 'p-1.5'}`}
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

        {/* MENU */}
        <div
            className={`flex-1 flex flex-col gap-2
        max-lg:overflow-hidden
        transition-all duration-500 ease-in-out
        ${showNav
                    ? "opacity-100 "
                    : "max-lg:max-h-0 max-lg:opacity-0"
                }`}
        >
            {LISTHOME.map((item, index) => (
                <div key={index} className='relative text-nowrap'>

                    {/* Menu cha */}
                    {item.subMenu ? (
                        <div
                            onClick={() =>
                                setShow(show === index ? null : index)
                            }
                            className='flex items-center gap-2 p-3 rounded-md relative cursor-pointer sdNavBar'
                        >
                            {item.icon}

                            {showNav && (
                                <p>{item.title}</p>
                            )}

                            <IoMdArrowDropright
                                className={`absolute right-0.5 transition-transform duration-300
                            ${show === index ? 'rotate-90' : ''}`}
                            />
                        </div>
                    ) : (
                        <Link
                            to={item.path}
                            className='text-amber-50 flex items-center gap-2 p-3 rounded-md sdNavBar'
                        >
                            {item.icon}

                            {showNav && (
                                <p>{item.title}</p>
                            )}
                        </Link>
                    )}

                    {/* Sub menu */}

                </div>
            ))}
        </div>
        {/* USER - NẰM NGOÀI MENU */}
        {
            isLogin ? <MdAccountCircle className='w-20 h-10 m-auto' onClick={logout} /> : <>
                <button onClick={handleClickOpenLogin} className='sdNavBar cursor-pointer flex items-center justify-center gap-2 h-10 mt-2'>
                    <IoMdLogIn /> {showNav && <p>Login</p>}
                </button>
                <button onClick={handleClickOpenRegister} className='sdNavBar cursor-pointer flex items-center justify-center gap-2 h-10 mt-2'>
                    <IoMdLogOut />  {showNav && <p>Sign up</p>}
                </button>
            </>
        }
        <DialogLogin openLogin={openLogin} handleCloseLogin={handleCloseLogin} />
        <DialogSignUp openRegister={openRegister} handleCloseRegister={handleCloseRegister} />
    </div >
}

export default NavBar;