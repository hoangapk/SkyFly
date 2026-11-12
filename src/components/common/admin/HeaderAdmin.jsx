import React, { useContext, useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { LuBellRing } from 'react-icons/lu';
import { IoMailOutline } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';
import { AuthContext } from '../../../contexts/AuthProvider';

function HeaderAdmin(props) {
    const [showUser, setShowUser] = useState(false);
    const { logout, user } = useContext(AuthContext); // Giả sử bạn lấy user từ AuthContext
    const dropdownRef = useRef(null);

    // Đóng dropdown khi click ra bên ngoài
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowUser(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className='bg-gradient-to-r from-[#080d24] via-[#0b1736] to-[#102d63] text-white shadow-lg w-full border-b border-white/10'>
            <div className='flex justify-between items-center px-6 py-3 relative'>

                {/* Tiêu đề Welcome */}
                <h1 className='text-2xl md:text-3xl bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#3b82f6] bg-clip-text text-transparent font-extrabold tracking-wide'>
                    Welcome, {user?.name || "Hoàng"}!
                </h1>

                {/* Khu vực icon bên phải */}
                <div className='flex gap-5 justify-center items-center text-xl text-gray-300'>
                    <button className='p-2 hover:bg-white/10 rounded-full transition cursor-pointer'>
                        <FaSearch className='hover:text-blue-400 transition' />
                    </button>
                    <button className='p-2 hover:bg-white/10 rounded-full transition cursor-pointer relative'>
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        <LuBellRing className='hover:text-blue-400 transition' />
                    </button>
                    <button className='p-2 hover:bg-white/10 rounded-full transition cursor-pointer'>
                        <IoMailOutline className='hover:text-blue-400 transition' />
                    </button>

                    {/* Wrapper tài khoản + Dropdown menu */}
                    <div className='relative' ref={dropdownRef}>
                        {/* Icon bấm vào để bật/tắt popup */}
                        <div
                            onClick={() => setShowUser(!showUser)}
                            className='cursor-pointer bg-white/10 rounded-full p-2 hover:bg-white/20 transition flex items-center justify-center border border-white/10 shadow-inner'
                        >
                            <MdAccountCircle className="text-3xl text-blue-400" />
                        </div>

                        {/* Hộp Dropdown thông tin user */}
                        {showUser && (
                            <div className='absolute right-0 mt-3 w-64 bg-[#0b1736] text-white rounded-2xl p-5 shadow-2xl border border-white/10 flex flex-col justify-center items-center z-50 animate-in fade-in zoom-in-95 duration-200'>
                                <MdAccountCircle className='text-6xl mb-2 text-blue-400 drop-shadow-md' />
                                <p className='text-sm font-bold tracking-wide'>{user?.name || "Hoàng"}</p>
                                <p className='text-xs text-gray-400 mb-4'>{user?.email || "hoangapk113@gmail.com"}</p>

                                <button
                                    onClick={logout}
                                    className='w-full flex gap-2 items-center justify-center bg-red-600/80 hover:bg-red-600 text-white py-2.5 rounded-xl cursor-pointer transition text-sm font-semibold shadow-md hover:shadow-red-900/50'
                                >
                                    <TbLogout className='text-lg' />
                                    Log out
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HeaderAdmin;