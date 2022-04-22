import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

//Functional based Component
const AuthContextProvider = ({children}) => {
	
	const [isLoggedin,setLog] = useState(false)

	const changeAuthStatus = () => {
		setLog(!isLoggedin)
	}
		return (
			<AuthContext.Provider value={{isLoggedin,changeAuthStatus}}>
				{children}
			</AuthContext.Provider>
		);
}

//Class based component

/*class AuthContextProvider extends React.Component {
	state = {
		isLoggedin : false
	};

	changeAuthStatus = () => {
		this.setState({ isLoggedin: !this.state.isLoggedin });
	}

	render() {
		return (
			<AuthContext.Provider value={{ ...this.state,changeAuthStatus:this.changeAuthStatus }}>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}*/

export default AuthContextProvider;