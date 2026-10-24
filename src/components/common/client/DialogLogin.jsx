import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { accountType } from '../../../types/Types';
import { useState } from 'react';
import { AccountContext } from '../../../contexts/AccountProvider';
import { AuthContext } from '../../../contexts/AuthProvider';
import { auth, googleProvider } from '../../../config/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { ROLES } from '../../../utils/Contants';
import { addDocument } from '../../../services/firebaseService';

export default function DialogLogin({ handleCloseLogin, openLogin }) {
    const [login, setLogin] = useState(accountType);
    const [error, setError] = useState(accountType);
    const accounts = React.useContext(AccountContext);
    const { saveLogin } = React.useContext(AuthContext);
    const addLogin = async () => {
        if (validation()) {
            return;
        }
        const accLogin = accounts.find(p => p.email == login.email && p.password == login.password);
        if (!accLogin) {
            alert("email hoac pass sai");
            return;
        }
        saveLogin(accLogin);
        handleCloseLogin();
    }

    const onChangeInput = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
    const validation = () => {
        const newError = {};
        newError.email = login.email ? "" : "Please enter your email";
        newError.password = login.password ? "" : "Please enter your password";
        setError(newError);
        console.log(newError);

        return Object.values(newError).some(p => p !== "");
    }
    // Google sign-in
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const existingCustomer = accounts.find(customer => customer.email === user.email);
            let loggedInCustomer;

            if (!existingCustomer) {
                const newCustomer = {
                    username: user.displayName,
                    imgUrl: user.photoURL,
                    role: ROLES.USER,
                    email:user.email
                };
                await addDocument('Accounts', newCustomer);
                loggedInCustomer = newCustomer;
            } else {
                loggedInCustomer = existingCustomer;
            }
            alert('Đăng nhập thành công!');
            handleCloseLogin();
            saveLogin(loggedInCustomer);
        } catch (error) {
            console.log('Đăng nhập thất bại. Vui lòng thử lại.');
        }
    };
    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth="xs"
                open={openLogin}
                onClose={handleCloseLogin}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                role="alertdialog"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Login"}
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
                            value={login.email}
                        />
                        <TextField value={login.password} type='password' label="Password" name='password' onChange={onChangeInput} helperText={error.password}
                            error={!!error.password} />
                    </div>
                    <button
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
                    transition-all duration-300" onClick={addLogin}>
                        Login
                    </button>
                    <button onClick={signInWithGoogle}
                        className=" flex gap-2 justify-center items-center cursor-pointer
                    w-full mt-5
                    px-1 py-3
                    rounded-xl font-bold
                    hover:scale-[1.02] transition-all duration-300
                    sd ">
                        <FcGoogle className='h-5 w-5' />
                        <p>Sign in with Google</p>
                    </button>

                    <div className='flex justify-between mt-3 '>
                        <p className='text-xs text-red-500'>
                            Forgot password
                        </p>
                        <p className='text-xs'>
                            Don't have an account? Sign up here.
                        </p>
                    </div>

                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
