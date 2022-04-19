import React from 'react'
import NavbarContext from '../components/navbar-Context';
import TodoList from '../components/TodoList';
import ThemeContextProvider from './ThemeContext';


function AppContext() {
    return (
        <div className='ui raised very padded text container segment'>
            <ThemeContextProvider>
                <NavbarContext></NavbarContext>
                <TodoList></TodoList>
            </ThemeContextProvider>
        </div>
    );
}
export default AppContext;
