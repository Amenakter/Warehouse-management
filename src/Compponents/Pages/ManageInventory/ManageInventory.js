import { Button, Card } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../../Shered/hook/useHook';
import './ManageInventory.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageInventory = () => {

    const [allBooks, setAllBooks] = useBooks([])

    const handleDelete = (id) => {

        const userConfirmation = window.confirm("Are you sure? Do you want delete this book?")
        if (userConfirmation) {
            const url = `http://localhost:5000/book/${id}`
            fetch(url, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = allBooks.filter(books => books._id !== id);
                        setAllBooks(remaining);
                        toast("Item deleted")

                    }

                })
        }

    }
    return (
        <div >
            <h3 className='text-center mt-4'>Our All Collections</h3>
            <div style={{ height: '2px' }} className='w-50 bg-secondary d-block mx-auto mb-4'></div>
            <div className=' position-sticky top-50 float-end  mt-5'>
                <h5 className='text-dark'>If you want,you can add new items:</h5>
                <Link to='/additem'><button className='btn btn-primary '>Add new Item</button></Link>
            </div>
            <div className='manageBook'>
                <div className="row">
                    {
                        allBooks.map(book => <div key={book._id} className='d-flex col-4  gy-4' >
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

                                    <Button variant="primary" onClick={() => handleDelete(book._id)} >Delete</Button>

                                </Card.Body>
                            </Card>
                            <ToastContainer></ToastContainer>
                        </div>)
                    }
                </div>


            </div>

        </div>
    );
};

export default ManageInventory;