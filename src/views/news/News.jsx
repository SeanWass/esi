import React, { Component } from "react";
import { Link } from "react-router";
import Header from '../../components/header/Header';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    articleFetch
} from '../../redux/ducks/newsDucks';

//Styles
require("./styles.scss");

class News extends Component {
    componentDidMount() {
        this.props.actions.articleFetch(this.props.routeParams.id);
    }

    bodyRender() {
        if (this.props.articleLoad) {
            return (
                <div className="news__body">
                    Loading
                </div>
            )
        }

        return (
            <div className="news__body">
                <span className="news__imgWrapper">
                    <img src={this.props.articleData._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Event" />
                </span>

                <div className="news__content">
                    <h1>{this.props.articleData.title.rendered}</h1>

                    <div dangerouslySetInnerHTML={{__html:this.props.articleData.content.rendered}} />
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
        articleData: state.newsReducer.articleData,
        articleLoad: state.newsReducer.articleLoad
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            articleFetch
        },
        dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);