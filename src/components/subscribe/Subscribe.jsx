import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    emailChange
} from '../../redux/ducks/subscribeDucks';

// Custom components
import ModalExitIcon from '../icons/ModalExitIcon';

require('./styles.scss');

// Image constants
const subscribeIcon = require('../../assets/images/png/subscribe-cta.png');

class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            width: 0
        };

        this.formSubmit = this.formSubmit.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.subscribeClose = this.subscribeClose.bind(this);
        this.subscribeTrigger = this.subscribeTrigger.bind(this);
    }

    formSubmit(event) {
        event.preventDefault();
        console.log('form submitted');
    }

    emailChange(event) {
        this.props.actions.emailChange(event.currentTarget.value);
    }

    subscribeClose() {
        this.setState({
            active: false
        })
    }

    subscribeTrigger() {
        this.setState({
            active: !this.state.active
        })
    }

    updateDimensions() {
        this.setState({
            width: window.innerWidth
        });
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        // Not doing this just yet, as I dont think it will be needed.
        // window.addEventListener('resize', this.updateDimensions);
    }

    renderTrigger() {
        if (this.state.width >= 800) {
            return (
                <div className="subscribe__trigger" onClick={this.subscribeTrigger}>
                    <img src={subscribeIcon} alt="icon" />
                </div>
            )
        }
        return null;
    }

    render() {
        return (
            <div className="subscribe">
                {this.renderTrigger()}
                <div className={(this.state.active) ? "subscribe__formWrapper active" : "subscribe__formWrapper false" }>
                    <h2>Subscribe to our newsletter</h2>

                    <span className="subscribe__closeButton" onClick={this.subscribeClose}>
                        <ModalExitIcon />
                    </span>

                    <form onSubmit={this.formSubmit} >
                        <div className="subscribe__inputWrapper">
                            <input
                                type="text"
                                id="email"
                                onChange={this.emailChange}
                                placeholder="Email Address"
                            />
                        </div>

                        <div className="subscribe__submitWrapper">
                            <input
                                type="submit"
                                value="Subscribe"
                            />
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        emailValue: state.subscribeReducer.emailValue
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            emailChange            
        },
        dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);