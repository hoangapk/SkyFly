import React, { useEffect } from 'react';
import SlideBanner from '../slides/SlideBanner';
import { BsLuggage } from 'react-icons/bs';
import { PiWheelchairMotionBold } from 'react-icons/pi';
import { IoBagCheckOutline, IoGridOutline } from 'react-icons/io5';
import { LuHotel } from 'react-icons/lu';
import { TbHeartCheck, TbSteam } from 'react-icons/tb';
import { FcNews } from "react-icons/fc";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import hoGuom from '../../../assets/hoGuom.jpg';
import LOGOwhite from '../../../assets/LOGOwhite.png';
import paymentMachine from '../../../assets/paymentMachine.png';
import { FaArrowRight } from 'react-icons/fa';
import bay from '../../../assets/bay.png';
import QRcode from '../../../assets/QRcode.png';
function Home(props) {
    return (
        <div>
            <SlideBanner />
            <div className='px-10'>
                <ul className='flex justify-between py-8'>
                    <li className='flex flex-col justify-center items-center hover:duration-200 cursor-pointer ease-in hover:bg-blue-300 p-4 w-40 rounded-2xl hover:text-white text-center text-nowrap'>
                        <BsLuggage className='mb-2 text-2xl' />
                        <p>HÀNH LÝ TRẢ TRƯỚC</p>
                    </li>
                    <li className='flex flex-col justify-center items-center hover:duration-200 cursor-pointer ease-in hover:bg-blue-300 p-4 w-40 rounded-2xl hover:text-white text-center text-nowrap'>
                        <PiWheelchairMotionBold className='mb-2 text-2xl' />
                        <p>NÂNG HẠNG GHẾ</p>
                    </li>
                    <li className='flex flex-col justify-center items-center hover:duration-200 cursor-pointer ease-in hover:bg-blue-300 p-4 w-40 rounded-2xl hover:text-white text-center text-nowrap'>
                        <IoBagCheckOutline className='mb-2 text-2xl' />
                        <p>MUA SẮM</p>
                    </li>
                    <li className='flex flex-col justify-center items-center hover:duration-200 cursor-pointer ease-in hover:bg-blue-300 p-4 w-40 rounded-2xl hover:text-white text-center text-nowrap'>
                        <LuHotel className='mb-2 text-2xl' />
                        <p>KHÁCH SẠN & TOUR</p>
                    </li>
                    <li className='flex flex-col justify-center items-center hover:duration-200 cursor-pointer ease-in hover:bg-blue-300 p-4 w-40 rounded-2xl hover:text-white text-center text-nowrap'>
                        <TbHeartCheck className='mb-2 text-2xl' />
                        <p>BẢO HIỂM</p>
                    </li>
                    <li className='flex flex-col justify-center items-center hover:duration-200 cursor-pointer ease-in hover:bg-blue-300 p-4 w-40 rounded-2xl hover:text-white text-center text-nowrap'>
                        <IoGridOutline className='mb-2 text-2xl' />
                        <p>CÁC DỊCH VỤ KHÁC</p>
                    </li>
                </ul>
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
                <div className='flex  gap-4 justify-center'>
                    <div
                        className="p-4 rounded-xl text-white relative bg-cover bg-center"
                        style={{ backgroundImage: `url(${hoGuom})` }}
                    >
                        <p className='absolute text-xs right-2 px-2 py-1 bg-black/60 text-white rounded-3xl'>1/12</p>
                        <p className='mt-30 font-bold text-xl'>TP. Hồ Chí Minh đến Hà Nội</p>
                        <div className='text-end mt-10'>
                            <p>Từ</p>
                            <p className='font-bold text-xl'>888.181VND*</p>
                            <p>Đã xem 1 giờ trước</p>
                            <p>Một chiều</p>
                            <button className='p-3 mt-3 w-full bg-blue-900 text-white rounded-2xl hover:bg-blue-800 duration-200 ease-in cursor-pointer'>Mua ngay</button>
                        </div>
                    </div>
                    <div
                        className="p-4 rounded-xl text-white relative bg-cover bg-center"
                        style={{ backgroundImage: `url(${hoGuom})` }}
                    >
                        <p className='absolute text-xs right-2 px-2 py-1 bg-black/60 text-white rounded-3xl'>1/12</p>
                        <p className='mt-30 font-bold text-xl'>TP. Hồ Chí Minh đến Hà Nội</p>
                        <div className='text-end mt-10'>
                            <p>Từ</p>
                            <p className='font-bold text-xl'>888.181VND*</p>
                            <p>Đã xem 1 giờ trước</p>
                            <p>Một chiều</p>
                            <button className='p-3 mt-3 w-full bg-blue-900 text-white rounded-2xl hover:bg-blue-800 duration-200 ease-in cursor-pointer'>Mua ngay</button>
                        </div>
                    </div>
                    <div
                        className="p-4 rounded-xl text-white relative bg-cover bg-center"
                        style={{ backgroundImage: `url(${hoGuom})` }}
                    >
                        <p className='absolute text-xs right-2 px-2 py-1 bg-black/60 text-white rounded-3xl'>1/12</p>
                        <p className='mt-30 font-bold text-xl'>TP. Hồ Chí Minh đến Hà Nội</p>
                        <div className='text-end mt-10'>
                            <p>Từ</p>
                            <p className='font-bold text-xl'>888.181VND*</p>
                            <p>Đã xem 1 giờ trước</p>
                            <p>Một chiều</p>
                            <button className='p-3 mt-3 w-full bg-blue-900 text-white rounded-2xl hover:bg-blue-800 duration-200 ease-in cursor-pointer'>Mua ngay</button>
                        </div>
                    </div>
                    <div
                        className="p-4 rounded-xl text-white relative bg-cover bg-center"
                        style={{ backgroundImage: `url(${hoGuom})` }}
                    >
                        <p className='absolute text-xs right-2 px-2 py-1 bg-black/60 text-white rounded-3xl'>1/12</p>
                        <p className='mt-30 font-bold text-xl'>TP. Hồ Chí Minh đến Hà Nội</p>
                        <div className='text-end mt-10'>
                            <p>Từ</p>
                            <p className='font-bold text-xl'>888.181VND*</p>
                            <p>Đã xem 1 giờ trước</p>
                            <p>Một chiều</p>
                            <button className='p-3 mt-3 w-full bg-blue-900 text-white rounded-2xl hover:bg-blue-800 duration-200 ease-in cursor-pointer'>Mua ngay</button>
                        </div>
                    </div>
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
                <div className='grid grid-cols-1 lg:grid-cols-4 bg-white pb-12'>

                    {/* PHẦN 1: CỘT MENU BÊN TRÁI (Chiếm 1 cột trong tổng số 4 cột) */}
                    <div className='lg:col-span-1 bg-white '>
                        <p className='text-xl font-semibold p-3 text-white bg-blue-900 rounded-t-2xl'>Phổ Thông</p>
                        <ul className='space-y-2 border border-gray-400 border-dashed rounded-b-2xl pt-3 border-t-0'>
                            <li className='mx-4 p-3 rounded-full bg-blue-300 text-sky-900 hover:cursor-pointer font-medium duration-150 ease-in hover:shadow hover:shadow-blue-500'>Làm thủ tục</li>
                            <li className='mx-4 p-3 rounded-full text-gray-700 hover:bg-blue-300 hover:text-sky-900 cursor-pointer duration-150 ease-in'>Hành lý</li>
                            <li className='mx-4 p-3 rounded-full text-gray-700 hover:bg-blue-300 hover:text-sky-900 cursor-pointer duration-150 ease-in'>Thông tin sân bay</li>
                            <li className='mx-4 p-3 rounded-full text-gray-700 hover:bg-blue-300 hover:text-sky-900 cursor-pointer mb-20 duration-150 ease-in'>Chuẩn bị cho chuyến bay</li>
                        </ul>
                    </div>

                    {/* PHẦN 2: NỘI DUNG BÊN PHẢI (Chiếm 3 cột còn lại) */}
                    <div className='lg:col-span-3 flex flex-col rounded-2xl'>
                        <div className='text-xl font-semibold text-white bg-blue-900 flex justify-center items-center gap-1 p-2.5 rounded-t-2xl'>
                            <img className='w-fit h-8' src={LOGOwhite} alt="" />
                            <p >SkyFly</p>
                            <TbSteam />
                        </div>

                        {/* Lưới chứa 3 thẻ card ảnh */}
                        <div className='grid md:grid-cols-3 gap-6 px-5 pt-3 border border-gray-400 border-dashed rounded-b-2xl pb-18.5 border-t-0'>
                            {/* Thẻ 1 */}
                            <div className='bg-gray-50 rounded-xl p-3 flex flex-col border border-gray-100 shadow-sm hover:shadow-md transition-shadow'>
                                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" alt="Làm thủ tục trực tuyến" className='w-full h-40 object-cover rounded-lg' />
                                <div className='mt-3 font-medium text-sky-900 flex justify-between items-center cursor-pointer'>
                                    <p >Làm thủ tục trực tuyến</p>
                                    <FaArrowRight />
                                </div>
                            </div>

                            {/* Thẻ 2 */}
                            <div className='bg-gray-50 rounded-xl p-3 flex flex-col border border-gray-100 shadow-sm hover:shadow-md transition-shadow'>
                                <img src={paymentMachine} alt="Làm thủ tục tại đây" className='w-full h-40 object-cover rounded-lg' />
                                <div className='mt-3 font-medium text-sky-900 flex justify-between items-center cursor-pointer'>
                                    <p>Làm thủ tục tại máy tự động</p>
                                    <FaArrowRight />
                                </div>
                            </div>

                            {/* Thẻ 3 */}
                            <div className='bg-gray-50 rounded-xl p-3 flex flex-col border border-gray-100 shadow-sm hover:shadow-md transition-shadow'>
                                <img src="https://images.unsplash.com/photo-1540339832862-474599807836" alt="Làm thủ tục tại sân bay" className='w-full h-40 object-cover rounded-lg' />
                                <div className='mt-3 font-medium text-sky-900 flex justify-between items-center cursor-pointer'>
                                    <p>Làm thủ tục tại sân bay</p>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </div>
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
                                    <option value="en">English</option>
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
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Quốc gia/Vùng <span className="text-red-500">*</span>
                                </label>
                                <select className="border border-gray-300 p-2.5 w-full rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="vn">Việt Nam</option>
                                    <option value="other">Khác</option>
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