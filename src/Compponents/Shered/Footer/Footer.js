import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='mt-5 px-5 py-2' style={{ backgroundColor: "rgb(113, 113, 127)" }}>
            <div className='container p-5 text-light d-lg-flex justify-content-lg-between  '>
                <div>
                    <h5>New Market Book Warehouse</h5>
                    <p>Visit : 24 hours / 7 days</p>
                    <p className='fw-bold'>Phone:0123243453, 0193584353,0193439556</p>
                </div>

                <div>
                    <h5>Mirpur 10 Book Warehouse Stationary</h5>
                    <p>Visit : 24 hours / 7 days</p>
                    <p className='fw-bold'>Phone:0123243453, 0193584353,0193439556</p>
                </div>
            </div>
            <div className=' icon d-sm-flex align-items-center justify-content-start  '>

                <i className="fa-brands fa-facebook m-2 fs-5 text-light "></i>

                <i className="fa-brands fa-instagram m-2 fs-5 text-light"></i>

                <i className="fa-brands fa-twitter m-2 fs-5 text-light"></i>

                <i className="fa-brands fa-youtube m-2 fs-5 text-light"></i>

            </div>
            <p className='text-center text-light mt-3'>Copyright © {year}</p>
        </div>
    );
};

export default Footer;