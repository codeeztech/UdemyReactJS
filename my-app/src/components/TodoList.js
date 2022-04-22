import React , {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

 const TodoList =  () => {
    console.log("TodoList:" + JSON.stringify(useContext(ThemeContext)))
    const { theme,changeTheme } = useContext(ThemeContext);
    const themes = theme.isDarkTheme ? theme.darkTheme : theme.lightTheme;
        return (
            <div style={{ background: themes.background, color: themes.text, height: '140px' ,textAlign: 'center'}}>
                <p className='item'>Plan the family trip</p>
                <p className='item'>Go for shopping for dinner</p>
                <p className='item'>Go for a walk</p>
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