import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { dialogStyle, textFieldDarkStyle } from '../../../../utils/StyleMui';
import { cities, countries } from '../../../../utils/data';
import AutocompleteCard from '../../../../components/ui/AutocompleteCard';
import DialogFooter from '../../../../components/ui/DialogFooter';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAirport({ open, handleClose, handleClickInput, airport, addAirport, error }) {


    return (
        <React.Fragment>
            <Dialog
                open={open}
                slots={{
                    transition: Transition,
                }}
                fullWidth
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
                sx={dialogStyle}
            >
                <DialogTitle>{airport.id ? "Edit Airport" : "Add Airport"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <TextField helperText={error.name} error={!!error.name} value={airport.name} onChange={handleClickInput} name='name' fullWidth sx={textFieldDarkStyle} id="outlined-name" label="Name" variant="outlined" />
                        <AutocompleteCard values={airport} error={error} data={countries} name="country_id" handleClickInput={handleClickInput} title={"Country"} />    
                        <AutocompleteCard values={airport} error={error} data={cities.filter(p => p.country_id == airport.country_id)} name="city_id" handleClickInput={handleClickInput} title={"City"} />
                    </DialogContentText>
                </DialogContent>
                <DialogFooter handleClose={handleClose} add={addAirport} title={airport.id ? "Update" : "Add"} />
            </Dialog>
        </React.Fragment>
    );
}