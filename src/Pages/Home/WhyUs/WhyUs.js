import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WhyUs.css';

const WhyUs = () => {
    return (
        <div className="whyus-section">
            <Container className="py-5">
                <div className="packages-section-head ">
                    <h5>Why Tourism</h5>
                    <h2>Reasons why tourism can be your best partner.</h2>
                </div>
                <Row className="g-3">
                    <Col md={3} sm={6}>
                        <div className="achievement-cart">
                            <i className="fas fa-users achievement-logo"></i>
                            <h3>2000+ Our worldwide guide</h3>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="achievement-cart">
                            <i className="fas fa-user-shield achievement-logo"></i>
                            <h3>100% trusted travel agency</h3>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="achievement-cart">
                            <i className="fas fa-lightbulb achievement-logo"></i>
                            <h3>10+ year of travel experience</h3>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="achievement-cart">
                            <i className="fas fa-plane achievement-logo"></i>
                            <h3>90% of our traveller happy</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhyUs;