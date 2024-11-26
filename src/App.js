import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/contactus"}><li>ContactUs</li></Link>
            <Link to={"/aboutus"}><li>AboutUs</li></Link>
            <Link to={"/login"}><li>Login</li></Link>
            <Link to={"/signup"}><li>SignUp</li></Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
