import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos : "Comming from the state"}

    }
    render() {
        return (
            <div>
                <h1>{this.state.todos}</h1>
            </div>
        );
    }
}

export default TodoList;