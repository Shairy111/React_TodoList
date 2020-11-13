import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [ { task: 'task1' }, { task: 'task2' } ] };
	}
	render() {
		const todos = this.state.todos.map(todo => {
			return <Todo task={todo.task} />;
		});
		return (
			<div>
				<ul>
					<li>{todos}</li>
				</ul>
			</div>
		);
	}
}

export default TodoList;
