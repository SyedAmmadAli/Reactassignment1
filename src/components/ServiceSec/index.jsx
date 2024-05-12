import React from 'react'
import styles from "./service_sect.module.css"
// import card from "./card.jsx"
// import { BTScard } from "../cardbs"


export const Service_Sect = () => {




    // var card_Head = props.card_head
    // var card_title = props.card_title
    // var card_Desc = props.card_description

    // console.log(props)

    // console.log(card_prop);
    // console.log(card_Head);
    // console.log(card_title);
    // console.log(card_Desc);







    return (
        <div className='service_sect d-flex justify-content-center flex-column mt-sm-5 mx-auto' id='service_sect'>
            <div className='container'>
                <div className="row">

                    <div className="col-10">
                        <h2 className='fw-medium fs-3'>OUR SERVICES</h2>

                    </div>
                    <div className="col-lg-6 col-md-6 col-10">
                        <h2 className={`${styles.head} fw-bold display-4 mt-4`} >CREATIVE TREAT WITH OUR MAGIC</h2>
                    </div>
                    <div className="col-12">

                        <div className="row">

                            <div className="col-lg-4 col-md-4 col-12 mt-5">
                                {/* <div className="card" > */}
                                <div className={`${styles.card_Head_Box}`}>
                                    <h1 className={`${styles.card_head}`}>1</h1>
                                </div>
                                <div className="card-body mt-4">
                                    <h5 className="card-title fw-bold fs-2">Responsive Layout</h5>
                                    <p className="card-text mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nihil, labore tenetur voluptates sequi veniam adipisci ea ex vero repellat ullam quo at ad possimus soluta fugiat a animi vitae.</p>

                                </div>
                                {/* </div> */}
                            </div>

                            <div className="card_3 col-lg-4 col-md-4 col-12 d-sm-none d-md-inline mt-5">
                                {/* <div className="card" > */}
                                <div className={`${styles.card_Head_Box}`}>
                                    <h1 className={`${styles.card_head}`}>2</h1>
                                </div>
                                <div className="card-body mt-4">
                                    <h5 className="card-title fw-bold fs-2">Social Media Advertising</h5>
                                    <p className="card-text mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nihil, labore tenetur voluptates sequi veniam adipisci ea ex vero repellat ullam quo at ad possimus soluta fugiat a animi vitae.</p>

                                </div>
                                {/* </div> */}
                            </div>

                            <div className="card_3 col-lg-4 col-md-4 col-12 d-sm-none d-md-inline mt-5">
                                {/* <div className="card" > */}
                                <div className={`${styles.card_Head_Box}`}>
                                    <h1 className={`${styles.card_head}`}>3</h1>
                                </div>
                                <div className="card-body mt-4">
                                    <h5 className="card-title fw-bold fs-2">Re-branding</h5>
                                    <p className="card-text mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nihil, labore tenetur voluptates sequi veniam adipisci ea ex vero repellat ullam quo at ad possimus soluta fugiat a animi vitae.</p>

                                </div>
                                {/* </div> */}
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
