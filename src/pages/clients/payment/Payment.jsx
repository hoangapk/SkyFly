import React, { useContext, useMemo, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import { BiCheck, BiChevronRight, BiChevronRightCircle, BiUser } from 'react-icons/bi';
import { LuBaggageClaim, LuLuggage, LuShieldAlert } from 'react-icons/lu';
import { SiTarget } from 'react-icons/si';
import { BookingContext } from '../../../contexts/BookingProvider';
import { getObjectById } from '../../../services/reponsitory';
import { cities } from '../../../utils/data';
import { FlightContext } from '../../../contexts/FlightProvider';
import { SeatTypeContext } from '../../../contexts/SeatTypeProvider';
import { AirlineContext } from '../../../contexts/AirlineProvider';
import { idID } from '@mui/material/locale';
import { initialOptions } from '../../../utils/Contants';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { addDocument } from '../../../services/firebaseService';

function Payment(props) {
    const { booking, setBooking } = useContext(BookingContext);
    const flights = useContext(FlightContext);
    const airlines = useContext(AirlineContext);
    const seatTypes = useContext(SeatTypeContext);
    const [selectedMethod, setSelectedMethod] = useState('vietqr');

    const handleSelect = (methodId) => {
        setSelectedMethod(methodId);
    };

    const handleChangeIn4 = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    };

    const total = useMemo(() => {
        const chair = getObjectById(seatTypes, booking.seatype_id);
        console.log(chair?.price);

        const quantity = booking.passengerList
            ? booking.passengerList.reduce((sum, item) => (item.id != 3 ? sum + item.listPerson.length : sum), 0)
            : 0;
        console.log(quantity);

        return parseInt(chair?.price || 0) * quantity;
    }, [booking, seatTypes]);

    const createSubscription = async (transactionId) => {
        try {
            const d = await addDocument("HistoryPayments", booking);
            const pay = {
                id_booking: d.id,
                transactionId: transactionId,
                method: "paypal",
                price: total,
                createAt: new Date()
            }
            console.log(pay);

            await addDocument("payments", pay);
        } catch (error) {
        }
    }

    return (
        <div className='grid grid-cols-3 m-20 gap-10'>
            {/* Cột trái: Phương thức thanh toán, Thông tin liên hệ, Hành lý, Tiện ích */}
            <div className='col-span-2 space-y-5'>
                {/* 1. Phần chọn phương thức thanh toán */}
                <div className="bg-white rounded-xl shadow-md p-6 font-sans">
                    {/* Tiêu đề và Đồng hồ đếm ngược */}
                    <div className=" mb-6 bg-blue-600 text-white p-4 rounded-lg">
                        <h2 className="text-lg font-bold">Bạn muốn thanh toán thế nào?</h2>
                    </div>

                    <div className="space-y-4">
                        {/* 1. VietQR */}
                        <div
                            onClick={() => handleSelect('vietqr')}
                            className={`border rounded-xl p-4 cursor-pointer transition-all ${selectedMethod === 'vietqr'
                                ? 'border-blue-500 bg-blue-50/30 ring-1 ring-blue-500'
                                : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        checked={selectedMethod === 'vietqr'}
                                        onChange={() => handleSelect('vietqr')}
                                        className="w-4 h-4 text-blue-600 accent-blue-600"
                                    />
                                    <span className="font-semibold text-gray-800">VietQR</span>
                                </div>
                                <div className="text-red-600 font-bold tracking-tighter text-lg">
                                    Viet<span className="text-blue-900">QR</span>
                                </div>
                            </div>

                            {selectedMethod === 'vietqr' && (
                                <div className="mt-4 pt-3 border-t border-gray-100 text-sm text-gray-600 space-y-2">
                                    <div className="flex items-center gap-2 text-xs text-orange-600 bg-orange-50 p-2 rounded">
                                        <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded text-[10px] font-bold">
                                            Ưu đãi giảm giá
                                        </span>
                                        <span>Thanh toán dễ dàng bằng ứng dụng ngân hàng điện tử bằng cách lưu mã QR.</span>
                                    </div>
                                    <ul className="list-disc pl-5 space-y-1 text-xs text-gray-500">
                                        <li>Đảm bảo bạn có ví điện tử hoặc ứng dụng ngân hàng di động hỗ trợ thanh toán bằng VietQR.</li>
                                        <li>Mã QR sẽ xuất hiện sau khi bạn nhấp vào nút "Thanh toán".</li>
                                        <li>Vui lòng sử dụng mã QR mới nhất được cung cấp.</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* 2. Digital Wallet */}
                        <div
                            onClick={() => handleSelect('wallet')}
                            className={`border rounded-xl p-4 cursor-pointer transition-all ${selectedMethod === 'wallet'
                                ? 'border-blue-500 bg-blue-50/30 ring-1 ring-blue-500'
                                : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        checked={selectedMethod === 'wallet'}
                                        onChange={() => handleSelect('wallet')}
                                        className="w-4 h-4 text-blue-600 accent-blue-600"
                                    />
                                    <span className="font-semibold text-gray-800">Digital Wallet</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                                    <span className="bg-gray-100 px-1.5 py-0.5 rounded">Pay</span>
                                    <span className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">ZaloPay</span>
                                    <span className="bg-pink-50 text-pink-600 px-1.5 py-0.5 rounded">Momo</span>
                                </div>
                            </div>
                        </div>

                        {/* 3. Ngân hàng di động */}
                        <div
                            onClick={() => handleSelect('mobile_banking')}
                            className={`border rounded-xl p-4 cursor-pointer transition-all ${selectedMethod === 'mobile_banking'
                                ? 'border-blue-500 bg-blue-50/30 ring-1 ring-blue-500'
                                : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        checked={selectedMethod === 'mobile_banking'}
                                        onChange={() => handleSelect('mobile_banking')}
                                        className="w-4 h-4 text-blue-600 accent-blue-600"
                                    />
                                    <span className="font-semibold text-gray-800">Ngân hàng di động</span>
                                </div>
                                <span className="text-xl">🏦</span>
                            </div>
                        </div>

                        {/* 4. VietinBank */}
                        <div
                            onClick={() => handleSelect('vietinbank')}
                            className={`border rounded-xl p-4 cursor-pointer transition-all ${selectedMethod === 'vietinbank'
                                ? 'border-blue-500 bg-blue-50/30 ring-1 ring-blue-500'
                                : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        checked={selectedMethod === 'vietinbank'}
                                        onChange={() => handleSelect('vietinbank')}
                                        className="w-4 h-4 text-blue-600 accent-blue-600"
                                    />
                                    <span className="font-semibold text-gray-800">Chuyển tiền qua VietinBank</span>
                                </div>
                                <span className="font-bold text-blue-800 text-sm italic">VietinBank</span>
                            </div>
                        </div>

                        {/* 5. Thẻ thanh toán */}
                        <div
                            onClick={() => handleSelect('card')}
                            className={`border rounded-xl p-4 cursor-pointer transition-all ${selectedMethod === 'card'
                                ? 'border-blue-500 bg-blue-50/30 ring-1 ring-blue-500'
                                : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        checked={selectedMethod === 'card'}
                                        onChange={() => handleSelect('card')}
                                        className="w-4 h-4 text-blue-600 accent-blue-600"
                                    />
                                    <span className="font-semibold text-gray-800">Thẻ thanh toán</span>
                                </div>
                                <div className="flex gap-1 text-xs font-bold text-gray-500">
                                    <span className="text-blue-700">VISA</span>
                                    <span className="text-orange-600">MC</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <button className="text-blue-600 text-sm font-semibold flex items-center justify-center gap-1 mx-auto hover:underline">
                            Phương thức khác <span>▼</span>
                        </button>
                    </div>
                </div>
                {/* Phần: Áp dụng mã giảm giá hoặc phiếu quà tặng */}
                <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* Icon biểu tượng mã giảm giá (ví dụ dùng emoji hoặc icon tùy ý) */}
                        <div className="p-2 bg-red-50 text-red-500 rounded-xl text-lg">
                            🎟️
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-900">Áp dụng mã giảm giá hoặc phiếu quà tặng</h4>
                        </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                        Thêm
                    </button>
                </div>
            </div>

            {/* Cột phải: Tóm tắt chuyến đi */}
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
                                <p className="font-bold text-gray-900">{getObjectById(cities, booking.from)?.name} {getObjectById(cities, booking.from)?.code}</p>
                                <p className="text-xs text-gray-500">{booking.startDate}</p>
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
                                <p className="font-bold text-gray-900"> {getObjectById(cities, booking.to)?.name} {getObjectById(cities, booking.to)?.code}</p>
                                <p className="text-xs text-gray-500">{booking.startDate}</p>
                                <p className="text-xs font-semibold mt-0.5">17:35</p>
                            </div>
                        </div>

                        <div className="pt-2 border-t border-gray-100 space-y-1 text-xs">
                            <div className="flex items-center gap-1.5 font-medium text-gray-800">
                                <span className="text-red-400">✈</span>{getObjectById(airlines, getObjectById(flights, booking.flight_id)?.airline_id)?.name}
                            </div>
                            <div className='flex gap-1'>
                                <img src={getObjectById(seatTypes, booking.seatype_id)?.img_url} className='w-4.5' alt="" />
                                <p className="text-gray-500">{getObjectById(seatTypes, booking.seatype_id)?.name}</p>
                            </div>
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


                    {
                        booking.is_round_trip && <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-3">
                            <span className="inline-block bg-slate-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
                                Chuyến về
                            </span>

                            <div className="flex justify-between items-center text-sm">
                                <div>
                                    <p className="font-bold text-gray-900">{getObjectById(cities, booking.to)?.name} {getObjectById(cities, booking.to)?.code}</p>
                                    <p className="text-xs text-gray-500">{booking.endDate}</p>
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
                                    <p className="font-bold text-gray-900">{getObjectById(cities, booking.from)?.name} {getObjectById(cities, booking.from)?.code}</p>
                                    <p className="text-xs text-gray-500">{booking.endDate}</p>
                                    <p className="text-xs font-semibold mt-0.5">08:25</p>
                                </div>
                            </div>

                            <div className="pt-2 border-t border-gray-100 space-y-1 text-xs">
                                <div className="flex items-center gap-1.5 font-medium text-gray-800">
                                    <span className="text-red-400">✈</span>{getObjectById(airlines, getObjectById(flights, booking.flight_id)?.airline_id)?.name}
                                </div>
                                <div className='flex gap-1'>
                                    <img src={getObjectById(seatTypes, booking.seatype_id)?.img_url} className='w-4.5' alt="" />
                                    <p className="text-gray-500">{getObjectById(seatTypes, booking.seatype_id)?.name}</p>
                                </div>
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
                    }
                </div>
                <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm font-sans">
                    {/* Tiêu đề */}
                    <h2 className="text-xl font-bold text-gray-950 mb-4">
                        Chi tiết giá
                    </h2>

                    {/* Dòng giá bạn trả */}
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 mb-3">
                        <div className='mb-5 w-full'>
                            <Accordion>
                                <AccordionSummary
                                    aria-controls={`${idID}-panel2-content`}
                                    id={`${idID}-panel2-header`}
                                >
                                    <div className='flex justify-between w-full pr-0'>
                                        <div className="text-base font-medium text-gray-900">
                                            Giá bạn trả
                                        </div>
                                        <div className="text-lg font-bold text-orange-600">
                                            {total.toLocaleString('vi-VN')} VND
                                        </div>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {
                                        booking?.passengerList.filter(z => z.id != 3).map((p, index) => (
                                            p.listPerson.map((c, i) => (
                                                <div className='flex justify-between mb-2'>
                                                    <p className=''>{p.title} {i + 1}</p>
                                                    <p>{getObjectById(seatTypes, booking.seatype_id)?.price} VND</p>
                                                </div>
                                            ))
                                        ))
                                    }
                                </AccordionDetails>
                            </Accordion>
                        </div>
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
                    <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons
                            style={{ layout: "vertical" }}
                            createOrder={(data, actions) => {
                                const dollar = (total / 26000).toFixed(2);
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            value: dollar
                                        }
                                    }]
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then((details) => {
                                    const transactionId = details.id; // Lấy ID giao dịch từ PayPal
                                    createSubscription(transactionId);
                                });
                            }}
                            onError={(err) => {
                                console.error("PayPal error:", err);
                            }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>
        </div>
    );
}

export default Payment;