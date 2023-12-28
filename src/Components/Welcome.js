import React from 'react'

function Welcome() {
    return (
        <>
            <div id="welcome"></div>
              <div className="welcome ">
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6">
                    <img src="images/mainImage.gif" width="90%" alt="" srcset=""/>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                    <h4>Welcome to the</h4>
                    <h2>Wealthy Club </h2>
                    <p><b>The WEALTHY PENGUIN ISLAND CLUB</b> is an exclusive collection of <b>5000 wealthy penguin NFTs</b>
                    —unique hand drawn collectibles 
                    that provide access to a private business club. 
                    Your Wealthy Penguin also doubles as access to the <b>AIRPORT LOUNGE</b>, 
                    a virtual networking lounge to find investment deals, and our 
                    finally NFT’s represent access to our future island resort in 
                    Indonesia only accessible to our members.
                    </p>
                    <p>
                    The team has a philanthropic mission to solve world hunger so they’ve 
                    built into their smart contract 10% of primary 
                    sales being donated to a charity in Bali, Indonesia. 
                    In addition, 2.5% of every secondary sale will be donated to 
                    charity forever. More perks and benefits will be unlocked for 
                    our community throughout the evolution of our roadmap.
                    </p>
                    <p>With <b>more than 160+ hand drawn traits</b>, each NFT is unique and 
                    represents a business card to our 
                    exclusive group of successful investors & philanthropists. 
                    Join our global community of diverse entrepreneurs with access to 
                    once in a lifetime experiences, benefits and utilities.</p>
                    <a href="https://www.discord.gg/PVbQzZWcZY"  target="_blank"><button className="btn btn-success"> Join Us <i className="fa fa-arrow-right"></i></button></a>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Welcome
