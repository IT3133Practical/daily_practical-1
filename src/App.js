import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      Hello!!
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
