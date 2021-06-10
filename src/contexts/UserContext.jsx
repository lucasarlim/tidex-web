import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as api from '../requests/auth';
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

	const login = async (cpf, password) => {
		const { data, statusCode } = await api.login(cpf, password);

		if (statusCode === 200) {
			const { user: newUser, token } = data;

			storage.login(newUser, token);
			setLogged(true);
			setUser(user);
		}
	};

	const logout = async () => {
		const { statusCode } = await api.logout();

		if (statusCode === 200) {
			storage.logout();
			setLogged(false);
			setUser(null);
		}
	};

	return (
		<UserContext.Provider value={{ user, logged, login, logout }}>
			{children}
		</UserContext.Provider>
	);
}

UserProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export function useUserContext() {
	const context = useContext(UserContext);
	return context;
}
