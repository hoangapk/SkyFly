import React from 'react';
import Home from '../pages/clients/home/Home';
import FlightSearch from '../pages/clients/flightsSearch/FlightSearch';
import { Route, Routes } from 'react-router-dom';
import ClientsIn4 from '../pages/clients/clientsIn4/ClientsIn4';
import SeatOption from '../pages/clients/seatOption/SeatOption';
import Payment from '../pages/clients/payment/Payment';
import HistoryPayment from '../pages/clients/historyPayment/HistoryPayment';
import ServiceSupport from '../pages/clients/serviceSupport/ServiceSupport';
import Trip from '../pages/clients/trips/Trip';
import Experience from '../pages/clients/experiences/Experience';
import Support from '../pages/clients/supports/Support';


function ClientRouters(props) {
    const routers = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/flightSearch",
            element: <FlightSearch />
        },
        {
            path: "/clientsIn4",
            element: <ClientsIn4 />
        },
        {
            path: "/seatOption",
            element: <SeatOption />
        },
        {
            path: "/payment",
            element: <Payment />
        },
        {
            path: "/historyPayment",
            element: <HistoryPayment />
        },
        {
            path: "/serviceSupport",
            element: <ServiceSupport />
        },
        {
            path: "/trips",
            element: <Trip />
        },
        {
            path: "/experience",
            element: <Experience />
        },
        {
            path: "/support",
            element: <Support />
        }
    ];
    return (
        <Routes>
            {
                routers.map(item => (
                    <Route path={item.path} element={item.element} />
                ))
            }
        </Routes>
    );
}

export default ClientRouters;