import React, { useContext, useEffect, useMemo } from 'react';
import { SiTarget } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { FlightContext } from '../../../contexts/FlightProvider';
import { AirlineContext } from '../../../contexts/AirlineProvider';
import { SeatTypeContext } from '../../../contexts/SeatTypeProvider';
import { BookingContext } from '../../../contexts/BookingProvider';
import { getObjectById } from '../../../services/reponsitory';
import { cities } from '../../../utils/data';
import { AircraftContext } from '../../../contexts/AircraftProvider';
import { PiArmchairLight } from 'react-icons/pi';
import { Accordion, AccordionDetails, AccordionSummary, listSubheaderClasses } from '@mui/material';
import { idID } from '@mui/material/locale';
import selectedSeat from '../../../assets/selectedSeat.png';
import { HistoryPaymentContext } from '../../../contexts/HistoryPaymentProvider';

function SeatOption(props) {
    const { booking, setBooking } = useContext(BookingContext);
    const history = React.useContext(HistoryPaymentContext);
    const flights = useContext(FlightContext);
    const airlines = useContext(AirlineContext);
    const seatTypes = useContext(SeatTypeContext);
    const aircrafts = React.useContext(AircraftContext);

    const plane = React.useMemo(() => {
        return getObjectById(aircrafts, getObjectById(flights, booking.flight_id)?.aircraft_id)
    }, [aircrafts, booking]);

    const total = useMemo(() => {
        const chair = getObjectById(seatTypes, booking?.seatype_id);
        const quantity = booking?.passengerList.reduce((sum, item) => item.id != 3 ? sum + item.listPerson.length : sum, 0);
        return parseInt(chair?.price) * quantity;
    }, [booking, seatTypes]);


    const handleShow = (index) => {
        const check = plane?.listChair?.find(p => p.index == index);

        const checkChair = history?.some(t => t.flight_id == booking.flight_id && t?.listChair?.includes(index));
        if (checkChair) {
            return <img className='w-10 m-auto' src={selectedSeat} alt='' />;
        }
        return check ? <img className='h-12 rounded-xl p-1 sd' src={getObjectById(seatTypes, check.id_seat_type).img_url} alt="" /> : <PiArmchairLight className='text-5xl opacity-0 text-gray-400 rounded-xl p-1 sd' />
    }

    const handleChooseChair = (index) => {
        const check = plane?.listChair?.find(p => p.index == index);
        const checkChair = history?.some(t => t.flight_id == booking.flight_id && t?.listChair?.includes(index));
        const quantity = booking?.passengerList.reduce((sum, item) => item.id != 3 ? sum + item.listPerson.length : sum, 0);

        if (checkChair) {
            alert("Ghế đã được đặt! Vui lòng chọn ghế khác.");
            return;
        }

        if (check.id_seat_type != booking.seatype_id) {
            alert("Bạn đã chọn sai loại ghế! Vui lòng chọn ghế khác.");
            return;
        }

        if (!booking?.listChair.includes(index) && booking?.listChair.length >= quantity) {
            alert("Bạn không được chọn thêm khi đã quá số người đã có");
            return;
        }

        setBooking(pre => {
            return { ...booking, listChair: pre.listChair.includes(index) ? pre.listChair.filter(p => p != index) : [...pre.listChair, index] }
        })

    }

  useEffect(() => {
    setBooking({...booking, listChair : []});
  },[]);
    return (
        <div className='grid grid-cols-3 m-20 gap-10'>
            <div className='col-span-2'>
                <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-5'>
                    <div className='flex  justify-around p-2'>
                        {
                            seatTypes.map((item, index) => (
                                <div className='flex flex-col gap-2 items-center p-3' key={index}>
                                    <img className='w-10' src={item.img_url} alt={item.name} />
                                    <p className='font-bold text-yellow-500'>{item.name}</p>
                                </div>
                            ))
                        }
                        <div className='flex flex-col gap-2 items-center p-3'>
                            <img src={selectedSeat} alt="Ghế trống" className='w-10 h-10' />
                            <p className='font-bold text-yellow-500'>Selected seat</p>
                        </div>
                    </div>
                </div>
                <div className='flex mt-3 justify-center'>
                    <div className='grid gap-4' style={{ gridTemplateColumns: `repeat(${plane?.cols}, minmax(0,1fr))` }} >
                        {
                            Array.from({ length: plane?.rows * plane?.cols }).map((_, index) => (
                                <div onClick={() => handleChooseChair(index)} className={`col-span-1 rounded-xl ${booking.listChair?.includes(index) ? "bg-amber-200" : ""}`} key={index}>
                                    {handleShow(index)}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className='col-span-1'>{/* Thông báo hoàn tất */}
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
                    <Link to="/payment">
                        <button className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl shadow-md transition-all cursor-pointer">
                            Tiếp tục
                        </button>
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default SeatOption;