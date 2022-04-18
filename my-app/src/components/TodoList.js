import React from 'react'

export default class TodoList extends React.Component{
render(){
    return(
        <div className='ui list'>
            <div className='item'>Plan the family trip</div>
            <div className='item'>Go for shopping for dinner</div>
            <div className='item'>Go for a walk</div>
        </div>
    )
}
}