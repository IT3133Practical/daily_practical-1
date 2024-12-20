import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import ContactUs from './pages/contact/ContactUs';
import AboutUs from './pages/aboutus/AboutUs';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
