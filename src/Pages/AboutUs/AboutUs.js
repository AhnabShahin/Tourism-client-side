import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <Container>
            <div className="packages-section-head mt-5">
                <h5>You are warmly welcome to our Tourism Family.</h5>
                <h2>About Us</h2>
            </div>
            <div className="about-us">
                <p>Tourism, a Tripadvisor company, makes it easy to find and book something you'll love to do. With access to the world's largest selection of high-quality experiences, there's always something new to discover, both near and far from home. From must-do moments to who-knew discoveries, see the familiar in a new way, or the unknown for the first time!</p>
                <p>With industry-leading flexibility and last-minute availability, it's never too late to make any day extraordinary. Plan ahead, or decide that morning. Change your dates. Or change your mind entirely! This is your time off, your way, and we're here to help.</p>
                <p>We also know that your time off is precious. So we ruthlessly focus on quality, and we specialize in experiences so incredible, you'll want to tell your friends. Spend less time searching, and more time making memories. Discover story-worthy experiences, anytime, anywhere.</p>
                <h5 className="text-color-second mt-5">Why choose Viator?</h5>
                <li><span>Exceptional flexibility </span> You’re in control, with free cancellation and payment options to satisfy any plan or budget.</li>
                <li><span>Quality you can trust</span>  Our experiences meet high quality standards and are backed by millions of reviews, so you know you’re getting the best.</li>
                <li><span>Experiences to remember</span>  Browse and book tours and activities so incredible, you’ll want to tell your friends.</li>
                <li><span>Award-winning support</span> Find a lower price? Have a change in plans? No problem. We’re here to help, 24/7.</li>
                <h5 className="text-color-second mt-5">Are you a tour operator?</h5>
                <p>As one of the first online marketplaces for things to do, Tourism makes it easy for you to grow your business and reach customers worldwide. Get access to market-specific insights and tailored coaching to help your products stand out from the rest. Use our intuitive Experiences Management Center to spend less time managing your business and more time creating memorable moments.</p>
                <p>From individual to multi-national operators, Viator is your trusted partner to grow your business and share your passion with the world. Click here to get started.</p>

                <h5 className="text-color-second mt-5">Are you a travel agent?</h5>
                <p>Sign up for our Travel Agent Platform here and start earning 8% commissions on all tours and activities you sell on our Travel Agent booking site. You'll get paid monthly and enjoy robust reporting to help you manage your bookings and earnings.</p>
            </div>
        </Container>
    );
};

export default AboutUs;