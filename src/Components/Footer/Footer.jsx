import React from 'react';
import './Footer.css';
export default function Footer() {
    return (
        <div className='footer_container'>
            <div className="footer">
                <div className="footer-section">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Shop</a></li>
                        <li><a href="/">Categories</a></li>
                        <li><a href="/">Deals</a></li>
                        {/* <!-- Add more links as needed --> */}
                    </ul>
                </div>

                <div className="footer-section">
                    <h2>Customer Service</h2>
                    <ul>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">FAQs</a></li>
                        <li><a href="/">Shipping</a></li>
                        <li><a href="/">Returns</a></li>
                        {/* <!-- Add more links as needed --> */}
                    </ul>
                </div>

                <div className="footer-section">
                    <h2>Information</h2>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms & Conditions</a></li>
                        {/* <!-- Add more links as needed --> */}
                    </ul>
                </div>

                <div className="footer-section">
                    <h2>Services</h2>
                    <ul>
                        <li><a href="/">Gift Cards</a></li>
                        <li><a href="/">Warranty</a></li>
                        <li><a href="/">Customer Reviews</a></li>
                        {/* <!-- Add more links as needed --> */}
                    </ul>
                </div>

                <div className="footer-section">
                    <h2>Connect with Us</h2>
                    <div className="footer-links">
                        <a href="/" target="_blank">Facebook</a>
                        <a href="/" target="_blank">Twitter</a>
                        <a href="/" target="_blank">Instagram</a>
                        {/* <!-- Add more social links as needed --> */}
                    </div>
                </div>

            </div>
        </div>
    )
}
