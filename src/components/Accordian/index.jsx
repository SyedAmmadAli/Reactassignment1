import React from 'react'
import styles from './accordian.module.css'
import faqsWrapper from "../../assets/faqswrapper.png"

export const Accordian = () => {
  return (
<>
    <div className={`aboutwrapper ${styles.accor_img}`} id='accordian'>
    <img src={faqsWrapper} alt="" className={`${styles.accordionpic}`} />
     </div>

    <div className='container-fluid accordian_Sect mt-5 d-flex flex-column justify-content-center'>
     

      <div className='container '>
        <div className={`${styles.accordian_content} `}>

          <h1 className={`display-6 fw-medium ${styles.head} `}>FAQ'S</h1>
          <h1 className='display-4 fw-bold text-light'>COMMONLY AKSED QUESTIONS</h1>

          {/* Accordian */}
          <div className="accordion accordion-flush  mt-5" id="accordionFlushExample">

            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <p className={`${styles.parag}`}>How do i pay for the essentials or premium plan?</p>
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse bg-black text-light" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.</div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-black" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  We need to add new users to our team. How will that be billed?
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body bg-black text-light ">You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.</div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-black" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <p>Do you offer discounts for non fropit organizations or educational institutions?</p>
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body bg-black text-light">You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.</div>
              </div>
            </div>

            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseOne">
                  <p className={`${styles.parag}`}>Can i cancel my essentials or premium plan subscription at anytime?</p>
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse bg-black text-light" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><p>You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.</p></div>
              </div>
            </div>

            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseOne">
                  <p className={`${styles.parag}`}>My teams wants to cancel it is subcription. How do we that? can we get a refund?</p>
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse bg-black text-light" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><p>You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.</p></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
</>

  )
}
