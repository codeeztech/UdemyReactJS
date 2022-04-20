import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

function NavbarContext() {

    //static contextType = ThemeContext;


   // render() {
     //   console.log("Navbar context: " + JSON.stringify(this.context))

        return (

            <ThemeContext.Consumer>{(context) => {
                console.log("Navbar - consumer context: " + JSON.stringify(context))
                const { isDarkTheme, lightTheme, darkTheme } = context;
                const theme = isDarkTheme ? darkTheme : lightTheme;
                
                return (

                    <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
                        <h2 style={{ textAlign: 'center' }} >
                            React Context
                        </h2>
                        <div className='ui three buttons'>
                            <button className='ui button'>Overview</button>
                            <button className='ui button'>Contact</button>
                            <button className='ui button'>Support</button>
                        </div>
                    </nav>
                )
            }}
            </ThemeContext.Consumer>
        );
        
   // }
};

export default NavbarContext;