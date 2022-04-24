import React, { createContext, useState ,useEffect} from 'react';

export const ThemeContext = createContext();


const ThemeContextProvider = ({ children }) => {

	const initialTheme = {
		isDarkTheme: true,
		lightTheme: {
			text: '#222',
			background: '#d8ddf1'
		},
		darkTheme: {
			text: '#fff',
			background: '#5c5c5c'
		}
	}

	const [theme,setTheme] = useState(initialTheme)


	useEffect(() => {
		// setTheme((prevState) =>({
		// 	...prevState, 
		// 	'isDarkTheme': !theme.isDarkTheme	,
		// 	'lightTheme':{
		// 		'text':'#444'
		// 	}
		// }));
	  }, [theme]);

	

	const changeTheme = () => {
		setTheme((prevState) =>({
			...prevState, 
			'isDarkTheme': !theme.isDarkTheme	,
			'lightTheme':{
				'text':'#444'
			}
		}));
	}


	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);

}



/*class ThemeContextProvider extends React.Component {
	state = {
		isDarkTheme: true,
		lightTheme: {
			text: '#222',
			background: '#d8ddf1'
		},
		darkTheme: {
			text: '#fff',
			background: '#5c5c5c'
		}
	};

	changeTheme = () => {
		this.setState({ isDarkTheme: !this.state.isDarkTheme });
	}

	render() {
		return (
			<ThemeContext.Provider value={{ ...this.state,changeTheme:this.changeTheme }}>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}*/

export default ThemeContextProvider;