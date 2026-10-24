import React, { useState } from 'react';
import { flightsType } from '../../../../types/Types';
import SearchAdmin from '../../../../components/common/admin/SearchAdmin';
import DialogFlights from './DialogFlights';
import TableFlights from './TableFlights';
import { addDocument, updateDocument } from '../../../../services/firebaseService';
function Flights(props) {
    const [open, setOpen] = useState(false);
    const [flight, setFlight] = useState(flightsType);
    const [error, setError] = useState(flightsType);
    const [search, setSearch] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
        setFlight(flightsType);
        setError(flightsType);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleClickInput = (e) => {
        setFlight({ ...flight, [e.target.name]: e.target.value });
    }
    const addFlight = async () => {
        if (validation()) {
            return;
        }

        if (flight.id) {
            await updateDocument("Flights", flight);
        } else {
            await addDocument("Flights", flight);
        }

        handleClose();
    }

    const validation = () => {
        const newError = {};
        newError.airline_id = flight.airline_id ? "" : "Please enter your airline";
        newError.aircraft_id = flight.aircraft_id ? "" : "Please enter your aircraft";
        newError.from_airport = flight.from_airport ? "" : "Please enter your from airport	";
        newError.to_airport = flight.to_airport ? "" : "Please enter your airport";
        newError.departure_time = flight.departure_time ? "" : "Please enter your departure time";
        newError.arrival_time = flight.arrival_time ? "" : "Please enter your to arrival time";
        newError.discount = flight.discount ? "" : "Please enter your discount";
        setError(newError);
        console.log(newError);

        return Object.values(newError).some(p => p !== "");
    }
    const handleEdit = (row) => {
        handleClickOpen();
        setFlight(row);
    }
    return (
        <div>
            <SearchAdmin handleSearch={handleSearch} handleClickOpen={handleClickOpen} title={"List Flights"} />
            <DialogFlights search={search} flight={flight} error={error} addFlight={addFlight} handleClose={handleClose} open={open} handleClickInput={handleClickInput} />
            <TableFlights handleEdit={handleEdit} search={search} />
        </div>
    );
}

export default Flights;