import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='mt-5 w-50 mx-auto p-5' style={{ backgroundColor: 'rgb(234, 234, 253)' }} >
            <h2 className='text-center'>CONTACT US</h2>
            <div style={{ height: '3px' }} className='w-50 bg-info mx-auto '></div>
            <form className='mt-3' >
                <input className='mb-3 border-1 border-primary p-2 w-100' type="text" placeholder='Name' /><br />
                <input className='mb-3 border-1 border-primary p-2 w-100' type="Email" placeholder='Email' /><br />
                <input className='mb-3 border-1 border-primary p-2 w-100' type="text" placeholder='subject' /><br />
                <input className='mb-3 border-1 border-primary p-2 w-100' type="text" placeholder='preferred Store Location' /><br />
                <textarea className='mb-3 border-1 border-primary p-2 w-100' type="text" placeholder='massege' />
            </form>
        </div>
    );
};

export default Contact;