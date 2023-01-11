import { useEffect, useState } from 'react';
import axios from 'axios';
import { FastAverageColor } from 'fast-average-color';
// mui
import IconButton from '@mui/material/IconButton';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const fac = new FastAverageColor();

export default function Song({song_name, img, artist_name, song_uri}) {
    const [SongName, setSongName] = useState(song_name);
    const [Img, setImg] = useState(img);
    const [ArtistName, setArtistName] = useState(artist_name);
    const [Color, setColor] = useState('');

    function change_song(){
        axios.get('http://192.168.1.37:8888/gettracks/1', { withCredentials: true })
        .then((response) => {
            setSongName(response.data[0].song_name)
            setImg(response.data[0].img.url)
            setArtistName(response.data[0].artist_name)
        });
    }

    useEffect(() => {
        fac.getColorAsync(Img)
        .then(color => {
            setColor(color.hex)
        })
        .catch(e => {
            console.log(e);
        });
    }, [Img]);


    return(
        <div className="song" style={{ background: Color + '50' }}>
            <div className="img" >
                <img src={Img} alt="" />
            </div>
            <div className="info">
                <span className='title'> {SongName} </span>
                <span className='subtitle'> {ArtistName} </span>
                <span className='date'> {Color} </span>
            </div>
            <IconButton className='change_song' aria-label="Change song" onClick={change_song}>
                <AutorenewIcon sx={{ color:'#1db954', width: 70, height: 70}} />
            </IconButton>
        </div>
    )
}