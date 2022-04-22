import React, { useState } from 'react'



const AddNewTodo = ({ fnAddTodo }) => {

    const [todos, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todos);
        fnAddTodo(todos);
      //  setTodo('');
    }
    const inputFocus = React.createRef();

   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='Todo'>Add New Todo</label>

                <input type='text' id='newTodo' values={todos} onChange={e => setTodo(e.target.value)} ref={inputFocus}></input>
                <input type='submit'></input>
            </form>

        </div>
    )
}

export default AddNewTodo;