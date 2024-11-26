import { Link } from "react-router-dom"

const SignUp = () => {
    return (
        <>
            <h2>Welcome to SignUp</h2>
            <form>
                <div>
                    <div>First Name</div>
                    <div>
                        <input type="text" placeholder="Enter your First Name" />
                    </div>
                </div>
                <div>
                    <div>Last Name</div>
                    <div>
                        <input type="text" placeholder="Enter your Last Name" />
                    </div>
                </div>
                <div>
                    <div>Username</div>
                    <div>
                        <input type="text" placeholder="Enter your Username" />
                    </div>
                </div>
                <div>
                    <div>Mobile Number</div>
                    <div>
                        <input type="text" placeholder="Enter your Mobile Number" />
                    </div>
                </div>
                <div>
                    <div>Password</div>
                    <div>
                        <input type="password" placeholder="Enter your Password" />
                    </div>
                </div>
                <div>
                    <div>Confirm Password</div>
                    <div>
                        <input type="password" placeholder="Enter your Confirm Password" />
                    </div>
                </div>
                <div>
                    <button type="button">Login</button>
                </div>
            </form>
            <div>
                Do you have a account?<Link to="/login">Sign Up</Link>
            </div>
        </>
    )
}

export default SignUp