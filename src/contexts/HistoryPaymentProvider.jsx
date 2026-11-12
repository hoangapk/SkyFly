import React, { createContext, useEffect, useState } from 'react';
import { fetchDocumentsRealtime } from '../services/firebaseService';
import { searchType } from '../types/Types';

export const HistoryPaymentContext = createContext();
function HistoryPaymentProvider({ children }) {
    const [historyPayments, setHistoryPayments] = useState(searchType);

    useEffect(() => {
        const unsubscribe = fetchDocumentsRealtime("HistoryPayments", (p) => {
            setHistoryPayments(p)
        });
        return () => unsubscribe();
    }, [])

    return (
        <HistoryPaymentContext.Provider value={historyPayments}>
            {children}
        </HistoryPaymentContext.Provider>
    );
}

export default HistoryPaymentProvider;