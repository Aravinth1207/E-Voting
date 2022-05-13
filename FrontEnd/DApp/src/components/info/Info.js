import React from 'react'
import "./info.css"
const Info = () => {
    return (
        //create a article tag and some text

        <div className='info-container'>
            <article>
                <div className="info-title">
                    <div className="article-heading">
                        Information
                    </div>
                </div>
                <div className="heading">Phase 1 | Voter Registration</div>
                <div className='para'>
                    Generating accounts: accounts (“wallets”) are created on
                    the Blockchain, to allow voting and verification procedures.
                    <br />
                    Wallet initialisation: The Institution’s wallet is created and
                    filled with the necessary cryptocurrency (voting token) which
                    is transferred to all the wallets recorded in the accounts
                    generation stage, which will allow future voting.</div>

                <div className='heading'>Phase 2 | Voting</div>
                <div className='para'> Vote opening: the candidates list is encrypted via the Institution’s
                    public key. The encrypted vote is then recorded on the blockchain
                    <br />
                    Voting: the candidates list is encrypted via the Institution’s public
                    key. The encrypted vote is then recorded on the blockchain.
                    <br />
                    Votes collection: votes are collected by the Institution by
                    accessing a dedicated Smart Contract method provided via API.
                    The Institution knows in real time the number of accounts who
                    have voted.
                    <br />
                    Vote closure: The Institution initiates a private smart contract
                    method close vote collection. This stage provides details of how
                    many voters have actually voted.</div>
                <div className='heading'>Phase 3 | Result</div>

                <div className='para'> Decryption of votes: the encrypted information (individual votes)
                    is decrypted using the election’s private (secret) key. The vote is
                    recorded and displayed on the vote-count Smart Contract.
                    <br />
                    Vote Count: the counting process (smart contract) provides
                    for the real-time calculation of the voting’s outcome.
                    <br />
                    Verification: each voter can invoke the methods of the vote-count
                    Smart Contract to access vote-count operations in real-time.
                    <br />
                    Publication of the results: the voting ends upon publication
                    of the results.
                    Transpare</div>
            </article>
        </div>


    )
}

export default Info