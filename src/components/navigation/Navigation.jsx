import React from 'react';
import { Link } from "react-router";

require('./styles.scss');

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link to="/news">
                        News
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link to="/events">
                        Events
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link to="/ladder">
                        Rankings
                    </Link>
                </li>
               <li className="navigation__item">
                    <Link to="/about-us">
                        About Us
                    </Link>
                </li>
            </ul>
        </div>
    )
} 	

export default Navigation;