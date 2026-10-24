import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import InputFileUpload from '../../../../components/ui/InputFileUpload';
import ImgMediaCard from '../../../../components/ui/ImgMediaCard';
import { dialogStyle, textFieldDarkStyle } from '../../../../utils/StyleMui';
import DialogFooter from '../../../../components/ui/DialogFooter';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAirline({ open, handleClose, handleClickInput, handleImage, airline, addAirline, error }) {

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
                <DialogTitle>{airline.id ? "Edit Airline" : "Add Airline"}</DialogTitle>
                <DialogContent>
                    <TextField helperText={error.name} error={!!error.name} value={airline.name} onChange={handleClickInput} name='name' fullWidth sx={textFieldDarkStyle} id="outlined-name" label="Name" variant="outlined" />
                    <InputFileUpload handleImage={handleImage} />
                    <ImgMediaCard img_url={airline.img_url} />
                </DialogContent>
                <DialogFooter handleClose={handleClose} add={addAirline} title={airline.id ? "update" : "Add"} />
            </Dialog>
        </React.Fragment>
    );
}
