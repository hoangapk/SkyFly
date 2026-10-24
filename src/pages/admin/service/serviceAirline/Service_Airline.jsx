import React, { useState } from 'react';
import { addDocument, updateDocument } from '../../../../services/firebaseService';
import SearchAdmin from '../../../../components/common/admin/SearchAdmin';
import TableServiceAirlines from './TableServiceAirlines';
import { serviceAirlinesType } from '../../../../types/Types';
import DialogServiceAirlines from './DialogServiceAirlines';

function Service_Airline(props) {
    const [open, setOpen] = useState(false);
    const [serviceAirline, setServiceAirline] = useState(serviceAirlinesType);
    const [error, setError] = useState(serviceAirlinesType);
    const [search, setSearch] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
        setServiceAirline(serviceAirlinesType);
        setError(serviceAirlinesType);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleClickInput = (e) => {
        setServiceAirline({ ...serviceAirline, [e.target.name]: e.target.value });
    }
    const addServiceAirline = async () => {
        if (validation()) {
            console.log(error);

            return;
        }
        if (serviceAirline.id) {
            await updateDocument("ServiceAirlines", serviceAirline);
        } else {
            await addDocument("ServiceAirlines", serviceAirline);
        }
        handleClose();
    }
    
    const validation = () => {
        const newError = {};
        newError.name = serviceAirline.name ? "" : "Please enter your name";
        newError.price = serviceAirline.price ? "" : "Please enter your price";
        newError.id_airline = serviceAirline.id_airline ? "" : "Please enter your Airline";  
        setError(newError);
        return Object.values(newError).some(p => p !== "");
    }
    const handleEdit = (row) => {
        handleClickOpen();
        setServiceAirline(row);
    }

    const handleChoose = (id) => {
        setServiceAirline(pre => {
            return {...serviceAirline, list_id_service : toggleAirline(pre.list_id_service ,id) }
        })
    }

    const toggleAirline = (data ,id) => {
        return data.includes(id) ? data.filter(p => p != id) : [...data , id]
    }
    return (
        <div>
            <SearchAdmin handleSearch={handleSearch} handleClickOpen={handleClickOpen} title={"Service Airlines"} />
            <DialogServiceAirlines handleChoose={handleChoose} serviceAirline={serviceAirline} error={error} addServiceAirline={addServiceAirline} handleClose={handleClose} open={open} handleClickInput={handleClickInput} />
            <TableServiceAirlines handleEdit={handleEdit} search={search} />
        </div>
    );
}

export default Service_Airline;