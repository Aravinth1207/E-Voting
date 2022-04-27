import React from 'react'
import "./VoteRegistration.css"

const VoteRegistration = () => {
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
                        <div className="field">
                            <input
                                placeholder="Aadhar Number"
                                type="number"
                                name="aadhar"
                                noValidate
                                required
                            />
                        </div>
                        <div className="field">
                            <input
                                placeholder="Account Address"
                                type="text"
                                name="address"
                                noValidate
                                required
                            />
                        </div>
                    </form>
                    <div className="btn-wrapper">
                        <button className='button'>Register</button>
                    </div>
                </div>
            </div>


        </>

    )
}

export default VoteRegistration