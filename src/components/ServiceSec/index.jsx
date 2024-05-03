import React from 'react'
import styles from "./service_sect.module.css"
import cardpic1 from "../../assets/1.jpg"
import cardpic2 from "../../assets/2.jpg"
import cardpic3 from "../../assets/c.jpg"

export const Service_Sect = () => {
    return (
        <div className='service_sect d-flex justify-content-center flex-column mx-auto'>
            <div className='container'>
                <div className="row">

                    <div className="col-10">
                        <h2 className='fw-medium fs-3'>OUR SERVICES</h2>

                    </div>
                    <div className="col-6">
                        <h2 className={`${styles.head} fw-bold display-4 mt-4`} >CREATIVE TREAT WITH OUR MAGIC</h2>
                    </div>
                    <div className="col-12">

                        <div className="row">
                            <div className="col-4 mt-5">
                                {/* <div className="card" > */}
                                    <img src={cardpic1} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold fs-2">RESPONSIVE LAYOUT</h5>
                                        <p className="card-text mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nihil, labore tenetur voluptates sequi veniam adipisci ea ex vero repellat ullam quo at ad possimus soluta fugiat a animi vitae.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                {/* </div> */}
                            </div>
                            <div className="col-4">
                                <div className="card" >
                                    <img src={cardpic2} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" >
                                    <img src={cardpic3} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
