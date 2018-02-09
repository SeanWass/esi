import React, { Component } from "react";
import Header from '../../components/header/Header';

//Styles
require("./styles.scss");

class AboutUs extends Component {
	render() {
   		return (
	      	<div className="container">
                <Header />
	      		<div className="content">
					About us
				</div>
	      	</div>
  		)
   	}
}

export default AboutUs;