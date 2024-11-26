import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/contactus"}><li>ContactUs</li></Link>
                    <Link to={"/aboutus"}><li>AboutUs</li></Link>
                    <Link to={"/login"}><li>Login</li></Link>
                    <Link to={"/signup"}><li>SignUp</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar