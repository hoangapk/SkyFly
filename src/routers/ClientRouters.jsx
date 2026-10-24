import React from 'react';
import Home from '../pages/clients/home/Home';
import FlightSearch from '../pages/clients/flightsSearch/FlightSearch';
import { Route, Routes } from 'react-router-dom';
import ClientsIn4 from '../pages/clients/clientsIn4/ClientsIn4';

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