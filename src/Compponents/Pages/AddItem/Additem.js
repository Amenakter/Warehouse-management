import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';

const Additem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)

    const onSubmit = data => {
        fetch('https://secret-bastion-00294.herokuapp.com/book', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)

            })

        fetch('https://secret-bastion-00294.herokuapp.com/addedItems', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res);
                toast("Item successfully Added")


            })

    };




    return (
        <div>
            <div className='col-lg-6 w-lg-50 w-sm-100 mt-5 border p-5  d-block mx-auto ' style={{ backgroundColor: "rgb(172, 175, 237)" }}>
                <form className='text-center fs-5' onSubmit={handleSubmit(onSubmit)} >
                    <label> Book Name :</label>
                    <input className='mb-4 ms-3 rounded border-0 p-1' type='text' {...register("name", { required: true })} /> <br />
                    <label> email :</label>
                    <input className='mb-4 ms-3 rounded border-0 p-1' type='text' value={user.email} {...register("email", { required: true })} /> <br />
                    <label> Book URL :</label>
                    <input className='mb-4 ms-3 rounded border-0 p-1' type='text' {...register("img")} /> <br />
                    <label> Book Price :</label>
                    <input className='mb-4 ms-3 rounded border-0 p-1' type="number" {...register("Price")} /> <br />
                    <label> Phone number :</label>
                    <input className='mb-4 ms-3 rounded border-0 p-1' type="number"  {...register("phone")} /> <br />
                    <label> Quantity :</label>
                    <input className='mb-4 ms-3 rounded border-0 p-1' type="number" {...register("quantity")} /> <br />
                    <label> Short Description :</label> <br />
                    <textarea className='mb-4 ms-3 rounded border-0 p-1' type="text" {...register("descriptio")} /> <br />
                    <input type="submit" className='btn btn-primary' value='Add item' />
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Additem;