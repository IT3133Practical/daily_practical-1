const Login = () => {
    return (
        <>
            <h2>Welcome to Login</h2>
            <form>
                <div>
                    <div>Username</div>
                    <div>
                        <input type="text" placeholder="Enter your Username" />
                    </div>                </div>
                <div>
                    <div>Password</div>
                    <div>
                        <input type="password" placeholder="Enter your Password" />
                    </div>
                </div>
                <div>
                    <button type="button">Login</button>
                </div>
            </form>
        </>
    )
}

export default Login