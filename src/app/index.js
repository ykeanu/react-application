//Packages
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

//Create component
var TodoComponent = createReactClass({
	//Set the initial state
	getInitialState: function(){
		// State of the entire component
		return{
			todos: ['wash up', 'eat some cheese', 'take a nap'],
			age: 30
		}
	},
// Pass information with props
	render: function(){
		var ager = setTimeout(function(){
			this.setState({
				age: 35
			});

		}, 5000);
		return(
			<div id="todo-list">
			<p>The busiest people have the most leisure...</p>
			<p>{this.state.age}</p>
			<ul>
				<li>{this.state.todos[0]}</li>
				<li>{this.state.todos[2]}</li>
				<li>{this.state.todos[3]}</li>
			</ul>
			<ListComponent todos={this.state.todos} />
			</div>
			);
	}
});

// Put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));