import React from 'react'
import "./VoteRegistration.css"

const VoteRegistration = () => {
    const [aadhar, setAadhar] = React.useState("");
    const [accAddress, setAccAddress] = React.useState("");

    return (
        <>
            <div className="vregister-wrapper">
                <div className="container">
                    <div className="form-title">
                        <div className="form-heading">
                            Voter Registration
                        </div>
                    </div>
                    <form>
                        <div className="fields">
                            <input
                                placeholder="Aadhar Number"
                                type="number"
                                name="aadhar"
                                noValidate
                                required
                                onChange={(e) => setAadhar(e.target.value)}
                            />
                        </div>
                        <div className="fields">
                            <input
                                placeholder="Account Address"
                                type="text"
                                name="address"
                                noValidate
                                required
                                onChange={(e) => setAccAddress(e.target.value)}
                            />
                        </div>
                    </form>
                    <div className="btn-wrapper">
                        <button className='button' onClick={(e) => { console.log(aadhar, accAddress) }}>Register</button>
                    </div>
                </div>
            </div>


        </>

    )
}

export default VoteRegistration