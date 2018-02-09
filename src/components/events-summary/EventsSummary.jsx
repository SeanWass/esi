import React, { Component } from 'react';
import { browserHistory } from "react-router";
import Slider from 'react-slick';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    eventsFetch
} from '../../redux/ducks/eventsSummaryDucks';

require('./styles.scss');
require('./slick.scss');
require('./slick-theme.scss');

// Slider settings
const settings = {
    accessibility: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true
};

class EventsSummary extends Component {
    constructor(props) {
        super(props);
        
        this.prevClick = this.prevClick.bind(this);
        this.nextClick = this.nextClick.bind(this);
    }

    prevClick() {
        this.slider.slickPrev();
    }

    nextClick() {
        this.slider.slickNext();
    }

    // Navigation to the single event
    eventSingle(event) {
        browserHistory.push(`events/${event.currentTarget.getAttribute('data-id')}`);
    }

    componentDidMount() {
        this.props.actions.eventsFetch();
    }

    itemsRender() {
        const items = this.props.eventsData.map((item, key) => {
            
            // Split title as per design.  Title = first word, secondary = rest of title.
            const title = item.title.rendered.substr(0, item.title.rendered.indexOf(" "));
            const secondary = item.title.rendered.substr(item.title.rendered.indexOf(" "), item.title.rendered.length);

            return (
                <li
                    className="events__item"
                    key={item.id}
                    data-id={item.id}
                    onClick={this.eventSingle}
                >
                    <span className="events__imgWrapper">
                        <img src={item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Event" />
                    </span>

                    <div className="events__textWrapper">
                        <span className="events__iconWrapper">
                            <img src={require('../../assets/images/png/events/events-icon.png')} alt="events icon" />
                        </span>
                        <h4>{title}</h4>
                        <h5>{secondary}</h5>
                        <div dangerouslySetInnerHTML={{__html:item.excerpt.rendered}} />
                    </div>
                </li>
            )
        })
        return items;
    }

    render() {
        return (
            <div className="events">
                <div className="events__header">
                    <span>
                        <img src={require('../../assets/images/png/events/header-logo.png')} alt='event summary icon' />
                    </span>
                    <h2>Events</h2>
                </div>

                <ul className="events__list">
                    <Slider
                        {...settings}
                        ref={eventSlider => this.slider = eventSlider }
                    >
                        {this.itemsRender()}
                    </Slider>
                </ul>

                <div
                    className="events__sliderButton prev"
                    onClick={this.prevClick}
                >
                    <img src={require('../../assets/images/png/events/prev.png')} alt="slider icon" />
                </div>

                <div
                    className="events__sliderButton next"
                    onClick={this.nextClick}
                >
                    <img src={require('../../assets/images/png/events/next.png')} alt="slider icon" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        eventsData: state.eventsSummaryReducer.eventsData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            eventsFetch
        },
        dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsSummary);