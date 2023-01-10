// import { usePalette } from 'react-palette'



// Components
import MovileNavbar from '../Navbar/MovileNavbar';
// Style
import './Home.css'
import charly from './charly.jpg'
import clash from './clash.png'

export default function Home() {

    // const { data, loading, error } = usePalette(charly)

    let elements =[]
    for (let kk = 0; kk < 20; kk++) {
        elements.push(
            // <div className="playlist" style={{ 'background-color': data.vibrant + "40" }}>
            <div className="playlist">
                <div className="img" >
                    <img src={charly} alt="" />
                </div>
                <div className="info">
                    <span className='title'> Title </span>
                    <span className='subtitle'> Sub title </span>
                    <span className='date'> Sub title </span>
                </div>
            </div>
        )
    }
    return(
        <div className="Home">
            <MovileNavbar/>

            <div className="playlist verde"></div>

            {elements}

            

        </div>
    )
}