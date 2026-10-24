import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@mui/material';
import React from 'react';
import { dialogStyle } from '../../../utils/StyleMui';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ModelDelete({ open, handleClose, handleDelete }) {
    return (
        <div>
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
                <DialogTitle>{"Add Airport"}</DialogTitle>
                <DialogContent>
                    Do you confirm the deletion?
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='outlined'
                        onClick={handleClose}
                        autoFocus
                    >
                        Cancel
                    </Button>

                    {/* Nút Done xám bo tròn phong cách Chrome Dark */}
                    <Button
                        variant='contained'
                        onClick={handleDelete}
                       
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ModelDelete;