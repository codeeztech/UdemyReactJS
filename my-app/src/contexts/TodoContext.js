import React, { createContext, useState ,useReducer} from 'react';
import { todosReducer } from '../components/reducers/todosReducer';

export const TodoContext = createContext();


const TodoContextProvider = ({ children }) => {

	const initialTodo = [
    
	{text:	'Plan the family trip', id:1 },
    {text:	'Go for a walk',id:2},
    {text:	'Go for shopping for dinner',id:3},
    {text:	'Had a great event on holiday',id:4},
    {text:	'Family time is good got mental health',id:5}
		
]

     const [Todos,dispatch] = useReducer(todosReducer,initialTodo);

	//const [Todos,setTodos] = useState(initialTodo)

	// const addTodo = (todo) =>{
    //     setTodos([
    //         ...Todos,{text:todo,id:Math.random()}
    //     ]);
    // }
    // const removeTodo = (id) => {
    //     setTodos(Todos.filter((todo)=>{
    //         return(
    //             todo.id !== Number(id)
    //         )
    //     }));
    // }


	return (
		<TodoContext.Provider value={{ Todos,dispatch }}>
			{children}
		</TodoContext.Provider>
	);

}

export default TodoContextProvider;