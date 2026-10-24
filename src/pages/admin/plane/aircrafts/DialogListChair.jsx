import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Dialog, Slide } from '@mui/material';
import { SeatTypeContext } from '../../../../contexts/SeatTypeProvider';
import { getObjectById } from '../../../../services/reponsitory';
import { PiArmchairLight } from 'react-icons/pi';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogListChair({ handleCloseList, openList, openView }) {
    const seatTypes = React.useContext(SeatTypeContext);
    const handleShow = (index) => {
        const check = openView.listChair.find(p => p.index == index);
        return check ? <img className='h-12 rounded-xl p-1 sd' src={getObjectById(seatTypes, check.id_seat_type).img_url} alt="" /> : <PiArmchairLight className="text-5xl opacity-0 text-gray-400 rounded-xl p-1 sd" />
    }
    return (
        <React.Fragment>

            <Dialog
                onClose={handleCloseList}
                aria-labelledby="customized-dialog-title"
                open={openList}
                fullWidth
                maxWidth="md"
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Modal title
                </DialogTitle>

                <DialogContent >
                    <div className="flex mt-3">
                        <div
                            className="grid gap-4"
                            style={{
                                gridTemplateColumns: `repeat(${openView?.cols}, minmax(0, 1fr))`
                            }}
                        >
                            {Array.from({
                                length: openView?.rows * openView?.cols
                            }).map((_, index) => (
                                <div className="col-span-1" key={index} >
                                    {handleShow(index)}
                                </div>
                            ))}
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseList}>
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
