import React from 'react'

function Features() {
    return (
        <>
            <div id="features"></div>
            <div className="features">
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6">
                    <h4>Features</h4>
                    <h2>An Exclusive Wealthy Club </h2>
                    <p>
                    In 2021 during the height of a global pandemic a call was made to bring 
                    together <b>the world's most successful entrepreneurs who want to give back.</b> 
                    They were tasked with creating a new world class network that would give 
                    back through philanthropy. This entity would eventually be called the <b>Wealthy 
                    Penguin Island Club.</b> A place where high level thinkers, investors, 
                    and entrepreneurs get together to enjoy world class networking and 
                    find investment opportunities while solving the world's biggest problems. 
                    The final home of the project will be a private island resort on an <b>island in 
                    Indonesia only accessible by its members.</b>  
                    </p>
                    <a href="https://www.discord.gg/PVbQzZWcZY"  target="_blank"><button className="btn btn-success"> Join Us <i className="fa fa-arrow-right"></i></button></a>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                    <div className="row">
                        <img src="images/1.png" width="100%" alt="" className="col-6 p-1"/>
                        <img src="images/2.png" width="100%" alt="" className="col-6 p-1"/>
                        <img src="images/3.png" width="100%" alt="" className="col-6 p-1"/>
                        <img src="images/4.png" width="100%" alt="" className="col-6 p-1"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Features
