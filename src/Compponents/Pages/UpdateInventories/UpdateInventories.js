import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateInventories = () => {
    const { id } = useParams()
    const [updatebook, setUpdatebook] = useState(true)


    useEffect(() => {
        const url = `https://secret-bastion-00294.herokuapp.com/book/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdatebook(data))
    }, [updatebook]);

    const handleQuantity = (newQuantityValue) => {
        const url = `https://secret-bastion-00294.herokuapp.com/book/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newQuantityValue)
        })
            .then(res => res.json())
            .then(data => {
                console.log("success", data);

            })
    }
    // delivery quantity
    const handleDeliverQuantity = () => {
        const quantity = updatebook.quantity
        const newQuantity = parseInt(quantity) - 1;
        const updateQuantity = { newQuantity };
        handleQuantity(updateQuantity)

    }

    // restock quantity
    const handleRestockQuantity = event => {
        event.preventDefault()
        const addedQuantity = parseInt(event.target.number.value);
        const quantity = updatebook.quantity
        const newQuantity = parseInt(quantity) + addedQuantity;
        const addedupdateQuantity = { newQuantity };
        handleQuantity(addedupdateQuantity)
        event.target.number.value = ''
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

                    <button className='btn btn-primary mb-3' onClick={handleDeliverQuantity}>Deliverd</button>
                    <form onSubmit={handleRestockQuantity}>
                        <label className='fs-5 mt-4'>Add quantity</label> <br />
                        <input className='fs-5 w-50 mt-3 mb-3 rounded border-0' type="number" name='number' placeholder='add quantity' /><br />
                        <input type='submit' className='btn btn-primary' value='Add Quantity' />
                    </form>
                </div>
            </div>
            <Link to='/manageInventory'><button className='btn btn-primary w-lg-50 w-sm-50 mx-auto d-block mt-5'>Manage Inventory</button></Link>
        </div>
    );
};

export default UpdateInventories;
