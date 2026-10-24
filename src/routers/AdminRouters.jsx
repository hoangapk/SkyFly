import React from 'react';
import DashBoard from '../pages/admin/dashboard/DashBoard';
import Airports from '../pages/admin/plane/airports/Airports';
import Aircrafts from '../pages/admin/plane/aircrafts/Aircrafts';
import Airlines from '../pages/admin/plane/airlines/Airlines';
import Service_Airline from '../pages/admin/service/serviceAirline/Service_Airline';
import Flights from '../pages/admin/orders/flights/Flights';
import Bookings from '../pages/admin/orders/bookings/Bookings';
import CustomerInfos from '../pages/admin/orders/customerInfos/CustomerInfos';
import UserPages from '../pages/admin/userPages/UserPages';
import { Route, Routes } from 'react-router-dom';
import Service_Details from '../pages/admin/service/serviceDetails/Service_Details';
import SeatTypes from '../pages/admin/seats/SeatTypes';

function AdminRouters(props) {
    const MENU = [
        {
            path: "/",
            element: <DashBoard />
        },
        {
            path: "/airports",
            element: <Airports />
        },
        {
            path: "/aircrafts",
            element: <Aircrafts />
        },
         {
            path: "/airlines",
            element: <Airlines />
        },
        {
            path: "/service_airlines",
            element: <Service_Airline />
        },
        {
            path: "/service_details",
            element: <Service_Details />
        },
        {
            path: "/seat_types",
            element: <SeatTypes />
        },
        {
            path: "/flights",
            element: <Flights />
        },
        {
            path: "/bookings",
            element: <Bookings />
        },
        {
            path: "/customerInfos",
            element: <CustomerInfos />
        },
        {
            path: "/userPages",
            element: <UserPages />
        },
    ]
    return (
        <Routes>
            {
                MENU.map(item => (
                    <Route path={item.path} element={item.element} />
                ))
            }
        </Routes>
    );
}

export default AdminRouters;
