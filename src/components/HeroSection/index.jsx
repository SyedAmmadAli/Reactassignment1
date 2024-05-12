import React from 'react'
import slider from '../../assets/slider1.png'
import styles from './heroSect.module.css'

export const HeroSection = () => {
  return (
  
    <div id="carouselExampleDark" className="carousel carousel-light slide carousel-fade">
        {/* <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> */}
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
                <img src={slider} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-block ">
                    <h2 className="text-light display-2 fw-medium">ACHIEVE YOUR</h2>
                    <h2 className={`${styles.heading} text-light display-2  fw-medium`}>"BUSINESS GOALS"</h2>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src={slider} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-block ">
                    <h1 className="text-light display-2 fw-medium">ACHIEVE YOUR</h1>
                    <p className={`${styles.heading} text-light display-2 fw-medium`}>"BUSINESS Dreems"</p>

                </div>
            </div>
            <div className="carousel-item">
                <img src={slider} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-block ">
                    <h1 className="text-light display-2 fw-medium">ACHIEVE YOUR</h1>
                    <p className={`${styles.heading} text-light  display-2 fw-medium`} >"BUSINESS Success"</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
       
    </div>

  )
}
