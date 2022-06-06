import React from 'react';
import about from '../../src/images/about.jpeg'

const About = () => {
    return (
        <div className='container'>
            <h2 className='my-4'>About Us</h2>
            <div className="row">
                <div className="col-lg-6">
                    <img style={{ width: '500px', borderRadius: '10px' }} src={about} alt="" />
                </div>
                <div className="col-lg-6 text-start">
                    <p><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>Captial Profile</p>
                    <p><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>Mission & Vission</p>
                    <p><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>Board of Directors</p>
                    <p><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>Management/Executive</p>
                    <p><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>Ciculation</p>
                    <p><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>Career opportunity</p>
                    <p><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>Contact
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;