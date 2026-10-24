import { BiSolidCategory } from "react-icons/bi";
import { CgAirplane } from "react-icons/cg";
import { FaRoad } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { IoAccessibility } from "react-icons/io5";
import { MdOutlineContactSupport, MdOutlineSupportAgent, MdRoomService } from "react-icons/md";
import { PiTicketDuotone, PiUserFocus } from "react-icons/pi";
import { RiArmchairFill } from "react-icons/ri";
import { TbTicket, TbWorldSearch } from "react-icons/tb";

export const LISTMENU = [
    {
        title: "Dashboard",
        icon: <BiSolidCategory />,
        path: "/"
    },
    {
        title: "Categories",
        icon: <GoPackage />,
        path: "/categories"
    },
    {
        title: "Plane",
        icon: <CgAirplane />,
        subMenu: [
            { name: "Airports", path: "/airports" },
            { name: "Aircrafts", path: "/aircrafts" },
            { name: "AirLines", path: "/airlines" },
        ]
    },
       {
        title: "Seats",
        icon: <RiArmchairFill />,
        subMenu: [
            { name: "SeatTypes", path: "/seat_types" },
        ]
    },
    {
        title: "Service",
        icon: <MdRoomService />,
        subMenu: [
            { name: "Service_Airlines", path: "/service_airlines" },
            { name: "Service_Details", path: "/service_details" },
        ]
    },
    {
        title: "Orders",
        icon: <PiTicketDuotone />,
        subMenu: [
            { name: "Flights", path: "/flights" },
            { name: "Bookings", path: "/bookings" },
            { name: "Customer_Infos", path: "/customer_infos" },
        ]
    },
    {
        title: "user Pages",
        icon: <PiUserFocus />,
        path: "/"
    },

];
export const upload_preset = "hoangapk" ;
export const cloud_name = "ddvzrqpna";

// Constants for roles
export const ROLES = {
  ADMIN: 'admin',        // Quản trị viên cấp cao
  MODERATOR: 'moderator', // Quản trị viên cấp trung (người kiểm duyệt)
  USER: 'user',          // Người dùng thông thường
};
export const LISTHOME = [
    {
        title: "Explore",
        icon: <TbWorldSearch />,
        path: "/"
    },
    {
        title: "Book Flight",
        icon: <TbTicket />,
        path: "/"
    },
    {
        title: "Ancillary Services",
        icon: <MdOutlineSupportAgent />,
        path: "/"
    },
    {
        title: "Itinerary",
        icon: <FaRoad />,
        path: "/"
    },
    {
        title: "Flight Experience",
        icon: <IoAccessibility />,
        path: "/"
    },
    {
        title: "Help",
        icon: <MdOutlineContactSupport />,
        path: "/"
    },

];