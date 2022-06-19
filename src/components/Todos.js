import React from 'react'
import { ACTIONS } from '../helpers/actions'
export default function Todos({ todos, dispatch }) {
    const todoList = todos.map((todo) => (
        <li key={todo.id}>
            <span
                onClick={() =>
                    dispatch({
                        type: ACTIONS.TOGGLE_TODO,
                        payload: { id: todo.id },
                    })
                }
                style={{
                    color: todo.isDone ? '#cccccc' : '#000',
                    cursor: 'pointer',
                }}
            >
                {todo.name}
            </span>

            <button
                onClick={() => {
                    dispatch({
                        type: ACTIONS.DELETE_TODO,
                        payload: { id: todo.id },
                    })
                }}
                style={{
                    marginLeft: '10px',
                    padding: '0',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                }}
            >
                [X]
            </button>
        </li>
    ))
    return <ul>{todoList.length ? todoList : <p>- nothing todo -</p>}</ul>
}
