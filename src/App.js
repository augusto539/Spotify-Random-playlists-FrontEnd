// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Index from './components/Index/Index';
import Home from './components/home/Home';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/Home" element={<Home/>}/>

        </Routes>
      </BrowserRouter> 
  );
}

export default App;