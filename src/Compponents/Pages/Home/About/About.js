import React from 'react';
import about from "../../../images/abut.jpg"

const About = () => {
    return (
        <>
            <div className='py-5'>
                <h1 className='text-center '>About Us</h1>
                <div style={{ height: '3px' }} className='w-50 bg-info mx-auto'></div>
            </div>
            <div id='about' className='d-flex align-items-center justify-content-center  '>
                <img src={about} className="w-50 ms-3 p-3" height='350px' alt="" />
                <div className='w-50 mx-auto mt-5 p-5 mb-3' style={{ backgroundColor: "rgb(218, 219, 246)" }}>
                    <p className='text-dark fw-bold'>
                        <h3 className='text-center'>😍</h3>
                        Imagine getting 50-80% off all of your book prices every day!!
                        <br></br>
                        <br></br>
                        <br></br>
                        Book Warehouse is the national leader among discount booksellers.
                        We have stores located across America from coast to coast and offer a
                        broad range of books for all tastes, interests, and ages. From cookbooks
                        to religion, children’s educational books to romance, science to history
                        - you will find it in our stores.

                    </p>
                </div>
            </div>
        </>

    );
};

export default About;