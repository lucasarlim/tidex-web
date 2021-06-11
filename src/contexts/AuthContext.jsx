import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useApiHandler } from './ApiHandlerContext';
import * as storage from '../services/storage';

const AuthContext = createContext({
	user: null,
	logged: false,
	loading: false,
	login: () => {},
	logout: () => {},
});

export function AuthProvider({ children }) {
	const { request } = useApiHandler();

	const [user, setUser] = useState(null);
	const [logged, setLogged] = useState(false);

	useEffect(() => {
		if (storage.isAuthenticated()) {
			setUser(storage.getUser());
			setLogged(true);
		}
	}, []);

	const login = async (cpf, password) => {
		const { data, statusCode } = await request('/user/login', 'POST', {
			cpf,
			password,
		});

		if (statusCode === 200) {
			const { user: newUser, token } = data;

			storage.login(newUser, token);
			setLogged(true);
			setUser(user);
		}
	};

	const logout = async () => {
		const { statusCode } = await request('/user/logout', 'POST');

		if (statusCode === 200) {
			storage.logout();
			setLogged(false);
			setUser(null);
		}
	};

	return (
		<AuthContext.Provider value={{ user, logged, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

AuthProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export function useAuthContext() {
	const context = useContext(AuthContext);
	return context;
}
