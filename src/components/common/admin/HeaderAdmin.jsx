import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { LuBellRing } from 'react-icons/lu';
import { IoMailOutline } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';
import { AuthContext } from '../../../contexts/AuthProvider';

function HeaderAdmin(props) {
    // Khởi tạo state để bật/tắt menu user (mặc định là false - ẩn)
    const [showUser, setShowUser] = useState(false);
    const { logout } = useContext(AuthContext);

    return (
        <div className='bg-gray-900 text-white shadow-md w-full'>
            <div className='flex justify-between items-center px-6 py-3 relative'>

                {/* Tiêu đề Welcome */}
                <h1 className='text-3xl bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent font-bold'>
                    Welcome
                </h1>

                {/* Khu vực icon bên phải */}
                <div className='flex gap-5 justify-center items-center text-xl'>
                    <FaSearch className='cursor-pointer hover:text-blue-400 transition' />
                    <LuBellRing className='cursor-pointer hover:text-blue-400 transition' />
                    <IoMailOutline className='cursor-pointer hover:text-blue-400 transition' />

                    {/* Wrapper tài khoản + Dropdown menu */}
                    <div className='relative'>
                        {/* Icon bấm vào để bật/tắt popup */}
                        <div
                            onClick={() => setShowUser(!showUser)}
                            className='cursor-pointer bg-black/20 rounded-full p-2 hover:bg-black/30 transition flex items-center justify-center'
                        >
                            <MdAccountCircle className="text-3xl" />
                        </div>

                        {/* Hộp Dropdown thông tin user (chỉ hiển thị khi showUser = true) */}
                        {showUser && (
                            <div className='absolute right-0 mt-3 w-64 bg-gray-800 text-white rounded-2xl p-5 shadow-2xl border border-gray-700 flex flex-col justify-center items-center z-50'>
                                <MdAccountCircle className='text-5xl mb-2 text-blue-400' />
                                <p className='text-sm font-semibold'>Hoàng</p>
                                <p className='text-xs text-gray-400 mb-4'>hoangapk113@gmail.com</p>

                                <button
                                    onClick={logout}
                                    className='w-full flex gap-2 items-center justify-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl cursor-pointer transition text-sm font-medium'
                                >
                                    <TbLogout />
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