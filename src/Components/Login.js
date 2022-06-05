import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../src/images/login.png'

const Login = () => {
    return (
        <div className='container'>
            <div className="row mb-5">
                <h2 className='my-4' style={{ color: 'purple' }}>Please Login</h2>
                <div className="col-lg-6">
                    <img className='rounded' src={login} alt="" />
                </div>
                <div className="col-lg-6">

                    <input type="email" placeholder='Email' className='w-75 mx-auto p-2 rounded border-1' />
                    <br />
                    <input type="password" placeholder='Passeword' className='w-75 mx-auto mt-3 p-2 rounded border-1' />
                    <br />
                    <input type="submit" value="Login" className='mt-3 w-75 mb-5 px-4 py-2 bg-primary rounded text-white border-0' />
                    <p className=''>You have no Account? <Link to='/register'>Please Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;