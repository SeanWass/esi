import React, { Component } from "react";

// Custom components
import Header from '../../components/header/Header';
import Splash from '../../components/splash/Splash';
import RankingSummary from '../../components/ranking-summary/RankingSummary';
import EventsSummary from '../../components/events-summary/EventsSummary';
import NewsSummary from '../../components/news-summary/NewsSummary';
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';

//Styles
require("./styles.scss");

class Home extends Component {
	render() {
   		return (
	      	<div className="container">
                <Header />
                <Splash />
                
	      		<div className="content">
                    <NewsSummary />

					<EventsSummary />

                    <RankingSummary />

                    <Subscribe />
                    
				</div>

                <Footer />
	      	</div>
  		)
   	}
}

export default Home;