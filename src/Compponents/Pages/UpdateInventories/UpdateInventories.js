import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const UpdateInventories = () => {
    const { id } = useParams()
    const [updatebook, setUpdatebook] = useState({})


    useEffect(() => {
        const url = `http://localhost:5000/book/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdatebook(data))
    }, [id]);
    const handleQuantity = () => {

        // const quantity = updatebook.quantity
        // const newQuantity = parseInt(quantity) - 1;
        // const updateQuantity = { newQuantity }
        // console.log(updateQuantity);
        // const url = `http://localhost:5000/book/${id}`;
        // fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': "application/json"
        //     },
        //     body: JSON.stringify(updateQuantity)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(parseInt(data?.updateQuantity));
        //         setUpdatebook(parseInt(data?.updateQuantity))
        //     })




    }
    return (
        <div>
            <div className='d-flex justify-content-evenly mt-3' >
                <div className='container col-lg-6  w-lg-50 w-sm-100 align-items-center text-center p-4' style={{ backgroundColor: "rgb(215, 219, 244)" }}>
                    <h4>book Name :{updatebook.name}</h4>
                    <img src={updatebook.img} height='270px' alt="" />

                    <p>price:${updatebook.Price}</p>
                    <p>Quantity:{updatebook.quantity}</p>
                    <p>{updatebook.descriptio}</p>

                    <button className='btn btn-primary mb-3' onClick={handleQuantity}>Deliverd</button>
                    <Form>
                        <Form.Group className="mb-2 mt-5 fs-4" controlId="formBasicNumber">
                            <Form.Label>Add Quantity:</Form.Label>
                            <Form.Control type="number" placeholder="quantity" />
                            <Button className='mt-5' >add quantity</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <Link to='/manageInventory'><button className='btn btn-primary w-lg-25 w-sm-50 mx-auto d-block mt-5'>Manage Inventory</button></Link>
        </div>
    );
};

export default UpdateInventories;
