//Packages
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

//Create component
var TodoComponent = createReactClass({
	render: function(){
		return(
			<div>
				<p><strong>Restuarant: </strong> {this.props.food.name}</p>
				<p><strong>Quality: </strong> {this.props.food.quality}</p>
				<p><strong>Price: </strong> {this.props.food.price}</p>
			</div>
			);
	}
});

var myFood = {name:"Bud Namu", quality:"Low Tier", price:"13.50"}

// Put component into html page
ReactDOM.render(<TodoComponent mssg="I like kbbq" food={myFood} />, document.getElementById('todo-wrapper'));