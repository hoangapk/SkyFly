import React, { useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import { BiCheck, BiChevronDown, BiChevronRight, BiChevronRightCircle, BiUser } from 'react-icons/bi';
import { LuBaggageClaim, LuLuggage, LuShieldAlert } from 'react-icons/lu';
import { SiTarget } from 'react-icons/si';
import { BookingContext } from '../../../contexts/BookingProvider';

function ClientsIn4(props) {
    const id = React.useId();
    const { booking, setBooking } = useContext(BookingContext);

      const handleChangeInput = (e, id , index) => {
               setBooking(pre => {
                return {
                    ...pre,
                    passengerList: pre.passengerList.map((p) => {
                        if (p.id == id) {
                            return  { ...p, listPerson: p.listPerson.map((c,i) => i == index ? {...c , [e.target.name] : e.target.value} : c) };
                        }
                        return p;
                    })
                }
            })
        }
console.log(booking);

    return (
        <div className='grid grid-cols-3 m-20 gap-10'>
            <div className='col-span-2'>
                <div className='border border-blue-600 p-4 rounded-2xl mb-5'>
                    <p className='font-bold text-xl mb-3'>Thông tin hành khách</p>
                    {booking.passengerList.map((p, index) => (
                        p.listPerson.map((c,i) => (
                            <div className='mb-5'>
                                <Accordion>
                                    <AccordionSummary
                                        aria-controls={`${id}-panel2-content`}
                                        id={`${id}-panel2-header`}
                                    >
                                        <Typography >{p.title} {i + 1}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div>
                                            <div className='grid grid-cols-2 gap-x-8 gap-y-2'>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1 ">
                                                        Quốc tịch
                                                    </label>
                                                    <select className="border border-gray-300 p-2.5 w-full rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500">
                                                        <option value="vi">Viet Nam</option>
                                                        <option value="en">United Kingdom</option>
                                                    </select>
                                                </div>
                                                <div></div>
                                                <div className='col-span-1'>

                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Họ
                                                    </label>
                                                      <Input name='firstName' onChange={(e) => handleChangeInput(e,p.id,i)} className="border border-gray-300 p-2.5 w-full rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    </Input>
                                                </div>
                                                <div className='col-span-1'>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Chữ đệm và tên
                                                    </label>
                                                    <Input onChange={(e) => handleChangeInput(e,p.id,i)} name='lastName' className="border border-gray-300 p-2.5 w-full rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    </Input>
                                                </div>
                                                <div className="flex items-center gap-8 border border-gray-300 rounded-2xl px-3  bg-white mt-6">
                                                    {/* Tùy chọn Nam */}
                                                    <label className="flex items-center gap-3 cursor-pointer select-none">
                                                        <input
                                                            type="radio"
                                                            name={`gender-${id}-passenger-1`}
                                                            value="male"
                                                            defaultChecked
                                                            className="p-2 border-2 border-blue-800 rounded-full appearance-none checked:bg-blue-600 checked:border-sky-400 relative flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                                                        />
                                                        <span className="text-gray-800 font-medium text-base">Nam</span>
                                                    </label>

                                                    {/* Tùy chọn Nữ */}
                                                    <label className="flex items-center gap-3 cursor-pointer select-none">
                                                        <input
                                                            type="radio"
                                                            name={`gender-${id}-passenger-1`}
                                                            value="female"
                                                            className="p-2 border-2 border-blue-800 rounded-full appearance-none checked:bg-blue-600 checked:border-sky-400 relative flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                                                        />
                                                        <span className="text-gray-800 font-medium text-base">Nữ</span>
                                                    </label>
                                                </div>

                                                <div className="col-span-1">
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Ngày sinh
                                                    </label>
                                                    <Input
                                                        type="date"
                                                        className="border border-gray-300 p-2.5 w-full rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </AccordionDetails>
                                    <AccordionActions>
                                        <Button>Save</Button>
                                    </AccordionActions>
                                </Accordion>
                            </div>
                        ))
                    ))}    
                </div>
                <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl border border-gray-200 shadow-sm mb-5">
                    {/* Tiêu đề */}
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Thông tin liên hệ (nhận vé/phiếu thanh toán)
                    </h2>

                    {/* Banner Đăng nhập */}
                    <div className="flex items-center gap-3 p-3 mb-6 bg-[#E6F7FF] rounded-xl text-gray-800 text-sm font-medium">
                        <div className="flex items-center justify-center w-8 h-8 bg-[#0084FF] text-white rounded-full shrink-0">
                            <BiUser className="w-5 h-5" />
                        </div>
                        <span>Đăng nhập với tên Hoàng Nguyễn Gia</span>
                    </div>

                    {/* Form Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Input Họ và tên */}
                        <div>
                            <input
                                type="text"
                                placeholder="Họ và tên"
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Input Số điện thoại với mã quốc gia */}
                        <div className="flex rounded-xl border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden transition-all">
                            <select className="h-12 pl-4 pr-2 bg-transparent text-gray-700 font-medium border-r border-gray-200 focus:outline-none cursor-pointer">
                                <option value="+84">+84</option>
                            </select>
                            <input
                                type="tel"
                                placeholder="Số điện thoại"
                                className="w-full h-12 px-4 text-gray-700 placeholder-gray-400 focus:outline-none"
                            />
                        </div>

                        {/* Input Email */}
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl border border-gray-200 shadow-sm font-sans mb-5">
                    {/* Header thông tin hành lý */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-2 bg-amber-50 rounded-xl">
                            <LuBaggageClaim className="w-8 h-8 text-amber-500" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-950">Hành lý</h2>
                            <p className="text-sm text-gray-600 mt-0.5">
                                Bạn có thể mang <span className="font-semibold text-gray-900">1 x 32 kg</span> kiện/khách. Cần mua thêm?{' '}
                                <a href="#mua-them" className="text-blue-600 hover:underline font-medium">Chạm tại đây.</a>
                            </p>
                        </div>
                    </div>

                    {/* Tiêu đề hạn mức */}
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                        Hạn mức hành lý hiện tại của bạn
                    </h3>

                    {/* Danh sách các chặng bay (có thể cuộn ngang nếu nhiều) */}
                    <div className="relative flex items-center mb-6">
                        <div className="flex gap-4 overflow-x-auto pb-2 w-full scrollbar-none">
                            {/* Chặng 1 */}
                            <div className="min-w-[260px] flex-1 border border-gray-200 rounded-xl p-4 bg-white">
                                <div className="font-bold text-gray-900 pb-3 border-b border-gray-100 mb-3">
                                    1. DAD → SGN
                                </div>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-base">🧳</span>
                                        <span>1 × 18kg/khách</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-base">🧳</span>
                                        <span>1 × 32kg/khách</span>
                                    </div>
                                </div>
                            </div>

                            {/* Chặng 2 */}
                            <div className="min-w-[260px] flex-1 border border-gray-200 rounded-xl p-4 bg-white">
                                <div className="font-bold text-gray-900 pb-3 border-b border-gray-100 mb-3">
                                    2. SGN → BMV
                                </div>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-base">🧳</span>
                                        <span>1 × 18kg/khách</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-base">🧳</span>
                                        <span>1 × 32kg/khách</span>
                                    </div>
                                </div>
                            </div>

                            {/* Chặng 3 */}
                            <div className="min-w-[260px] flex-1 border border-gray-200 rounded-xl p-4 bg-white">
                                <div className="font-bold text-gray-900 pb-3 border-b border-gray-100 mb-3">
                                    3. BMV → HAN
                                </div>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-base">🧳</span>
                                        <span>1 × 18kg/khách</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-base">🧳</span>
                                        <span>1 × 32kg/khách</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nút bấm chuyển sang phải (Slider arrow) */}
                        <button className="absolute -right-3 z-10 w-9 h-9 bg-sky-100 hover:bg-sky-200 text-sky-600 rounded-full flex items-center justify-center shadow-md transition-all">
                            <BiChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Footer / Nút Chọn */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                            <span className="text-xs text-gray-500">Từ</span>{' '}
                            <span className="text-lg font-bold text-orange-600">344.000 VND</span>
                        </div>
                        <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm group">
                            Chọn
                            <BiChevronRightCircle className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </div>
                </div>
                <div className=" font-sans">

                    {/* 1. Card: Yêu cầu hóa đơn GTGT */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-5">
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <h3 className="text-lg font-bold text-gray-900">
                                Yêu cầu hóa đơn GTGT
                            </h3>
                            {/* Checkbox tùy chỉnh */}
                            <label className="relative flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-6 h-6 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center">
                                    <BiCheck className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" />
                                </div>
                            </label>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-start gap-2">
                                <span className="text-blue-500 mt-0.5">✓</span>
                                <p>Hóa đơn GTGT sẽ được xử lý và gửi đến email của bạn trong vòng 10 ngày.</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-500 mt-0.5">✓</span>
                                <p>
                                    Hóa đơn Thuế GTGT chỉ áp dụng cho giá vé máy bay cơ bản và các dịch vụ bổ trợ do hãng hàng không thu. Bất kỳ khoản phí dịch vụ nào khác do nền tảng Traveloka tính sẽ được thể hiện trên hóa đơn do Traveloka Services Pte Ltd, một công ty của Singapore, xuất.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Card: Bảo hiểm Trì hoãn chuyến bay */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-5">
                        <div className="flex items-start justify-between gap-4 mb-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                                    <LuShieldAlert className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Bảo hiểm Trì hoãn chuyến bay
                                    </h3>
                                    <p className="text-sm font-semibold text-orange-600 mt-0.5">
                                        87.120 VND<span className="text-gray-500 font-normal">/khách</span>
                                    </p>
                                </div>
                            </div>

                            <label className="relative flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-6 h-6 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center">
                                    <BiCheck className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" />
                                </div>
                            </label>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 mb-3">
                            <div className="flex items-start gap-2">
                                <span className="text-blue-500 mt-0.5">✓</span>
                                <p>Nhận 600.000 đồng nếu chuyến bay của bạn bị hoãn liên tục từ 180 phút trở lên</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-500 mt-0.5">✓</span>
                                <p>Quy trình nhận đền bù dễ dàng: bạn sẽ nhận được thông báo qua thư điện tử khi chuyến bay bị trì hoãn</p>
                            </div>
                        </div>

                        <a href="#tim-hieu-them" className="text-sm text-blue-600 font-medium hover:underline inline-block">
                            Tìm hiểu thêm
                        </a>
                    </div>

                    {/* 3. Card: Bảo hiểm Hành lý Chubb */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                        <div className="flex items-start justify-between gap-4 mb-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                                    <LuLuggage className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Bảo hiểm Hành lý Chubb
                                    </h3>
                                    <p className="text-sm font-semibold text-orange-600 mt-0.5">
                                        24.000 VND<span className="text-gray-500 font-normal">/khách</span>
                                    </p>
                                </div>
                            </div>

                            <label className="relative flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-6 h-6 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center">
                                    <BiCheck className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" />
                                </div>
                            </label>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 mb-3">
                            <div className="flex items-start gap-2">
                                <span className="text-blue-500 mt-0.5">✓</span>
                                <p>Bảo hiểm hành lý thất lạc hoặc hư hỏng lên đến 20,000,000 đồng</p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-500 mt-0.5">✓</span>
                                <p>Bảo hiểm mỗi hành lý thất lạc hoặc hư hỏng lên đến 3,000,000 đồng</p>
                            </div>
                        </div>

                        <a href="#tim-hieu-them" className="text-sm text-blue-600 font-medium hover:underline inline-block">
                            Tìm hiểu thêm
                        </a>
                    </div>

                </div>
            </div>

            <div className="col-span-1">
                {/* Thông báo hoàn tất */}
                <div className="flex items-center gap-2 font-semibold text-gray-800 text-sm pl-1">
                    <span>Hãy hoàn tất đặt vé ngay!</span>
                </div>

                {/* Khung tóm tắt chính */}
                <div className="bg-slate-100/70 p-3 rounded-2xl space-y-3 mb-5">
                    {/* Header */}
                    <div className="flex justify-between items-center px-1 pt-1">
                        <h2 className="text-xl font-bold text-black">Tóm tắt chuyến đi</h2>
                        <button className="text-blue-600 text-sm font-semibold hover:underline">Chi tiết</button>
                    </div>

                    {/* Chuyến đi */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-3">
                        <span className="inline-block bg-slate-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
                            Chuyến đi
                        </span>

                        <div className="flex justify-between items-center text-sm">
                            <div>
                                <p className="font-bold text-gray-900">Đà Nẵng DAD</p>
                                <p className="text-xs text-gray-500">Thứ 6, 23 thg 10 2026</p>
                                <p className="text-xs font-semibold mt-0.5">09:15</p>
                            </div>

                            <div className="text-center">
                                <span className="text-xs text-gray-500 block">8h 20m</span>
                                <div className="flex items-center justify-center gap-1 my-0.5">
                                    <span className=" w-6 bg-gray-300 inline-block"></span>
                                    <span className="text-[11px] text-gray-600">1 điểm dừng</span>
                                    <span className=" w-6 bg-gray-300 inline-block"></span>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="font-bold text-gray-900">S. G. . HCM SGN</p>
                                <p className="text-xs text-gray-500">Thứ 6, 23 thg 10 2026</p>
                                <p className="text-xs font-semibold mt-0.5">17:35</p>
                            </div>
                        </div>

                        <div className="pt-2 border-t border-gray-100 space-y-1 text-xs">
                            <div className="flex items-center gap-1.5 font-medium text-gray-800">
                                <span className="text-red-400">✈</span> SUN PhuQuoc AIRWAYS
                            </div>
                            <p className="text-gray-500">Business • Thương gia</p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                            <span className="border border-gray-300 text-gray-500 text-[11px] px-2 py-0.5 rounded-full">
                                KHÔNG ÁP DỤNG ĐỔI LỊCH Bay
                            </span>
                            <span className="border border-emerald-500 text-emerald-600 text-[11px] px-2 py-0.5 rounded-full font-medium">
                                ĐƯỢC HoÀN Vé
                            </span>
                        </div>
                    </div>

                    {/* Quá cảnh chuyến đi */}
                    <div className="bg-lime-100/60 p-3 rounded-xl text-center text-xs font-medium text-gray-800">
                        5h 30m Quá cảnh tại Phu Quoc
                    </div>

                    {/* Chuyến về */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-3">
                        <span className="inline-block bg-slate-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
                            Chuyến về
                        </span>

                        <div className="flex justify-between items-center text-sm">
                            <div>
                                <p className="font-bold text-gray-900">S. G. . HCM SGN</p>
                                <p className="text-xs text-gray-500">Thứ 6, 23 thg 10 2026</p>
                                <p className="text-xs font-semibold mt-0.5">23:40</p>
                            </div>

                            <div className="text-center">
                                <span className="text-xs text-gray-500 block">8h 45m</span>
                                <div className="flex items-center justify-center gap-1 my-0.5">
                                    <span className="w-6 bg-gray-300 inline-block"></span>
                                    <span className="text-[11px] text-gray-600">1 điểm dừng</span>
                                    <span className=" w-6 bg-gray-300 inline-block"></span>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="font-bold text-gray-900">Đà Nẵng DAD</p>
                                <p className="text-xs text-gray-500">Thứ 7, 24 thg 10 2026</p>
                                <p className="text-xs font-semibold mt-0.5">08:25</p>
                            </div>
                        </div>

                        <div className="pt-2 border-t border-gray-100 space-y-1 text-xs">
                            <div className="flex items-center gap-1.5 font-medium text-gray-800">
                                <span className="text-red-400">✈</span> SUN PhuQuoc AIRWAYS
                            </div>
                            <p className="text-gray-500">Business • Thương gia</p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                            <span className="border border-emerald-500 text-emerald-600 text-[11px] px-2 py-0.5 rounded-full font-medium">
                                Có ÁP DỤNG ĐỔI LỊCH Bay
                            </span>
                            <span className="border border-emerald-500 text-emerald-600 text-[11px] px-2 py-0.5 rounded-full font-medium">
                                ĐƯỢC HoÀN Vé
                            </span>
                        </div>
                    </div>

                    {/* Quá cảnh chuyến về */}
                    <div className="bg-lime-100/60 p-3 rounded-xl text-center text-xs font-medium text-gray-800">
                        5h 15m Quá cảnh tại Hanoi
                    </div>
                </div>
                <div className="max-w-md mx-auto p-6 bg-white rounded-2xl border border-gray-200 shadow-sm font-sans">
                    {/* Tiêu đề */}
                    <h2 className="text-xl font-bold text-gray-950 mb-4">
                        Chi tiết giá
                    </h2>

                    {/* Dòng giá bạn trả */}
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 mb-3">
                        <span className="text-base font-medium text-gray-900">
                            Giá bạn trả
                        </span>
                        <button className="flex items-center gap-1.5 focus:outline-none group">
                            <span className="text-lg font-bold text-orange-600">
                                38.377.115 VND
                            </span>
                            <BiChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-transform" />
                        </button>
                    </div>

                    {/* Thông báo tích lũy điểm/sao */}
                    <div className="flex items-center gap-2 py-2 px-3 bg-orange-50/50 rounded-xl mb-6 text-sm text-gray-800">
                        <div className="flex items-center justify-center w-5 h-5 bg-orange-400 text-white rounded-full shrink-0">
                            <SiTarget className="w-3 h-3 fill-white" />
                        </div>
                        <span>
                            Kiếm <strong className="font-semibold text-gray-900">15.350.846</strong> Sao Priority
                        </span>
                    </div>

                    {/* Nút Tiếp tục */}
                    <button className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl shadow-md transition-all cursor-pointer">
                        Tiếp tục
                    </button>
                </div>
            </div>
        </div >
    );
}

export default ClientsIn4;