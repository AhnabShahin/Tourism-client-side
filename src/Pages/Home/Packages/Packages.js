import React, { useEffect, useState } from 'react';
import './Packages.css';
import {  Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Package from '../Package/Package';



const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const getPackages = async () => {
            await axios.get("https://tourism-backend-api.herokuapp.com/package")
                .then(res => {
                    setPackages(res.data);
                });
        };
        getPackages();
    }, []);
    return (
        <div className="packages-section">
            <Container>
                <div className="packages-section-head">
                    <h5>Choose Your Package</h5>
                    <h2>Select Your best Package For Your Travel</h2>
                </div>
                <Row>
                    {packages.map(e => <Package key={e._id} data={e}></Package>)}
                </Row>
            </Container>
        </div>
    );
};

export default Packages;