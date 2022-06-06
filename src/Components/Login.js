import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../src/images/login.png'
import auth from '../firebase.git.init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
    }

    let errorMessage;

    if (error) {
        errorMessage =
            <p className='text-danger'>Error: {error?.message}</p>
    }


    const handleSubmitForm = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)


    };


    return (
        <div className='container'>
            <div className="row mb-5">
                <h2 className='my-4' style={{ color: 'purple' }}>Please Login</h2>
                <div className="col-lg-6">
                    <img className='rounded' src={login} alt="" />
                </div>
                <div className="col-lg-6">

                    <form onSubmit={handleSubmitForm}>
                        <input type="email" onBlur={handleEmailBlur} placeholder='Email' className='w-75 mx-auto p-2 rounded border-1' />
                        <br />
                        <input type="password" onBlur={handlePasswordBlur} placeholder='Passeword' className='w-75 mx-auto mt-3 p-2 rounded border-1' />
                        <br />
                        <input type="submit" value="Login" className='mt-3 w-75 mb-5 px-4 py-2 bg-primary rounded text-white border-0' />
                    </form>
                    {errorMessage}
                    <p className=''>You have no Account? <Link to='/register'>Please Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;