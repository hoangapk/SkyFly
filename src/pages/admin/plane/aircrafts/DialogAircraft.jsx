
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { dialogStyle, textFieldDarkStyle } from '../../../../utils/StyleMui';
import DialogFooter from '../../../../components/ui/DialogFooter';
import AutocompleteCard from '../../../../components/ui/AutocompleteCard';
import { AirlineContext } from '../../../../contexts/AirlineProvider';
import { AirportContext } from '../../../../contexts/AirportProvider';
import { useContext } from 'react';
import { TextField } from '@mui/material';
import { PiArmchairLight } from 'react-icons/pi';
import DialogSelectSeatType from './DialogSelectSeatType';
import { SeatTypeContext } from '../../../../contexts/SeatTypeProvider';
import { getObjectById } from '../../../../services/reponsitory';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAircraft({ open, handleClose, handleClickInput, aircraft, addAircraft, error, handleChair }) {
  const airlines = useContext(AirlineContext);
  const airports = useContext(AirportContext);
  const seatTypes = useContext(SeatTypeContext);
  const [openChoose, setOpenChoose] = React.useState(false);
  const [index, setIndex] = React.useState(null);

  const handleClickOpenChoose = (index) => {
    setOpenChoose(true);
    setIndex(index);
  };

  const handleCloseChoose = () => {
    setOpenChoose(false);
  };

  const handleShow = (index) => {
    const check = aircraft.listChair.find(p => p.index == index);
    return check ? <img className='h-12 rounded-xl p-1 sd' src={getObjectById(seatTypes, check.id_seat_type).img_url} alt="" /> : <PiArmchairLight className="text-5xl text-gray-400 rounded-xl p-1 sd" />
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        fullWidth
        maxWidth="md"
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={dialogStyle}
      >
        <DialogTitle>{aircraft.id ? "Edit Aircraft" : "Add Aircraft"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField value={aircraft.name} helperText={error.name} error={!!error.name} onChange={handleClickInput} name='name' fullWidth sx={textFieldDarkStyle} id="outlined-name" label="Name" variant="outlined" />
            <AutocompleteCard values={aircraft.airline_id} error={error} data={airlines} name="airline_id" handleClickInput={handleClickInput} title={"Airline"} />
            <AutocompleteCard values={aircraft.airport_id} error={error} data={airports} name="airport_id" handleClickInput={handleClickInput} title={"Airport"} />
            <div className='flex gap-5'>
              <TextField type='number' value={aircraft.rows} helperText={error.rows} error={!!error.rows} onChange={handleClickInput} name='rows' fullWidth sx={textFieldDarkStyle} id="outlined-rows" label="Rows" variant="outlined" />
              <TextField type='number' value={aircraft.cols} helperText={error.cols} error={!!error.cols} onChange={handleClickInput} name='cols' fullWidth sx={textFieldDarkStyle} id="outlined-cols" label="Cols" variant="outlined" />
            </div>

            <div className="flex mt-3">
              <div
                className="grid gap-4"
                style={{
                  gridTemplateColumns: `repeat(${aircraft.cols}, minmax(0, 1fr))`
                }}
              >
                {Array.from({
                  length: aircraft.rows * aircraft.cols
                }).map((_, index) => (
                  <div className="col-span-1" key={index} onClick={() => handleClickOpenChoose(index)}>
                    {handleShow(index)}
                  </div>
                ))}
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogFooter handleClose={handleClose} add={addAircraft} title={aircraft.id ? "Update" : "Add"} />
        <DialogSelectSeatType aircraft={aircraft} index={index} handleChair={handleChair} openChoose={openChoose} handleCloseChoose={handleCloseChoose} />
      </Dialog>
    </React.Fragment >
  );
}
