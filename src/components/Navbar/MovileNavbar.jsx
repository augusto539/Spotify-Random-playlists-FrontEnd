// React
import { useState, useEffect } from 'react';
import axios from 'axios';
// MUI
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

// Style
import './Navbar.css'



export default function Navbar({UserImgUrl}) {
  const [UserImg, setUserImg] = useState('');

  useEffect(() => {
    axios.get('http://192.168.1.37:8888/userinfo')
    .then((response) => {
        // console.log(response.data.UserImg[0].url)
        setUserImg(response.data.UserImg[0].url)
    });
  }, []);

  return (
    <div className="navbar">
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
    </div>
  );
}
