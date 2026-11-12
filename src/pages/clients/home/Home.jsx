
import SlideBanner from '../slides/SlideBanner';
import { TbSteam } from 'react-icons/tb';
import { FcNews } from "react-icons/fc";
import { LuArmchair } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import HK from '../../../assets/SanBayHK.jpg';
import HM from '../../../assets/SanBayHM.jpg';
import JP from '../../../assets/SanBayJP.jpg';
import DN from '../../../assets/DN.jpg';
import TanSonNhat from '../../../assets/TanSonNhat.jpg';
import Incheon from '../../../assets/Incheon.jpg';
import Changi from '../../../assets/Changi.jpg';
import LOGOwhite from '../../../assets/LOGOwhite.png';
import bay from '../../../assets/bay.png';
import QRcode from '../../../assets/QRcode.png';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import TableHome from '../home/TableHome';
import { useState } from 'react';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FiHome } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { LuLuggage } from "react-icons/lu";

function Home(props) {
    // State quản lý tab đang được chọn (mặc định là 'checkin')
    const [activeTab, setActiveTab] = useState('checkin');
    // Khởi tạo state quản lý tab đang chọn (mặc định tab đầu tiên: 'buy-ticket')
    const [activeTabBanner, setActiveTabBanner] = useState('buy-ticket');
    return (
        <div>
            <SlideBanner />
            <div className='px-10 '>
                <div className='flex justify-between items-center my-10'>
                    {/* Item 1 */}
                    <div className='w-36 h-25 flex justify-center items-center gap-1.5 flex-col text-black/60 hover:bg-blue-900 hover:text-white transition-all duration-200 rounded-xl'>
                        <LuLuggage className='text-2xl' />
                        <p className='text-sm font-semibold text-center'>HÀNH LÝ TRẢ TRƯỚC</p>
                    </div>

                    {/* Item 2 */}
                    <div className='w-36 h-25 flex justify-center items-center gap-1.5 flex-col text-black/60 hover:bg-blue-900 hover:text-white transition-all duration-200 rounded-xl'>
                        <LuArmchair className='text-2xl' />
                        <p className='text-sm font-semibold text-center'>NÂNG HẠNG GHẾ</p>
                    </div>

                    {/* Item 3 */}
                    <div className='w-36 h-25 flex justify-center items-center gap-1.5 flex-col text-black/60 hover:bg-blue-900 hover:text-white transition-all duration-200 rounded-xl'>
                        <FiShoppingBag className='text-2xl' />
                        <p className='text-sm font-semibold text-center'>MUA SẮM</p>
                    </div>

                    {/* Item 4 */}
                    <div className='w-36 h-25 flex justify-center items-center gap-1.5 flex-col text-black/60 hover:bg-blue-900 hover:text-white transition-all duration-200 rounded-xl'>
                        <FiHome className='text-2xl' />
                        <p className='text-sm font-semibold text-center'>KHÁCH SẠN & TOUR</p>
                    </div>

                    {/* Item 5 */}
                    <div className='w-36 h-25 flex justify-center items-center gap-1.5 flex-col text-black/60 hover:bg-blue-900 hover:text-white transition-all duration-200 rounded-xl'>
                        <FiHeart className='text-2xl' />
                        <p className='text-sm font-semibold text-center'>BẢO HIỂM</p>
                    </div>

                    {/* Item 6 */}
                    <div className='w-36 h-25 flex justify-center items-center gap-1.5 flex-col text-black/60 hover:bg-blue-900 hover:text-white transition-all duration-200 rounded-xl'>
                        <FiGrid className='text-2xl' />
                        <p className='text-sm font-semibold text-center'>CÁC DỊCH VỤ KHÁC</p>
                    </div>
                </div>
                <div className='flex mb-10 justify-between hover:bg-gray-200 duration-150 ease-in rounded-2xl border border-gray-200  cursor-pointer'>
                    <div className='flex gap-5 items-center p-1 '>
                        <div className='flex gap-2 items-center  bg-cyan-100 p-2 rounded-xl text-cyan-600 font-semibold  text-lg relative'>
                            <FcNews />
                            <p>Tin nhanh</p>
                        </div>
                        <p>Thông báo về việc tăng mức thuế khách du lịch quốc tế cho chặng bay xuất phát từ Nhật Bản</p>
                    </div>
                    <div className='flex gap-10 items-center'>
                        <p>2026-09-09</p>
                        <div className='flex gap-2 items-center'>
                            <MdOutlineKeyboardArrowLeft />
                            <p className='text-xs'>1 / 3</p>
                            <MdOutlineKeyboardArrowRight />
                        </div>
                    </div>
                </div>
                <p className='text-5xl font-semibold pb-10'>Các Chuyến Bay Được Ưa Thích Nhất</p>
                <div className='flex items-center gap-4 text-gray-500 pb-6'>
                    <div className='flex justify-center items-center cursor-pointer bg-gray-200 rounded-2xl py-1 px-2 hover:text-sky-900 hover:duration-200 ease-in hover:bg-blue-100'>
                        <p>Chọn tuyến đường</p>
                        <MdOutlineKeyboardArrowDown className='ml-2' />
                    </div>
                    <div className='flex justify-center items-center cursor-pointer bg-gray-200 rounded-2xl py-1 px-2 hover:text-sky-900 hover:duration-200 ease-in hover:bg-blue-100'>
                        <p>Ngân sách</p>
                        <MdOutlineKeyboardArrowDown className='ml-2' />
                    </div>
                    <p className='text-gray-400 font-semibold'>Làm mới</p>
                </div>
                <div className="relative w-full px-6 py-4">
                    {/* 1. Nút bấm sang Trái (Đã đưa ra NGOÀI khung slider) */}
                    <button
                        onClick={() => document.getElementById('slider')?.scrollBy({ left: -300, behavior: 'smooth' })}
                        className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-md text-black/90 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all cursor-pointer"
                    >
                        <IoIosArrowBack />
                    </button>
                    <div id="slider" className='flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]'>
                        <div className="relative p-4 rounded-2xl text-white overflow-hidden  group cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-w-[280px] w-72 h-[420px] flex flex-col justify-between">

                            {/* 1. Lớp hình nền với hiệu ứng zoom mượt mà khi hover */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${HK})` }}
                            />

                            {/* 2. Lớp phủ tối (Overlay gradient) giúp chữ nổi bật và dễ đọc */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                            {/* 3. Nội dung bên trong (Phải có relative z-10 để nằm trên lớp phủ) */}
                            <div className="relative z-10 flex justify-end">
                                <p className='text-xs px-2.5 py-1 bg-black/60 backdrop-blur-md text-white rounded-3xl'>1/12</p>
                            </div>

                            <div className="relative z-10">
                                {/* Tiêu đề tự động xuống dòng và giới hạn tối đa 2 dòng */}
                                <p className='font-bold text-xl leading-snug line-clamp-2'>
                                    HongKong đến Hà Nội
                                </p>

                                <div className='text-end mt-4'>
                                    <p className='text-xs text-gray-300'>Từ</p>
                                    <p className='font-bold text-xl text-yellow-400'>
                                        {Number(4500000).toLocaleString('en-US')} VND
                                    </p>
                                    <p className='text-xs text-gray-300 mt-0.5'>Đã xem 1 ngày trước</p>
                                    <p className='text-xs text-gray-300'>Một chiều</p>

                                    <button className='p-2.5 mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors duration-200 shadow-md cursor-pointer'>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-4 rounded-2xl text-white overflow-hidden group cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-w-[280px] w-72 h-[420px] flex flex-col justify-between">

                            {/* 1. Lớp hình nền với hiệu ứng zoom mượt mà khi hover */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${HM})` }}
                            />

                            {/* 2. Lớp phủ tối (Overlay gradient) giúp chữ nổi bật và dễ đọc */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                            {/* 3. Nội dung bên trong (Phải có relative z-10 để nằm trên lớp phủ) */}
                            <div className="relative z-10 flex justify-end">
                                <p className='text-xs px-2.5 py-1 bg-black/60 backdrop-blur-md text-white rounded-3xl'>1/12</p>
                            </div>

                            <div className="relative z-10">
                                {/* Tiêu đề tự động xuống dòng và giới hạn tối đa 2 dòng */}
                                <p className='font-bold text-xl leading-snug line-clamp-2'>
                                    Qatar đến Hongkong
                                </p>

                                <div className='text-end mt-4'>
                                    <p className='text-xs text-gray-300'>Từ</p>
                                    <p className='font-bold text-xl text-yellow-400'>
                                        {Number(12800000).toLocaleString('en-US')} VND
                                    </p>
                                    <p className='text-xs text-gray-300 mt-0.5'>Đã xem 2 ngày trước</p>
                                    <p className='text-xs text-gray-300'>Khứ hồi</p>

                                    <button className='p-2.5 mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors duration-200 shadow-md cursor-pointer'>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-4 rounded-2xl text-white overflow-hidden group cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-w-[280px] w-72 h-[420px] flex flex-col justify-between">

                            {/* 1. Lớp hình nền với hiệu ứng zoom mượt mà khi hover */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${Incheon})` }}
                            />

                            {/* 2. Lớp phủ tối (Overlay gradient) giúp chữ nổi bật và dễ đọc */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                            {/* 3. Nội dung bên trong (Phải có relative z-10 để nằm trên lớp phủ) */}
                            <div className="relative z-10 flex justify-end">
                                <p className='text-xs px-2.5 py-1 bg-black/60 backdrop-blur-md text-white rounded-3xl'>1/12</p>
                            </div>

                            <div className="relative z-10">
                                {/* Tiêu đề tự động xuống dòng và giới hạn tối đa 2 dòng */}
                                <p className='font-bold text-xl leading-snug line-clamp-2'>
                                    Hàn Quốc đến Nhật Bản
                                </p>

                                <div className='text-end mt-4'>
                                    <p className='text-xs text-gray-300'>Từ</p>
                                    <p className='font-bold text-xl text-yellow-400'>
                                        {Number(6200000).toLocaleString('en-US')} VND
                                    </p>
                                    <p className='text-xs text-gray-300 mt-0.5'>Đã xem 5 ngày trước</p>
                                    <p className='text-xs text-gray-300'>Khứ hồi</p>

                                    <button className='p-2.5 mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors duration-200 shadow-md cursor-pointer'>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-4 rounded-2xl text-white overflow-hidden group cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-w-[280px] w-72 h-[420px] flex flex-col justify-between">

                            {/* 1. Lớp hình nền với hiệu ứng zoom mượt mà khi hover */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${Changi})` }}
                            />

                            {/* 2. Lớp phủ tối (Overlay gradient) giúp chữ nổi bật và dễ đọc */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                            {/* 3. Nội dung bên trong (Phải có relative z-10 để nằm trên lớp phủ) */}
                            <div className="relative z-10 flex justify-end">
                                <p className='text-xs px-2.5 py-1 bg-black/60 backdrop-blur-md text-white rounded-3xl'>1/12</p>
                            </div>

                            <div className="relative z-10">
                                {/* Tiêu đề tự động xuống dòng và giới hạn tối đa 2 dòng */}
                                <p className='font-bold text-xl leading-snug line-clamp-2'>
                                    Singapore đến TP. Hồ Chí Minh
                                </p>

                                <div className='text-end mt-4'>
                                    <p className='text-xs text-gray-300'>Từ</p>
                                    <p className='font-bold text-xl text-yellow-400'>
                                        {Number(3200000).toLocaleString('en-US')} VND
                                    </p>
                                    <p className='text-xs text-gray-300 mt-0.5'>Đã xem 1 tuần trước</p>
                                    <p className='text-xs text-gray-300'>Một chiều</p>

                                    <button className='p-2.5 mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors duration-200 shadow-md cursor-pointer'>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-4 rounded-2xl text-white overflow-hidden group cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-w-[280px] w-72 h-[420px] flex flex-col justify-between">

                            {/* 1. Lớp hình nền với hiệu ứng zoom mượt mà khi hover */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${JP})` }}
                            />

                            {/* 2. Lớp phủ tối (Overlay gradient) giúp chữ nổi bật và dễ đọc */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                            {/* 3. Nội dung bên trong (Phải có relative z-10 để nằm trên lớp phủ) */}
                            <div className="relative z-10 flex justify-end">
                                <p className='text-xs px-2.5 py-1 bg-black/60 backdrop-blur-md text-white rounded-3xl'>1/12</p>
                            </div>

                            <div className="relative z-10">
                                {/* Tiêu đề tự động xuống dòng và giới hạn tối đa 2 dòng */}
                                <p className='font-bold text-xl leading-snug line-clamp-2'>
                                    Nhật Bản đến Singapore
                                </p>

                                <div className='text-end mt-4'>
                                    <p className='text-xs text-gray-300'>Từ</p>
                                    <p className='font-bold text-xl text-yellow-400'>
                                        {Number(15500000).toLocaleString('en-US')} VND
                                    </p>
                                    <p className='text-xs text-gray-300 mt-0.5'>Đã xem 1 tuần trước</p>
                                    <p className='text-xs text-gray-300'>Khứ hồi</p>

                                    <button className='p-2.5 mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors duration-200 shadow-md cursor-pointer'>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-4 rounded-2xl text-white overflow-hidden group cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-w-[280px] w-72 h-[420px] flex flex-col justify-between">

                            {/* 1. Lớp hình nền với hiệu ứng zoom mượt mà khi hover */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${DN})` }}
                            />

                            {/* 2. Lớp phủ tối (Overlay gradient) giúp chữ nổi bật và dễ đọc */}
                            <div className="absolute inset-0 from-black/90 via-black/40 to-black/20" />

                            {/* 3. Nội dung bên trong (Phải có relative z-10 để nằm trên lớp phủ) */}
                            <div className="relative z-10 flex justify-end">
                                <p className='text-xs px-2.5 py-1 bg-black/60 backdrop-blur-md text-white rounded-3xl'>1/12</p>
                            </div>

                            <div className="relative z-10">
                                {/* Tiêu đề tự động xuống dòng và giới hạn tối đa 2 dòng */}
                                <p className='font-bold text-xl leading-snug line-clamp-2'>
                                    TP. Đà Nẵng đến TP. Hồ Chí Minh
                                </p>

                                <div className='text-end mt-4'>
                                    <p className='text-xs text-gray-300'>Từ</p>
                                    <p className='font-bold text-xl text-yellow-400'>
                                        {Number(3400000).toLocaleString('en-US')} VND
                                    </p>
                                    <p className='text-xs text-gray-300 mt-0.5'>Đã xem 1 tuần trước</p>
                                    <p className='text-xs text-gray-300'>Một chiều</p>

                                    <button className='p-2.5 mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors duration-200 shadow-md cursor-pointer'>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-4 rounded-2xl text-white overflow-hidden group cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-w-[280px] w-72 h-[420px] flex flex-col justify-between">

                            {/* 1. Lớp hình nền với hiệu ứng zoom mượt mà khi hover */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${TanSonNhat})` }}
                            />

                            {/* 2. Lớp phủ tối (Overlay gradient) giúp chữ nổi bật và dễ đọc */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                            {/* 3. Nội dung bên trong (Phải có relative z-10 để nằm trên lớp phủ) */}
                            <div className="relative z-10 flex justify-end">
                                <p className='text-xs px-2.5 py-1 bg-black/60 backdrop-blur-md text-white rounded-3xl'>1/12</p>
                            </div>

                            <div className="relative z-10">
                                {/* Tiêu đề tự động xuống dòng và giới hạn tối đa 2 dòng */}
                                <p className='font-bold text-xl leading-snug line-clamp-2'>
                                    Singapore đến TP. Hồ Chí Minh
                                </p>

                                <div className='text-end mt-4'>
                                    <p className='text-xs text-gray-300'>Từ</p>
                                    <p className='font-bold text-xl text-yellow-400'>
                                        {Number(2100000).toLocaleString('en-US')} VND
                                    </p>
                                    <p className='text-xs text-gray-300 mt-0.5'>Đã xem 1 tuần trước</p>
                                    <p className='text-xs text-gray-300'>Một chiều</p>

                                    <button className='p-2.5 mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors duration-200 shadow-md cursor-pointer'>
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3. Nút bấm sang Phải (Đã đưa ra NGOÀI khung slider) */}
                    <button
                        onClick={() => document.getElementById('slider')?.scrollBy({ left: 300, behavior: 'smooth' })}
                        className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-md text-bg/90 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all cursor-pointer"
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
                <p className='pt-10 pb-15'>*Giá vé hiển thị được thu thập trong vòng 48 giờ và có thể không còn hiệu lực tại thời điểm đặt chỗ. Chúng tôi có thể thu thêm phí và lệ phí cho một số sản phẩm và dịch vụ.</p>
                <div className='font-semibold text-5xl'>Trọn vẹn <span className='text-blue-500'>trải nghiệm</span> </div>
                <div className="flex items-center justify-between w-full py-10">
                    <div className="flex items-center text-xl gap-2 cursor-pointer text-sky-900">
                        <span>Xem tất cả các dịch vụ</span>
                        <span>→</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-100 rounded-3xl py-2 px-4">
                        <button className="flex cursor-pointer items-center justify-between gap-4 px-4 py-2 bg-white rounded-full shadow-sm hover:text-sky-900 duration-200 ease-in hover:shadow hover:shadow-blue-600 hover:bg-blue-50">
                            <span>Dịch vụ mặt đất</span>
                            <span>▼</span>
                        </button>
                        <button className="flex cursor-pointer items-center justify-between gap-4 px-4 py-2 rounded-full text-sky-900 shadow-sm hover:shadow duration-200 ease-in hover:shadow-blue-600 hover:bg-blue-50 bg-blue-300 text">
                            <span>Phổ Thông</span>
                            <span>▼</span>
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 bg-white pb-12 '>
                    {/* CỘT 1: MENU BÊN TRÁI */}
                    <div className='lg:col-span-1 bg-white'>
                        <p className='text-xl font-semibold p-3 text-white bg-blue-900 rounded-t-2xl'>Phổ Thông</p>
                        <ul className='space-y-2 border border-gray-400 border-dashed rounded-b-2xl pt-3 border-t-0 shadow-sm'>
                            <li
                                onClick={() => setActiveTab('checkin')}
                                className={`mx-4 p-3 rounded-full cursor-pointer font-medium duration-150 ease-in ${activeTab === 'checkin' ? 'bg-blue-300 text-sky-900 shadow shadow-blue-500' : 'text-gray-700 hover:bg-blue-300 hover:text-sky-900'}`}
                            >
                                Làm thủ tục
                            </li>
                            <li
                                onClick={() => setActiveTab('baggage')}
                                className={`mx-4 p-3 rounded-full cursor-pointer duration-150 ease-in ${activeTab === 'baggage' ? 'bg-blue-300 text-sky-900 shadow shadow-blue-500' : 'text-gray-700 hover:bg-blue-300 hover:text-sky-900'}`}
                            >
                                Hành lý
                            </li>
                            <li
                                onClick={() => setActiveTab('airport')}
                                className={`mx-4 p-3 rounded-full cursor-pointer duration-150 ease-in ${activeTab === 'airport' ? 'bg-blue-300 text-sky-900 shadow shadow-blue-500' : 'text-gray-700 hover:bg-blue-300 hover:text-sky-900'}`}
                            >
                                Thông tin sân bay
                            </li>
                            <li
                                onClick={() => setActiveTab('preparation')}
                                className={`mx-4 p-3 rounded-full cursor-pointer mb-29.5 duration-150 ease-in ${activeTab === 'preparation' ? 'bg-blue-300 text-sky-900 shadow shadow-blue-500' : 'text-gray-700 hover:bg-blue-300 hover:text-sky-900'}`}
                            >
                                Chuẩn bị cho chuyến bay
                            </li>
                        </ul>
                    </div>

                    {/* CỘT 2: NỘI DUNG BÊN PHẢI TRUYỀN TAB QUA COMPONENT TableHome */}
                    <div className='lg:col-span-3 flex flex-col rounded-2xl'>
                        <div className='text-xl font-semibold text-white bg-blue-900 flex justify-center items-center gap-1 p-2.5 rounded-t-2xl'>
                            <img className='w-fit h-8' src={LOGOwhite} alt="" />
                            <p>SkyFly</p>
                            <TbSteam />
                        </div>
                        <TableHome activeTab={activeTab} />
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 gap-8 items-center pb-30'>
                    {/* CỘT 1: Nội dung giới thiệu */}
                    <div className='space-y-6'>
                        <div>
                            <p className='text-4xl font-semibold'>Lan tỏa</p>
                            <p className='text-4xl font-semibold text-yellow-600 pt-2'>bản sắc Việt</p>
                        </div>
                        <p className='text-gray-500 text-base leading-relaxed'>
                            Mỗi hành trình, mỗi câu chuyện bạn kể có thể truyền cảm hứng cho hàng ngàn người yêu Việt Nam. Hãy tham gia chương trình bằng cách đăng nhập vào tài khoản Lotusmiles.
                        </p>
                        <div>
                            <button className='w-fit py-2.5 px-5 text-white bg-blue-900 rounded-xl text-sm font-semibold cursor-pointer duration-150 ease-in hover:bg-blue-700 transition'>
                                Đăng ký hội viên
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-amber-700 shadow-2xl overflow-hidden flex flex-col justify-between p-4">

                            {/* Video nền bên trong điện thoại */}
                            <div className="absolute inset-0 z-0">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/videos/VideoinPhone.mp4" type="video/mp4" />
                                    Trình duyệt của bạn không hỗ trợ thẻ video.
                                </video>
                                <div className="absolute inset-0 bg-black/15"></div>
                            </div>

                            {/* Footer trong điện thoại */}
                            <div className="relative z-10 flex gap-3">
                                <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white cursor-pointer">
                                    🔊
                                </button>
                                <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-black cursor-pointer">
                                    ⏸
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* CỘT 3: Bình luận, điều hướng & Số liệu */}
                    <div className='space-y-6 flex flex-col justify-center'>

                        {/* Các ô bình luận */}
                        <div className="space-y-3">
                            <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl shadow-sm text-sm flex items-center space-x-2 w-fit">
                                <span>🌿</span>
                                <span className="text-gray-700">Muốn tới Hội An quá</span>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl shadow-sm text-sm flex items-center space-x-2 w-fit">
                                <span>🌿</span>
                                <span className="text-gray-700">Lần đầu được biết đến bảo tàng này, tuyệt vời</span>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl shadow-sm text-sm flex items-center space-x-2 w-fit">
                                <span>🌿</span>
                                <span className="text-gray-700">Tự hào Việt Nam!</span>
                            </div>
                        </div>

                        {/* Số liệu thống kê */}
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-4xl font-normal text-cyan-800">5m+</h2>
                                <p className="text-sm text-gray-500 mt-1">Hơn 5.000.000 người được truyền cảm hứng</p>
                            </div>
                            <div>
                                <h2 className="text-4xl font-normal text-cyan-800">2100+</h2>
                                <p className="text-sm text-gray-500 mt-1">Hình ảnh và video gắn tag</p>
                            </div>
                        </div>

                        {/* Hashtag */}
                        <div>
                            <a href="#" className="text-cyan-700 font-medium text-sm hover:underline">#vandamnangniu</a>
                        </div>

                    </div>

                </div>
                <div className="relative w-full mx-auto mb-45">
                    {/* Khung banner chính */}
                    <div className="relative cursor-pointer bg-[#005f73] text-white rounded-3xl p-8 md:p-12 overflow-visible shadow-xl flex flex-col justify-between min-h-[300px]">

                        {/* Nội dung bên trái */}
                        <div className="max-w-md z-10 space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                <span className="text-[#e5a93b] block">Quảng cáo</span>
                                <span className="text-white">thân máy bay</span>
                            </h2>

                            <p className="text-sm md:text-base text-gray-200 font-light">
                                Hiện diện giữa bầu trời – nổi bật giữa muôn thương hiệu.
                            </p>

                            <div className="pt-2">
                                <button className="bg-white cursor-pointer text-[#005f73] font-semibold px-6 py-2.5 rounded-xl hover:bg-gray-100 transition duration-200 shadow-md">
                                    Liên hệ ngay
                                </button>
                            </div>
                        </div>

                        {/* Mã QR code ở góc dưới bên phải */}
                        <div className="absolute bottom-6 right-6 z-10 bg-white rounded-2xl shadow-lg border-2 border-white">
                            <img
                                src={QRcode}
                                alt="QR Code"
                                className="md:w-30 md:h-30 object-contain rounded-lg"
                            />
                        </div>

                        {/* Ảnh Máy bay tràn ra ngoài banner */}
                        <div className="absolute top-3 -left-4 right-10 bottom-0  z-0 flex items-center justify-center">
                            <img
                                src={bay}
                                alt="Máy bay Vietnam Airlines"
                                className="w-[110%] max-w-none md:w-[70%] object-contain scale-110 translate-y-[-10px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-20  mx-auto items-start">
                    {/* Cột trái: Tiêu đề và mô tả */}
                    <div className="lg:w-1/3">
                        <h2 className="text-5xl font-semibold mb-3 text-gray-900 text-nowrap">Đăng ký E-Newsletter</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Đăng ký E-Newsletter để cập nhật các thông tin, ưu đãi mới nhất từ Vietnam Airlines (không bao gồm các thông tin, ưu đãi từ chương trình Bông Sen Vàng).
                        </p>
                    </div>

                    {/* Cột phải: Form đăng ký */}
                    <div className="lg:w-2/3 w-full space-y-4">
                        {/* Hàng 1: Email & Ngôn ngữ */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Nhập email"
                                    className="border border-gray-300 p-2.5 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Ngôn ngữ <span className="text-red-500">*</span>
                                </label>
                                <select className="border border-gray-300 p-2.5 w-full rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="vi">Tiếng Việt</option>
                                    <option value="en">English (Tiếng Anh)</option>
                                    <option value="zh">中文 (Tiếng Trung - Phổ thông)</option>
                                    <option value="ko">한국어 (Tiếng Hàn)</option>
                                    <option value="ja">日本語 (Tiếng Nhật)</option>
                                    <option value="th">ไทย (Tiếng Thái)</option>
                                    <option value="fr">Français (Tiếng Pháp)</option>
                                </select>
                            </div>
                        </div>

                        {/* Hàng 2: Danh xưng & Quốc gia/Vùng */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Danh xưng <span className="text-red-500">*</span>
                                </label>
                                <select className="border border-gray-300 p-2.5 w-full rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="" disabled selected>Chọn danh xưng</option>
                                    <option value="mr">Ông</option>
                                    <option value="ms">Bà</option>
                                    <option value="mrs">Cô</option>
                                    <option value="mrs">Chú</option>
                                    <option value="mrs">Anh</option>
                                    <option value="mrs">Chị</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Quốc gia/Vùng <span className="text-red-500">*</span>
                                </label>
                                <select className="border border-gray-300 p-2.5 w-full rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="" disabled selected>Chọn quốc gia/vùng</option>
                                    <option value="VN">Việt Nam</option>
                                    <option value="SG">Singapore</option>
                                    <option value="KR">Hàn Quốc</option>
                                    <option value="JP">Nhật Bản</option>
                                    <option value="HK">Hồng Kông</option>
                                    <option value="TW">Đài Loan</option>
                                    <option value="QA">Qatar</option>
                                    <option value="AE">Các Tiểu Vương quốc Ả Rập Thống nhất (UAE)</option>
                                    <option value="GB">Vương quốc Anh</option>
                                    <option value="US">Hoa Kỳ</option>
                                    <option value="TH">Thái Lan</option>
                                    <option value="OTHER">Quốc gia khác</option>
                                </select>
                            </div>
                        </div>

                        {/* Hàng 3: Họ & Tên đệm và tên */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Họ</label>
                                <input
                                    type="text"
                                    placeholder="Nhập họ"
                                    className="border border-gray-300 p-2.5 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tên đệm và tên</label>
                                <input
                                    type="text"
                                    placeholder="Nhập tên đệm và tên"
                                    className="border border-gray-300 p-2.5 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Checkbox điều khoản */}
                        <div className="flex items-start gap-2 pt-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
                                <span className="text-red-500">*</span> Tôi đồng ý nhận các thông tin quảng cáo, tiếp thị qua email được nêu chi tiết trong Chính sách bảo mật (như thông báo, bản tin, khuyến mại, các ưu đãi khác liên quan đến sản phẩm và dịch vụ của SkyFly và các đối tác của SkyFly). Dự kiến tần suất nhận khoảng 02 email/tuần.
                            </label>
                        </div>

                        {/* Nút Gửi */}
                        <div className="pt-3">
                            <button className="bg-blue-800 mb-15 hover:bg-blue-900 cursor-pointer text-white font-medium px-15 py-3 rounded-xl transition duration-200">
                                Gửi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;