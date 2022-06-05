import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from '../../src/images/Banner/mujibpro.png'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
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
                        style={{ width: '500px' }}
                        src={logo}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        style={{ width: '500px' }}
                        src={logo}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;