import React, { Component } from 'react';
import Todo from './Todo';
import CreateTodoForm from './CreateTodoForm';

class TodoList extends Component {
	constructor(props) {
		super(props);
        this.state = { todos: [ { task: 'task1' }, { task: 'task2' } ] };
        this.AddTodo = this.AddTodo.bind(this);
    }

    
    
    AddTodo(task){
        this.setState({
            todos : [...this.state.todos ,task ]
        }) 
    }
	render() {
		const todos = this.state.todos.map(todo => {
			return <Todo task={todo.task} />;
		});
		return (
			<div>
                <CreateTodoForm AddTodo = {this.AddTodo}/>
				<ul>
					<li>{todos}</li>
				</ul>
			</div>
		);
	}
}

export default TodoList;
