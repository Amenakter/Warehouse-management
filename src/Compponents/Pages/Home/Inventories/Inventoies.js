import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/book')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className=' container'>
            <h2 className='text-center mt-5' >This is Ours Inventories</h2>
            <div id='contact' style={{ height: '3px' }} className='w-50 bg-info mx-auto '></div>
            <div className='row '>
                {
                    books.slice(0, 6).map(book => <Inventory key={book._id} book={book}>

                    </Inventory>

                    )
                }
            </div>

        </div>
    );
};

export default Inventories;