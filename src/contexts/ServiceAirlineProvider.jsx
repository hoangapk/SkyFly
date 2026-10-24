import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebaseService';

export const ServiceAirlineContext = createContext();
function ServiceAirlineProvider({ children }) {
    const [serviceAirlines, setServiceAirlines] = useState([]);

    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("ServiceAirlines", (p) => {
            setServiceAirlines(p)
        });
        return () => unsubscribe();
    }, [])

    return (
        <ServiceAirlineContext.Provider value={serviceAirlines}>
            {children}
        </ServiceAirlineContext.Provider>
    );
}

export default ServiceAirlineProvider;