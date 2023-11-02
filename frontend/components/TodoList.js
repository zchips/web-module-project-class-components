import React from 'react'

export default class TodoList extends React.Component {
  render() {

const {todos} = this.props

    return (
      <div>
        {todos.map((todo)=> (<Todo key={todo.id} todo={todo}/>))}
      </div>
    )
  }
}
