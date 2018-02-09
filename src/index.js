import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import App from './app';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';// Redux

//View components
import Home from './views/home/Home';
import Ladder from './views/ladder/Ladder';
import Events from './views/events/Events';
import News from './views/news/News';
import AboutUs from './views/about-us/AboutUs';

require('./config-styles/config.scss');

ReactDOM.render(
    <Provider store={store}>
	    <Router history={browserHistory}>
	        <Route path={`${process.env.PUBLIC_URL}/`} component={App}>
	      		<IndexRoute component={Home} />
	      		<Route path={`${process.env.PUBLIC_URL}/ladder`} component={Ladder} />
				<Route path={`${process.env.PUBLIC_URL}/events`} component={Events} />
				<Route path={`${process.env.PUBLIC_URL}/news/:id`} component={News} />
                <Route path={`${process.env.PUBLIC_URL}/events/:id`} component={Events} />
                <Route path={`${process.env.PUBLIC_URL}/about-us`} component={AboutUs} />
	      	</Route>
	  	</Router>
    </Provider>,
	
  	document.getElementById("root")
);