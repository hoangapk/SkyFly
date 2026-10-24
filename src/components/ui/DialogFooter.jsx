import { Button, DialogActions } from '@mui/material';
import { add } from 'firebase/firestore/pipelines';
import React from 'react';

function DialogFooter({ handleClose, add, title }) {
    return (
            <DialogActions sx={{ px : 3}}>
                <Button
                    variant='outlined'
                    onClick={handleClose}
                    autoFocus
                  
                >
                    Cancel
                </Button>

                <Button
                    variant='contained'
                    onClick={add}
                >
                   {title}
                </Button>
            </DialogActions>
    );
}

export default DialogFooter;