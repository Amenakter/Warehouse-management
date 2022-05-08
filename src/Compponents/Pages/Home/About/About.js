import React from 'react';
import about from "../../../images/abut.jpg"

const About = () => {
    return (
        <>
            <div id='about' className='py-5'>
                <h1 className='text-center '>About Us</h1>
                <div style={{ height: '3px' }} className='w-50 bg-info mx-auto'></div>
            </div>
            <div className='d-lg-flex col-sm-12 align-items-center justify-content-center  '>
                <div className='col-lg-6  w-sm-100 '>
                    <img src={about} className="w-lg-50 p-3 img-fluid" alt="" />
                </div>
                <div className='w-lg-50 col-lg-6  w-sm-100 mx-auto mt-5 p-5 mb-3' style={{ backgroundColor: "rgb(218, 219, 246)" }}>
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