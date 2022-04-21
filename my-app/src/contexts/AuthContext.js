import React, { createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
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
}

export default AuthContextProvider;