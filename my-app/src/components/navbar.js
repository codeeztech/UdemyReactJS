import React from 'react'
import {Link,NavLink, withRouter} from 'react-router-dom'


const Navbar = (props) => {
	return(
		<nav className='ui raised very padded segment' >
			<a className='ui teal inverted segment'>Gloria</a>
			<div className='ui right floated header'>
				<button className='ui button'><Link to="/">Home</Link></button>
				<button className='ui button'><NavLink to="/hooks">React Hooks</NavLink></button>
				<button className='ui button'><NavLink to="/context">React Context</NavLink></button>
				<button className='ui button'><NavLink to="/contact">React Redux</NavLink></button>
				<button className='ui button'><NavLink to="/about">About</NavLink></button>
				
			</div>
		</nav>
	)
}

export default withRouter(Navbar);