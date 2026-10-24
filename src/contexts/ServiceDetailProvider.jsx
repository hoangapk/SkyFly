import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebaseService';

export const ServiceDetailContext = createContext();
function ServiceDetailProvider({ children }) {
    const [serviceDetail, setServiceDetails] = useState([]);

    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("ServiceDetails", (p) => {
            setServiceDetails(p)
        });
        return () => unsubscribe();
    }, [])

    return (
        <ServiceDetailContext.Provider value={serviceDetail}>
            {children}
        </ServiceDetailContext.Provider>
    );
}

export default ServiceDetailProvider;