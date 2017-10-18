//Packages
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

//Create component
var TodoComponent = createReactClass({
	render: function(){
		return(
			<h1>Inserting HTML with react</h1>
			);
	}
});

// Put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));