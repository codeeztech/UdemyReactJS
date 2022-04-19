import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class TodoList extends React.Component{
    static contextType = ThemeContext
render(){
    console.log("TodoList:"+ JSON.stringify(this.context))
    return(
        <div className='ui list'>
            <div className='item'>Plan the family trip</div>
            <div className='item'>Go for shopping for dinner</div>
            <div className='item'>Go for a walk</div>
        </div>
    )
}
}