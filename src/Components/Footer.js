import React from 'react'

function Footer() {
    return (
        <>
             <footer class="py-5">
        <div class="container">
            <div class="row align-items-center">
            <a class="navbar-brand" href="#">
                <img src="images/logo.png" width="130" height="30"></img>
            </a>
                <div class="col-md-6 d-flex flex-row justify-content-between align-items-center">
                    <h5 class="d-none d-md-block">|</h5>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service </a>
                    <a href="">Help!</a>
                    <h5 class="d-none d-md-block">|</h5>

                </div>
                <div class="col-md-4 d-flex flex-row align-items-center justify-content-between">
                    <p class="mt-3">Find us on social media</p>
                    <a href="https://www.linkedin.com/company/wealthy-penguin-island-club" target="_blank" class="icon mx-2"><img src="images/linkedin.svg" width="20px" alt=""/></a>
                    <a href="https://www.facebook.com/Wealthy-Penguin-Island-Club-110455091424715" target="_blank" class="icon mx-2"><img src="images/facebook.svg" width="20px" alt=""/></a>
                    <a href="https://www.instagram.com/wealthypenguinislandclub/" target="_blank" class="icon mx-2"><img src="images/insta.svg" width="20px" alt=""/></a>
                    <a href="https://twitter.com/wealthypenguins" target="_blank" class="icon mx-2"><img src="images/twitter.svg" width="20px" alt=""/></a>
                </div>
            </div>
        </div>
    </footer>


        </>
    )
}

export default Footer
