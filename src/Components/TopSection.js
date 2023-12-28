import React from 'react'

import {counter} from '../hooks/counter'
function TopSection() {
    const [timeLeft, setTimeLeft] = React.useState(counter());

    React.useEffect(() => {
      const id = setTimeout(() => {
        setTimeLeft(counter());
      }, 1000);
  
      return () => {
        clearTimeout(id);
      };
    });
  
    return (
        <>
             <div className="cover d-flex justify-content-center align-items-center">
   {
       Object.keys(timeLeft).length > 0 ?      <div className="container m-sm-5" id="timer">
       <div className="timer col-lg-8 d-flex flex-column p-2 py-4 p-sm-5 m-auto">
           <h2 className="text-left col-12 my-4">Launching on<br/> <span className="date">November 15th</span></h2>
           <div className="col-12 d-flex flex-column justify-content-center">
               <div className="row text-center justify-content-around time">
                   <div className="col-2 box">
                       <h3 id="daysTimer">{timeLeft.days}</h3>
                       <h4>Days</h4>
                   </div>
                   <div className="col-2 box">
                       <h3 id="hoursTimer">{timeLeft.hours}</h3>
                       <h4>Hrs</h4>
                   </div>
                   <div className="col-2 box">
                       <h3 id="minutesTimer">{timeLeft.minutes}</h3>
                       <h4>Min</h4>
                   </div>
                   <div className="col-2 box">
                       <h3 id="secondsTimer">{timeLeft.seconds}</h3>
                       <h4>Sec</h4>
                   </div>
               </div>
           </div>
       </div>
   </div>: <div className="container m-sm-5" id="mint">
            <div className="mint col-lg-8 col-xl-6p-2 py-4 p-sm-5 m-auto">
                <h2 className="col-12">Mint your penguin</h2>
                <div className="col-12 d-flex flex-column mt-3">
                    <div className="d-flex align-items-center">
                        <div className="balance col-12 d-flex p-3">
                            <div className="mr-auto">
                                Your ETH Balance
                            </div>
                            <div className="ml-auto ">
                                0.00ETH
                            </div>
                        </div>
                    </div>
                    <div className="row quantity mt-4 d-flex align-items-center">
                        <div className="col-6">
                            Quantity
                        </div>
                        <div className="col-6">
                            <input type="number" className="form-control py-4 " min="0" placeholder="1"/>
                        </div>
                    </div>
                    <div className="row p-1 px-3 mt-3 d-flex align-items-center justify-content-center">
                        <p className="mr-auto mt-2">Total price</p>
                        <p className="ml-auto mt-2 ">0.00ETH</p>
                    </div>
                    <button className="btn btn-success col-12 py-3 mt-3">Buy Now</button>
                    <div className="row p-1 px-3 mt-3 mb-0 d-flex align-items-center justify-content-center">
                        <p className="mr-auto mt-2">Progress</p>
                        <p className="ml-auto mt-2 ">10%</p>
                    </div>
                    <div className="progress mt-n3 " >
                        <div className="progress-bar" role="progressbar" style={{"width":" 15%"}} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
   }
        

    </div>
        </>
    )
}

export default TopSection
