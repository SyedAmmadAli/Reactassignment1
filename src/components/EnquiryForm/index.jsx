import React from 'react'


export const EnquiryForm = () => {
    return (

        <div className="container-fluid contact-wrapper  text-danger" id="contact_form">
            <div className="contact-content">

                <h2 className="text-center">
                    LET'S START WORKING TOGETHER ON YOUR AMAZING PROJECT
                </h2>
                
                <form action="" className="contact-form mx-auto">
                    <div className="row">
                        <div className="col-lg-6 col-12 mb-lg-0 mb-4">
                            <input
                                type="text"
                                className="form-control" placeholder="Enter First Name" />
                        </div>
                        <div className="col-lg-6">
                            <input
                                type="text" className="form-control" placeholder="Enter Last Name" />
                        </div>

                        <div className="col-12">
                            <textarea name="message" cols="30" className="mt-4 form-control message" rows="10" placeholder="Write your message here"></textarea>
                        </div>
                        <div className="col-12 mt-4">
                            <button className=" submit-btn">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>



    )
}
