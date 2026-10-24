import { Button, Dialog, DialogContent, DialogTitle, Slide, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { dialogStyle, textFieldDarkStyle } from '../../../../utils/StyleMui';
import DialogFooter from '../../../../components/ui/DialogFooter';
import AutocompleteCard from '../../../../components/ui/AutocompleteCard';
import { AirlineContext } from '../../../../contexts/AirlineProvider';
import DialogChoose from './DialogChoose';
import { ServiceDetailContext } from '../../../../contexts/ServiceDetailProvider';
import { getObjectById } from '../../../../services/reponsitory';
import { RiDeleteBack2Fill } from 'react-icons/ri';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogServiceAirlines({ handleChoose, open, handleClose, handleClickInput, serviceAirline, addServiceAirline, error }) {
    const airlines = useContext(AirlineContext);
    const serviceDetail = useContext(ServiceDetailContext);
    const [openChoose, setOpenChoose] = React.useState(false);

    const handleClickOpenChoose = () => {
        setOpenChoose(true);
    };

    const handleCloseChoose = () => {
        setOpenChoose(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                slots={{
                    transition: Transition,
                }}
                fullWidth="lg"
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={dialogStyle}
            >
                <DialogTitle>{serviceAirline.id ? "Edit Service Airline" : "Add Service Airline"}</DialogTitle>
                <DialogContent>
                    <TextField value={serviceAirline.name} error={!!error.name} helperText={error.name} onChange={handleClickInput} name='name' fullWidth sx={textFieldDarkStyle} id="outlined-name" label="Name" variant="outlined" />
                    <TextField value={serviceAirline.price} error={!!error.price} helperText={error.price} onChange={handleClickInput} name='price' fullWidth sx={textFieldDarkStyle} id="outlined-name" label="Price" variant="outlined" />
                    <AutocompleteCard values={serviceAirline.id_airline} error={error} data={airlines} name="id_airline" handleClickInput={handleClickInput} title={"Airline"} />
                    <Button variant='contained' sx={{ mt: 2 }} onClick={handleClickOpenChoose}>
                        Service +
                    </Button>
                    <div className="flex gap-2 flex-col mt-2">
                        {
                            serviceAirline.list_id_service.map(p => (
                                <div className="col-span-1 flex gap-2 justify-between items-center border border-amber-700 p-1.5 rounded-md hover:bg-linear-to-r hover:from-blue-500 hover:via-blue-500 hover:to-red-500 transition ease-in duration-200">
                                    <img className='h-10 sd' src={getObjectById(serviceDetail, p).img_url} alt="" />
                                    <p className=''>{getObjectById(serviceDetail, p).name}</p>
                                    <RiDeleteBack2Fill onClick={() => handleChoose(p)} className='text-red-300 text-2xl hover:text-red-800' />
                                </div>
                            ))
                        }
                    </div>
                    <DialogChoose serviceAirline={serviceAirline} handleChoose={handleChoose} openChoose={openChoose} handleCloseChoose={handleCloseChoose} />
                </DialogContent>
                <DialogFooter handleClose={handleClose} add={addServiceAirline} title={serviceAirline.id ? "update" : "Add"} />
            </Dialog>
        </React.Fragment>
    );
}
