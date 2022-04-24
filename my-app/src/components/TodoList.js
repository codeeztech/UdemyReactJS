import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => {
    //  console.log("TodoList:" + JSON.stringify(useContext(ThemeContext)))
    const { theme, changeTheme } = useContext(ThemeContext);
    const themes = theme.isDarkTheme ? theme.darkTheme : theme.lightTheme;

    // Using useState: const { Todos, addTodo, removeTodo } = useContext(TodoContext)
    const { Todos, dispatch } = useContext(TodoContext) //Using useReducer

    const [todo, setTodo] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value)
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', text: todo });
        // addTodo(todo);
    }

    const handleRemoveTodo = (e) => {
        //removeTodo(e.target.id);
        const id = e.target.id;
        dispatch({ type: 'REMOVE_TODO', id });
    }

    return (
        <div style={{ background: themes.background, color: themes.text, height: '100%', textAlign: 'center' }}>
            {Todos.length ? (
                Todos.map((todo) => {
                    return (
                        <p onClick={handleRemoveTodo} id={todo.id} className='item' key={todo.id}>{todo.text}</p>
                    )
                })
            ) : ('You have no todos found')
            }
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange}></input>
                <button type='submit' >Submit</button>
            </form>
            <button className='ui button primary' onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

// export default class TodoList extends React.Component {
//     static contextType = ThemeContext

//     constructor(props) {
//         super(props)

//         this.state = {
//             TodoListData: "This is Todo List Component"
//         }

//         console.log("TodoList - constructor: " + JSON.stringify(this.context))
//     }

//     componentDidMount() {
//         console.log("TodoList - componentDidMount: " + JSON.stringify(this.context))
//     }
//     componentDidUpdate() {

//         console.log("TodoList - componentDidUpdate: " + JSON.stringify(this.context))
//     }
//     componentWillUnmount() {
//         console.log("TodoList - componentWillUnmount: " + JSON.stringify(this.context))
//     }


//     render() {
//         console.log("TodoList:" + JSON.stringify(this.context))
//         const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;
//         return (
//             <div style={{ background: theme.background, color: theme.text, height: '140px' ,textAlign: 'center'}}>
//                 <p className='item'>Plan the family trip</p>
//                 <p className='item'>Go for shopping for dinner</p>
//                 <p className='item'>Go for a walk</p>
//                 <button className='ui button primary' onClick={changeTheme}>Change Theme</button>
//             </div>

//         )
//     }
// }


export default TodoList