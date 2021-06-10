import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({
	logged: false,
	login: () => {},
	logout: () => {},
});

export function AuthProvider({ children }) {
	const [logged, setLogged] = useState(false);

	const login = () => {
		setLogged(true);
	};

	const logout = () => {
		setLogged(false);
	};

	return (
		<AuthContext.Provider value={{ logged, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

AuthProvider.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export function useAuth() {
	const context = useContext(AuthContext);
	return context;
}
