import { useReducer, useState } from 'react'
import { ACTIONS } from './helpers/actions'
import Todos from './components/Todos'
import './App.css'

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO: {
            return [...todos, add_todo(action.payload.name)]
        }
        case ACTIONS.TOGGLE_TODO: {
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    console.log('matched')
                    return { ...todo, isDone: !todo.isDone }
                }
                return todo
            })
        }
        case ACTIONS.DELETE_TODO: {
            return todos.filter((todo) => todo.id !== action.payload.id)
        }
        default:
            return todos
    }
}

function add_todo(name) {
    return {
        id: Date.now(),
        name: name,
        isDone: false,
    }
}
function App() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: { name: name },
        })
        setName('')
    }
    return (
        <div className='App'>
            <h1>Todo with Reducer App</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button>Add</button>
            </form>
            <Todos todos={todos} dispatch={dispatch} />
        </div>
    )
}

export default App
