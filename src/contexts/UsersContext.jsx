import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useApiHandler } from './ApiHandlerContext';
import usePaginator from '../hooks/usePaginator';

const UsersContext = createContext({
	users: [],
	currentPage: 1,
	getUsers: () => {},
	addUser: () => {},
	editUser: () => {},
	removeUser: () => {},
	nextPage: () => {},
	previousPage: () => {},
});

export function UsersProvider({ children }) {
	const { request } = useApiHandler();
	const { currentPage, nextPage, previousPage } = usePaginator();

	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const { data, statusCode } = await request('/user', 'GET');

		if (statusCode === 200) {
			setUsers(data);
		}
	};

	const addUser = async (user) => {
		const { statusCode } = await request('/user', 'POST', user);

		if (statusCode === 200) {
			setUsers([]);
			await getUsers();
		}
	};

	const editUser = async (user) => {
		const { statusCode } = await request(`/user/${user._id}`, 'PUT', user);

		if (statusCode === 200) {
			setUsers([]);
			await getUsers();
		}
	};

	const removeUser = async (user) => {
		const { statusCode } = await request(`/user/${user._id}`, 'DELETE');

		if (statusCode === 200) {
			setUsers([]);
			await getUsers();
		}
	};

	return (
		<UsersContext.Provider
			value={{
				users,
				currentPage,
				getUsers,
				addUser,
				editUser,
				removeUser,
				nextPage,
				previousPage,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
}

UsersProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export function useUsers() {
	const context = useContext(UsersContext);
	return context;
}
