import axios from 'axios';
// MUI
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

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
    const {register, handleSubmit} = useForm()

    function login(){
        axios.get('http://192.168.1.37:8888/login')
        .then((response) => {
            // console.log("llega al login")
            // console.log(response.data)
            window.location.replace(response.data);
        });
    }

    function onSubmit(data){
        axios.post('http://192.168.1.37:8888/register', 
        {
            user: data.usuario,
            email: data.email
        }, 
        { 
            withCredentials: true 
        })
        .then(response => {
            console.log(response);
        })
    }

    return (
        <div className="Register">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CustomTextField className='muiInput' required label="User" id="custom-css-outlined-input" {...register('usuario')}/>
                    <CustomTextField className='muiInput' type="email" required label="E-mail" id="custom-css-outlined-input" {...register('email')}/>
                    <div className="buttonsection">
                        <Button variant="outlined" color="success" onClick={login}> Log in </Button>
                        <Button variant="contained" color="success" type="submit"> Register </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}