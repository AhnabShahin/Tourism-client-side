import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Bloges.css';

const Bloges = () => {
    return (
        <div className="packages-section">
            <Container>
                <div className="packages-section-head">
                    <h5>Latest Blog</h5>
                    <h2>Stay Updated And New Post Our Blog</h2>
                </div>
                <Row>

                    <Col md={4}>
                        <div className="package-cart">
                            <div className="cart-img">
                                <img className="w-100" src="https://i.ibb.co/JKhBpsv/ahnab-shahin-01.png" alt="" />
                            </div>
                            <div className="package-info">
                                <h5><i className="fas fa-user"></i> Dina Jems</h5>
                                <h5>6 Comments <i className="fas fa-comment"></i></h5>
                            </div>
                            <h3 className="package-title" >Shahin Alam </h3>
                            <div className="cart-discription">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure accusantium nobis cum facere ad sint vel, sunt animi omnis assumenda!</p>
                            </div>

                            <div className="packages-section-head m-0 d-flex justify-content-between">
                                <h5 className="m-0 p-0">1 April, 2021</h5>
                                <button className="main-button">See Details</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="package-cart">
                            <div className="cart-img">
                                <img className="w-100" src="https://i.ibb.co/JKhBpsv/ahnab-shahin-01.png" alt="" />
                            </div>
                            <div className="package-info">
                                <h5><i className="fas fa-user"></i> Dina Jems</h5>
                                <h5>6 Comments <i className="fas fa-comment"></i></h5>
                            </div>
                            <h3 className="package-title" >Shahin Alam </h3>
                            <div className="cart-discription">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure accusantium nobis cum facere ad sint vel, sunt animi omnis assumenda!</p>
                            </div>

                            <div className="packages-section-head m-0 d-flex justify-content-between">
                                <h5 className="m-0 p-0">1 April, 2021</h5>
                                <button className="main-button">See Details</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="package-cart">
                            <div className="cart-img">
                                <img className="w-100" src="https://i.ibb.co/JKhBpsv/ahnab-shahin-01.png" alt="" />
                            </div>
                            <div className="package-info">
                                <h5><i className="fas fa-user"></i> Dina Jems</h5>
                                <h5>6 Comments <i className="fas fa-comment"></i></h5>
                            </div>
                            <h3 className="package-title" >Shahin Alam </h3>
                            <div className="cart-discription">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure accusantium nobis cum facere ad sint vel, sunt animi omnis assumenda!</p>
                            </div>

                            <div className="packages-section-head m-0 d-flex justify-content-between">
                                <h5 className="m-0 p-0">1 April, 2021</h5>
                                <button className="main-button">See Details</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Bloges;