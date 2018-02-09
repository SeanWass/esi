import React, { Component } from 'react';

import Navigation from '../navigation/Navigation';
import MenuIcon from '../icons/MenuIcon';
import Social from '../social/Social';

require('./styles.scss');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive: false,
            socialActive: false
        }

        this.menuToggle = this.menuToggle.bind(this);
        this.socialToggle = this.socialToggle.bind(this);
    }

    menuToggle() {
        this.setState({
            menuActive: !this.state.menuActive,
            socialActive: false
        })
    }

    socialToggle() {
        this.setState({
            socialActive: !this.state.socialActive,
            menuActive: false
        })
    }

    render() {
        return (
            <div className="header">
                {/* mobile menu trigger*/}
                <span
                    className="header__menuToggle"
                    onClick={this.menuToggle}
                >
                    <MenuIcon />
                </span>

                {/* logo*/}
                <div className="header__logo">
                    <img src={require('../../assets/images/png/logo.png')} alt="Logo" />
                </div>

                {/* mobile social menu trigger*/}
                <span
                    className="header__socialToggle"
                    onClick={this.socialToggle}
                >
                    Social
                </span>

                {/* Right column wrapper*/}
                <div className="header__rightCol">
                    {/* top row, contains contact details, and social*/}
                    
                        <div className="header__info">
                            <div>
                                <span><img src={require('../../assets/images/png/phone-icon.png')} alt="info icon" /></span>
                                <span>079 413 5832</span>
                            </div>

                            <div>
                                <span><img src={require('../../assets/images/png/email-icon.png')} alt="info icon" /></span>
                                <a href="mailto:info@esi.co.za">info@esportsindustrysa.com</a>
                            </div>
                        </div>

                        <div className="header__social">
                            <ul>
                                <li>
                                    <a href="#facebook"><img src={require('../../assets/images/png/social/facebook-icon.png')} alt="social icon" /></a>
                                </li>

                                <li>
                                    <a href="#twitter"><img src={require('../../assets/images/png/social/twitter-icon.png')} alt="social icon" /></a>
                                </li>

                                <li>
                                    <a href="#google"><img src={require('../../assets/images/png/social/google-icon.png')} alt="social icon" /></a>
                                </li>

                                <li>
                                    <a href="#linked"><img src={require('../../assets/images/png/social/linked-icon.png')} alt="social icon" /></a>
                                </li>
                            </ul>
                        </div>

                        <div className={(this.state.menuActive) ? 'header__navWrapper active' : 'header__navWrapper'}>
                            <Navigation />
                        </div>
                    </div>

                    <div className={(this.state.socialActive) ? 'header__socialWrapper active' : 'header__socialWrapper'}>
                        <Social />
                    </div>
                
            </div>
        )
    }
} 	

export default Header;