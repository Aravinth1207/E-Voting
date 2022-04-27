
import React from 'react';
import "./Login.css";
import { post } from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const history = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password)
        const url = 'http://localhost:5000/api/login'
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin',
                'withCredentials': 'true'
            }
        };
        const body = { username, password };
        post(url, body, config).then(res => {
            console.log(res);
            setError(false);
            if (res.status === 200) {
                history('/home');
            }

        }).catch(data => {
            if (data.response.status === 400) {
                setError(true);
            }
        })
    }
    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <input
                            placeholder="username"
                            type="text"
                            name="username"
                            noValidate
                            onFocus={() => setError(false)}
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            noValidate
                            required
                            onFocus={(e) => setError(false)}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error ? (<><br /><span style={{ padding: '1px 1px' }}>Invalid username or password</span></>) : ""}
                    </div>
                    <div className="btn-wrapper">
                        <button className='button'>Login</button>
                    </div>
                </form>

                <div className="footer">
                    <a href="/register"><small>Don't Have an Account?</small></a>
                </div>
            </div >
        </div >
    );


}
export default Login;