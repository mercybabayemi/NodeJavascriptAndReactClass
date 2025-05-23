import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.footerContent}>
                    <h2>About Us</h2>
                    <p>We are committed to providing the best service possible. Our mission is to make your experience exceptional.</p>
                </div>
                <div className={style.socialMedia}>
                    <h2>Follow Us</h2>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 FakeStore Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;