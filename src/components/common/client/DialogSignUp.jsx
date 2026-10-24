import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { accountType } from '../../../types/Types';
import { addDocument } from '../../../services/firebaseService';
import { AccountContext } from '../../../contexts/AccountProvider';

export default function DialogSignUp({ handleCloseRegister, openRegister }) {

    const [singUp, setSingUp] = useState(accountType);
    const [error, setError] = useState(accountType);
    const accounts = React.useContext(AccountContext);

    React.useEffect(() => {
        setSingUp(accountType);
        setError(accountType);
    }, [handleCloseRegister])

    const addSignUp = async () => {
        if (validation()) {
            return;
        }
        const { confirmPassword, ...account } = singUp;
        addDocument("Accounts", account);
        handleCloseRegister();
    }

    const onChangeInput = (e) => {
        setSingUp({ ...singUp, [e.target.name]: e.target.value });
    }

    const validation = () => {
        const newError = {};
        const checkMail = accounts.some(p => p.email == singUp.email);
        newError.email = singUp.email ? checkMail ? "This email is already registered" : "" : "Please enter your email";
        const checkPhone = accounts.some(p => p.phone == singUp.phone);
        newError.phone = singUp.phone ? checkPhone ? "This phone is already registered" : "" : "Please enter your phone";
        newError.password = singUp.password ? "" : "Please enter your password";
        newError.confirmPassword = singUp.password == singUp.confirmPassword ? "" : "Password do not match";
        setError(newError);
        console.log(newError);

        return Object.values(newError).some(p => p !== "");
    }
    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth="xs"
                open={openRegister}
                onClose={handleCloseRegister}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                role="alertdialog"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Sign up"}
                </DialogTitle>
                <DialogContent>
                    <div className='flex flex-col gap-4 mt-2'>
                        <TextField
                            type='email'
                            label="Email"
                            name='email'
                            onChange={onChangeInput}
                            helperText={error.email}
                            error={!!error.email}
                            value={singUp.email}
                        />
                        <TextField value={singUp.phone} type='text' label="Phone" name='phone' onChange={onChangeInput} helperText={error.phone}
                            error={!!error.phone} />
                        <TextField value={singUp.password} type='password' label="Password" name='password' onChange={onChangeInput} helperText={error.password}
                            error={!!error.password} />
                        <TextField value={singUp.confirmPassword} type='password' label="Confirm password" name='confirmPassword' onChange={onChangeInput} helperText={error.confirmPassword}
                            error={!!error.confirmPassword} />
                    </div>
                    <button onClick={addSignUp}
                        className=" cursor-pointer
        w-full mt-5
        border border-gray-600
        px-1 py-3
        rounded-xl
        text-white
        bg-gradient-to-b from-[#080d24] via-[#0b1736] to-[#102d63]
        hover:from-[#102d63]
        hover:via-[#163d80]
        hover:to-[#1b55a5]
        hover:scale-[1.02]
        transition-all duration-300 
    "                >
                        Sign up
                    </button>
                    <div className='mt-3 text-xs text-end'>
                        Have an account? Log in here
                    </div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
