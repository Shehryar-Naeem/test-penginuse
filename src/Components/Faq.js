import React from 'react'
import $ from 'jquery';


const Faq=()=> {

   function collapse(){
    $(".collapse.show").each(function() {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function() {
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function() {
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    
    });
   };
   
   collapse();
   
    return (
        <>
             <div id="faq"></div>
    <div className="faq py-5">
        <div className="container  py-5">
            <h2 className="text-center heading">Frequently Asked <span className="green">Questions</span></h2>
            <hr className="mx-auto my-3 line"/>
            <div className="faqs-accordion mt-5">
                <div className="accordion" id="accordionExample">
                    <div className="card my-1">
                        <div className="card-header d-flex align-items-center  pl-0  mb-2" id="headingOne">
                            <button type="button" className="btn btn-link  pl-0 py-0" data-toggle="collapse" data-target="#collapseOne">
                                HOW MANY WEALTHY PENGUINS CAN I MINT?
                                 </button>
                            <i className="fa fa-plus ml-auto" data-toggle="collapse" data-target="#collapseOne"></i>
                        </div>
                        <div id="collapseOne" className="collapse pl-0" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body ">
                                <p>
                                During the first 15 minutes, the minting will be limited to 1 NFT per person. Once this time is up, you will be able to get as many WEALTHY Penguins as you want. The fee to mint a lucky penguin is 0,15 ETH per unit + GAS.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card my-1">
                        <div className="card-header d-flex align-items-center  pl-0  mb-2" id="headingTwo">
                            <button type="button" className="btn btn-link  pl-0 py-0" data-toggle="collapse" data-target="#collapseTwo">
                                WHERE CAN I VIEW MY NFTS?
                                 </button>
                            <i className="fa fa-plus ml-auto" data-toggle="collapse" data-target="#collapseTwo"></i>
                        </div>
                        <div id="collapseTwo" className="collapse pl-0" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>Once minted, simply connect to your Open Sea account to view your NFTs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card my-1">
                        <div className="card-header d-flex align-items-center  pl-0  mb-2" id="headingThree">
                            <button type="button" className="btn btn-link  pl-0 py-0" data-toggle="collapse" data-target="#collapseThree">
                                IS THERE A PRESALE?
                                 </button>
                            <i className="fa fa-plus ml-auto" data-toggle="collapse" data-target="#collapseThree"></i>
                        </div>
                        <div id="collapseThree" className="collapse pl-0" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>A presale will be available for 1000 of the most active members of the community. Those who reach level 15 on Discord.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card my-1">
                        <div className="card-header d-flex align-items-center  pl-0  mb-2" id="headingFour">
                            <button type="button" className="btn btn-link  pl-0 py-0" data-toggle="collapse" data-target="#collapseFour">
                                WHEN WILL I BE ABLE TO MINT THE WEALTHY PENGUIN?
                                 </button>
                            <i className="fa fa-plus ml-auto" data-toggle="collapse" data-target="#collapseFour"></i>
                        </div>
                        <div id="collapseFour" className="collapse pl-0" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>The WEALTHY Penguin Club will be available on December 1st at 8am EST. The fee to mint a WEALTHY penguin is 0,15 ETH per unit + GAS. 24 hours before public mint</p>
                            </div>
                        </div>
                    </div>
                    <div className="card my-1">
                        <div className="card-header d-flex align-items-center  pl-0  mb-2" id="headingFive">
                            <button type="button" className="btn btn-link  pl-0 py-0" data-toggle="collapse" data-target="#collapseFive">
                            WHEN WILL I BE ABLE TO MINT THE WEALTHY PENGUIN?
                                 </button>
                            <i className="fa fa-plus ml-auto" data-toggle="collapse" data-target="#collapseFive"></i>
                        </div>
                        <div id="collapseFive" className="collapse pl-0" aria-labelledby="headingFive" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>The WEALTHY Penguin Club will be available on December 1st at 8pm EST. The fee to mint a Lucky Penguin is 0,15 ETH per unit + GAS. 24 hours before public mint</p>
                            </div>
                        </div>
                    </div>
                    <div className="card my-1">
                        <div className="card-header d-flex align-items-center  pl-0  mb-2" id="headingSix">
                            <button type="button" className="btn btn-link  pl-0 py-0" data-toggle="collapse" data-target="#collapseSix">
                            WHERE IS OUR PRIVATE ISLAND RESORT?
                                 </button>
                            <i className="fa fa-plus ml-auto" data-toggle="collapse" data-target="#collapseSix"></i>
                        </div>
                        <div id="collapseSix" className="collapse pl-0" aria-labelledby="headingSix" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>Our private resort coliving community is located on an island in Indonesia. The exact location has been shared with the inner circle and it’s coordinates will be shared once you join our inner circle. Since our properties are still being developed you will provide crucial feedback to our architect so we can create an amazing home for our future community. </p>
                            </div>
                        </div>
                    </div>
                    <div className="card my-1">
                        <div className="card-header d-flex align-items-center  pl-0  mb-2" id="headingSeven">
                            <button type="button" className="btn btn-link  pl-0 py-0" data-toggle="collapse" data-target="#collapseSeven">
                            WHAT ARE THE LUCKY PENGUINS?
                                 </button>
                            <i className="fa fa-plus ml-auto" data-toggle="collapse" data-target="#collapseSeven"></i>
                        </div>
                        <div id="collapseSeven" className="collapse pl-0" aria-labelledby="headingSeven" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>The Lucky Penguins are the rarest NFTs of the Wealth Penguin Club. We’ve set aside a portion of our secondary sales for our Lucky Penguins. Holding one of them (by lucky mint or through the secondary market) gives you access to monthly rewards totaling .07 ETH. This can be in the form on NFT’s, vacations, and more. Keep in mind this may depend on secondary sales each month. If our trading volume is down it is possible that your rewards will be less in some months but we will do our best to carry this out. As a lucky penguin you will also be automatically invited to our inner circle, and have a major decision making and leadership role in our community. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Faq
