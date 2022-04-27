import { get, post } from 'axios'
import React from 'react'
import "./Login.css";

const Register = () => {
    const [username, setUsername] = React.useState('')
    const [fullname, setFullname] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [city, setCity] = React.useState('')
    const [state, setState] = React.useState('')
    const [zip, setZip] = React.useState('')
    const [address, setAddress] = React.useState('')
    const enabled = username.length > 3 && fullname.length > 3 && password.length > 3 && email.length > 3 && phone.length > 3 && city.length > 3 && state.length > 3 && zip.length > 3 && address.length > 3
    const [error, setError] = React.useState(false)
    const [nameValid, setNameValid] = React.useState(false)
    const [emailValid, setEmailValid] = React.useState(false)
    const [phoneValid, setPhoneValid] = React.useState(false)
    const [cityValid, setCityValid] = React.useState(false)
    const [stateValid, setStateValid] = React.useState(false)
    const [zipValid, setZipValid] = React.useState(false)
    const [addressValid, setAddressValid] = React.useState(false)
    const [passwordValid, setPasswordValid] = React.useState(false)
    const [fnameValid, setFnameValid] = React.useState(false)
    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const handleSubmit = () => {
        const url = 'http://localhost:5000/api/register'
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin',
            }
        };
        const body = { username, password, fullname, email, phone, city, state, zip, address };
        post(url, body, config).then(res => {
            console.log(res);
        }).catch(data => {
            if (data.response.status === 400) {
                console.log(data.response.data.message)
            }
        })
    }
    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h2>Register</h2>
                <form action='/login' onSubmit={handleSubmit}>
                    <div className="field">
                        <input
                            placeholder="username"
                            type="text"
                            name="username"
                            required
                            onFocus={() => setError(false)}
                            onChange={(e) => {
                                setUsername(e.target.value)
                                if (e.target.value.length < 3) {
                                    setNameValid(false)
                                }
                                else {
                                    setNameValid(true)
                                }
                            }
                            }
                            onBlur={(e) => {
                                get(`http://localhost:5000/api/${e.target.value}/`,
                                ).then(res => {
                                    if (res.status === 200) {
                                        setError(true)
                                    }
                                }
                                ).catch(err => {
                                    console.log(" ")
                                    setError(false)
                                })
                            }}
                            {...(error ? { style: { border: '1px solid red' } } : {})}
                        />
                        {error ? <span>username already exist</span> : ""}
                        {nameValid ? <span>username must be at least 3 characters</span> : ""}
                    </div>
                    <div className="field">
                        <input
                            placeholder="Full Name"
                            type="text"
                            name="fullname"
                            required
                            onChange={(e) => {
                                setFullname(e.target.value)
                                if (e.target.value.length > 3) {
                                    setFnameValid(false)
                                }
                                else {
                                    setFnameValid(true)
                                }
                            }}
                            {...(fnameValid ? { style: { border: '1px solid red' } } : {})}
                        />
                    </div>
                    <div className="field">
                        <input
                            placeholder='Email'
                            type="email"
                            name="email"
                            required
                            onFocus={() => setEmailValid(false)}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            onBlur={(e) => {
                                if (!(emailRegex.test(e.target.value)) || e.target.value.length < 0) {
                                    setEmailValid(true)
                                }
                                else {
                                    setEmailValid(false)
                                }
                            }}
                            {...(emailValid ? { style: { border: '1px solid red' } } : {})}
                        />
                        {emailValid ? <span >Invalid Email</span> : ""}
                    </div>
                    <div className="field">
                        <input
                            placeholder="Phone"
                            type="number"
                            name="phone"
                            required
                            onFocus={() => setPhoneValid(false)}
                            onChange={(e) => setPhone(e.target.value)}
                            onBlur={(e) => {
                                if (e.target.value.length !== 10) {
                                    setPhoneValid(true)
                                }
                                else {
                                    setPhoneValid(false)
                                }
                            }}
                            {...(phoneValid ? { style: { border: '1px solid red' } } : {})}
                        />

                    </div>
                    <div className="field">
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            required
                            onFocus={() => setPasswordValid(false)}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={(e) => {
                                if (e.target.value.length < 6) {
                                    setPasswordValid(true)
                                }
                                else {
                                    setPasswordValid(false)
                                }
                            }}
                            {...(passwordValid ? { style: { border: '1px solid red' } } : {})}
                        />
                        {passwordValid ? <span >Password must be at least 6 characters</span> : ""}
                    </div>
                    <div className="field">
                        <input
                            placeholder="Address"
                            type="text"
                            name="address"
                            required
                            onFocus={() => setAddressValid(false)}
                            onChange={(e) => setAddress(e.target.value)}
                            onBlur={(e) => {
                                if (e.target.value.length < 3) {
                                    setAddressValid(true)
                                }
                                else {
                                    setAddressValid(false)
                                }
                            }}
                            {...(addressValid ? { style: { border: '1px solid red' } } : {})}
                        />
                    </div>
                    <div className="field">
                        <input
                            placeholder="City"
                            type="text"
                            name="city"
                            required
                            onFocus={() => setCityValid(false)}
                            onChange={(e) => setCity(e.target.value)}
                            onBlur={(e) => {
                                if (e.target.value.length < 3) {
                                    setCityValid(true)
                                }
                                else {
                                    setCityValid(false)
                                }
                            }}
                            {...(cityValid ? { style: { border: '1px solid red' } } : {})}
                        />
                    </div>
                    <div className="field">
                        <input
                            placeholder="State"
                            type="text"
                            name="state"
                            required
                            onFocus={() => setStateValid(false)}
                            onChange={(e) => setState(e.target.value)}
                            onBlur={(e) => {
                                if (e.target.value.length < 3) {
                                    setStateValid(true)
                                }
                                else {
                                    setStateValid(false)
                                }
                            }}
                            {...(stateValid ? { style: { border: '1px solid red' } } : {})}
                        />
                    </div>
                    <div className="field">
                        <input
                            placeholder="Pin Code"
                            type="number"
                            name="zip"
                            required
                            onFocus={() => setZipValid(false)}
                            onChange={(e) => setZip(e.target.value)}
                            onBlur={(e) => {
                                console.log(enabled)
                                if (e.target.value.length !== 6) {
                                    setZipValid(true)
                                }
                                else {
                                    setZipValid(false)
                                }
                            }}
                            {...(zipValid ? { style: { border: '2px solid red' } } : {})}
                        />
                        {zipValid ? <span >Invalid Pin Code</span> : ""}
                    </div>
                    <div className="btn-wrapper">
                        <button
                            className='button'
                            disabled={!enabled}
                        >
                            Register</button>
                    </div>
                </form>
                <div className="footer">
                    <a href="/login"><small>Already have an account?</small></a>
                </div>
            </div >
        </div >

    )
}

export default Register