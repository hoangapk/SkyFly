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
import { perSon } from '../../../types/Types';
import { getObjectById } from '../../../services/reponsitory';
import { CiDiscount1 } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { BookingContext } from '../../../contexts/BookingProvider';


function Search(props) {
    const [showPassenger, setShowPassenger] = useState(false);
    const { booking, setBooking } = useContext(BookingContext);

    // === BỔ SUNG 1: State quản lý tab đang chọn (Mặc định là 'buy-ticket') ===
    const [currentTab, setCurrentTab] = useState('buy-ticket');

    // 1. STATE QUẢN LÝ SỐ LƯỢNG HÀNH KHÁCH
    const handlePlus = (id) => {
        setBooking(pre => {
            return { ...pre, passengerList: pre.passengerList.map((p) => p.id == id ? { ...p, listPerson: [...p.listPerson, perSon] } : p) }
        })
    }
    console.log(booking);
    
    //trừ số lượng hành khách
    const handleSubtract = (id) => {
        setBooking(pre => {
            return {
                ...pre,
                passengerList: pre.passengerList.map((p) => {
                    if (p.id == id) {
                        return { ...p, listPerson: p.listPerson.filter((_, index) => index !== 0) };
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
        <div className='absolute w-[80vw] h-[435px] p-4 bg-white text-gray-500 bottom-3 z-50 left-1/2 -translate-x-1/2 rounded-2xl shadow-xl'>
            {/* === BỔ SUNG 2: Thanh menu tab có sự kiện onClick và style active giống giao diện mẫu === */}
            <div className='grid grid-cols-5 justify-around shadow-md shadow-blue-100 text-center font-bold rounded-2xl cursor-pointer bg-white overflow-hidden'>
                <p
                    onClick={() => setCurrentTab('buy-ticket')}
                    className={`p-3 transition-all ${currentTab === 'buy-ticket' ? 'border-b-4 border-blue-900 text-blue-900' : 'hover:text-blue-700'}`}
                >
                    Mua vé
                </p>
                <p
                    onClick={() => setCurrentTab('manage-booking')}
                    className={`p-3 transition-all ${currentTab === 'manage-booking' ? 'border-b-4 border-blue-900 text-blue-900' : 'hover:text-blue-700'}`}
                >
                    Quản lý đặt chỗ
                </p>
                <p
                    onClick={() => setCurrentTab('check-in')}
                    className={`p-3 transition-all ${currentTab === 'check-in' ? 'border-b-4 border-blue-900 text-blue-900' : 'hover:text-blue-700'}`}
                >
                    Làm thủ tục
                </p>
                <p
                    onClick={() => setCurrentTab('flight-status')}
                    className={`p-3 transition-all ${currentTab === 'flight-status' ? 'border-b-4 border-blue-900 text-blue-900' : 'hover:text-blue-700'}`}
                >
                    Trạng thái chuyến bay
                </p>
                <p
                    onClick={() => setCurrentTab('flight-schedule')}
                    className={`p-3 transition-all ${currentTab === 'flight-schedule' ? 'border-b-4 border-blue-900 text-blue-900' : 'hover:text-blue-700'}`}
                >
                    Tra cứu lịch bay
                </p>
            </div>

            {/* === BỔ SUNG 3: Phân rã hiển thị nội dung theo từng tab === */}

            {/* TAB 1: MUA VÉ (GIỮ NGUYÊN CODE CŨ CỦA BẠN) */}
            {currentTab === 'buy-ticket' && (
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
                                    // Thêm dòng này để Autocomplete khớp chính xác id khi bấm đổi chiều
                                    value={getObjectById(cities, booking.from) || null}
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
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
                        <div
                            onClick={() => {
                                setBooking(pre => ({
                                    ...pre,
                                    from: pre.to,
                                    to: pre.from
                                }));
                            }}
                            className='flex justify-center items-center w-9 h-9 rounded-3xl bg-gray-100 hover:scale-[1.2] transition-all duration-300 cursor-pointer'
                        >
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
                                    value={getObjectById(cities, booking.to) || null}
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
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
                                {/* Ô Ngày đi */}
                                <div className='flex-1'>
                                    <div className="flex items-center gap-2 mb-3">
                                        <MdOutlineCalendarMonth className='text-blue-300' />
                                        <p>Ngày đi</p>
                                    </div>
                                    <TextField
                                        fullWidth
                                        onChange={handleClickInput}
                                        name='startDate'
                                        type='date'
                                        variant="outlined"
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none",
                                            },
                                            "& .MuiOutlinedInput-root": {
                                                border: "none",
                                            },
                                        }}
                                    />
                                </div>

                                {/* Ô Ngày về (chỉ hiện khi là khứ hồi) */}
                                {booking.is_round_trip ? (
                                    <div className='flex-1'>
                                        <div className="flex items-center gap-2 mb-3">
                                            <MdOutlineCalendarMonth className='text-blue-300' />
                                            <p>Ngày về</p>
                                        </div>
                                        <TextField
                                            fullWidth
                                            onChange={handleClickInput}
                                            name='endDate'
                                            type='date'
                                            variant="outlined"
                                            sx={{
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    border: "none",
                                                },
                                                "& .MuiOutlinedInput-root": {
                                                    border: "none",
                                                },
                                            }}
                                        />
                                    </div>
                                ) : ''}
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
                                <div className='border absolute rounded-2xl bg-white shadow-2xl mt-4.5 w-full z-50'>
                                    <div className="flex items-center gap-2 mb-3 border-b">
                                        <p className='p-2'>Hành Khách</p>
                                    </div>
                                    {
                                        booking.passengerList.map((p, index) => (
                                            <div className='flex justify-between items-center m-3' key={p.id}>
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
            )}

            {/* TAB 2: QUẢN LÝ ĐẶT CHỖ */}
            {currentTab === 'manage-booking' && (
                <div className='p-10'>
                    <div className='grid grid-cols-2 gap-8 items-center'>
                        <div className='border-b border-gray-300 pb-2'>
                            <span className='block text-xs text-gray-500 mb-1'>Mã đặt chỗ / số vé điện tử</span>
                            <input type='text' placeholder='Nhập mã đặt chỗ/số vé điện tử' className='w-full focus:outline-none text-lg bg-transparent' />
                        </div>
                        <div className='flex items-end gap-4'>
                            <div className='border-b border-gray-300 pb-2 flex-1'>
                                <span className='block text-xs text-gray-500 mb-1'>Họ</span>
                                <input type='text' placeholder='Nhập họ' className='w-full focus:outline-none text-lg bg-transparent' />
                            </div>
                            <button className='bg-blue-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-800 transition cursor-pointer'>
                                Tìm kiếm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 3: LÀM THỦ TỤC */}
            {currentTab === 'check-in' && (
                <div className='p-10'>
                    <div className='flex gap-6 mb-6 text-sm'>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type='radio' name='checkin-type' defaultChecked className='accent-blue-900' />
                            <span>Mã đặt chỗ (PNR)</span>
                        </label>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type='radio' name='checkin-type' className='accent-blue-900' />
                            <span>Số vé điện tử</span>
                        </label>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type='radio' name='checkin-type' className='accent-blue-900' />
                            <span>Số thẻ FFP</span>
                        </label>
                    </div>
                    <div className='grid grid-cols-2 gap-8 items-center'>
                        <div className='border-b border-gray-300 pb-2'>
                            <span className='block text-xs text-gray-500 mb-1'>Mã đặt chỗ (PNR)</span>
                            <input type='text' placeholder='Nhập mã đặt chỗ' className='w-full focus:outline-none text-lg bg-transparent' />
                        </div>
                        <div className='flex items-end gap-4'>
                            <div className='border-b border-gray-300 pb-2 flex-1'>
                                <span className='block text-xs text-gray-500 mb-1'>Họ</span>
                                <input type='text' placeholder='Nhập họ' className='w-full focus:outline-none text-lg bg-transparent' />
                            </div>
                            <button className='bg-blue-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-800 transition cursor-pointer'>
                                Làm thủ tục
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 4: TRẠNG THÁI CHUYẾN BAY */}
            {currentTab === 'flight-status' && (
                <div className='p-10'>
                    <div className='flex gap-6 mb-6 text-sm'>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type='radio' name='status-type' defaultChecked className='accent-blue-900' />
                            <span>Số hiệu chuyến bay</span>
                        </label>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type='radio' name='status-type' className='accent-blue-900' />
                            <span>Đường bay</span>
                        </label>
                    </div>
                    <div className='grid grid-cols-3 gap-6 items-center'>
                        <div className='border-b border-gray-300 pb-2'>
                            <span className='block text-xs text-gray-500 mb-1'>Số hiệu chuyến bay</span>
                            <input type='text' defaultValue='(VD: VN 1234)' className='w-full focus:outline-none text-lg font-medium text-blue-950 bg-transparent pt-7.5' />
                        </div>
                        <div>
                            <span className='block text-xs text-gray-500 mb-1'>Từ</span>
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
                        <div className='flex items-end gap-4'>
                            <div className='border-b border-gray-300 pb-2 flex-1'>
                                <span className='block text-xs text-gray-500 mb-2'>Ngày bay</span>
                                <TextField
                                    className=" w-full"
                                    onChange={handleClickInput}
                                    name='startDate'
                                    type='date'
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                        "& .MuiOutlinedInput-root": {
                                            border: "none",
                                        },
                                    }}
                                />
                            </div>
                            <button className='bg-blue-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-800 transition whitespace-nowrap cursor-pointer'>
                                Tìm chuyến bay
                            </button>
                        </div>
                    </div>
                </div >
            )
            }

            {/* TAB 5: TRA CỨU LỊCH BAY */}
            {
                currentTab === 'flight-schedule' && (
                    <div className='p-10'>
                        <div className='grid grid-cols-2 gap-8 items-center'>
                            <div>
                                <span className='block text-xs text-gray-500 mb-1'>✈️ Điểm đi</span>
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
                            <div>
                                <span className='block text-xs text-gray-500 mb-1'>✈️ Điểm đến</span>
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
                    </div>
                )
            }
        </div >
    );
}

export default Search;