import React, { useContext, useMemo, useState } from 'react';
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
import { TbCircleDashedPlus } from 'react-icons/tb';
import { GrFormSubtract } from "react-icons/gr";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { cities } from '../../../utils/data';
import { perSon, searchType } from '../../../types/Types';
import { getObjectById } from '../../../services/reponsitory';
import { CiDiscount1 } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { BookingContext } from '../../../contexts/BookingProvider';


function Search(props) {
    const [showPassenger, setShowPassenger] = useState(false);
    const { booking, setBooking } = useContext(BookingContext);
    // 1. STATE QUẢN LÝ SỐ LƯỢNG HÀNH KHÁCH

    const handlePlus = (id) => {
        setBooking(pre => {
            return { ...pre, passengerList: pre.passengerList.map((p) => p.id == id ? { ...p, listPerson: [...p.listPerson, perSon] } : p) }
        })
    }
    //trừ số lượng hành khách
    const handleSubtract = (id) => {
        setBooking(pre => {
            return {
                ...pre,
                passengerList: pre.passengerList.map((p) => {
                    if (p.id == id) {
                        // Dùng Math.max để đảm bảo quantity nhỏ nhất là 0 (hoặc thay số 0 bằng 1 nếu bắt buộc phải có ít nhất 1 hành khách)
                        return  { ...p, listPerson: p.listPerson.filter((_, index) => index !== 0) };
                    }
                    return p;
                })
            }
        })
    }

    const total = useMemo(() => {
        return booking.passengerList.reduce((sum, item) => sum + item.listPerson.length, 0)
    }, [booking]);

    const handleClickInput = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    }

    return (
        <div className='absolute w-[80vw] p-4 bg-white text-gray-500 bottom-3 z-50 left-1/2 -translate-x-1/2 rounded-2xl'>
            <div className='grid grid-cols-5 justify-around  shadow-md shadow-blue-100 text-center font-bold rounded-2xl'>
                <p className='p-3 cursor-pointer'>Mua vé</p>
                <p className='p-3 cursor-pointer'>Quản lý đặt chỗ</p>
                <p className='p-3 cursor-pointer'>Làm thủ tục</p>
                <p className='p-3 cursor-pointer'>Trạng thái chuyến bay</p>
                <p className='p-3 cursor-pointer'>Tra cứu lịch bfay</p>
            </div>
            <div className=' pl-10 pt-5'>
                <div className='flex gap-2.5 font-medium'>
                    <button onClick={() => setBooking({ ...booking, is_round_trip: false })} className={`border border-gray-200 rounded-3xl p-2 px-4 shadow-md hover:shadow-lg cursor-pointer   ${booking.is_round_trip ? "" : "bg-gradient-to-b from-[#080d24] via-[#0b1736] to-[#102d63] text-white"}`}>một chiều</button>
                    <button onClick={() => setBooking({ ...booking, is_round_trip: true })} className={`border border-gray-200 rounded-3xl p-2 px-4 shadow-md hover:shadow-lg cursor-pointer   ${booking.is_round_trip ? "bg-gradient-to-b from-[#080d24] via-[#0b1736] to-[#102d63] text-white" : ""}`}>khứ hồi</button>
                </div>
                <div className=' flex justify-between gap-10 items-center'>
                    <div className='flex-1'>
                        <div className='flex gap-2 items-center py-3'>
                            <FaPlaneDeparture className='text-blue-300' />
                            <p>Từ</p>
                        </div>
                        <div className='flex items-center border-b border-gray-300 pb-3'>
                            <button className='text-5xl'>{getObjectById(cities, booking.from)?.code}</button>
                            <Autocomplete
                                disablePortal
                                fullWidth
                                options={cities}
                                getOptionLabel={(option) => option.name}
                                onChange={(event, value) => handleClickInput({ target: { name: "from", value: value?.id } })}
                                renderInput={(params) => <TextField {...params} placeholder='Chọn điểm đi' sx={{
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        border: "none",
                                    },
                                }} />}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-9 h-9 rounded-3xl bg-gray-100 hover:scale-[1.2] transition-all duration-300 cursor-pointer'>
                        <FaArrowRightArrowLeft />
                    </div>
                    <div className='flex-1 border-b border-gray-300'>
                        <div className='flex gap-2 items-center py-2'>
                            <FaPlaneArrival className='text-blue-300' />
                            <p className=''>Đến</p>
                        </div>
                        <div className='flex items-center border-b border-gray-300 pb-3'>
                            <button className='text-5xl'>{getObjectById(cities, booking.to)?.code}</button>
                            <Autocomplete
                                disablePortal
                                fullWidth
                                options={cities}
                                getOptionLabel={(option) => option.name}
                                onChange={(event, value) => handleClickInput({ target: { name: "to", value: value?.id } })}
                                renderInput={(params) => <TextField {...params} placeholder='Chọn điểm đến' sx={{
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        border: "none",
                                    },
                                }} />}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex gap-25'>
                    <div className='mt-3 flex-1'>
                        <div className='flex gap-10'>
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <MdOutlineCalendarMonth className='text-blue-300' />
                                    <p>Ngày đi</p>
                                </div>
                                <TextField onChange={handleClickInput} name='startDate' type='date' variant="outlined" />
                            </div>
                            {booking.is_round_trip ? (
                                < div >
                                    <div className="flex items-center gap-2 mb-3">
                                        <MdOutlineCalendarMonth className='text-blue-300' />
                                        <p>Ngày về</p>
                                    </div>
                                    <TextField onChange={handleClickInput} type='date' variant="outlined" name='endDate' />
                                </div>)
                                : ''}
                        </div>
                        <hr className='mt-2 text-gray-400' />
                    </div>
                    <div className='flex-1 relative'>
                        <div className="flex items-center gap-2 mb-3 mt-3">
                            <GoPerson className='text-blue-300' />
                            <p>Hành Khách</p>
                        </div>
                        <p onClick={() => setShowPassenger(!showPassenger)} className='font-bold text-2xl p-3 cursor-pointer'>{total} Hành khách</p>
                        <hr className='mt-2 text-gray-400' />
                        {showPassenger && (
                            <div className='border absolute rounded-2xl bg-white shadow-2xl mt-4.5 w-full'>
                                <div className="flex items-center gap-2 mb-3 border-b">
                                    <p className='p-2'>Hành Khách</p>
                                </div>
                                {
                                    booking.passengerList.map((p, index) => (
                                        <div className='flex justify-between items-center m-3'>
                                            <GrFormSubtract className='w-12 h-12 bg-gray-200 rounded-3xl cursor-pointer ' onClick={() => handleSubtract(p.id)} />
                                            <ul className='text-center'>
                                                <li className='font-bold mb-2'>{p.listPerson.length} {p.title}</li>
                                                <li>{p.condition}</li>
                                            </ul>
                                            <TbCircleDashedPlus className='text-5xl cursor-pointer' onClick={() => handlePlus(p.id)} />
                                        </div>
                                    ))
                                }
                                <hr />
                                <div className='flex justify-end m-2'>
                                    <button
                                        onClick={() => {
                                            setShowPassenger(!showPassenger)
                                        }}
                                        className='cursor-pointer bg-gradient-to-b from-[#080d24] via-[#0b1736] to-[#102d63] text-white px-4 py-1 font-bold rounded-3xl'
                                    >
                                        Chọn
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className='flex gap-5 items-center justify-end mt-5'>
                            <div className='font-semibold text-blue-300  flex gap-1 items-center cursor-pointer hover:text-blue-800 duration-150 ease-in'>
                                <CiDiscount1 className='text-2xl' />
                                <button className='cursor-pointer' >Mã khuyến mãi</button>
                            </div>
                            <Link
                                to="/flightSearch"
                                className='font-semibold text-white px-3 py-2 bg-blue-900 rounded-xl cursor-pointer hover:bg-blue-800 duration-150 ease-in'
                            >
                                Tìm chuyến bay
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Search;