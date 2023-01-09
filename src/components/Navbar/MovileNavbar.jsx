// React
import * as React from 'react';

// MUI
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

// Style
import './Navbar.css'


export default function Navbar({UserImgUrl}) {
  console.log(UserImgUrl)
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
        src={UserImgUrl}
      >
        <PersonIcon sx={{ fontSize: 45 }}/>  
      </Avatar>
    </div>
  );
}
