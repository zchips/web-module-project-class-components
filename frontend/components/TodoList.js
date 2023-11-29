import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  state ={
    showAll: true
  }

  toggleShowAll = e => {
    this.setState({
      ...this.state,
      showAll: !this.state.showAll
    })
  }
  
  render() {

const {todos, toggleCompletion} = this.props
const filtered = todos.filter(td => !td.completed || this.state.showAll)


    return (
      <div>
        {filtered.map((todo)=> (<Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion}  />))}
      
      <button onClick={this.toggleShowAll}>{this.state.showAll ? 'Hide Completed Todos' : 'Show ALl'} </button>
      </div>


    )
  }
}
