import React from 'react';
import downloadImg from '../../src/images/dwnld.jpg'

const Download = () => {
    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-lg-12  text-start d-flex align-items-center justify-content-center">
                    <div><img style={{ width: '200px' }} src={downloadImg} alt="" /></div>
                    <div><h5>Forms</h5>
                        <small><i class="fa-solid fa-circle-arrow-right my-1 mx-1" style={{ color: 'orange' }}></i>All Forms</small>
                        <h5>Notice/Circular:</h5>
                        <small><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'orange' }}></i>BSEC:</small></div>

                </div>
            </div>

        </div>
    );
};

export default Download;