import React, { Component } from 'react';
import Slider from 'react-slick';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    splashSlidesFetch
} from '../../redux/ducks/splashDucks';

require('./styles.scss');

// Slider settings
const settings = {
    accessibility: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true
};

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageWidth: window.innerWidth
        }

        this.prevClick = this.prevClick.bind(this);
        this.nextClick = this.nextClick.bind(this);
    }

    prevClick() {
        this.slider.slickPrev();
    }

    nextClick() {
        this.slider.slickNext();
    }
    
    componentDidMount() {
        this.props.actions.splashSlidesFetch();
    }

    textRender() {
        if (this.state.pageWidth >= 800) {
            return (
                <p>
                    The latest esports industry news, events and player rankings.
                </p>
            )
        }
        return null;
    }

    itemsRender() {
        const items = this.props.splashData.map((item) => {
            return (
                <li key={item.id}>
                    <div className="splash__imgWrapper">
                        <img src={item._embedded['wp:featuredmedia'][0].source_url} alt="splash" />
                    </div>
                    <div className="splash__content">
                        <h2>{item.title.rendered}</h2>
                    </div>
                </li>
            )
        })

        return items;
    }

    render() {
        return (
            <div className="splash">
                <ul className="splash__sliderList">
                    <Slider
                        {...settings}
                        ref={splashSlider => this.slider = splashSlider }
                    >
                        <li>
                            <div className="splash__imgWrapper">
                                <img src={require('../../assets/images/png/splash/splash-default.png')} alt="splash" />
                            </div>
                            <div className="splash__content">
                                <h2>Communicate, Captivate, Celebrate</h2>

                                {this.textRender()}
                                
                            </div>
                        </li>

                        {this.itemsRender()}
                    </Slider>
                </ul>
                <div
                    className="splash__sliderButton prev"
                    onClick={this.prevClick}
                >
                    <img src={require('../../assets/images/png/splash/prev.png')} alt="slider icon" />
                </div>

                <div
                    className="splash__sliderButton next"
                    onClick={this.nextClick}
                >
                    <img src={require('../../assets/images/png/splash/next.png')} alt="slider icon" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        splashData: state.splashReducer.splashData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            splashSlidesFetch
        },
        dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
