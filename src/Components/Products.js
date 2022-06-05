import React from 'react';
import products from '../../src/images/products.png'
import './Products.css'

const Products = () => {
    return (
        <div className='container'>
            <h2 className='mt-4' style={{ color: 'purple' }}>Products & Services</h2>
            <div className="row">
                <div className="col-lg-5 mt-5 productImg">
                    <img style={{ width: '470px', marginTop: '60px' }} src={products} alt="" />
                </div>
                <div className="col-lg-7 mt-5">
                    <h5 className='mb-3 ms-2'> <i className="fa-solid fa-circle-arrow-right mx-1" style={{ color: 'orange' }}></i>Issue ManageMent</h5>
                    <div style={{ backgroundColor: 'lightgray', borderRadius: '10px' }} className="text-start p-3">
                        <p>Coopertech Industries Ltd.</p>
                        <small><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>Porspectus</small>
                        <br />
                        <small><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>Abridged Version</small>
                        <br />
                        <br />
                        <p>Oimex Electrode Limited</p>
                        <small><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>Porspectus</small>
                        <br />
                        <small><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>IPO Application Process</small>
                        <br />
                        <small><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>List of IPO Application</small>
                        <br />
                        <small><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>IPO Result</small>
                        <br />
                        <br />
                        <p>Zaheen Spinning Ltd.</p>

                        <small><i class="fa-solid fa-circle-arrow-right mt-1 mx-1" style={{ color: 'green' }}></i>Porspectus</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;