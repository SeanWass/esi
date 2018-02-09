import React, { Component } from "react";
import Header from '../../components/header/Header';

//Styles
require("./styles.scss");

class Ladder extends Component {

    submitForm(event) {
        event.preventDefault();
        console.log('submit form');
    }
	render() {
   		return (
	      	<div className="container">
                <Header />
	      		<div className="content">
					Ladder
				</div>
	      	</div>
  		)
   	}
}

export default Ladder;