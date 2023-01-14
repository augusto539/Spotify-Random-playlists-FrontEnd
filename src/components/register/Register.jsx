import axios from 'axios';
// MUI
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// Style
import './Register.css'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#1db954',
    },
    '& label': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#1db954',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#a3a3a3',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#1db954',
        },
    },
});

export default function Register() {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit } = useForm()

    function login() {
        axios.get(process.env.REACT_APP_BACKENDURL + '/login')
            .then((response) => {
                // console.log("llega al login")
                // console.log(response.data)
                window.location.replace(response.data);
            });
    }

    function onSubmit(data) {
        setOpen(true);
        axios.post(process.env.REACT_APP_BACKENDURL + '/register',
            {
                user: data.usuario,
                email: data.email
            },
            {
                withCredentials: true
            })
            .then(response => {
                console.log(response);
                setOpen(false);
            })
    }

    return (
        <div className="Register">
            {/* <Button>Show backdrop</Button> */}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                // onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CustomTextField className='muiInput' required label="User" id="custom-css-outlined-input" {...register('usuario')} />
                    <CustomTextField className='muiInput' type="email" required label="E-mail" id="custom-css-outlined-input" {...register('email')} />
                    <div className="buttonsection">
                        <Button variant="outlined" color="success" onClick={login}> Log in </Button>
                        <Button variant="contained" color="success" type="submit"> Register </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}