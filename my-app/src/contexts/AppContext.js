import React from 'react'
import NavbarContext from '../components/navbar-Context';
import TodoList from '../components/TodoList';
import AuthContextProvider  from './AuthContext';
import ThemeContextProvider from './ThemeContext';
import TodoContextProvider from './TodoContext';


function AppContext() {
    return (
        <div className='ui raised very padded text container segment'>
            <AuthContextProvider>
                <ThemeContextProvider>
                    <NavbarContext></NavbarContext>
                    <TodoContextProvider>
                    <TodoList></TodoList>
                    </TodoContextProvider>
                </ThemeContextProvider>
            </AuthContextProvider>
        </div>
    );
}
export default AppContext;
