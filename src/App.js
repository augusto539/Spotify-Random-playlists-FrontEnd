// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Index from './components/Index/Index';
import Home from './components/home/Home';
import Playlist from './components/playlist/Playlist'
import Register from './components/register/Register';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Playlist" element={<Playlist/>}/>
          <Route path="/Register" element={<Register/>}/>

        </Routes>
      </BrowserRouter> 
  );
}

export default App;