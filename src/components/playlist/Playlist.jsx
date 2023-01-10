import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { FastAverageColor } from 'fast-average-color';
// mui
import IconButton from '@mui/material/IconButton';
import AutorenewIcon from '@mui/icons-material/Autorenew';
// Components
import MovileNavbar from '../Navbar/MovileNavbar';
// Style
import './Playlist.css'

const fac = new FastAverageColor();

function Song({song_name, img, artist_name}) {

    const [Color, setColor] = useState('');

    // getAverageColor('https://i.scdn.co/image/ab67616d0000b27350b0572b778066ec0c2a4d68').then(color => {
    //     console.log(color);
    // });

    fac.getColorAsync(img)
    .then(color => {
        // container.style.backgroundColor = color.rgba;
        // container.style.color = color.isDark ? '#fff' : '#000';

        console.log('Average color', color.hex);
        setColor(color.hex)
    })
    .catch(e => {
        console.log(e);
    });

    return(
        // <div className="song">
        <div className="song" style={{ background: Color + '50' }}>
            <div className="img" >
                <img src={img} alt="" />
            </div>
            <div className="info">
                <span className='title'> {song_name} </span>
                <span className='subtitle'> {artist_name} </span>
                <span className='date'> {Color} </span>
            </div>
            <IconButton className='change_song' aria-label="Change song">
                <AutorenewIcon sx={{ color:'#1db954', width: 70, height: 70}} />
            </IconButton>
        </div>
    )
}

export default function Playlist() {
    const [cookies, setCookie, removeCookie] = useCookies('token');

    const getinfoRef = useRef(false)

    const [Data, SetData] = useState('');
    useEffect(() => {
        if (getinfoRef.current) return;
        getinfoRef.current = true;

        axios.get('http://192.168.1.37:8888/get30tracks', { withCredentials: true })
        .then((response) => {
            console.log(response.data)
            SetData(response.data.map((song, index) => <Song key={index} song_name={song.song_name} img={song.img.url} artist_name={song.artist_name}/>))    
        });
    }, []);



    return(

        <div className="playlist">
            <MovileNavbar/>

            {Data}


        </div>
    )
}