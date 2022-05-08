import React from 'react';
import { Nav } from 'react-bootstrap';
import Children from './CatagoryItem/Children/Children';
import Horror from './CatagoryItem/Horror/Horror';
import Jokes from './CatagoryItem/Jokes/Jokes';

const Catagoris = () => {
    return (
        <div className='mt-5'>
            <nav className="navbar navbar-expand-md navbar-light bg-light mt-5">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="toggleMobileMenu">
                        <div className="navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="catagories#children" className='fs-6 text-dark fw-bold'>Children</Nav.Link>
                                <Nav.Link href="catagories#jokes" className='fs-6 text-dark fw-bold'>Jokes</Nav.Link>
                                <Nav.Link href="catagories#horror" className='fs-6 text-dark fw-bold'>Horror</Nav.Link>

                            </Nav>
                        </div>
                    </div>
                </div>
            </nav >
            <div className=''>
                <div >
                    <Children></Children>
                    <Horror></Horror>
                    <Jokes></Jokes>
                </div>
            </div>
        </div >
    );
};

export default Catagoris;