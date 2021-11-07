import React from 'react';
import { Container } from 'react-bootstrap';
import './TopBarArea.css'

const TopBarArea = () => {
    return (
        <div className="topbar-area">
            <Container>
                <div className="topbar-container" >
                    <div className="topbar-social" >
                        <i className="fab fa-google" > </i>
                        <i className="fab fa-facebook" > </i>
                        <i className="fab fa-facebook-messenger" > </i>
                        <i className="fab fa-whatsapp" > </i>
                        <i className="fab fa-twitter-square"></i>
                    </div>
                    <div className="topbar-phone-email">
                        <div className="phone-icon">
                            <i className="fas fa-phone-square-alt"></i>
                            <span> +1 763-227-5032</span>
                        </div>
                        <div className="mail-icon">
                            <i className="fas fa-envelope"></i>
                            <span> ahnabshain@gmail.com</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    );
};

export default TopBarArea;