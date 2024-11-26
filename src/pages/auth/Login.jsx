import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const data = {
        username: 'teshan',
        password: '123'
    }

    const navigate = useNavigate()

    const [credentional, setCredentional] = useState({ username: '', password: '' })
    const [loginError, setLoginError] = useState('')

    const handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        setCredentional(prev => ({
            ...prev,
            [name]: value
        }))
        setLoginError('')
    }

    const handleLogin = () => {
        if (data.username === credentional.username && data.password === credentional.password) {
            console.log('login okkk')
            navigate("/dashboard")
        } else {
            setLoginError("Please check credentials")
        }
        clearInputFields()
    }

    const clearInputFields = () => {
        setCredentional({ username: '', password: '' })
    }

    return (
        <>
            <h2>Welcome to Login</h2>
            <div style={{ color: "red", }}>
                {loginError && loginError}
            </div>
            <form>
                <div>
                    <div>Username</div>
                    <div>
                        <input
                            type="text"
                            name="username"
                            value={credentional.username}
                            onChange={handleChange}
                            placeholder="Enter your Username"
                        />
                    </div>
                </div>
                <div>
                    <div>Password</div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={credentional.password}
                            onChange={handleChange}
                            placeholder="Enter your Password"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </form>
            <div>
                Do you haven't an account? <Link to="/signup">Create One</Link>
            </div>
        </>
    )
}

export default Login
