import React from 'react'
import styles from './About.module.css'
import aboutback from "../../assets/aboutwrapper.png"
import aboutpic from "../../assets/about.png"

export const AboutSect = () => {
    return (
        <div className='about_sec' id='about_sec'>
            <div className={styles.aboutwrapper}>
                <img src={aboutback} className={`${styles.aboutpic}`} />
            </div>

            <div className="about_Sect">
                <div className={`container ${styles.aboutcontent}`}>
                    <div className="row col-sm-12 col-10 mx-auto">
                        <h3 className={`${styles.head} mt-5`}>ABOUT US</h3>

                        <div className="col-sm-12 col-lg-10 col-12 ">
                            <h1 className='display-4 fw-medium mt-5 text-light'>ULTIMATE EPERIENCES WITH STORY, EMOTION AND PURPOSE</h1>
                        </div>

                        <div className="col-lg-6 col-md-12 col-12 mt-5">
                            <img src={aboutpic} alt="" className='img-fluid' />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 mt-5">

                            <div className={`${styles.about_right} d-flex flex-column justify-content-center`}>
                                <h2 className={`text-light fw-regular fs-2 `}> " Our mission is to produce the highest quality work for every clients, on every project with full of energy we have "</h2>
                                <p className={`${styles.head} fw-bold fs-6 mt-2`}>Binjamin Kao</p>

                                <h5 className='text-light'>DIRECTOR</h5>
                                <p className='mt-2 text-light '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>



        </div>




    )
}
