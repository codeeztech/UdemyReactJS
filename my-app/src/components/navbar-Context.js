import React from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

function NavbarContext() {

    //static contextType = ThemeContext;


    // render() {
    //   console.log("Navbar context: " + JSON.stringify(this.context))
    return (
        <AuthContext.Consumer>{(authContext) => {
            const { isLoggedin, changeAuthStatus } = authContext;
            return (
                <ThemeContext.Consumer>{(themeContext) => {
                    console.log("Navbar - consumer context: " + JSON.stringify(themeContext))
                    const { isDarkTheme, lightTheme, darkTheme } = themeContext;
                    const theme = isDarkTheme ? darkTheme : lightTheme;

                    return (
                        <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
                            <h2 style={{ textAlign: 'center' }} >
                                React Context
                            </h2>
                            <p onClick={changeAuthStatus}

                                style={{ textAlign: 'center' }}
                            >
                                {isLoggedin ? 'Logged in' : 'Logged out'}
                            </p>
                            <div className='ui three buttons'>
                                <button className='ui button'>Overview</button>
                                <button className='ui button'>Contact</button>
                                <button className='ui button'>Support</button>
                            </div>
                        </nav>
                    )
                }}
                </ThemeContext.Consumer>
            )
        }}
        </AuthContext.Consumer>
    );

    // }
};

export default NavbarContext;