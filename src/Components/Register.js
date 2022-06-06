import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import register from '../../src/images/register.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.git.init';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confrimPass, setconfrimPass] = useState('')
    const [customError, setCustomError] = useState('')
    const navigate = useNavigate();

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPassBlur = e => {
        setconfrimPass(e.target.value)
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let errorMessage;

    if (error) {
        errorMessage =
            <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/home')
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        if (password !== confrimPass) {
            setCustomError('Please enter the valid password')
        }
        else {
            createUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <div className='container'>
            <div className="row mb-5">
                <h2 className='my-4' style={{ color: 'purple' }}>Please Register</h2>
                <div className="col-lg-6">
                    <img className='rounded w-100' src={register} alt="" />
                </div>
                <div className="col-lg-6">

                    <form onSubmit={handleSubmitForm}>
                        <input type="text" placeholder='Name' className='w-75 mx-auto p-2 rounded border-1' />
                        <br />
                        <input type="email" onBlur={handleEmailBlur} placeholder='Email' className='w-75 mx-auto p-2 mt-3 rounded border-1' />
                        <br />
                        <input type="password" onBlur={handlePasswordBlur} placeholder='Passeword' className='w-75 mx-auto mt-3 p-2 rounded border-1' />
                        <br />
                        <input type="password" onBlur={handleConfirmPassBlur} placeholder='Confirm Passeword' className='w-75 mx-auto mt-3 p-2 rounded border-1' />
                        <br />
                        <input type="submit" value="Login" className='mt-3 w-75 mb-5 px-4 py-2 bg-primary rounded text-white border-0' />
                    </form>
                    {errorMessage}
                    <p className=''>Have you an Account? <Link to='/login'>Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;