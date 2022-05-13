import React from 'react'
import "./Voting.css"
import { Button } from "react-bootstrap"


const Voting = () => {
    const voteDetails = [{
        id: 1,
        name: "Mr.Nice",
        party: 'Nice',

    },
    {
        id: 2,
        name: "Mr.Worst",
        party: "Worst",
    },
    {
        id: 3,
        name: "Mr.Best",
        party: "Best",
    },
    {
        id: 4,
        name: "Mr.Average",
        party: "Average",
    }
    ]
    return (
        <>
            <div className="vote-title">
                <div className="vote-heading">
                    Voting
                </div>
            </div>
            <div className='vote-container'>
                {voteDetails.map((vote, index) => {
                    return (
                        <div key={index} className='vote-detail'>
                            <h4 style={{ padding: '10px' }}>{vote.name}</h4>
                            <p style={{ padding: ' 0 10px ' }}>Party:{vote.party}</p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <hr />
                            <div className='btn-wrapper'>  <Button variant='success'>Vote</Button></div>
                        </div>

                    )
                })}
            </div >
        </>
    )

}

export default Voting