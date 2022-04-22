import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';



const NavbarContext = () => {
    console.log("NavbarContext:" + JSON.stringify(useContext(ThemeContext)))
    const { theme } = useContext(ThemeContext)
    console.log("NavbarContext (theme):" , theme)
    const themes = theme.isDarkTheme ? theme.darkTheme : theme.lightTheme;
    const { isLoggedin, changeAuthStatus } = useContext(AuthContext)
   
    return (
        <nav style={{ background: themes.background, color: themes.text, height: '120px' }}>
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
}




// function NavbarContext() {

//     //static contextType = ThemeContext;


//     // render() {
//     //   console.log("Navbar context: " + JSON.stringify(this.context))
//     return (
//         <AuthContext.Consumer>{(authContext) => {
//             const { isLoggedin, changeAuthStatus } = authContext;
//             return (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     console.log("Navbar - consumer context: " + JSON.stringify(themeContext))
//                     const { isDarkTheme, lightTheme, darkTheme } = themeContext;
//                     const theme = isDarkTheme ? darkTheme : lightTheme;

//                     return (
//                         <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
//                             <h2 style={{ textAlign: 'center' }} >
//                                 React Context
//                             </h2>
//                             <p onClick={changeAuthStatus}

//                                 style={{ textAlign: 'center' }}
//                             >
//                                 {isLoggedin ? 'Logged in' : 'Logged out'}
//                             </p>
//                             <div className='ui three buttons'>
//                                 <button className='ui button'>Overview</button>
//                                 <button className='ui button'>Contact</button>
//                                 <button className='ui button'>Support</button>
//                             </div>
//                         </nav>
//                     )
//                 }}
//                 </ThemeContext.Consumer>
//             )
//         }}
//         </AuthContext.Consumer>
//     );

//     // }
// };

export default NavbarContext;