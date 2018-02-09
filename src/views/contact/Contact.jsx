import React, { Component } from "react";
import Header from '../../components/header/Header';

//Styles
require("./styles.scss");

class Contact extends Component {
	render() {
   		return (
	      	<div className="container">
                <Header />
	      		<div className="content">
                    <div className="contactUs__body">
                        <span className="contactUs__imageWrapper">
                            <img src={require('../../assets/images/jpg/contact-us.jpg')} alt='contact us'/>
                        </span>
                        <h1>Upload</h1>
                    </div>
				</div>
	      	</div>
  		)
   	}
}

export default Contact;