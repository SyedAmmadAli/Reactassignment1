import React from 'react'
import Logo from "../../assets/logo.png"

export default function Footer() {
    return (
        <>
            <footer className="bg-body-tertiary text-center text-lg-start pt-5 footerBg" >
                {/* Grid container  */}
                <div className="container p-4 ">
                    {/* Grid row */}
                    <div className="row">
                        {/* Grid column */}
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0 mt-5 p-4">
                            <img src={Logo} alt="" />


                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="footlinks col-lg-6 col-md-12 mb-4 mb-md-0 mt-5 p-4 d-flex justify-content-evenly align-items-center ">



                            <a className="nav-link  fw-semibold fs-4 " aria-current="page" href="#">HOME</a>


                            <a className="nav-link fw-semibold fs-4 " href="#about_sec">ABOUT</a>

                            <a className="nav-link fw-semibold fs-4 " href="#service_sect">SERVICES</a>
                            <a className="nav-link fw-semibold fs-4 " href="#accordian">PRICING</a>
                            <a className="nav-link fw-semibold fs-4 " href="#contact_form">CONRACT</a>



                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
                {/* Grid container */}

                {/* Copyright  */}
                <div className="text-center p-4 border-2 border-top border-dark text-light">
                    © Binary Chemist 2022 - All Right Reserved
                </div>
                {/* Copyright */}
            </footer>
        </>
    )
}
