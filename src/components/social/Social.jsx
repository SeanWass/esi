import React from 'react';

require('./styles.scss');

const Social = () => {
    return (
        <ul className="social">
            <li className="social__item">
                <a href="#">Facebook</a>
            </li>
            <li className="social__item">
                <a href="#">Instagram</a>
            </li>
            <li className="social__item">
                <a href="#">Twitter</a>
            </li>
        </ul>
    )
} 	

export default Social;