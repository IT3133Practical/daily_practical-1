import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
        Hello!!
        <nav>
          <ul>
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/contactus"}><li>ContactUs</li></Link>
            <Link to={"/aboutus"}><li>AboutUs</li></Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
