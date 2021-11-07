import React from 'react';
import './Banner.css';
import { Container } from 'react-bootstrap';


const content =
    { title: 'First item', description: 'Lorem ipsum', image: 'https://i.ibb.co/Njmpj05/recal-media-ue-BIGLmi-I5-A-unsplash-min-2.jpg' }
    ;

const Banner = () => {
    return (
        <div className="banner-section">
            <div className="arrow">
                <Container className="d-flex justify-content-between">
                    <i className="fas fa-chevron-circle-right arrow-right"></i>
                    <i className="fas fa-chevron-circle-left arrow-left"></i>
                </Container>
            </div>
            <div className="banner">
                <img className="banner-image" src={content.image} alt="" />
                <div className="banner-details-on-image">
                    <Container >
                        <div className="banner-details-container">
                            <h1>fdafsa</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptates et laudantium harum accusantium ea tempora cumque, natus aliquam? Quisquam quam laborum velit odit placeat asperiores porro dolore adipisci ullam?</p>
                            <button className="main-button">Get your tour package</button>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Banner;