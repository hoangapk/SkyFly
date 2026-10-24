
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { dialogStyle } from '../../../../utils/StyleMui';
import { Button, DialogActions } from '@mui/material';
import { SeatTypeContext } from '../../../../contexts/SeatTypeProvider';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSelectSeatType({ openChoose, handleCloseChoose, handleChair, index ,aircraft }) {
    const seatTypes = React.useContext(SeatTypeContext);

    const handleChoose = (id) => {
        handleChair(index, id);
        handleCloseChoose();
    }

    const checkShow = (id) => {
        return aircraft.listChair.find(p => p.index == index && p.id_seat_type == id );
    }
    return (
        <React.Fragment>
            <Dialog
                open={openChoose}
                onClose={handleCloseChoose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                role="alertdialog"
                fullWidth
                maxWidth="md"
                sx={dialogStyle}

            >
                <DialogTitle sx={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                    <h1>Please select a seat type</h1>
                </DialogTitle>
                <DialogContent >
                    <div className="grid grid-cols-3  gap-3 mt-5">
                        {
                            seatTypes.map(p => (
                                <div onClick={() => handleChoose(p.id) } className={`col-span-1 flex-row text-center gap-2  border border-amber-700 p-1.5 rounded-md hover:bg-linear-to-r hover:from-blue-500 hover:via-blue-500 hover:to-red-500 transition ease-in duration-200 ${ checkShow(p.id) ? "bg-red-800" : ""}`}>
                                    <img className='m-auto h-15' src={p.img_url} alt="" />
                                    <p className=''>{p.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined'
                        autoFocus onClick={handleCloseChoose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog >
        </React.Fragment >
    );
}
