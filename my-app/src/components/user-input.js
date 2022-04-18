import React from 'react'

class UserInput extends React.Component{
  
    state={entry:''}

    onFormSubmit  = (event) =>{
        event.preventDefault();
       this.props.onSearchSubmit(this.state.entry);
    }

    render(){
        return(
            <div className='ui segment'>
                <form id='form1' className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <div className='ui massive icon input'>
                        <input 
                        type='text' 
                        placeholder='Search..'
                        onChange={(event => this.setState({entry:event.target.value}))}
                        value ={this.state.entry}
                        ></input>
                        <i className='search icon'></i>
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default UserInput;