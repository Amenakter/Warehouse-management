import React from 'react';
import contact from '../../images/contact.jpg'

const Contact = () => {
    return (
        <>
            <h2 className='text-center mt-5'>CONTACT US</h2>
            <div id='contact' style={{ height: '3px' }} className='w-50 bg-info mx-auto '></div>
            <div className='row'>
                <div className='d-lg-flex col-sm-12 align-items-lg-center justify-content-lg-center'>
                    <div className='mt-5 col-lg-6  w-sm-100 mx-auto p-5' style={{ backgroundColor: 'rgb(234, 234, 253)' }} >
                        <form className='mt-3' >
                            <input className='mb-3 border-1 border-primary p-2 w-100' type="text" placeholder='Name' /><br />
                            <input className='mb-3 border-1 border-primary p-2 w-100' type="Email" placeholder='Email' /><br />
                            <input className='mb-3 border-1 border-primary p-2 w-100' type="text" placeholder='subject' /><br />
                            <input className='mb-3 border-1 border-primary p-2 w-100' type="text" placeholder='preferred Store Location' /><br />
                            <textarea className='mb-3 border-1 border-primary p-2 w-100' type="text" placeholder='massege' />
                        </form>
                    </div>

                    <div className='col-lg-6  w-sm-100'>
                        <img src={contact} className="w-lg-50 p-3 img-fluid" alt="" />
                    </div>

                </div>
            </div>
        </>

    );
};

export default Contact;