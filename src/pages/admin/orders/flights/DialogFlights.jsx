import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { dialogStyle, textFieldDarkStyle } from '../../../../utils/StyleMui';
import DialogFooter from '../../../../components/ui/DialogFooter';
import AutocompleteCard from '../../../../components/ui/AutocompleteCard';
import { AirportContext } from '../../../../contexts/AirportProvider';
import { AirlineContext } from '../../../../contexts/AirlineProvider';
import { AircraftContext } from '../../../../contexts/AircraftProvider';
import { useContext } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogFlights({ open, handleClose, handleClickInput, flight, addFlight, error }) {
    const airports = useContext(AirportContext);
    const airlines = useContext(AirlineContext);
    const aircraft = useContext(AircraftContext);

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
                <DialogTitle>{flight.id ? "Edit Flight" : "Add Flight"}</DialogTitle>
                <DialogContent>
                    <AutocompleteCard values={flight.airline_id} error={error} data={airlines} name="airline_id" handleClickInput={handleClickInput} title={"airline_id"} />
                    <AutocompleteCard values={flight.aircraft_id} error={error} data={aircraft} name="aircraft_id" handleClickInput={handleClickInput} title={"aircraft_id  "} />
                    <AutocompleteCard values={flight.from_airport} error={error} data={airports} name="from_airport" handleClickInput={handleClickInput} title={"From airport"} />
                    <AutocompleteCard values={flight.to_airport} error={error} data={airports} name="to_airport" handleClickInput={handleClickInput} title={"To airport"} />
                    <TextField type='date' helperText={error.departure_time} error={!!error.departure_time} name='departure_time' value={flight.departure_time} onChange={handleClickInput} fullWidth sx={textFieldDarkStyle} label="Departure_time" variant="outlined" slotProps={{
                        inputLabel: { shrink: true, },
                    }} />
                    <TextField type='date' helperText={error.arrival_time} error={!!error.arrival_time} name='arrival_time' value={flight.arrival_time} onChange={handleClickInput} fullWidth sx={textFieldDarkStyle} label="Arrival_time" variant="outlined" slotProps={{
                        inputLabel: { shrink: true, },
                    }} />
                    <TextField type='number' helperText={error.discount} error={!!error.discount} name='discount' value={flight.discount} onChange={handleClickInput} fullWidth sx={textFieldDarkStyle} label="Discount" variant="outlined" />
                    <FormControl >
                        <h1 className='mt-4'>Round trip</h1>
                        <RadioGroup row onChange={handleClickInput} value={flight.is_round_trip} name="is_round_trip">
                            <FormControlLabel value={true} control={<Radio sx={{ color: 'white' }} />} label="true" />
                            <FormControlLabel value={false} control={<Radio sx={{ color: 'white' }} />} label="false" />
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogFooter handleClose={handleClose} add={addFlight} title={flight.id ? "update" : "Add"} />
            </Dialog>
        </React.Fragment>
    );
}
