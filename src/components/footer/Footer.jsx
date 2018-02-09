import React from 'react';
import { Link } from "react-router";

require('./styles.scss');

const Footer = () => {
    return (
        <div className="footer">

            <ul className="footer__menu">
                <li className="footer__menuItem">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="footer__menuItem">
                    <Link to="/news">
                        News
                    </Link>
                </li>
                <li className="footer__menuItem">
                    <Link to="/events">
                        Events
                    </Link>
                </li>
                <li className="footer__menuItem">
                    <Link to="/ladder">
                        Rankings
                    </Link>
                </li>
               <li className="footer__menuItem">
                    <Link to="/about-us">
                        About Us
                    </Link>
                </li>
            </ul>

            <div className="footer__logoWrapper">
                <img src={require('../../assets/images/png/logo.png')} alt="Logo" />
            </div>

            <div className="footer__contact">
                <span>079 413 5832</span>
                <a href="mailto:info@esi.co.za">info@esportsindustrysa.com</a>
            </div>

            <ul className="footer__social">
                <li>
                    <a href="#">
                        <img src={require('../../assets/images/png/footer/footer-facebook.png')} alt="footer social icon" />
                    </a>
                </li>

                <li>
                    <a href="#">
                        <img src={require('../../assets/images/png/footer/footer-twitter.png')} alt="footer social icon" />
                    </a>
                </li>

                <li>
                    <a href="#">
                        <img src={require('../../assets/images/png/footer/footer-instagram.png')} alt="footer social icon" />
                    </a>
                </li>
            </ul>

            <div className="footer__copyright">
                &copy; 2018 eSports Industry (Pty) Ltd. All rights reserved. Designed by Brand inc
            </div>
        </div>
    )
} 	

export default Footer;