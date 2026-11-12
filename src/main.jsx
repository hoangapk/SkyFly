import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AirlineProvider from './contexts/AirlineProvider.jsx'
import AirportProvider from './contexts/AirportProvider.jsx'
import AircraftProvider from './contexts/AircraftProvider.jsx'
import ServiceDetailProvider from './contexts/ServiceDetailProvider.jsx'
import ServiceAirlineProvider from './contexts/ServiceAirlineProvider.jsx'
import SeatTypeProvider from './contexts/SeatTypeProvider.jsx'
import FlightProvider from './contexts/FlightProvider.jsx'
import AccountProvider, { AccountContext } from './contexts/AccountProvider.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import BookingProvider from './contexts/BookingProvider.jsx'
import HistoryPaymentProvider from './contexts/HistoryPaymentProvider.jsx'
import PaymentProvider from './contexts/PaymentProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PaymentProvider>
        <HistoryPaymentProvider>
          <AirlineProvider>
            <AirportProvider>
              <AircraftProvider>
                <ServiceDetailProvider>
                  <ServiceAirlineProvider>
                    <SeatTypeProvider>
                      <FlightProvider>
                        <AccountProvider>
                          <AuthProvider>
                            <BookingProvider>
                              <App />
                            </BookingProvider>
                          </AuthProvider>
                        </AccountProvider>
                      </FlightProvider>
                    </SeatTypeProvider>
                  </ServiceAirlineProvider>
                </ServiceDetailProvider>
              </AircraftProvider>
            </AirportProvider>
          </AirlineProvider>
        </HistoryPaymentProvider>
      </PaymentProvider>
    </BrowserRouter >
  </StrictMode >,
)
