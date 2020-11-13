import React, { Component } from 'react';

class CreateTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(evt) {
		evt.preventDefault();
		this.props.AddTodo(this.state);
		this.setState({ task: '' });
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="create new todo"
						id="task"
						name="task"
						value={this.state.task}
						onChange={this.handleChange}
					/>
					<button>Add todos</button>
				</form>
			</div>
		);
	}
}

export default CreateTodoForm;
