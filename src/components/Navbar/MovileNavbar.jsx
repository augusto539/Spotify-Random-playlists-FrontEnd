// React
import { useState, useEffect } from 'react';
import axios from 'axios';
// MUI
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

// Style
import './Navbar.css'



export default function Navbar() {
  const [UserImg, setUserImg] = useState('');
  const [Username, setUsername] = useState('');

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKENDURL + '/userinfo')
    .then((response) => {
        setUserImg(response.data.UserImg[0].url)
        setUsername(response.data.Name)
    });
  }, []);

  return (
    <div className="navbar">
      <span className='name'> {Username} </span>
      <Avatar
        className="Avatar"
        sx={{ 
          bgcolor:'#1db954',
          width: 70, 
          height: 70  
        }}
        alt="User img"
        src={UserImg}
      >
        <PersonIcon sx={{ fontSize: 45 }}/>  
      </Avatar>
      <span className='logout'> log out </span>
    </div>
  );
}
