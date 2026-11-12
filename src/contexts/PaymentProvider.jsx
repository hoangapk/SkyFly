import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebaseService';

export const PaymentContext = createContext();

function PaymentProvider({ children }) {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("payments", (data) => {
            setPayments(data);
        });
        return () => unsubscribe();
    }, []);

    return (
        <PaymentContext.Provider value={payments}>
            {children}
        </PaymentContext.Provider>
    );
}

export default PaymentProvider;