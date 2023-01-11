import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
// Components
import MovileNavbar from '../Navbar/MovileNavbar';
import Song from './Song';
// Style
import './Playlist.css'


export default function Playlist() {
    const getinfoRef = useRef(false)

    const [Data, SetData] = useState('');

    useEffect(() => {
        if (getinfoRef.current) return;
        getinfoRef.current = true;

        axios.get('http://192.168.1.37:8888/gettracks/30', { withCredentials: true })
        .then((response) => {
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