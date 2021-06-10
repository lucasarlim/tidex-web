import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as storage from '../services/storage';

const UserContext = createContext({
	user: null,
	logged: false,
	login: () => {},
	logout: () => {},
});

export function UserProvider({ children }) {
	const [user, setUser] = useState(null);
	const [logged, setLogged] = useState(false);

	useEffect(() => {
		if (storage.isAuthenticated()) {
			setUser(storage.getUser());
			setLogged(true);
		}
	}, []);

	const login = () => {
		// storage.login(newUser, token);

		setLogged(true);
		// setUser(newUser);
	};

	const logout = () => {
		storage.logout();

		setLogged(false);
		setUser(null);
	};

	return (
		<UserContext.Provider value={{ user, logged, login, logout }}>
			{children}
		</UserContext.Provider>
	);
}

UserProvider.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export function useUserContext() {
	const context = useContext(UserContext);
	return context;
}
