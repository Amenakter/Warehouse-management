import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound-img mt-5'>
            <div>
                <h1 className='text-center mt-5'>Ooops Page Not Found ☹</h1>
                <Link to='/'><button className='btn btn-danger d-block mx-auto'>Go to Home Page</button></Link>
            </div>
        </div>
    );
};

export default NotFound;