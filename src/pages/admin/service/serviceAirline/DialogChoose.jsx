import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { dialogStyle } from '../../../../utils/StyleMui';
import { FaSearch } from 'react-icons/fa';
import { ServiceDetailContext } from '../../../../contexts/ServiceDetailProvider';
import { useContext } from 'react';

export default function DialogChoose({ openChoose, handleCloseChoose , handleChoose, serviceAirline }) {
    const serviceDetail = useContext(ServiceDetailContext);

    const check = (id) => {
        return serviceAirline.list_id_service.includes(id)
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
                <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
                    <h1>Please select a service</h1>
                    <div className='sd rounded-md flex items-center'>
                        <input className='w-60 p-1 outline-none' type="text" placeholder='Nhập từ khóa' />
                        <FaSearch className='mr-2' />
                    </div>
                </DialogTitle>
                <DialogContent >
                    <div className="grid grid-cols-2 gap-3 mt-5">
                        {
                            serviceDetail.map(p => (
                                <div onClick={() => handleChoose(p.id)} className={`col-span-1 flex gap-2 items-center border border-amber-700 p-1.5 rounded-md hover:bg-linear-to-r hover:from-blue-500 hover:via-blue-500 hover:to-red-500 transition ease-in duration-200 ${check(p.id) ? "bg-amber-400" : ""}`}>
                                    <img className='h-10 sd' src={p.img_url} alt="" />
                                    <p className=''>{p.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseChoose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog >
        </React.Fragment >
    );
}