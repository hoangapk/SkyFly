import React from 'react';
import { dialogStyle, textFieldDarkStyle } from '../../../utils/StyleMui';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Slide, TextField } from '@mui/material';
import DialogFooter from '../../../components/ui/DialogFooter';
import InputFileUpload from '../../../components/ui/InputFileUpload';
import ImgMediaCard from '../../../components/ui/ImgMediaCard';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function DialogSeatType({ open, handleClose, handleClickInput, seatType, addSeatType, error, handleImage }) {

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
                <DialogTitle>{seatType.id ? "Edit Seat Type" : "Add Seat Type"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <TextField value={seatType.name} helperText={error.name} error={!!error.name} onChange={handleClickInput} name='name' fullWidth sx={textFieldDarkStyle} id="outlined-name" label="Name" variant="outlined" />
                        <TextField value={seatType.price} helperText={error.price} error={!!error.price} onChange={handleClickInput} name='price' fullWidth sx={textFieldDarkStyle} id="outlined-name" label="Price" variant="outlined" />
                        <InputFileUpload handleImage={handleImage} />
                        <ImgMediaCard img_url={seatType.img_url} />
                    </DialogContentText>
                </DialogContent>
                <DialogFooter handleClose={handleClose} add={addSeatType} title={seatType.id ? "Update" : "Add"} />
            </Dialog>
        </React.Fragment>
    );
}

export default DialogSeatType;