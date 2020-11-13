import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.remove(this.props.id);
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Delete</button>
				<button>Edit</button>
				<h2>{this.props.task}</h2>
			</div>
		);
	}
}

export default Todo;
