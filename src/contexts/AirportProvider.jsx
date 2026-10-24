import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebaseService';

export const AirportContext = createContext();
function AirportProvider({ children }) {
    const [airports, setAirports] = useState([]);

    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("Airports", (p) => {
            setAirports(p)
        });
        return () => unsubscribe();
    }, [])

    return (
        <AirportContext.Provider value={airports}>
            {children}
        </AirportContext.Provider>
    );
}

export default AirportProvider;