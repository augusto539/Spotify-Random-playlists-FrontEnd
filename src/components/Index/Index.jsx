import axios from 'axios';
// MUI
import Button from '@mui/material/Button';

// Components
import MovileNavbar from '../Navbar/MovileNavbar';

// Style
import './Index.css'

export default function Index() {

    function login(){
        axios.get('http://192.168.1.34:8888/login')
        .then((response) => {
            // console.log("llega al login")
            // console.log(response.data)
            window.location.replace(response.data);
        });
    }

    return(
        <div className="index">
            {/* <MovileNavbar/> */}
            <h1> Spotify <br/> Random playlists </h1>
            <p> This app creates a very random playlist (any genre, artist or duration) all can be! </p>
            <Button variant="contained" color="success"> Let's get started! </Button>
            <Button variant="outlined" color="success" onClick={login}> Log in </Button>
        </div>
    )
}