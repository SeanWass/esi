import React, { Component } from 'react';
import { Link } from "react-router";

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    newsFetch
} from '../../redux/ducks/newsSummaryDucks';

require('./styles.scss');

class NewsSummary extends Component {
    componentDidMount() {
        this.props.actions.newsFetch();
    }

    renderItems() {
        const newsItems = this.props.newsData.map((item, key) => {
            return (
                <li
                    key={item.id}
                    className="newsSummary__item"
                >
                    <Link to={`/news/${item.id}`}>
                    
                        <span className="newsSummary__imgWrapper">
                            <img src={item._embedded['wp:featuredmedia'][0].source_url} alt="Event" />
                        </span>

                        <div className="newsSummary__textWrapper">
                            <div className="newsSummary__textWrapperInner">
                                <span>
                                    <img src={require('../../assets/images/png/news-summary/news-summary-icon.png')} alt='text wrapper icon' />
                                </span>

                                <div>
                                    <h4>{item.title.rendered}</h4>

                                    <span>Read more</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        })
        return newsItems;
    }

    render() {
        return (
            <div className="newsSummary">
                <div className="newsSummary__header">
                    <span>
                        <img src={require('../../assets/images/png/news-summary/news-summary-header.png')} alt='news summary icon' />
                    </span>
                    <h2>News</h2>
                </div>

                <ul className="newsSummary__list">
                    {this.renderItems()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newsData: state.newsSummaryReducer.newsData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            newsFetch
        },
        dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsSummary);
