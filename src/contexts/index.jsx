import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
	const [isLoggedIn, setLoggedIn] = useState(false);

	const logIn = (email, password) => {
		if(email !== 'test@test.com' || password !== '123123'){
			return
		}

		setLoggedIn(true);
	}

	const logOut = () => setLoggedIn(false);

  return (<>
		<AuthContext.Provider value={{isLoggedIn, logOut, logIn}}>
			{children}
		</AuthContext.Provider>
  </>);
}

export const withAuth = (WrapComponent) => {
	return class extends React.Component {
		render() {
			return (
				<AuthContext.Consumer>
					{
					(value) => <WrapComponent {...value} {...this.props}/>
					}
				</AuthContext.Consumer>
			)
		}
	}
}
