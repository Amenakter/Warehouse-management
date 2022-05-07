import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Children = () => {
    const [childBook, setChildBook] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/book')
            .then(res => res.json())
            .then(data => setChildBook(data))
    }, [])
    return (
        <div id='children'>
            <h2>Chlidren book:{childBook.length}</h2>

            <div className='row'>
                {
                    childBook.map(book => <div key={book._id} className='d-flex col-4  gy-4' >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" height='200px' style={{ marginTop: "20px" }} src={book.img} />
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

export default Children;