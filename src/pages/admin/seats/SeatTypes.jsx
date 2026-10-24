import React, { useState } from 'react';
import SearchAdmin from '../../../components/common/admin/SearchAdmin';
import { seatTypeType } from '../../../types/Types';
import DialogSeatType from './DialogSeatType';
import TableSeatType from './TableSeatType';
import { addDocument, updateDocument } from '../../../services/firebaseService';

function SeatTypes(props) {
    const [open, setOpen] = useState(false);
    const [seatType, setSeatType] = useState(seatTypeType);
    const [search, setSearch] = useState("");
    const [error, setError] = useState(seatTypeType);
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleClickOpen = () => {
        setOpen(true);
        setSeatType(seatTypeType);
        
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClickInput = (e) => {
        setSeatType({ ...seatType, [e.target.name]: e.target.value })
    };
    const addSeatType = async () => {
        if (validation()) {
            return;
        }

        if (seatType.id) {
            await updateDocument("SeatTypes", seatType);
        } else {
            await addDocument("SeatTypes", seatType);
        }

        handleClose();
    };
    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSeatType({ ...seatType, img_url: reader.result })
            };
            reader.readAsDataURL(file);
        }
    }
    const handleEdit = (row) => {
        handleClickOpen();
        setSeatType(row);
    }
    const validation = () => {
        const newError = {};
        newError.name = seatType.name ? "" : "Please enter your name";
        newError.price = seatType.price ? "" : "Please enter your price";
        setError(newError);
        return Object.values(newError).some(p => p !== "");
    }
    return (
        <div>
            <SearchAdmin handleSearch={handleSearch} handleClickOpen={handleClickOpen} title={"List Seat Types"} />
            <DialogSeatType open={open} handleClose={handleClose} handleClickInput={handleClickInput}
                seatType={seatType} handleImage={handleImage} addSeatType={addSeatType} error={error} />
            <TableSeatType handleEdit={handleEdit} search={search} />
        </div>
    );
}

export default SeatTypes;