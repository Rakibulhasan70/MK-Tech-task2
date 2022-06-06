import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from '../../src/images/Banner/mujibpro.png'
import mujib2 from '../../src/images/mujib2.jpg'
import mujib3 from '../../src/images/mujib3.jpg'

const Banner = () => {
    return (
        <div className='my-5'>
            <Carousel fade >
                <Carousel.Item >
                    <img
                        className="d-block mx-auto"
                        style={{ width: '500px' }}
                        src={logo}
                        alt="First slide"

                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        style={{ width: '100%', height: '600px' }}
                        src={mujib2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block mx-auto"
                        style={{ width: '100%', height: '600px' }}
                        src={mujib3}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;