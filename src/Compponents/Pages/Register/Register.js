import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLink from '../../Shered/SocialLink/SocialLink';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import userlogo from '../../images/user.jpg'
import './Register.css'
import auth from '../../../firebase.init';
import Loading from '../../Shered/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    let Error;
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (error || UpdateError) {
        Error = <p>{error?.message}</p>;
    }
    if (user) {
        console.log(user);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.pass.value;
        const confirmPassword = event.target.confirmPass.value;
        console.log(name, email, password,);
        if (email && password) {
            if (password === confirmPassword) {
                createUserWithEmailAndPassword(email, password)
                updateProfile({ displayName: name })
                navigate('/')

            }
            else {
                toast('password not match')
            }


        }
        else {
            toast('Please Enter your infornmation')
        }
    }

    return (
        <div className='col-lg-6 w-lg-50 w-sm-100 mx-auto mt-2 px-4 py-2 rounded' style={{ backgroundColor: "rgb(172, 175, 237)" }}>
            <Form onSubmit={handleSubmit} className='fw-bold' >
                <img className='d-block mx-auto' src={userlogo} alt="" />
                <div className='d-flex align-items-center justify-content-center'>
                    <div style={{ height: '2px' }} className='w-50 bg-secondary '></div>
                    <p className='px-2 fs-4 m-1'>Register</p>

                    <div style={{ height: '2px' }} className='w-50 bg-secondary '></div>
                </div>
                <Form.Group className="mb-2" controlId="formBasicName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name='username' placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='pass' placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirmPass' placeholder="Confirm pass" />
                </Form.Group>
                <Button variant="primary mx-auto w-50 d-block mb-2" type="submit">
                    Register
                </Button>
                {Error}
                <p className='fs-6  '>Already Have an Account?<Link className='text-danger' to='/login'> Please login</Link></p>
                {/* <p className='fs-6'>Forgot Password?<Link className='text-danger' to='/login'> Reset Password</Link></p> */}

                <SocialLink></SocialLink>

            </Form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;