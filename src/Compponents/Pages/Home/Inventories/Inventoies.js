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
            <h2>This is Ours Inventory section :</h2>
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