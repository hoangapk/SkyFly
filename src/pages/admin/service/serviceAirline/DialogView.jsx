import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { ServiceDetailContext } from '../../../../contexts/ServiceDetailProvider';
import { getObjectById } from '../../../../services/reponsitory';
import { dialogStyle } from '../../../../utils/StyleMui';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogView({ handleCloseView, openView, viewAirline }) {
    const serviceDetail = React.useContext(ServiceDetailContext);


    return (
        <React.Fragment>
            <Dialog
                open={openView}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleCloseView}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
                sx={dialogStyle}
            >
                <DialogTitle>{"View Service"}</DialogTitle>
                <DialogContent>
                    <div className="flex gap-4 flex-col mt-2">
                        {
                            viewAirline.list_id_service.map(p => (
                                <div className="col-span-1 flex gap-2 justify-between items-center border border-amber-700 p-1.5 rounded-md hover:bg-linear-to-r hover:from-blue-500 hover:via-blue-500 hover:to-red-500 transition ease-in duration-200">
                                    <img className='h-10 sd' src={getObjectById(serviceDetail, p).img_url} alt="" />
                                    <p className=''>{getObjectById(serviceDetail, p).name}</p>
                                </div>
                            ))
                        }
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseView} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}