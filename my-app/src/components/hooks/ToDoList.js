import React, { useState ,useEffect} from 'react'
import AddNewTodo from './AddNewTodo';


function ToDoList() {

    const [todos, setTodo] = useState([
        { id: 1, text: 'Cerly brown hear' },
        { id: 2, text: 'Some people here' },
        { id: 3, text: 'Tariq play badminton' }
    ]);

    const [count,setCount] = useState(0);

    const addTodo = () => {

        setTodo([
            ...todos,
            { id: Math.random(), text: 'Add new Todo hardcoded' },
        ])
    }

    const fnAddNewTodo = (text) => {

        if (text === undefined || text === ''  || text === null) {
            text = 'Add new Todo hardcoded';
        }
        setTodo([
            ...todos,
            { id: Math.random(), text: text },
        ])
    }

     


useEffect(() =>{
    console.log('useEffect-Todos',todos);
},[todos]);

useEffect(() =>{
    console.log('useEffect-count',count);
},[count]);

    return (
        <div>
            <ul>
                {
                    todos.map((todo) => {
                        return (
                            <li key={todo.id}>{todo.text}</li>
                        )
                    })
                }
            </ul>
            <button className='button ui secondary' onClick={addTodo}>Add Todo</button>

            <AddNewTodo fnAddTodo={fnAddNewTodo}></AddNewTodo>
            <button onClick={() => setCount(count + 1)}>Count:{count}</button>
        </div>
    )
}

export default ToDoList;