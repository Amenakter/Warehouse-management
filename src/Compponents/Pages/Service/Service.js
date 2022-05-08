import React from 'react';



const Service = () => {
    return (
        <div className='d-lg-flex flex-sm-wrap  align-items-center justify-content-between mt-5  p-5 ' style={{ background: "rgb(206, 206, 243)" }}>
            <div className='text-center'>
                <i className="fa-solid fa-truck fs-3 icon"></i>
                <p className='text-success fw-bold'>FAST DELIVERY</p>
            </div>
            <div className='text-center '>
                <i className="fa-solid fa-file-invoice-dollar fs-3 icon"></i>
                <p className='text-success fw-bold'>PAYMENT METHOD</p>
            </div>
            <div className='text-center '>
                <i className="fa-solid fa-user-clock fs-3 icon"></i>
                <p className='text-success fw-bold '>24 HOURS SERVICE</p>
            </div>
            <div className='text-center'>
                <i className="fa-solid fa-trophy fs-3 icon"></i>
                <p className='text-success fw-bold'>WORK EXPERIENCE</p>
            </div>

        </div>
    );
};

export default Service;