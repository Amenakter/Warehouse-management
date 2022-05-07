import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import userlogo from '../../images/user.jpg'
import Loading from '../../Shered/Loading/Loading';
import SocialLink from '../../Shered/SocialLink/SocialLink';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    let Error = '';
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        Error = <p className='text-danger'>{error?.message}</p>;
    }
    if (user) {
        console.log(user);
    }
    const handleLoginForm = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        if (password) {
            await signInWithEmailAndPassword(email, password)
                .then(() => {
                    navigate(from, { replace: true });
                })



        }

    }
    const resetPass = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Password reset request accepted!!')
        } else {
            toast('email is missing , Please enter your mail address')
        }
    }

    return (
        <div className='w-50 mx-auto mt-2 px-4 py-2 rounded' style={{ backgroundColor: "rgb(172, 175, 237)" }}>
            <Form onSubmit={handleLoginForm} className='fw-bold' >
                <img className='d-block mx-auto' src={userlogo} alt="" />
                <div className='d-flex align-items-center justify-content-center'>
                    <div style={{ height: '2px' }} className='w-50 bg-secondary '></div>
                    <p className='px-2 m-1 fs-4'>LOGIN</p>

                    <div style={{ height: '2px' }} className='w-50 bg-secondary '></div>
                </div>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary mx-auto w-50 d-block mb-2" type="submit">
                    Login
                </Button>
                {Error}
                <p className='fs-6  '>Haven't Account?<Link className='text-danger' to='/register'> Create Account</Link></p>
                <p className='fs-6'>Forgot Password?<Link className='text-danger' to='/login' onClick={resetPass}> Reset Password</Link></p>

                <SocialLink></SocialLink>

            </Form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;