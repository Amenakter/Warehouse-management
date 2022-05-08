import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Horror = () => {
    const [childBook, setChildBook] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/book')
            .then(res => res.json())
            .then(data => setChildBook(data))
    }, [])
    return (
        <div id='horror'>
            <h2>Horror book:{childBook.length}</h2>

            <div className='row'>
                {
                    childBook.map(book => <div key={book._id} className='d-flex col-lg-3 col-sm-12 w-lg-50 w-sm-100  gy-4' >
                        <Card >
                            <Card.Img variant="top" height='400px' style={{ marginTop: "20px" }} src={book.img} />
                            <Card.Body>
                                <Card.Title>{book.name}</Card.Title>
                                <Card.Text>
                                    {book.descriptio}
                                </Card.Text>
                                <Card.Text>
                                    Price:${book.Price}
                                </Card.Text>
                                <Card.Text>
                                    Quantity:{book.quantity}
                                </Card.Text>

                                <Button variant="primary"  >Delete</Button>

                            </Card.Body>
                        </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Horror;