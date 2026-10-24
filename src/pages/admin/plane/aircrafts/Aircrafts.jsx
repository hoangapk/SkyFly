import React, { useState } from 'react';
import SearchAdmin from '../../../../components/common/admin/SearchAdmin';
import DialogAircraft from './DialogAircraft';
import { aircraftType } from '../../../../types/Types';
import TableAircraft from './TableAircraft';
import { addDocument, updateDocument } from '../../../../services/firebaseService';

function Aircrafts(props) {
    const [open, setOpen] = useState(false);
    const [aircraft, setAircraft] = useState(aircraftType);
    const [error, setError] = useState(aircraftType);
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleClickOpen = () => {
        setOpen(true);
        setAircraft(aircraftType);
        setError(aircraftType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickInput = (e) => {
        setAircraft({ ...aircraft, [e.target.name]: e.target.value })
    };

    const addAircraft = async () => {
        if (validation()) {
            return;
        }

        if (aircraft.id) {
            await updateDocument("Aircrafts", aircraft);
        } else {
            await addDocument("Aircrafts", aircraft);
        }

        handleClose();
    };

    const handleEdit = (row) => {
        handleClickOpen();
        setAircraft(row);
    }

    const validation = () => {
        const newError = {};
        newError.name = aircraft.name ? "" : "Please enter your name";
        newError.airline_id = aircraft.airline_id ? "" : "Please enter your name";
        newError.airport_id = aircraft.airport_id ? "" : "Please enter your name";
        newError.rows = aircraft.rows ? "" : "Please enter your rows";
        newError.cols = aircraft.cols ? "" : "Please enter your cols";

        setError(newError);
        return Object.values(newError).some(p => p !== "");
    }

    const handleChair = (index, id) => {
        setAircraft(pre => {
            return { ...aircraft, listChair: hanldeToggle(pre.listChair, index, id) }
        })
    };

    const hanldeToggle = (array, index, id) => {
        return array.find(p => p.index == index) ? array.find(p => p.index == index && p.id_seat_type == id) ? array.filter(p => p.index != index) : array.map(p => p.index == index ? { index: index, id_seat_type: id } : p) : [...array, { index: index, id_seat_type: id }]
    }
    return (
        <div>
            <SearchAdmin handleSearch={handleSearch} handleClickOpen={handleClickOpen} title={"List Aircrafts"} />
            <DialogAircraft handleChair={handleChair} error={error} addAircraft={addAircraft} aircraft={aircraft} handleClickInput={handleClickInput} open={open} handleClose={handleClose} />
            <TableAircraft handleEdit={handleEdit} search={search} />
        </div>
    );
}

export default Aircrafts;