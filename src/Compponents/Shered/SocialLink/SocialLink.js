import React from 'react';
import google from '../../images/socialIcon/google.png'
import github from '../../images/socialIcon/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLink = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const [signInWithGithub] = useSignInWithGithub(auth)
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const handleSignInWithGoole = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    const handleSignInWithGithub = () => {
        signInWithGithub()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    return (
        <div>
            <p className='text-center mt-'>Continue With</p>
            <div style={{ height: '2px' }} className='w-50 bg-secondary d-block mx-auto mb-4'></div>
            <div>
                <button
                    onClick={handleSignInWithGoole}
                    className='d-block mx-auto w-50 btn btn-primary mb-3'>
                    <img style={{ height: "30px", width: '30px' }} src={google} alt="" />
                    <span className='ps-2'>Google</span>
                </button>
                <button
                    onClick={handleSignInWithGithub}
                    className='d-block mx-auto w-50 btn btn-primary'>
                    <img style={{ height: "30px", width: '30px' }} src={github} alt="" />
                    <span className='ps-2'>Google</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLink;