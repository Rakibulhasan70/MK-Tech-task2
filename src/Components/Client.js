import React from 'react';
import client from '../../src/images/client.jpg'

const Client = () => {
    return (
        <div className='container'>
            <h2 className='my-5'>Become A Client</h2>
            <div className="row">
                <div className="col-lg-6 text-end mt-5 justify-center items-center">
                    <p><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'yellow' }}></i>Bangladeshi Individuals</p>
                    <p><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'yellow' }}></i>Bangladeshi Institutions</p>
                    <p><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'yellow' }}></i>Foreign Investors</p>
                    <p><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'yellow' }}></i>NRBs</p>
                    <p><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'yellow' }}></i>Daily Market Company</p>
                </div>
                <div className="col-lg-6 mx-auto">
                    <img width='100%' height='90%' src={client} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Client;