import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
// Components
import MovileNavbar from '../Navbar/MovileNavbar';
import Song from './Song';
// Style
import './Playlist.css'


export default function Playlist() {
    const getinfoRef = useRef(false)
    const [uriList, setUriList] = useState([])
    const [Data, setData] = useState([]);

    useEffect(() => {
        if (getinfoRef.current) return;
        getinfoRef.current = true;

        axios.get('http://192.168.1.37:8888/gettracks/30', { withCredentials: true })
        .then((response) => {
            setUriList(response.data.map((song) => song.song_uri))
            setData(response.data) 
        });
    }, []);


    return(
        <div className="playlist">
            <MovileNavbar/>

            {
                Data.map((song, index) => <Song key={index} song_name={song.song_name} img={song.img.url} artist_name={song.artist_name} song_uri={song.song_uri} uriList={{'uriList':uriList, 'setUriList':setUriList}}/>)
            }
        </div>
    )
}