import React, { useContext, useEffect, useMemo } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FlightContext } from '../../../contexts/FlightProvider';
import { AirportContext } from '../../../contexts/AirportProvider';
import { getObjectById } from '../../../services/reponsitory';
import { cities } from '../../../utils/data';
import { PiClockCountdownBold } from 'react-icons/pi';
import { GiCommercialAirplane } from 'react-icons/gi';
import LOGO2 from '../../../assets/LOGO2.png';
import { BiLinkExternal } from 'react-icons/bi';
import { AircraftContext } from '../../../contexts/AircraftProvider';
import { SeatTypeContext } from '../../../contexts/SeatTypeProvider';
import { Link } from 'react-router-dom';
import { BookingContext } from '../../../contexts/BookingProvider';
  const colorCode = ["bg-blue-800 hover:bg-blue-900", "bg-sky-400 hover:bg-sky-500", "bg-yellow-500 hover:bg-yellow-600 rounded-r-3xl "]
function FlightSearch(props) {
    const flights = useContext(FlightContext);
    const airports = useContext(AirportContext);
    const aircrafts = useContext(AircraftContext);
    const seatTypes = useContext(SeatTypeContext);
    const { booking,setBooking } = useContext(BookingContext);
    
    const listFlight = useMemo(() => {
      return flights.filter(p => 
        p.is_round_trip == booking.is_round_trip &&
        getObjectById(airports,p.from_airport).city_id == booking.from && 
        getObjectById(airports,p.to_airport).city_id == booking.to &&
        p.departure_time == booking.startDate
    )
    }, [booking, flights,airports]);

    const countChair = (id_aircraft, seat_id) => {
        const aircraft = getObjectById(aircrafts, id_aircraft);
        return aircraft.listChair.reduce((sum, item) => item.id_seat_type == seat_id ? sum + 1 : sum, 0);
    }

    return (
        <div className='w-[80vw] m-auto p-10 mt-10'>
            {
                listFlight.map((p, index) => (
                    <div className='grid grid-cols-2 shadow-xl rounded-3xl mt-3'>
                        <div className="col-span-1 grid grid-cols-2 p-4 my-10">
                            < div className="col-span-1 p-2 flex items-center gap-2 border-r border-blue-800 ">
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">16:00</p>
                                    <p className="text-gray-500 font-medium text-lg">{getObjectById(cities, getObjectById(airports, p.from_airport).city_id).code}</p>
                                    <p className="text-sm text-gray-600">Nhà ga 1</p>
                                </div>
                                <div className="text-xs text-center flex-1 text-gray-600 mb-1 border-b border-dashed border-gray-400">Bay thẳng</div>
                                <div className=' text-end'>
                                    <p className="text-2xl font-bold text-gray-800">16:00</p>
                                    <p className="text-gray-500 font-medium text-lg">{getObjectById(cities, getObjectById(airports, p.to_airport).city_id).code}</p>
                                    <p className="text-sm text-gray-600">Nhà ga 1</p>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col justify-between pl-4">
                                <div className='flex gap-2 text-xs items-center'>
                                    <PiClockCountdownBold />
                                    <p>
                                        Thời gian bay
                                        2h 10phút
                                    </p>
                                </div>
                                <div className='flex gap-4 text-xs items-center'>
                                    <GiCommercialAirplane />
                                    <p>
                                        VN 273 Khai thác bởi Skyfly
                                    </p>
                                    <div className=''>
                                        <img src={LOGO2} alt="Logo hãng bay" className="h-8 object-contain" />
                                    </div>
                                </div>
                                <div className='flex w-fit text-xs font-semibold gap-2 items-center text-sky-900 hover:bg-blue-100 rounded-2xl px-2 py-1   cursor-pointer '>
                                    <p>Chi tiết hành trình</p>
                                    <BiLinkExternal />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 grid grid-cols-3 gap-0.5'>
                            {
                                seatTypes.map((item, index) => (
                                    <Link to="/clientsIn4"
                                        key={item.id || index}
                                        className={`flex flex-col justify-center items-center p-3 text-white cursor-pointer transition-all duration-300 hover:shadow-xl group ${colorCode[index % colorCode.length]}`}
                                    >                                        <p className='font-semibold mb-2'>{item.name}</p>
                                        <p>{countChair(p.aircraft_id, item.id)}</p>
                                        <p className='font-semibold'>{item.price}</p>
                                        <p>VND</p>
                                        <div className='flex justify-center mt-2'>
                                            <MdKeyboardArrowDown />
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>

    );
}

export default FlightSearch;