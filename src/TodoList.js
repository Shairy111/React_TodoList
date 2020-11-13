import React, { Component } from 'react';
import Todo from './Todo';
import CreateTodoForm from './CreateTodoForm';

class TodoList extends Component {
	constructor(props) {
		super(props);
        this.state = { todos: [] };
        this.AddTodo = this.AddTodo.bind(this);
        this.RemoveTask = this.RemoveTask.bind(this);
    }

    
    
    AddTodo(task){
        this.setState({
            todos : [...this.state.todos ,task ]
        }) 
    }

    RemoveTask(id){
        this.setState({
            todos : this.state.todos.filter((todo) => todo.id != id )
        })
    }
	render() {
		const todos = this.state.todos.map(todo => {
			return <Todo key = {todo.id} id = {todo.id} task={todo.task} remove = {this.RemoveTask}/>;
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
