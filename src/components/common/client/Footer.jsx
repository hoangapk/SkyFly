import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import LOGO from '../../../assets/LOGO.png';
function Footer(props) {
    return (
        <div className='bg-gray-300 '>
            <div className='flex justify-between p-10'>
                <div className=''>
                    <ul>
                        <li className='font-bold text-xl text-blue-500 mb-3'>Vietnam Airlines</li>
                        <li className='py-1'>Giới Thiệu Công Ty</li>
                        <li className='py-1'>Đội Bay</li>
                        <li className='py-1'>Thông Tin Truyền Thông</li>
                        <li className='py-1'>Phát Triển Bền Vững</li>
                        <li className='py-1'>Quan Hệ Cổ Đông</li>
                        <li className='py-1'>Thông Tin Đấu Thầu</li>
                        <li className='py-1'>Việc Làm Với Vietnam Airlines </li>
                        <li className='py-1'>Hợp Tác Với Vietnam Airlines</li>
                    </ul>
                </div>
                <div className=''>
                    <ul>
                        <li className='font-bold text-xl text-blue-500 mb-3'>Hỗ Trợ</li>
                        <li className='py-1'>Góp Ý Dịch Vụ</li>
                        <li className='py-1'>Trung tâm trợ giúp</li>
                        <li className='py-1'>Các câu hỏi thường gặp - FAQ </li>
                        <li className='py-1'>Liên hệ với chi nhánh của VNA</li>
                        <li className='py-1'>Chính Sách Bảo Vệ Hành Khách</li>
                        <li className='py-1'>Trợ Lý Ảo Của Vietnam Airlines</li>
                        <li className='py-1'>Ứng Dụng Di Động</li>
                    </ul>
                </div>
                <div className=''>
                    <ul>
                        <li className='font-bold text-xl text-blue-500 mb-3'>Pháp Lý</li>
                        <li className='py-1'>Các Điều Kiện & Điều Khoản</li>
                        <li className='py-1'>Điều Lệ Vận Chuyển</li>
                        <li className='py-1'>Điều Kiện Sử Dụng Cookies</li>
                        <li className='py-1'>Bảo Mật Thông Tin</li>
                        <li className='py-1'>Quy Chế Hoạt Động Sàn TMĐT</li>
                        <li className='font-bold text-xl text-blue-500 my-3'>Đại lý & Đối tác</li>
                        <li className='py-1'>Chính sách Đặt chỗ & Xuất vé</li>
                    </ul>
                </div>
                <div className=''>
                    <ul>
                        <li className='font-bold text-xl text-blue-500 mb-3'>Thông Tin Hữu Ích</li>
                        <li className='py-1'>Hợp Tác Với Chương Trình Lotusmiles</li>
                        <li className='py-1'>Tạp Chí Heritage</li>
                        <li className='py-1'>Cẩm Nang Du Lịch</li>
                        <li className='py-1'>Quảng Cáo Với Vietnam Airlines</li>
                        <li className='font-bold text-xl text-blue-500 my-3'>Vận Tải Hàng Hóa</li>
                        <li className='py-1'>Trang Web Hàng Hoá</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center justify-between p-7 border-y border-dashed border-amber-600'>
                <p className='text-2xl font-semibold'>Giải thưởng của Vietnam Airlines</p>
                <div className='flex gap-4 '>
                    <img className="h-20 w-auto" src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/world-travel-awards-mobile.png?width=1920" alt="" />
                    <img className="h-20 w-auto" src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/2018-aviation-awards.png?width=1920" alt="" />
                    <img className="h-20 w-auto" src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/trip-advisor.svg?width=1920" alt="" />
                    <img className="h-20 w-auto" src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/4-star-airline-skypax.png?width=1920" alt="" />
                </div>
            </div>
            <div className='flex p-7'>
                <div>
                    <div className=''>
                        <img className='h-8 mb-5' src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/logo.png?width=1920" alt="" />
                        <ul className='flex gap-3 text-xl'>
                            <li className='border rounded-full p-2  hover:bg-gray-100 cursor-pointer transition'><FaYoutube /></li>
                            <li className='border rounded-full p-2  hover:bg-gray-100 cursor-pointer transition'><FaInstagram /></li>
                            <li className='border rounded-full p-2  hover:bg-gray-100 cursor-pointer transition'><FaFacebook /></li>
                            <li className='border rounded-full p-2  hover:bg-gray-100 cursor-pointer transition'><FaTiktok /></li>
                            <li className='border rounded-full p-2  hover:bg-gray-100 cursor-pointer transition'><SiZalo /></li>
                        </ul>
                        <img className='h-20 mb-3' src={LOGO} alt="" />
                        <ul className='flex gap-8 whitespace-nowrap'>
                            <li>Sơ đồ trang</li>
                            <li>Liên hệ mua vé</li>
                            <li>Cài đặt cookies</li>
                        </ul>
                    </div>
                </div>
                <div className='pl-7'>
                    <p>© 2025 Vietnam Airlines JSC</p>
                    <p>Tổng công ty Hàng không Việt Nam - CTCP. Số 200 Nguyễn Sơn, Phường <br />Bồ Đề, Hà Nội.</p>
                    <p>Điện thoại: (+84-24) 38272289. Fax: (+84-24) 38722375</p>
                    <p>Giấy chứng nhận đăng ký doanh nghiệp, mã số doanh nghiệp 0100107518,<br /> đăng ký lần đầu ngày 30/6/2010, đăng ký thay đổi lần thứ 10 ngày 24/7/2025, cấp bởi Sở Tài chính Thành phố Hà Nội.</p>
                    <div className='flex gap-5 h-8 mt-10'>
                        <img src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/payment-method-icon.png?width=1920" alt="" />
                        <img src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/payment-method-icon-1.png?width=1920" alt="" />
                        <img src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/payment-method-icon-2.png?width=1920" alt="" />
                    </div>
                </div>
                <div>
                    <img className = "" src="https://www.vietnamairlines.com/content/dam/vna/vna-assets/global/images/footer/app-download-container-vi.png?width=1920" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;