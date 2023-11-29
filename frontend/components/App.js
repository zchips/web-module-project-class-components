import React from 'react'
import Form from './Form'
import TodoList from './TodoList'


//this is the incrementing of tasks
//give each task an id which we define with zero(9)
// then we make  function that will increment by one, from the starting point. (10)
let id  = 0 
let getId = () => ++id

//this is is our initial state, we put these here so it displays something before we make our own
// initialTodos is our defined state, and in state we preload the 3 necessary pieces to each Todo
//for id or the numbering of tasks we use the getId function we made above, we add the name that would be the placeholder for each task
// and a boolean variable that can be marked completed or not. 

const initialTodos = [
  {id: getId(), name: "walk moon", completed: false},
  {id: getId(), name: "learn react", completed: true},
  {id: getId(), name: "Have fun", completed: false},
]

export default class App extends React.Component {
// this is literarily the state of todos and what will be initially shown is the preloaded list of Todos

state = {
  todos: initialTodos
}


//this is the making of a toggle completion function
toggleCompletion = id => {
  this.setState({
  ...this.state,
  todos: this.state.todos.map(td =>{
    if(id == td.id) return {...td, completed: !td.completed}
    return td
  })
  })
}


  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion} />
        <Form/>
      </div>
    )
  }
}
