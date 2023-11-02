import React from 'react'
import Form from './Form'
import TodoList from './TodoList'



let id  = 0 
let getId = () => ++id

const initialTodos = [
  {id: getId(), name: "walk moon", completed: false},
  {id: getId(), name: "learn react", completed: true},
  {id: getId(), name: "Have fun", completed: false},
]

export default class App extends React.Component {

state = {
  todos: initialTodos
}


  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}/>
        <Form/>
      </div>
    )
  }
}
