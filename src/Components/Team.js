import React from 'react'

function Team() {
    return (
        <>
            <div id="team"></div>
            <div className="team py-5">
        <div className="container">
            <h2 className="text-center heading">Our <span className="green">Team</span></h2>
            <hr className="mx-auto my-3 line"/>
            <p className="sub-heading mx-auto text-center">
            The Wealthy Penguin Island club was founded by a diverse group of entrepreneurs, investors, artists, cryptocurrency mavericks, architects, and some of the world's top creatives. We are driven by being the best in our natural talents for the greater good and failure is not an option.
            </p>
            <div className="col-12 mt-3">
                <div className="row">
                    <div className="col-md-3 col-6 member my-3">
                        <div className="col-12">
                            <img src="images/6.png" width="100%" alt="" className="mb-3"/>
                            <h3>Olumide</h3>
                            <h4 className="mb-4">The Founder</h4>
                            <a href="https://www.linkedin.com/in/olumidegbenro" target="_blank" className="icon"><img src="images/linkedin.svg" alt=""/></a>
                            <a href="https://www.instagram.com/olumide_gbenro/" target="_blank" className="icon"><img src="images/insta.svg" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 member my-3">
                        <div className="col-12">
                            <img src="images/7.png" width="100%" alt="" className="mb-3"/>
                            <h3>Ryan</h3>
                            <h4 className="mb-4">Marketing Expert</h4>
                            <a href="#" target="_blank" className="icon"><img src="images/linkedin.svg" alt=""/></a>
                            <a href="https://www.instagram.com/ryanshaw.me/" target="_blank" className="icon"><img src="images/insta.svg" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 member my-3">
                        <div className="col-12">
                            <img src="images/8.png" width="100%" alt="" className="mb-3"/>
                            <h3>Alberto</h3>
                            <h4 className="mb-4">NFT Creation Expert</h4>
                            <a href="https://www.linkedin.com/in/albertopf/" target="_blank" className="icon"><img src="images/linkedin.svg" alt=""/></a>
                            <a href="https://www.instagram.com/albertolifestyle/" target="_blank" className="icon"><img src="images/insta.svg" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 member my-3">
                        <div className="col-12">
                            <img src="images/9.png" width="100%" alt="" className="mb-3"/>
                            <h3>Vena</h3>
                            <h4 className="mb-4">Discord Expert</h4>
                            <a href="#" target="_blank" className="icon"><img src="images/linkedin.svg" alt=""/></a>
                            <a href="https://www.instagram.com/hlangavena/" target="_blank" className="icon"><img src="images/insta.svg" alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Team
