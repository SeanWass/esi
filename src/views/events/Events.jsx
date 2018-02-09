import React, { Component } from "react";
import { Link } from "react-router";
import Header from '../../components/header/Header';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    eventFetch
} from '../../redux/ducks/eventsDucks';

//Styles
require("./styles.scss");

class Events extends Component {
    componentDidMount() {
        this.props.actions.eventFetch(this.props.routeParams.id);
    }

    bodyRender() {
        if (this.props.eventLoad) {
            return (
                <div className="news__body">
                    Loading
                </div>
            )
        }

        return (
            <div className="news__body">
                <span className="news__imgWrapper">
                    <img src={this.props.eventData._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Event" />
                </span>

                <div className="news__content">
                    <h1>{this.props.eventData.title.rendered}</h1>

                    <div dangerouslySetInnerHTML={{__html:this.props.eventData.content.rendered}} />
                </div>
            </div>
        )
    }

    render() {
        return (
	      	<div className="container">
                <Header />
	      		<div className="content">
                    {this.bodyRender()}

                    <div className="news__backButton">
                        <Link to='/'>Back to Home</Link>
                    </div>
				</div>
	      	</div>
  		)
   	}
}

const mapStateToProps = (state) => {
    return {
        eventData: state.eventsReducer.eventData,
        eventLoad: state.eventsReducer.eventLoad
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            eventFetch
        },
        dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);