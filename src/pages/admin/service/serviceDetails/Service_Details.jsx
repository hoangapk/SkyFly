import React, { useState } from 'react';
import { serviceDetailsType } from '../../../../types/Types';
import { addDocument, updateDocument } from '../../../../services/firebaseService';
import SearchAdmin from '../../../../components/common/admin/SearchAdmin';
import DialogServiceDetails from './DialogServiceDetails';
import TableServiceDetails from './TableServiceDetails';

function Service_Details(props) {
    const [open, setOpen] = useState(false);
    const [serviceDetail, setServiceDetail] = useState(serviceDetailsType);
    const [error, setError] = useState(serviceDetailsType);
    const [search, setSearch] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
        setServiceDetail(serviceDetailsType);
        setError(serviceDetailsType);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleClickInput = (e) => {
        setServiceDetail({ ...serviceDetail, [e.target.name]: e.target.value });
    }
    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setServiceDetail({ ...serviceDetail, img_url: reader.result })
            };
            reader.readAsDataURL(file);
        }
    }
    const addServiceDetail = async () => {
        if (validation()) {
            console.log(error);

            return;
        }
        if (serviceDetail.id) {
            await updateDocument("ServiceDetails", serviceDetail);
        } else {
            await addDocument("ServiceDetails", serviceDetail);
        }
        handleClose();
    }
    const validation = () => {
        const newError = {};
        newError.name = serviceDetail.name ? "" : "Please enter your name";
        setError(newError);
        return Object.values(newError).some(p => p !== "");
    }
    const handleEdit = (row) => {
        handleClickOpen();
        setServiceDetail(row);
    }
    return (
        <div>
            <SearchAdmin handleSearch={handleSearch} handleClickOpen={handleClickOpen} title={"Service Details"} />
            <DialogServiceDetails error={error} addServiceDetail={addServiceDetail} handleImage={handleImage} serviceDetail={serviceDetail} open={open} handleClose={handleClose} handleClickInput={handleClickInput} />
            <TableServiceDetails handleEdit={handleEdit} search={search} />
        </div>
    );
}

export default Service_Details;