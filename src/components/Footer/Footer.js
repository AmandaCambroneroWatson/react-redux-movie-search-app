import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import bg from '../../images/footer-bg.jpg';

const Footer = () => {
    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__content container">
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Terms</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Log out</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
