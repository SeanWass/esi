import React from 'react';


//This is the entry point of the app.

class App extends React.Component {
  	render() {
    	return (
    		<div>
    			{this.props.children}
      		</div>
        );
  	}
}

export default App;