import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useApiHandler } from './ApiHandlerContext';
import usePaginator from '../hooks/usePaginator';

const AccidentsContext = createContext({
	accidents: [],
	currentPage: 1,
	getAccidents: async () => {},
	addAccident: async () => {},
	editAccident: async () => {},
	removeAccident: async () => {},
	nextPage: () => {},
	previousPage: () => {},
});

export function AccidentsProvider({ children }) {
	const { request } = useApiHandler();
	const { currentPage, nextPage, previousPage } = usePaginator();

	const [accidents, setAccidents] = useState([]);
	const [total, setTotal] = useState(0);
	const [filter, setFilter] = useState(0);

	const getAccidents = async () => {
		const { data, statusCode } = await request(
			`/accidents/${currentPage}`,
			'GET'
		);

		if (statusCode === 200) {
			setAccidents(data.accidents);
			setTotal(data.total);
			setFilter(data.filter || total);
		}
	};

	const addAccident = async (accident) => {
		const { statusCode } = await request('/accidents', 'POST', accident);

		if (statusCode === 200) {
			setAccidents([]);
			await getAccidents();
		}
	};

	const editAccident = async (accident) => {
		const { statusCode } = await request(
			`/accidents/${accident._id}`,
			'PUT',
			accident
		);

		if (statusCode === 200) {
			setAccidents([]);
			await getAccidents();
		}
	};

	const removeAccident = async (accident) => {
		const { statusCode } = await request(
			`/accidents/${accident._id}`,
			'DELETE'
		);

		if (statusCode === 200) {
			setAccidents([]);
			await getAccidents();
		}
	};

	useEffect(() => {
		getAccidents();
	}, [currentPage]);

	return (
		<AccidentsContext.Provider
			value={{
				currentPage,
				accidents,
				getAccidents,
				addAccident,
				editAccident,
				removeAccident,
				nextPage,
				previousPage,
				total,
				filter,
			}}
		>
			{children}
		</AccidentsContext.Provider>
	);
}

AccidentsProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export function useAccidents() {
	const context = useContext(AccidentsContext);
	return context;
}
