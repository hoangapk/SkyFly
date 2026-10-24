import { Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup, Slide, TextField } from '@mui/material';
import React from 'react';
import { dialogStyle, textFieldDarkStyle } from '../../../../utils/StyleMui';
import InputFileUpload from '../../../../components/ui/InputFileUpload';
import ImgMediaCard from '../../../../components/ui/ImgMediaCard';
import DialogFooter from '../../../../components/ui/DialogFooter';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogServiceDetails({ open, handleClose, handleClickInput, handleImage, serviceDetail, addServiceDetail, error }) {
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
                <DialogTitle>{serviceDetail.id ? "Edit Service Detail" : "Add Service Detail"}</DialogTitle>
                <DialogContent>
                    <TextField helperText={error.name} error={!!error.name} value={serviceDetail.name} onChange={handleClickInput} name='name' fullWidth sx={textFieldDarkStyle} id="outlined-name" label="Name" variant="outlined" />
                    <InputFileUpload handleImage={handleImage} />
                    <ImgMediaCard img_url={serviceDetail.img_url} />
                    <FormControl >
                        <RadioGroup row onChange={handleClickInput}  value={serviceDetail.status} name="status">
                            <FormControlLabel value={true} control={<Radio sx={{ color: 'white' }} />} label="true" />
                            <FormControlLabel value={false} control={<Radio sx={{ color: 'white' }} />} label="false" />
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogFooter handleClose={handleClose} add={addServiceDetail} title={serviceDetail.id ? "update" : "Add"} />
            </Dialog>
        </React.Fragment>
    );
}
